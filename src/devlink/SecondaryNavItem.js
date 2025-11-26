"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SecondaryNavItem.module.css";

export function SecondaryNavItem({
  as: _Component = _Builtin.ListItem,
  overrideSecondaryNavLinkText = "About Moloco",

  overrideSecondaryNavLinkLink = {
    href: "https://developer.moloco.cloud/",
  },
}) {
  return (
    <_Component className={_utils.cx(_styles, "secondary-nav-item")}>
      <_Builtin.Link
        className={_utils.cx(
          _styles,
          "secondary-nav-link",
          "text-bold-700",
          "letter-spacing-1",
          "uppercase",
          "text-center"
        )}
        button={false}
        block=""
        options={overrideSecondaryNavLinkLink}
      >
        {overrideSecondaryNavLinkText}
      </_Builtin.Link>
    </_Component>
  );
}
