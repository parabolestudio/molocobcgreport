"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DividerYellow.module.css";

export function DividerYellow({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "divider-yellow", "my-32", "bg-soft-gray")}
      tag="div"
    />
  );
}
