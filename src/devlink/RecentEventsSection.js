"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RecentEventsSection.module.css";

export function RecentEventsSection({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "bg-blue", "py-60")}
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
            "text-blue-medium",
            "uppercase",
            "text-bold-700"
          )}
          tag="div"
        >
          {"Resources"}
        </_Builtin.Block>
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "text-white",
            "text-center",
            "mb-48",
            "mt-10"
          )}
          tag="h2"
        >
          {"Moloco recent events"}
        </_Builtin.Heading>
        <_Builtin.Block className={_utils.cx(_styles, "px-0")} tag="div" />
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.Container>
    </_Component>
  );
}
