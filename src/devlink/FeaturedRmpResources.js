"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FeaturedRmpResources.module.css";

export function FeaturedRmpResources({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-60", "bg-soft-gray")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-2")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-center",
            "text-bold-700",
            "uppercase",
            "text-blue-medium"
          )}
          tag="div"
        >
          {"Resources"}
        </_Builtin.Block>
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "text-center",
            "mb-48",
            "text-blue-dark",
            "mt-10"
          )}
          tag="h3"
        >
          {"What's new at Moloco"}
          <br />
        </_Builtin.Heading>
        <_Builtin.Block className={_utils.cx(_styles, "px-0")} tag="div" />
        <_Builtin.NotSupported _atom="DynamoWrapper" />
        <_Builtin.NotSupported _atom="DynamoWrapper" />
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.Container>
    </_Component>
  );
}
