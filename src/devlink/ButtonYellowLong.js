"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonYellowLong.module.css";

export function ButtonYellowLong({
  as: _Component = _Builtin.Link,
  molocoLove = "LEADERSHIP",

  buttonYellowLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "button-yellow",
        "button-long",
        "text-white"
      )}
      button={false}
      block="inline"
      options={buttonYellowLink}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "text-blue", "letter-spacing-1")}
        tag="div"
      >
        {molocoLove}
      </_Builtin.Block>
    </_Component>
  );
}
