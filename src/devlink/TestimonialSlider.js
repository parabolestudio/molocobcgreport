"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TestimonialSlider.module.css";

export function TestimonialSlider({
  as: _Component = _Builtin.Section,
  text = "This is the default text value for a symbol field",
  testimonialAvatarImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62430fc5e1e1852d2070ed8e_profile-1638978847674-8525579fd416image%201.webp",
  blockQuoteAuthorText = (
    <>
      {"— Andy Jang, senior user acquisition manager,"}
      <br />
      {"Discord"}
    </>
  ),
  slide2Text = "“No one provides better data-driven solutions than Moloco. Whether for programmatic user acquisition, in-house control of data, or as a fully managed service, Moloco’s machine learning-powered solutions give mobile businesses the edge they need.”",
  slide2Author = "— Name, Title, Company",
  slide3Text = "“With Moloco Retail Media Platform, we enabled our vendors to achieve a 9x growth in ROAS. The platform brings powerful performance based on machine learning and a scalable ad tech infrastructure, which enables us to build a sustainable media business”",
  slide3Author = (
    <>
      {"— Woohyun Park, VP of ad business,"}
      <br />
      {"GS Shop"}
    </>
  ),
  slide3AvatarImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6287d7b3ef08bd2f8538a7f4_Maxim%20Kirilenko%20-%20Playrix_640x640.webp",
  slide2AvatarImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6287d64dd61cc4f55cbcd496_Andy_Jang_Discord_476x640.webp",
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
        className={_utils.cx(_styles, "slider-testimonials", "bg-soft-blue")}
        navSpacing={15}
        navShadow={false}
        autoplay={true}
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
            className={_utils.cx(_styles, "slide-2", "py-32")}
            tag="div"
          >
            <_Builtin.Container
              className={_utils.cx(_styles, "container")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "slider-testimonial-inner")}
                tag="div"
              >
                <_Builtin.Row
                  className={_utils.cx(_styles, "columns-4")}
                  tag="div"
                  columns={{
                    main: "4|8",
                    medium: "",
                    small: "",
                    tiny: "",
                  }}
                >
                  <_Builtin.Column
                    className={_utils.cx(_styles, "column")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "testimonial-avatar-wrap")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(
                          _styles,
                          "testimonial-avatar",
                          "testimonial-avatar-wrap"
                        )}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Profile"
                        src={testimonialAvatarImage}
                      />
                    </_Builtin.Block>
                  </_Builtin.Column>
                  <_Builtin.Column tag="div">
                    <_Builtin.Blockquote
                      className={_utils.cx(_styles, "block-quote-text")}
                    >
                      {text}
                    </_Builtin.Blockquote>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-bold-700",
                        "text-28",
                        "text-blue",
                        "ml-20"
                      )}
                      tag="div"
                    >
                      {blockQuoteAuthorText}
                    </_Builtin.Block>
                  </_Builtin.Column>
                </_Builtin.Row>
              </_Builtin.Block>
            </_Builtin.Container>
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slide-2", "py-32")}
            tag="div"
          >
            <_Builtin.Container
              className={_utils.cx(_styles, "container")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "slider-testimonial-inner")}
                tag="div"
              >
                <_Builtin.Row
                  className={_utils.cx(_styles, "columns-4")}
                  tag="div"
                  columns={{
                    main: "4|8",
                    medium: "",
                    small: "",
                    tiny: "",
                  }}
                >
                  <_Builtin.Column
                    className={_utils.cx(_styles, "column")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "testimonial-avatar-wrap")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(
                          _styles,
                          "testimonial-avatar",
                          "testimonial-avatar-wrap"
                        )}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Profile"
                        src={slide2AvatarImage}
                      />
                    </_Builtin.Block>
                  </_Builtin.Column>
                  <_Builtin.Column tag="div">
                    <_Builtin.Blockquote
                      className={_utils.cx(_styles, "block-quote-text")}
                    >
                      {slide2Text}
                    </_Builtin.Blockquote>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-bold-700",
                        "text-28",
                        "text-blue",
                        "ml-20"
                      )}
                      tag="div"
                    >
                      {slide2Author}
                    </_Builtin.Block>
                  </_Builtin.Column>
                </_Builtin.Row>
              </_Builtin.Block>
            </_Builtin.Container>
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slide-2", "py-32")}
            tag="div"
          >
            <_Builtin.Container
              className={_utils.cx(_styles, "container")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "slider-testimonial-inner")}
                tag="div"
              >
                <_Builtin.Row
                  className={_utils.cx(_styles, "columns-4")}
                  tag="div"
                  columns={{
                    main: "4|8",
                    medium: "",
                    small: "",
                    tiny: "",
                  }}
                >
                  <_Builtin.Column
                    className={_utils.cx(_styles, "column")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "testimonial-avatar-wrap")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(
                          _styles,
                          "testimonial-avatar",
                          "testimonial-avatar-wrap"
                        )}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Profile"
                        src={slide3AvatarImage}
                      />
                    </_Builtin.Block>
                  </_Builtin.Column>
                  <_Builtin.Column tag="div">
                    <_Builtin.Blockquote
                      className={_utils.cx(_styles, "block-quote-text")}
                    >
                      {slide3Text}
                    </_Builtin.Blockquote>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-bold-700",
                        "text-28",
                        "text-blue",
                        "ml-20"
                      )}
                      tag="div"
                    >
                      {slide3Author}
                    </_Builtin.Block>
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
