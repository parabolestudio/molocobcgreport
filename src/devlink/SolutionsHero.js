"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonYellowLong } from "./ButtonYellowLong";
import * as _utils from "./utils";
import _styles from "./SolutionsHero.module.css";

export function SolutionsHero({
  as: _Component = _Builtin.Section,
  textWhiteText = "Hero Title",
  buttonYellowLongMolocoLove = "Learn More",

  buttonYellowLongButtonYellowLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.SliderWrapper
        className={_utils.cx(_styles, "solutions-hero")}
        navSpacing={15}
        navShadow={false}
        autoplay={false}
        delay={4000}
        iconArrows={true}
        animation="slide"
        navNumbers={false}
        easing="ease"
        navRound={false}
        hideArrows={true}
        disableSwipe={false}
        duration={500}
        infinite={true}
        autoMax={0}
        navInvert={false}
      >
        <_Builtin.SliderMask className={_utils.cx(_styles, "mask")}>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "solutions-hero")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-7", "relative")}
              tag="div"
            >
              <_Builtin.Container
                className={_utils.cx(_styles, "container")}
                tag="div"
              >
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
                      className={_utils.cx(_styles, "text-white")}
                      tag="h1"
                    >
                      {textWhiteText}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-white",
                        "mb-24",
                        "text-24"
                      )}
                      tag="div"
                    />
                    <ButtonYellowLong
                      molocoLove={buttonYellowLongMolocoLove}
                      buttonYellowLink={buttonYellowLongButtonYellowLink}
                    />
                  </_Builtin.Column>
                  <_Builtin.Column tag="div" />
                </_Builtin.Row>
              </_Builtin.Container>
            </_Builtin.Block>
          </_Builtin.SliderSlide>
        </_Builtin.SliderMask>
        <_Builtin.SliderArrow
          className={_utils.cx(_styles, "left-arrow")}
          dir="left"
        >
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "slider-left",
            }}
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderArrow
          className={_utils.cx(_styles, "right-arrow")}
          dir="right"
        >
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "slider-right",
            }}
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderNav className={_utils.cx(_styles, "hide")} />
      </_Builtin.SliderWrapper>
    </_Component>
  );
}
