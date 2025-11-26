"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonYellowBorderWithWhiteText.module.css";

export function ButtonYellowBorderWithWhiteText({
  as: _Component = _Builtin.Link,
  overrideText14Text = "Read Bio",

  overrideButtonYellowBorderSmallLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "button-yellow-border-small",
        "text-white",
        "text-decoration-none"
      )}
      button={false}
      block="inline"
      options={overrideButtonYellowBorderSmallLink}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "text-14",
          "text-white",
          "uppercase",
          "text-bold-700",
          "text-decoration-none"
        )}
        tag="div"
      >
        {overrideText14Text}
      </_Builtin.Block>
    </_Component>
  );
}
