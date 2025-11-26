"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonYellowLong } from "./ButtonYellowLong";
import { ButtonYellow } from "./ButtonYellow";
import * as _utils from "./utils";
import _styles from "./HeroSlider.module.css";

export function HeroSlider({
  as: _Component = _Builtin.Section,
  slide1Heading1 = "Your data",
  slide1Heading2 = "Driving performance.",
  slide1Paragraph = "Unlock the value of your unique first-party data.",

  slide1ButtonLink = {
    href: "#",
  },

  slide1ButtonText = "Your data",
  slide2Heading = "Moloco Cloud DSP",
  slide2Paragraph = "Quickly scale user acquisition and achieve greater lifetime value through battle-tested prediction models.",

  slide2Link = {
    href: "#",
  },

  slide2ButtonText = "SIGN UP",
  slide3Heading = "Moloco Retail Media Platform",
  slide3Paragraph = "Grow your e-commerce business quickly with our end-to-end ad serving platform.",

  slide3Link = {
    href: "#",
  },

  slide3ButtonText = "SIGN UP",
}) {
  return (
    <_Component
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.SliderWrapper
        className={_utils.cx(_styles, "slider-hero")}
        navSpacing={15}
        navShadow={false}
        autoplay={false}
        delay={4000}
        iconArrows={true}
        animation="slide"
        navNumbers={false}
        easing="ease"
        navRound={true}
        hideArrows={false}
        disableSwipe={false}
        duration={500}
        infinite={true}
        autoMax={0}
        navInvert={false}
      >
        <_Builtin.SliderMask className={_utils.cx(_styles, "mask")}>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slide", "slide-home-1")}
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
                      className={_utils.cx(
                        _styles,
                        "text-white",
                        "mb-0",
                        "text-blue-dark"
                      )}
                      tag="h1"
                    >
                      {slide1Heading1}
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
                      {slide1Heading2}
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
                      {slide1Paragraph}
                    </_Builtin.Block>
                    <ButtonYellowLong
                      molocoLove={slide1ButtonText}
                      buttonYellowLink={slide1ButtonLink}
                    />
                  </_Builtin.Column>
                  <_Builtin.Column tag="div" />
                </_Builtin.Row>
              </_Builtin.Container>
            </_Builtin.Block>
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(
              _styles,
              "slide",
              "slide-home-2",
              "turn-off-copy"
            )}
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
                      className={_utils.cx(_styles, "cta-heading-white")}
                      tag="h1"
                    >
                      {slide2Heading}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "cta-description-white",
                        "mb-24",
                        "text-24"
                      )}
                      tag="div"
                    >
                      {slide2Paragraph}
                    </_Builtin.Block>
                    <ButtonYellow
                      link={slide2Link}
                      textBlockText={slide2ButtonText}
                    />
                  </_Builtin.Column>
                  <_Builtin.Column tag="div" />
                </_Builtin.Row>
              </_Builtin.Container>
            </_Builtin.Block>
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slide", "slide-home-3", "turn-off")}
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
                      className={_utils.cx(_styles, "cta-heading-white")}
                      tag="h1"
                    >
                      {slide3Heading}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "cta-description-white",
                        "mb-24"
                      )}
                      tag="div"
                    >
                      {slide3Paragraph}
                    </_Builtin.Block>
                    <ButtonYellow
                      link={slide3Link}
                      textBlockText={slide3ButtonText}
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
        <_Builtin.SliderNav />
      </_Builtin.SliderWrapper>
    </_Component>
  );
}
