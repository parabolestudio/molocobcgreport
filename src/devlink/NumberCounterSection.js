"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NumberCounterSection.module.css";

export function NumberCounterSection({
  as: _Component = _Builtin.Section,
  introBodyText = (
    <>
      {"Reach"}
      <br />
    </>
  ),
  numberCounterText = "35B+",
  text16Text = "AD IMPRESSIONS SERVED MONTHLY",
  introBodyText2 = "Speed",
  numberCounterText2 = "4M+",
  text16Text2 = "PREDICTIONS PER SECOND",
  introBodyText3 = "Know-how",
  numberCounterText3 = "9+",
  text16Text3 = "YEARS OF EXPERTISE",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-52", "bg-soft-gray")}
      tag="section"
      grid={{
        type: "section",
      }}
      id="cards-section"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-2")}
        tag="div"
      >
        <_Builtin.Grid className={_utils.cx(_styles, "grid-6")} tag="div">
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-_6f3a3903-fd69-eb59-61c6-eb55d51cb546-d51cb543"
            )}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "intro-body",
                "text-blue-dark",
                "my-12"
              )}
            >
              {introBodyText}
            </_Builtin.Paragraph>
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "number-counter",
                "text-blue-dark",
                "text-center",
                "my-24"
              )}
              tag="h1"
            >
              {numberCounterText}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "text-16",
                "text-bold-700",
                "text-blue-dark",
                "text-center"
              )}
            >
              {text16Text}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-_6f3a3903-fd69-eb59-61c6-eb55d51cb554-d51cb543"
            )}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "intro-body",
                "text-blue-dark",
                "my-12"
              )}
            >
              {introBodyText2}
            </_Builtin.Paragraph>
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "number-counter",
                "text-blue-dark",
                "text-center",
                "my-24"
              )}
              tag="h1"
            >
              {numberCounterText2}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "text-16",
                "text-bold-700",
                "text-blue-dark",
                "text-center"
              )}
            >
              {text16Text2}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-_6f3a3903-fd69-eb59-61c6-eb55d51cb562-d51cb543"
            )}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "intro-body",
                "text-blue-dark",
                "my-12"
              )}
            >
              {introBodyText3}
            </_Builtin.Paragraph>
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "number-counter",
                "text-blue-dark",
                "text-center",
                "my-24"
              )}
              tag="h1"
            >
              {numberCounterText3}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "text-16",
                "text-bold-700",
                "text-blue-dark",
                "text-center"
              )}
            >
              {text16Text3}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Container>
    </_Component>
  );
}
