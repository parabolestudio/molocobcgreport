"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonWhiteMediumWithBlueText.module.css";

export function ButtonWhiteMediumWithBlueText({
  as: _Component = _Builtin.Link,
  overrideTextBlockText = "This is some text inside of a div block.",
  link,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button-white-bg", "button-medium")}
      button={false}
      block="inline"
      options={{
        href: "#",
      }}
    >
      <_Builtin.Block tag="div">{overrideTextBlockText}</_Builtin.Block>
    </_Component>
  );
}
