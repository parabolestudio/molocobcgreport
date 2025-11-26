"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavBarSecondaryAboutLeadershipCareersNewsroom.module.css";

export function NavBarSecondaryAboutLeadershipCareersNewsroom({
  as: _Component = _Builtin.Block,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav-bar---secondary---blog---new")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "nav-sec-container-new")}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link-new")}
          button={false}
          block=""
          options={{
            href: "#Product-overview",
          }}
        >
          {"About Moloco"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link-new")}
          button={false}
          block=""
          options={{
            href: "#Product-overview",
          }}
        >
          {"Leadership"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link-new")}
          button={false}
          block=""
          options={{
            href: "#Product-overview",
          }}
        >
          {"Careers"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link-new", "english-only")}
          button={false}
          block=""
          options={{
            href: "#Product-overview",
          }}
        >
          {"Internships"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link-new")}
          button={false}
          block=""
          options={{
            href: "#Powered-by-Moloco",
          }}
        >
          {"Newsroom"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
