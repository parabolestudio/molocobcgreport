"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Breadcrumbs.module.css";

export function Breadcrumbs({
  as: _Component = _Builtin.Section,
  breadcrumbLink2Text = "MOLOCO CLOUD DSP",

  breadcrumbLink2Link = {
    href: "#",
  },

  breadcrumbLink1Text1 = "Products/",

  breadcrumbLink1Link1 = {
    href: "#",
  },

  mainLinkText = "Home/",

  mainLinkLink = {
    href: "#",
  },

  breadcrumb3Text = "",

  breadcrumb3Link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-8")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-9")}
        tag="div"
      >
        <_Builtin.List
          className={_utils.cx(_styles, "breadcrumbs")}
          tag="ul"
          unstyled={true}
        >
          <_Builtin.ListItem>
            <_Builtin.Link
              className={_utils.cx(_styles, "breadcrumb-link-2")}
              button={false}
              block=""
              options={mainLinkLink}
            >
              {mainLinkText}
            </_Builtin.Link>
          </_Builtin.ListItem>
          <_Builtin.ListItem>
            <_Builtin.Link
              className={_utils.cx(_styles, "breadcrumb-link-2")}
              button={false}
              block=""
              options={breadcrumbLink1Link1}
            >
              {breadcrumbLink1Text1}
            </_Builtin.Link>
          </_Builtin.ListItem>
          <_Builtin.ListItem>
            <_Builtin.Link
              className={_utils.cx(_styles, "breadcrumb-link-2")}
              button={false}
              block=""
              options={breadcrumbLink2Link}
            >
              {breadcrumbLink2Text}
            </_Builtin.Link>
          </_Builtin.ListItem>
          <_Builtin.ListItem>
            <_Builtin.Link
              className={_utils.cx(_styles, "breadcrumb-link-2")}
              button={false}
              block=""
              options={breadcrumb3Link}
            >
              {breadcrumb3Text}
            </_Builtin.Link>
          </_Builtin.ListItem>
        </_Builtin.List>
      </_Builtin.Container>
    </_Component>
  );
}
