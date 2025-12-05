import fs from "fs";
import path from "path";

export type CopyData = Record<string, string>;

// Hard-coded language for now - change this to support other languages in the future
const LANGUAGE = "English";

/**
 * Parses the mainCopy.csv file and returns a key-value object
 * @param language - The language column to use (defaults to "English")
 * @returns Object mapping copy keys to their text values in the specified language
 */
export function loadCopyData(language: string = LANGUAGE): CopyData {
  const csvPath = path.join(process.cwd(), "public/data/mainCopy.csv");
  const csvContent = fs.readFileSync(csvPath, "utf-8");

  const copyData: CopyData = {};

  // Parse the entire CSV properly, handling quoted fields with newlines
  const rows = parseCSV(csvContent);

  if (rows.length === 0) return copyData;

  // First row is the header
  const headers = rows[0];
  const languageColumnIndex = headers.findIndex(
    (header) => header.trim() === language
  );

  if (languageColumnIndex === -1) {
    console.warn(
      `Language column "${language}" not found in CSV. Available columns:`,
      headers
    );
    return copyData;
  }

  // Parse data rows (skip header)
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];

    if (row.length > languageColumnIndex) {
      const key = row[0].trim(); // Key column
      const text = row[languageColumnIndex].trim(); // Language column

      // Only add entries that have a non-empty key
      if (key && key.length > 0) {
        copyData[key] = text;
      }
    }
  }

  console.log(
    `Loaded copy data for language "${language}":`,
    Object.keys(copyData).length,
    "entries",
    copyData
  );
  return copyData;
}

/**
 * Simple CSV line parser that handles quoted fields with commas
 */
function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let currentField = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (insideQuotes && line[i + 1] === '"') {
        // Escaped quote
        currentField += '"';
        i++;
      } else {
        // Toggle quote state
        insideQuotes = !insideQuotes;
      }
    } else if (char === "," && !insideQuotes) {
      // Field separator
      fields.push(currentField);
      currentField = "";
    } else {
      currentField += char;
    }
  }

  // Add the last field
  fields.push(currentField);

  return fields;
}

/**
 * Parses entire CSV content, handling quoted fields with newlines and commas
 */
function parseCSV(csvContent: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentField = "";
  let insideQuotes = false;

  for (let i = 0; i < csvContent.length; i++) {
    const char = csvContent[i];
    const nextChar = csvContent[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        // Escaped quote - add a single quote to the field
        currentField += '"';
        i++; // Skip the next quote
      } else {
        // Toggle quote state
        insideQuotes = !insideQuotes;
      }
    } else if (char === "," && !insideQuotes) {
      // Field separator
      currentRow.push(currentField);
      currentField = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      // Row separator (handle both \n and \r\n)
      if (char === "\r" && nextChar === "\n") {
        i++; // Skip the \n in \r\n
      }

      // Add the last field and the row
      currentRow.push(currentField);

      // Only add non-empty rows
      if (currentRow.some((field) => field.trim().length > 0)) {
        rows.push(currentRow);
      }

      currentRow = [];
      currentField = "";
    } else {
      // Regular character
      currentField += char;
    }
  }

  // Add the last field and row if there's content
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.some((field) => field.trim().length > 0)) {
      rows.push(currentRow);
    }
  }

  return rows;
}
