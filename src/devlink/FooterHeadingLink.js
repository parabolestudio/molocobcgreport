"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FooterHeadingLink.module.css";

export function FooterHeadingLink({
  as: _Component = _Builtin.Heading,
  overrideFooterHeadingLinkLink,
  footerHeadingLinkLink = "Products",
}) {
  return (
    <_Component className={_utils.cx(_styles, "text-white", "my-8")} tag="h4">
      <_Builtin.Link
        className={_utils.cx(_styles, "text-white", "text-decoration-none")}
        button={false}
        block=""
        options={overrideFooterHeadingLinkLink}
      >
        {footerHeadingLinkLink}
      </_Builtin.Link>
    </_Component>
  );
}
