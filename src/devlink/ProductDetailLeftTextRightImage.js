"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ProductDetailLeftTextRightImage.module.css";

export function ProductDetailLeftTextRightImage({
  as: _Component = _Builtin.Section,
  headerText = "Pay the right price for the right impressions",
  imageImage = "https://cdn.prod.website-files.com/68d3fbd55d90bfdc11a99444/68d3fbd55d90bfdc11a9956b_tim-marshall-cAtzHUz7Z8g-unsplash%201.webp",
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
          className={_utils.cx(
            _styles,
            "d-flex",
            "align-center",
            "two-col-reverse-on-mobile"
          )}
          tag="div"
          columns={{
            main: "7|5",
            medium: "",
            small: "",
            tiny: "",
          }}
        >
          <_Builtin.Column
            className={_utils.cx(_styles, "text-left")}
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
          <_Builtin.Column tag="div">
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt="Moloco"
              src={imageImage}
            />
          </_Builtin.Column>
        </_Builtin.Row>
      </_Builtin.Container>
    </_Component>
  );
}
