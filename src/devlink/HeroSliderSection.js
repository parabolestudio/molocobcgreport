"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonYellowLong } from "./ButtonYellowLong";
import * as _utils from "./utils";
import _styles from "./HeroSliderSection.module.css";

export function HeroSliderSection({
  as: _Component = _Builtin.Block,
  textWhiteText = "Your data",
  textWhiteText2 = "Quickly scale user acquisition and achieve greater lifetime value through battle-tested prediction models.",

  buttonYellowLongLink = {
    href: "#",
  },

  textWhiteText3 = "Driving performance.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "div-block-7", "relative")}
      tag="div"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Row
          tag="div"
          columns={{
            main: "9|3",
            medium: "",
            small: "",
            tiny: "",
          }}
        >
          <_Builtin.Column tag="div">
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-white",
                "mb-0",
                "text-blue-dark"
              )}
              tag="h1"
            >
              {textWhiteText}
            </_Builtin.Heading>
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-white",
                "mt-0",
                "text-blue-dark"
              )}
              tag="h1"
            >
              {textWhiteText3}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-white",
                "text-24",
                "text-blue-dark",
                "mb-24"
              )}
              tag="div"
            >
              {textWhiteText2}
            </_Builtin.Block>
            <ButtonYellowLong
              molocoLove={textWhiteText}
              buttonYellowLink={buttonYellowLongLink}
            />
          </_Builtin.Column>
          <_Builtin.Column tag="div" />
        </_Builtin.Row>
      </_Builtin.Container>
    </_Component>
  );
}
