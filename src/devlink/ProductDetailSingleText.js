"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ProductDetailSingleText.module.css";

export function ProductDetailSingleText({
  as: _Component = _Builtin.Section,
  headingText = "Duis autem eumiure dolor",
  textBlackText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sediam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim nostrud.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-24")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-2")}
        tag="div"
      >
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
            <_Builtin.Heading
              className={_utils.cx(_styles, "text-blue-dark")}
              tag="h2"
            >
              {headingText}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "text-black",
                "intro-body",
                "width"
              )}
            >
              {textBlackText}
            </_Builtin.Paragraph>
          </_Builtin.Column>
          <_Builtin.Column tag="div" />
        </_Builtin.Row>
      </_Builtin.Container>
    </_Component>
  );
}
