"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonBlueMedium } from "./ButtonBlueMedium";
import * as _utils from "./utils";
import _styles from "./ResourcesSlider.module.css";

export function ResourcesSlider({
  as: _Component = _Builtin.Section,
  slide1SmallText = "",
  slide1Heading = "Placeholder for RMP Guide",
  slide1BodyText = "Moloco starts learning as soon as first-party data is ingested, building its targeting criteria even before you bid on your first impression. By combining eight simultaneous model inferences per bid request – from user conversion likelihood to price optimization and fraud prevention – you’re guaranteed rapid and sustained performance.",
  slide1Image = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624febffd2dfd4eb837e0edd_sans-thumb.jpg.imgw.1000%201.avif",
  slide2SmallText = "",
  slide2Heading = "Placeholder for RMP Guide",
  slide2BodyText = "Moloco starts learning as soon as first-party data is ingested, building its targeting criteria even before you bid on your first impression. By combining eight simultaneous model inferences per bid request – from user conversion likelihood to price optimization and fraud prevention – you’re guaranteed rapid and sustained performance.",
  slide2Image = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624febffd2dfd4eb837e0edd_sans-thumb.jpg.imgw.1000%201.avif",

  slide1ButtonUrl = {
    href: "https://youtu.be/D0g2k1xF6EQ",
  },

  slide1ButtonText = "Download",

  slide2ButtonUrl = {
    href: "https://youtu.be/D0g2k1xF6EQ",
  },

  slide2ButtonText = "Download",
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
        className={_utils.cx(_styles, "slider-products", "bg-soft-blue")}
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
        <_Builtin.SliderMask>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slide-2", "py-52")}
            tag="div"
          >
            <_Builtin.Container
              className={_utils.cx(_styles, "container")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "slider-products-inner")}
                tag="div"
              >
                <_Builtin.Row
                  className={_utils.cx(_styles, "slider-products-columns")}
                  tag="div"
                  columns={{
                    main: "6|6",
                    medium: "",
                    small: "",
                    tiny: "",
                  }}
                >
                  <_Builtin.Column
                    className={_utils.cx(_styles, "post-image-column")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-16",
                        "text-bold-700",
                        "text-blue-dark"
                      )}
                      tag="div"
                    >
                      {slide1SmallText}
                    </_Builtin.Block>
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "text-blue")}
                      tag="h3"
                    >
                      {slide1Heading}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph
                      className={_utils.cx(
                        _styles,
                        "intro-body",
                        "text-blue",
                        "text-left",
                        "mb-48"
                      )}
                    >
                      {slide1BodyText}
                    </_Builtin.Paragraph>
                    <ButtonBlueMedium
                      watch={slide1ButtonText}
                      molocoCloudDspVideo={slide1ButtonUrl}
                    />
                  </_Builtin.Column>
                  <_Builtin.Column
                    className={_utils.cx(_styles, "mt-32", "text-center")}
                    tag="div"
                  >
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Moloco Slider Image"
                      src={slide1Image}
                    />
                  </_Builtin.Column>
                </_Builtin.Row>
              </_Builtin.Block>
            </_Builtin.Container>
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slide-2", "py-52")}
            tag="div"
          >
            <_Builtin.Container
              className={_utils.cx(_styles, "container")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "slider-products-inner")}
                tag="div"
              >
                <_Builtin.Row
                  className={_utils.cx(_styles, "slider-products-columns")}
                  tag="div"
                  columns={{
                    main: "6|6",
                    medium: "",
                    small: "",
                    tiny: "",
                  }}
                >
                  <_Builtin.Column
                    className={_utils.cx(_styles, "post-image-column")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-16",
                        "text-bold-700",
                        "text-blue-dark"
                      )}
                      tag="div"
                    >
                      {slide2SmallText}
                    </_Builtin.Block>
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "text-blue")}
                      tag="h3"
                    >
                      {slide2Heading}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph
                      className={_utils.cx(
                        _styles,
                        "intro-body",
                        "text-blue",
                        "text-left",
                        "mb-48"
                      )}
                    >
                      {slide2BodyText}
                    </_Builtin.Paragraph>
                    <ButtonBlueMedium
                      watch={slide2ButtonText}
                      molocoCloudDspVideo={slide2ButtonUrl}
                    />
                  </_Builtin.Column>
                  <_Builtin.Column
                    className={_utils.cx(_styles, "mt-32", "text-center")}
                    tag="div"
                  >
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src={slide2Image}
                    />
                  </_Builtin.Column>
                </_Builtin.Row>
              </_Builtin.Block>
            </_Builtin.Container>
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
