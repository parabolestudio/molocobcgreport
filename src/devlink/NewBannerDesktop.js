"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NewBannerDesktop.module.css";

export function NewBannerDesktop({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "banner-desktop", "show-english-only")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "max-width",
          "align-horizontal",
          "align-center",
          "hide-flex"
        )}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "banner-quote")}
          tag="h6"
        >
          <_Builtin.Strong>{"New! "}</_Builtin.Strong>
          {"State of Mobile Gaming: In-App Purchase Trends for 2025 "}
          <br />
        </_Builtin.Heading>
        <_Builtin.Link
          className={_utils.cx(_styles, "button-banner-on-mobile")}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "button-icon-banner")}
            loading="lazy"
            width="auto"
            height="auto"
            alt="White arrow to learn more about the subject "
            src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6544c48db72afc64022178de_Arrow-white.webp"
          />
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "button-banner")}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "button-text-banner")}
            tag="div"
          >
            {"Read More"}
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "button-icon")}
            loading="lazy"
            width="auto"
            height="auto"
            alt="White arrow to learn more about the subject "
            src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6544c48db72afc64022178de_Arrow-white.webp"
          />
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
