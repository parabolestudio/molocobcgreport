"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NewLineDivider.module.css";

export function NewLineDivider({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "line-divider")} tag="div" />
  );
}
