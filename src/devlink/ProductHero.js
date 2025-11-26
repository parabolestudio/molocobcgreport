"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonYellowLong } from "./ButtonYellowLong";
import * as _utils from "./utils";
import _styles from "./ProductHero.module.css";

export function ProductHero({
  as: _Component = _Builtin.Section,
  textWhiteText = "Moloco Cloud DSP",
  textWhiteText2 = "Unlock your first-party data to drive performance with our modern DSP. Purpose-built for today’s growth marketer. ",

  buttonYellowLongButtonYellowLink = {
    href: "#",
  },

  buttonYellowLongMolocoLove = "Learn More",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "product-hero")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.SliderWrapper
        className={_utils.cx(_styles, "product-slider", "solutions-hero")}
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
            className={_utils.cx(_styles, "slide-5")}
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
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-16",
                        "text-bold-700",
                        "uppercase",
                        "mb-48",
                        "text-white"
                      )}
                      tag="div"
                    >
                      {"MOLOCO Growth Platform"}
                    </_Builtin.Block>
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
                        "text-24",
                        "mb-64"
                      )}
                      tag="div"
                    >
                      {textWhiteText2}
                    </_Builtin.Block>
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
