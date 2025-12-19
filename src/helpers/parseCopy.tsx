import { ReactNode, createElement } from "react";

/**
 * Mapping of custom tags to React className or element
 */
const TAG_MAPPINGS: Record<string, { element: string; className?: string }> = {
  green: { element: "span", className: "text-bright-green" },
  b: { element: "b" },
  ul: { element: "ul" },
  ol: { element: "ol", className: "styled-ordered-list" },
  li: { element: "li" },
  i: { element: "i" },
};

interface ParsedNode {
  type: "text" | "element";
  content: string;
  tag?: string;
  children?: ParsedNode[];
}

/**
 * Parses copy text with custom markup tags into a tree structure
 */
function parseMarkup(text: string): ParsedNode[] {
  const nodes: ParsedNode[] = [];
  let currentPos = 0;

  while (currentPos < text.length) {
    // Find the next opening tag
    const openTagMatch = text.slice(currentPos).match(/<(\w+)>/);

    if (!openTagMatch) {
      // No more tags, add remaining text
      if (currentPos < text.length) {
        nodes.push({
          type: "text",
          content: text.slice(currentPos),
        });
      }
      break;
    }

    const openTagIndex = currentPos + openTagMatch.index!;
    const tagName = openTagMatch[1];

    // Add text before the tag
    if (openTagIndex > currentPos) {
      nodes.push({
        type: "text",
        content: text.slice(currentPos, openTagIndex),
      });
    }

    // Find the closing tag
    const closeTag = `</${tagName}>`;
    const closeTagIndex = text.indexOf(closeTag, openTagIndex);

    if (closeTagIndex === -1) {
      // No closing tag found, treat as text
      nodes.push({
        type: "text",
        content: text.slice(openTagIndex),
      });
      break;
    }

    // Extract content between tags
    const contentStart = openTagIndex + openTagMatch[0].length;
    const content = text.slice(contentStart, closeTagIndex);

    // Recursively parse nested tags
    const children = parseMarkup(content);

    nodes.push({
      type: "element",
      tag: tagName,
      children,
      content: "", // Not used for elements
    });

    currentPos = closeTagIndex + closeTag.length;
  }

  return nodes;
}

/**
 * Converts parsed nodes into React elements
 */
function nodesToReact(nodes: ParsedNode[], key: string = ""): ReactNode {
  return nodes.map((node, index) => {
    const nodeKey = `${key}-${index}`;

    if (node.type === "text") {
      // Preserve line breaks in text
      const parts = node.content.split("\n");
      return parts.map((part, i) => (
        <span key={`${nodeKey}-${i}`}>
          {part}
          {i < parts.length - 1 && <br />}
        </span>
      ));
    }

    // Element node
    const mapping = TAG_MAPPINGS[node.tag!];
    if (!mapping) {
      // Unknown tag, render content as-is
      return nodesToReact(node.children || [], nodeKey);
    }

    const props: { key: string; className?: string } = { key: nodeKey };

    if (mapping.className) {
      props.className = mapping.className;
    }

    return createElement(
      mapping.element,
      props,
      nodesToReact(node.children || [], nodeKey)
    );
  });
}

/**
 * Parses copy text with custom markup and returns React elements
 * @param text - Text with markup like <green>text</green> or <b>text</b>
 * @returns React elements with proper styling
 */
export function parseCopy(text: string): ReactNode {
  if (!text) return null;

  // First, detect and convert bullet and ordered lists to <ul>/<ol> tags
  const processedText = convertLists(text);

  const nodes = parseMarkup(processedText);
  return nodesToReact(nodes);
}

/**
 * Converts bullet lists (lines starting with "- ") into <ul><li> markup
 * and ordered lists (lines starting with "1. ", "2. ", etc.) into <ol><li> markup
 */
function convertLists(text: string): string {
  const lines = text.split("\n");
  let result = "";
  let inList: "ul" | "ol" | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Check for ordered list item (e.g., "1. " or "1 ")
    const orderedMatch = trimmedLine.match(/^(\d+)\.?\s+(.*)/);
    const isBullet = trimmedLine.startsWith("- ");

    if (orderedMatch) {
      // This is a numbered list item
      if (inList !== "ol") {
        if (inList) result += `</${inList}>`;
        result += "<ol>";
        inList = "ol";
      }
      // Wrap content in <li>
      result += `<li>${orderedMatch[2]}</li>`;
    } else if (isBullet) {
      // This is a bullet point
      if (inList !== "ul") {
        if (inList) result += `</${inList}>`;
        result += "<ul>";
        inList = "ul";
      }
      // Remove the "- " prefix and wrap in <li>
      result += `<li>${trimmedLine.substring(2)}</li>`;
    } else {
      // Not a list item
      if (inList) {
        result += `</${inList}>`;
        inList = null;
      }
      result += line;
      if (i < lines.length - 1) {
        result += "\n";
      }
    }
  }

  // Close list if we ended while in a list
  if (inList) {
    result += `</${inList}>`;
  }

  return result;
}
