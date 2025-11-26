"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LeftImageRightTextSection.module.css";

export function LeftImageRightTextSection({
  as: _Component = _Builtin.Row,
  overrideImageImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624359ff126dcd3fb1b8928d_Mask%20group.webp",
  overrideHeadingText = "Duis autem vel eum iriur in esse molete ei dolor enare",
  overrideCopyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "d-flex")}
      tag="div"
      columns={{
        main: "5|7",
        medium: "medium-stack",
        small: "",
        tiny: "tiny-stack",
      }}
    >
      <_Builtin.Column tag="div">
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt="Moloco"
          src={overrideImageImage}
        />
      </_Builtin.Column>
      <_Builtin.Column tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "text-blue")} tag="h3">
          {overrideHeadingText}
        </_Builtin.Heading>
        <_Builtin.Paragraph>{overrideCopyText}</_Builtin.Paragraph>
      </_Builtin.Column>
    </_Component>
  );
}
