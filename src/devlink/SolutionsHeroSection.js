"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SolutionsHeroSection.module.css";

export function SolutionsHeroSection({
  as: _Component = _Builtin.Section,
  textYellowText = "MOLOCO GROWTH PLATFORM",
  textWhite2Text = "Turn your hard-earned data into hard-working performance",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "bg-blue-medium", "py-60")}
      grid={{
        type: "section",
      }}
      tag="div"
      id="hero-simple"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "bio-digignation", "text-white")}
          tag="h5"
        >
          {textYellowText}
        </_Builtin.Heading>
        <_Builtin.Heading
          className={_utils.cx(_styles, "text-white", "line-height-1-2")}
          tag="h1"
        >
          {textWhite2Text}
        </_Builtin.Heading>
      </_Builtin.Container>
    </_Component>
  );
}
