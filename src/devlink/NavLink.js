"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavLink.module.css";

export function NavLink({
  as: _Component = _Builtin.NavbarLink,
  text = "This is the default text value for a symbol field",
  overrideNavLinkText = "Resources",

  overrideNavLinkLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav-link", "text-block-16")}
      options={overrideNavLinkLink}
    >
      {overrideNavLinkText}
    </_Component>
  );
}
