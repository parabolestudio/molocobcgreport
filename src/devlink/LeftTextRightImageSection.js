"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LeftTextRightImageSection.module.css";

export function LeftTextRightImageSection({
  as: _Component = _Builtin.Row,
  overrideTextBlueText = "Duis autem vel eum iriur in esse molete ei dolor enare",
  overrideParagraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  overrideImageImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624359ff126dcd3fb1b8928d_Mask%20group.webp",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "d-flex", "reverse")}
      tag="div"
      columns={{
        main: "7|5",
        medium: "",
        small: "small-stack",
        tiny: "",
      }}
    >
      <_Builtin.Column tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "text-blue")} tag="h3">
          {overrideTextBlueText}
        </_Builtin.Heading>
        <_Builtin.Paragraph>{overrideParagraphText}</_Builtin.Paragraph>
      </_Builtin.Column>
      <_Builtin.Column tag="div">
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt="Moloco"
          src={overrideImageImage}
        />
      </_Builtin.Column>
    </_Component>
  );
}
