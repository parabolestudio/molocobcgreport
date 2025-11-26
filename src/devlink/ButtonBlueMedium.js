"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonBlueMedium.module.css";

export function ButtonBlueMedium({
  as: _Component = _Builtin.Link,
  watch = "This is some text inside of a div block.",

  molocoCloudDspVideo = {
    href: "https://youtu.be/D0g2k1xF6EQ",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button-blue", "button-medium")}
      button={false}
      block="inline"
      options={molocoCloudDspVideo}
    >
      <_Builtin.Block tag="div">{watch}</_Builtin.Block>
    </_Component>
  );
}
