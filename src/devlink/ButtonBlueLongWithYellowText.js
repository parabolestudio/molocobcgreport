"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonBlueLongWithYellowText.module.css";

export function ButtonBlueLongWithYellowText({
  as: _Component = _Builtin.Link,
  overrideTextBlockText = "SEE OPEN POSITIONS",

  buttonBlueLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button-blue", "button-long")}
      button={false}
      block="inline"
      options={buttonBlueLink}
    >
      <_Builtin.Block className={_utils.cx(_styles, "text-block-5")} tag="div">
        {overrideTextBlockText}
      </_Builtin.Block>
    </_Component>
  );
}
