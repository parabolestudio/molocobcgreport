"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LanguageLinkKo.module.css";

export function LanguageLinkKo({
  as: _Component = _Builtin.DropdownLink,

  languageLinkKo = {
    href: "/ko",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "language-link", "language-ko")}
      options={languageLinkKo}
    >
      {"Korean"}
    </_Component>
  );
}
