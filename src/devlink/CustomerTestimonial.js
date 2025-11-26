"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CustomerTestimonial.module.css";

export function CustomerTestimonial({
  as: _Component = _Builtin.Section,
  blockQuoteTextText = "We want to be the platform that provides the best customer experience in the lifestyle category with machine-learning-based optimization, and we want Moloco as our partner on this journey.",
  textBold700Text = "— Scott Lee, Head of CEO Offices",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-60", "bg-soft-blue")}
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
              alt="Profile"
              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/63d95497d754db2217e0dcd7_OHouse.webp"
            />
          </_Builtin.Column>
          <_Builtin.Column className={_utils.cx(_styles, "ml-20")} tag="div">
            <_Builtin.Blockquote
              className={_utils.cx(_styles, "block-quote-text")}
            >
              {blockQuoteTextText}
            </_Builtin.Blockquote>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-bold-700",
                "text-28",
                "text-blue",
                "ml-20"
              )}
              tag="div"
            >
              {textBold700Text}
            </_Builtin.Block>
          </_Builtin.Column>
        </_Builtin.Row>
      </_Builtin.Container>
    </_Component>
  );
}
