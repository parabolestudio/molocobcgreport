"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NewSecondaryNavBlog.module.css";

export function NewSecondaryNavBlog({ as: _Component = _Builtin.Block }) {
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
          aria-label="blog"
          block=""
          options={{
            href: "#Product-overview",
          }}
        >
          {"Blog"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link", "optional-link")}
          button={false}
          aria-label="R&D Blog"
          block=""
          options={{
            href: "#Product-overview",
          }}
        >
          {"R&D Blogs"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link-new")}
          button={false}
          aria-label="reports"
          block=""
          options={{
            href: "#Product-overview",
          }}
        >
          {"Reports"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link-new")}
          button={false}
          aria-label="case studies"
          block=""
          options={{
            href: "#Product-overview",
          }}
        >
          {"CASE STUDIES"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link-new")}
          button={false}
          aria-label="events"
          block=""
          options={{
            href: "#Powered-by-Moloco",
          }}
        >
          {"EVENTS"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link-new", "hide-mobile")}
          button={false}
          aria-label="developer hub"
          block=""
          options={{
            href: "#Resources",
            target: "_blank",
          }}
        >
          {"Developer HUB"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-sec-link-new", "hide-mobile")}
          button={false}
          aria-label="help center"
          block=""
          options={{
            href: "#Contact-us",
          }}
        >
          {"help center"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
