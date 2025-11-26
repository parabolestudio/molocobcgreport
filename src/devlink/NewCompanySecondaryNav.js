"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NewCompanySecondaryNav.module.css";

export function NewCompanySecondaryNav({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "nav-bar---secondary")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "nav-sec-container")}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link")}
          button={false}
          block=""
          options={{
            href: "#Product-overview",
          }}
        >
          {"About Moloco"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link")}
          button={false}
          block=""
          options={{
            href: "#Product-overview",
          }}
        >
          {"Leadership"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link")}
          button={false}
          block=""
          options={{
            href: "#Product-overview",
          }}
        >
          {"Careers"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link")}
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
