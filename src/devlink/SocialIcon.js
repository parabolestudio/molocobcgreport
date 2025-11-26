"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SocialIcon.module.css";

export function SocialIcon({
  as: _Component = _Builtin.Link,
  overrideImageImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6241e06d0701536249c92c0d_Facebook.svg",

  link = {
    href: "#",
    target: "_blank",
  },

  linkBlockLink = {
    href: "https://www.linkedin.com/company/moloco/",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "link-block")}
      button={false}
      block="inline"
      options={linkBlockLink}
    >
      <_Builtin.Image
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={overrideImageImage}
      />
    </_Component>
  );
}
