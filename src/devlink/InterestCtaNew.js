"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonYellow } from "./ButtonYellow";
import * as _utils from "./utils";
import _styles from "./InterestCtaNew.module.css";

export function InterestCtaNew({
  as: _Component = _Builtin.Section,

  buttonYellowLink = {
    href: "#",
  },

  buttonYellowTextBlockText = "Get Started",
  ctaTitle = "Want to learn more?",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "py-48")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-2")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "mt-0",
            "text-blue-dark",
            "text-center"
          )}
          tag="h3"
        >
          {ctaTitle}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "text-center",
            "mb-48",
            "intro-body",
            "text-blue-dark"
          )}
        >
          {" "}
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "d-flex",
            "gap-20",
            "align-center",
            "justify-center"
          )}
          tag="div"
        >
          <ButtonYellow
            textBlockText={buttonYellowTextBlockText}
            link={buttonYellowLink}
          />
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
