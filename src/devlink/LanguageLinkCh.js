"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LanguageLinkCh.module.css";

export function LanguageLinkCh({ as: _Component = _Builtin.DropdownLink }) {
  return (
    <_Component
      className={_utils.cx(_styles, "language-link", "language-ko")}
      options={{
        href: "#",
      }}
    >
      {"Chinese"}
    </_Component>
  );
}
