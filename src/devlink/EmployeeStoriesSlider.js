"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./EmployeeStoriesSlider.module.css";

export function EmployeeStoriesSlider({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "bg-soft-blue")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.NotSupported _atom="DynamoWrapper" />
      <_Builtin.SliderWrapper
        className={_utils.cx(
          _styles,
          "slider",
          "bg-soft-blue",
          "height-auto",
          "py-16"
        )}
        fs-cmsslider-element="slider"
        navSpacing={3}
        navShadow={false}
        autoplay={true}
        delay={3000}
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
            className={_utils.cx(_styles, "text-blue-dark")}
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
            className={_utils.cx(_styles, "text-blue-dark")}
            widget={{
              type: "icon",
              icon: "slider-right",
            }}
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderNav className={_utils.cx(_styles, "text-blue-dark")} />
      </_Builtin.SliderWrapper>
    </_Component>
  );
}
