"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavBarSecondaryNew.module.css";

export function NavBarSecondaryNew({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav-bar---secondary---new")}
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
          {"For Agencies"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link-new")}
          button={false}
          block=""
          options={{
            href: "#Product-overview",
          }}
        >
          {"Case Studies, Blog, Reports"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link-new")}
          button={false}
          block=""
          options={{
            href: "#Product-overview",
            target: "_blank",
          }}
        >
          {"Developer Hub"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link-new")}
          button={false}
          block=""
          options={{
            href: "#Powered-by-Moloco",
          }}
        >
          {"Help Center"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
