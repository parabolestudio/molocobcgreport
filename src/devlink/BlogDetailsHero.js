"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BlogDetailsHero.module.css";

export function BlogDetailsHero({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "bg-overlay",
        "relative",
        "section",
        "py-40"
      )}
      grid={{
        type: "section",
      }}
      tag="div"
      dyn={{
        bind: {},
      }}
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container", "relative")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "text-yellow", "uppercase")}
          tag="h5"
        >
          {"Blog Article"}
        </_Builtin.Heading>
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-6", "text-white")}
          tag="h2"
          dyn={{
            bind: {},
          }}
        >
          {"Heading"}
        </_Builtin.Heading>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "social-share")}
          value="%3Ca%20onclick%3D%22window.open('https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%3A%2F%2Fmoloco-dev.webflow.io%2Fblog%2F'%2C%20'_blank'%2C%20'location%3Dyes%2Cheight%3D570%2Cwidth%3D520%2Cscrollbars%3Dyes%2Cstatus%3Dyes')%3B%22%20class%3D%22dropdown-item%20ssk%20ssk-facebook%20et_social_share%22%20data-ssk-ready%3D%22true%22%3E%3Cimg%20src%3D%22https%3A%2F%2Fuploads-ssl.webflow.com%2F6237fca0466ffd9274a1dbdd%2F6241e06d0701536249c92c0d_Facebook.svg%22%3E%3C%2Fa%3E%0A%3Ca%20onclick%3D%22window.open('https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Ftext%3D%26url%3Dhttps%3A%2F%2Fmoloco-dev.webflow.io%2Fblog%2F%26via%3DMoloco'%2C%20'_blank'%2C%20'location%3Dyes%2Cheight%3D570%2Cwidth%3D520%2Cscrollbars%3Dyes%2Cstatus%3Dyes')%3B%22%20class%3D%22dropdown-item%20ssk%20ssk-facebook%20et_social_share%22%20data-ssk-ready%3D%22true%22%3E%3Cimg%20src%3D%22https%3A%2F%2Fuploads-ssl.webflow.com%2F6237fca0466ffd9274a1dbdd%2F6241e06d0701531996c92c10_Twitter.svg%22%3E%3C%2Fa%3E%0A%3Ca%20onclick%3D%22window.open('https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fmoloco-dev.webflow.io%2Fblog%2F%26title%3D%26source%3DLinkedIn'%2C%20'_blank'%2C%20'location%3Dyes%2Cheight%3D570%2Cwidth%3D520%2Cscrollbars%3Dyes%2Cstatus%3Dyes')%3B%22%20class%3D%22dropdown-item%20ssk%20ssk-facebook%20et_social_share%22%20data-ssk-ready%3D%22true%22%3E%3Cimg%20src%3D%22https%3A%2F%2Fuploads-ssl.webflow.com%2F6237fca0466ffd9274a1dbdd%2F6241e06d07015323f6c92c0e_Linkedin.svg%22%3E%3C%2Fa%3E%0A%3Ca%20onclick%3D%22window.open('%23'%2C%20'_blank'%2C%20'location%3Dyes%2Cheight%3D570%2Cwidth%3D520%2Cscrollbars%3Dyes%2Cstatus%3Dyes')%3B%22%20class%3D%22dropdown-item%20ssk%20ssk-facebook%20et_social_share%22%20data-ssk-ready%3D%22true%22%3E%3Cimg%20src%3D%22https%3A%2F%2Fuploads-ssl.webflow.com%2F6237fca0466ffd9274a1dbdd%2F6241e06d0701538446c92c0f_Wechat.svg%22%3E%3C%2Fa%3E%0A%3Ca%20onclick%3D%22window.open('mailto%3A%3Fsubject%3DMoloco%20Blog%20Share%3A%20%26body%3Dhttps%3A%2F%2Fmoloco-dev.webflow.io%2Fblog%2F'%2C%20'_blank'%2C%20'location%3Dyes%2Cheight%3D570%2Cwidth%3D520%2Cscrollbars%3Dyes%2Cstatus%3Dyes')%3B%22%20class%3D%22dropdown-item%20ssk%20ssk-facebook%20et_social_share%22%20data-ssk-ready%3D%22true%22%3E%3Cimg%20src%3D%22https%3A%2F%2Fuploads-ssl.webflow.com%2F6237fca0466ffd9274a1dbdd%2F6267a0d089b5906746e708f8_email.png%22%3E%3C%2Fa%3E"
        />
      </_Builtin.Container>
    </_Component>
  );
}
