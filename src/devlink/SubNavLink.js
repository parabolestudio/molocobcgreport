"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SubNavLink.module.css";

export function SubNavLink({
  as: _Component = _Builtin.DropdownLink,
  overrideSubNavLinkLink,
  overrideSubNavLinkText = "Moloco Cloud DSP",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "subnav-link", "text-blue", "py-4")}
      options={overrideSubNavLinkLink}
    >
      {overrideSubNavLinkText}
    </_Component>
  );
}
