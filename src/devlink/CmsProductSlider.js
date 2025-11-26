"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CmsProductSlider.module.css";

export function CmsProductSlider({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.NotSupported _atom="DynamoWrapper" />
      <_Builtin.SliderWrapper
        className={_utils.cx(_styles, "slider", "bg-yellow")}
        fs-cmsslider-element="slider"
        navSpacing={3}
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
          <_Builtin.SliderSlide tag="div" />
          <_Builtin.SliderSlide tag="div" />
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
