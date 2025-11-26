"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RmpValueProp.module.css";

export function RmpValueProp({
  as: _Component = _Builtin.Section,
  textBold700Text3 = "Baked-in privacy and security",
  textBlueText = "How? With Moloco Machine Learning Engine",
  textBold700Text = "Real-time decisioning",
  textBlueDarkText2 = "Our engine serves the most relevant ads at the right bid price by predicting purchase intent using real-time user events (browse, search, purchase).",
  textBold700Text2 = "Continual improvement",
  textBlueDarkText3 = "Moloco RMP retrains our model every two hours to maximizes campaign performance – automatically.",
  textBlueDarkText = "Operating on 1st party data, our solution is GDPR-compliant and immune to data and privacy regulations.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-60", "bg-soft-gray")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "text-blue",
            "text-center-2",
            "mt-0",
            "mb-48"
          )}
          tag="h2"
        >
          {textBlueText}
        </_Builtin.Heading>
        <_Builtin.Grid className={_utils.cx(_styles, "grid-3")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "div", "mb-40")}
            id={_utils.cx(
              _styles,
              "w-node-_0dc5ab7c-3cfc-c9a1-a3ae-5f8e4725c2e3-4725c2de"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "char-icons")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Value prop"
              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/63d9b92ae5a367efa9b26158_prediction-icon.webp"
            />
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-bold-700",
                "text-blue-dark",
                "pt-10",
                "value-clamp",
                "text-31"
              )}
              tag="h3"
            >
              {textBold700Text}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-blue-dark", "text-18")}
              tag="div"
            >
              {textBlueDarkText2}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div", "mb-40")}
            id={_utils.cx(
              _styles,
              "w-node-_0dc5ab7c-3cfc-c9a1-a3ae-5f8e4725c2e9-4725c2de"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-21")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Value prop"
              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/63d9b92ab24bd509880bd3d5_improvement-icon.webp"
            />
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-bold-700",
                "text-blue-dark",
                "pt-10",
                "value-clamp",
                "text-31"
              )}
              tag="h3"
            >
              {textBold700Text2}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-blue-dark", "text-18")}
              tag="div"
            >
              {textBlueDarkText3}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div", "mb-40")}
            id={_utils.cx(
              _styles,
              "w-node-_0dc5ab7c-3cfc-c9a1-a3ae-5f8e4725c2ef-4725c2de"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-22")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Value prop"
              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/63d9b92a46c58093dfa1086d_security-icon.webp"
            />
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-bold-700",
                "text-blue-dark",
                "pt-10",
                "value-clamp",
                "text-31"
              )}
              tag="h3"
            >
              {textBold700Text3}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-blue-dark", "text-18")}
              tag="div"
            >
              {textBlueDarkText}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Container>
    </_Component>
  );
}
