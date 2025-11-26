"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LanguageNavLink.module.css";

export function LanguageNavLink({
  as: _Component = _Builtin.DropdownLink,
  overrideLanguageLinkText = "Link 1",

  overrideLanguageLinkLink = {
    href: "/?lang=en",
  },

  id,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "language-link", "language-en")}
      id={id}
      options={overrideLanguageLinkLink}
    >
      {overrideLanguageLinkText}
    </_Component>
  );
}
