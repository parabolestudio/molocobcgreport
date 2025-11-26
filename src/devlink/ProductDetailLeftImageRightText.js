"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ProductDetailLeftImageRightText.module.css";

export function ProductDetailLeftImageRightText({
  as: _Component = _Builtin.Section,
  imageImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624359ff126dcd3fb1b8928d_Mask%20group.webp",
  headerText = "Acquire users with maximum return on ad spend (ROAS)",
  paragraphRichText = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-24")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Row
          className={_utils.cx(_styles, "d-flex", "align-center")}
          tag="div"
          columns={{
            main: "5|7",
            medium: "",
            small: "",
            tiny: "",
          }}
        >
          <_Builtin.Column tag="div">
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt="Moloco"
              src={imageImage}
            />
          </_Builtin.Column>
          <_Builtin.Column
            className={_utils.cx(_styles, "ml-20", "text-left")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "text-blue-dark", "mb-24")}
              tag="h3"
            >
              {headerText}
            </_Builtin.Heading>
            <_Builtin.RichText tag="div" slot="">
              {paragraphRichText}
            </_Builtin.RichText>
          </_Builtin.Column>
        </_Builtin.Row>
      </_Builtin.Container>
    </_Component>
  );
}
