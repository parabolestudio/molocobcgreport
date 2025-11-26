"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BlogDetailsContentSection.module.css";

export function BlogDetailsContentSection({
  as: _Component = _Builtin.Section,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-6")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Row
          tag="div"
          columns={{
            main: "9|3",
            medium: "",
            small: "",
            tiny: "",
          }}
        >
          <_Builtin.Column tag="div">
            <_Builtin.RichText
              className={_utils.cx(_styles, "pr-40")}
              tag="div"
              dyn={{
                bind: {},
              }}
              slot=""
            >
              <_Builtin.Heading tag="h2">
                {"What’s a Rich Text element?"}
              </_Builtin.Heading>
              <_Builtin.Paragraph>
                {
                  "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content."
                }
              </_Builtin.Paragraph>
              <_Builtin.Heading tag="h4">
                {"Static and dynamic content editing"}
              </_Builtin.Heading>
              <_Builtin.Paragraph>
                {
                  "A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!"
                }
              </_Builtin.Paragraph>
              <_Builtin.Heading tag="h4">
                {"How to customize formatting for each rich text"}
              </_Builtin.Heading>
              <_Builtin.Paragraph>
                {
                  'Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.'
                }
              </_Builtin.Paragraph>
            </_Builtin.RichText>
          </_Builtin.Column>
          <_Builtin.Column tag="div">
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "py-16",
                "bg-blue-dark",
                "p-16",
                "mb-16"
              )}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "text-yellow-2", "text-bold-700")}
              >
                {"Editor’s choice"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt="Content image"
              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624496db1038bc669c044817_image%209.webp"
            />
            <_Builtin.Block className={_utils.cx(_styles, "py-12")} tag="div">
              <_Builtin.Heading className={_utils.cx(_styles, "mt-0")} tag="h4">
                {"Business"}
              </_Builtin.Heading>
              <_Builtin.Paragraph>
                {"Lorem ipsum dolor sit amet, consectetuer esiose"}
              </_Builtin.Paragraph>
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt="Content image"
                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624496db1038bc669c044817_image%209.webp"
              />
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              <_Builtin.Heading className={_utils.cx(_styles, "mt-0")} tag="h4">
                {"Business"}
              </_Builtin.Heading>
              <_Builtin.Paragraph>
                {"Lorem ipsum dolor sit amet, consectetuer esiose"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Column>
        </_Builtin.Row>
      </_Builtin.Container>
      <_Builtin.Container
        className={_utils.cx(_styles, "container", "py-32", "yellow-border")}
        tag="div"
      >
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.Container>
    </_Component>
  );
}
