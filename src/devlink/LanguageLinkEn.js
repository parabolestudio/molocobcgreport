"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LanguageLinkEn.module.css";

export function LanguageLinkEn({
  as: _Component = _Builtin.DropdownLink,

  languageLinkLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "language-link", "language-en")}
      options={languageLinkLink}
    >
      {"English"}
    </_Component>
  );
}
