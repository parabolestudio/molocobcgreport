"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonYellowMedium.module.css";

export function ButtonYellowMedium({
  as: _Component = _Builtin.Link,
  overrideTextBlockText = "Contact Us",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button-yellow", "button-medium")}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block tag="div">{overrideTextBlockText}</_Builtin.Block>
    </_Component>
  );
}
