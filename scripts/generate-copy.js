const fs = require("fs");
const path = require("path");

// All supported languages
const LANGUAGES = ["English", "Japanese", "Korean", "Chinese"];

function parseCSV(csvContent) {
  const rows = [];
  let currentRow = [];
  let currentField = "";
  let insideQuotes = false;

  for (let i = 0; i < csvContent.length; i++) {
    const char = csvContent[i];
    const nextChar = csvContent[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentField += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === "," && !insideQuotes) {
      currentRow.push(currentField);
      currentField = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && nextChar === "\n") {
        i++;
      }
      currentRow.push(currentField);
      if (currentRow.some((field) => field.trim().length > 0)) {
        rows.push(currentRow);
      }
      currentRow = [];
      currentField = "";
    } else {
      currentField += char;
    }
  }

  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.some((field) => field.trim().length > 0)) {
      rows.push(currentRow);
    }
  }

  return rows;
}

function generateCopyData() {
  const csvPath = path.join(process.cwd(), "public/data/mainCopy.csv");
  const csvContent = fs.readFileSync(csvPath, "utf-8");

  const rows = parseCSV(csvContent);

  if (rows.length === 0) {
    console.error("No rows found in CSV");
    return;
  }

  const headers = rows[0];
  const allLanguageData = {};

  // Generate copy data for each language
  LANGUAGES.forEach((language) => {
    const languageColumnIndex = headers.findIndex(
      (header) => header.trim() === language
    );

    if (languageColumnIndex === -1) {
      console.warn(`Language column "${language}" not found`);
      return;
    }

    const copyData = {};

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (row.length > languageColumnIndex) {
        const key = row[0].trim();
        const text = row[languageColumnIndex].trim();

        if (key && key.length > 0) {
          copyData[key] = text;
        }
      }
    }

    allLanguageData[language] = copyData;
    console.log(`  - ${language}: ${Object.keys(copyData).length} entries`);
  });

  const output = `// This file is auto-generated from mainCopy.csv
// Do not edit manually - run 'npm run generate:copy' to regenerate

export type CopyData = Record<string, string>;

export type MultiLanguageCopy = {
  English: CopyData;
  Japanese: CopyData;
  Korean: CopyData;
  Chinese: CopyData;
};

export const copyData: MultiLanguageCopy = ${JSON.stringify(
    allLanguageData,
    null,
    2
  )};
`;

  const outputPath = path.join(process.cwd(), "src/data/copyData.ts");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, output, "utf-8");

  console.log(`✅ Generated copy data for ${LANGUAGES.length} languages`);
}

generateCopyData();
