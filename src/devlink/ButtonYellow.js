"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonYellow.module.css";

export function ButtonYellow({
  as: _Component = _Builtin.Link,
  textBlockText = "SIGN UP",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "button-yellow",
        "button-long",
        "text-blue-dark"
      )}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block tag="div">{textBlockText}</_Builtin.Block>
    </_Component>
  );
}
