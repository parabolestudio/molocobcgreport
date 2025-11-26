"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ProductStory.module.css";

export function ProductStory({
  as: _Component = _Builtin.Section,
  textBlueDarkText = "Campaign performance",
  paragraphText = "Moloco Cloud DSP is designed for your campaign success. Our machine learning engine automatically powers your app’s growth and removes data risk so you can exceed even your most demanding goals and your team can focus on what it does best: creativity and scale.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "bg-soft-gray", "py-48", "p-12")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container", "centered-container")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "text-blue-dark")}
          tag="h2"
        >
          {textBlueDarkText}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "text-24", "text-blue")}
        >
          {paragraphText}
        </_Builtin.Paragraph>
      </_Builtin.Container>
    </_Component>
  );
}
