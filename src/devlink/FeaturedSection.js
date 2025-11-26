"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FeaturedSection.module.css";

export function FeaturedSection({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "hero-2")}
      tag="header"
      grid={{
        type: "section",
      }}
      id="hero"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "flex-container", "container")}
        tag="div"
      >
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.Container>
    </_Component>
  );
}
