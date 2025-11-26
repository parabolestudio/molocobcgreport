"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonBlueMedium } from "./ButtonBlueMedium";
import * as _utils from "./utils";
import _styles from "./AboutHero.module.css";

export function AboutHero({
  as: _Component = _Builtin.Section,
  buttonBlueMediumWatch = "SEE OPEN POSITIONS",
  textWhiteText = "We are a machine learning company",
  textWhiteText2 = "We provide performance solutions that help companies around the world increase the ROI of their digital strategies to accelerate growth.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.SliderWrapper
        className={_utils.cx(_styles, "about-slider")}
        navSpacing={15}
        navShadow={false}
        autoplay={false}
        delay={4000}
        iconArrows={true}
        animation="slide"
        navNumbers={false}
        easing="ease"
        navRound={true}
        hideArrows={true}
        disableSwipe={false}
        duration={500}
        infinite={true}
        autoMax={0}
        navInvert={false}
      >
        <_Builtin.SliderMask className={_utils.cx(_styles, "mask")}>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slide-6")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "about-slider-wrap", "relative")}
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
                  <_Builtin.Column
                    className={_utils.cx(_styles, "column-12")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "text-blue-dark")}
                      tag="h5"
                    >
                      {"COMPANY"}
                    </_Builtin.Heading>
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "text-white",
                        "text-blue-dark",
                        "mt-0"
                      )}
                      tag="h1"
                    >
                      {textWhiteText}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-white",
                        "mb-24",
                        "text-blue-dark",
                        "text-24"
                      )}
                      tag="div"
                    >
                      {textWhiteText2}
                    </_Builtin.Block>
                  </_Builtin.Column>
                  <_Builtin.Column tag="div" />
                </_Builtin.Row>
              </_Builtin.Container>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-13", "py-24", "mb-16")}
                tag="div"
              >
                <ButtonBlueMedium
                  watch={buttonBlueMediumWatch}
                  molocoCloudDspVideo={{
                    href: "#",
                  }}
                />
              </_Builtin.Block>
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
