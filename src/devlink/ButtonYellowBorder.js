"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonYellowBorder.module.css";

export function ButtonYellowBorder({
  as: _Component = _Builtin.Link,
  text = "REQUEST DEMO",

  buttonYellowBorderLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button-yellow-border", "text-blue")}
      button={false}
      block="inline"
      options={buttonYellowBorderLink}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "text-block-4", "text-bold-700")}
        tag="div"
      >
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
