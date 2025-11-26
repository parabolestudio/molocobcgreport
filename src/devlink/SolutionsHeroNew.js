"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonYellowLong } from "./ButtonYellowLong";
import * as _utils from "./utils";
import _styles from "./SolutionsHeroNew.module.css";

export function SolutionsHeroNew({
  as: _Component = _Builtin.Section,
  solutionsBgImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62964e64393ba95b6723b5bc_Solution%20page_User%20Acquisition-02.webp",
  solutionsHeaderText = "Moloco for user acquisition",

  solutionsButtonLink = {
    href: "#",
  },

  solutionsButtonText = "Learn More",
  eyebrowTitle = "MOLOCO FOR USER ACQUISITION",
  subHead = "Drive your most profitable growth at massive scale",
  heroMobileImgSectionImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62964e64393ba95b6723b5bc_Solution%20page_User%20Acquisition-02.webp",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "section",
        "slider-hero",
        "relative",
        "mb-32"
      )}
      grid={{
        type: "section",
      }}
      tag="div"
      id="hero"
    >
      <_Builtin.Image
        className={_utils.cx(
          _styles,
          "hero-img-section",
          "_w-100",
          "hide-on-mobile"
        )}
        loading="lazy"
        width="auto"
        alt=""
        src={solutionsBgImage}
      />
      <_Builtin.Image
        className={_utils.cx(_styles, "hero-mobile-img-section")}
        loading="lazy"
        width="auto"
        alt=""
        src={heroMobileImgSectionImage}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "hero-content-wrap")}
        tag="div"
      >
        <_Builtin.Container
          className={_utils.cx(_styles, "container")}
          tag="div"
        >
          <_Builtin.Row
            tag="div"
            columns={{
              main: "7|5",
              medium: "",
              small: "",
              tiny: "",
            }}
          >
            <_Builtin.Column tag="div">
              <_Builtin.Heading
                className={_utils.cx(_styles, "text-blue-dark")}
                tag="h4"
              >
                {eyebrowTitle}
              </_Builtin.Heading>
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "text-blue-dark",
                  "mt-0",
                  "width-90"
                )}
                tag="h1"
              >
                {solutionsHeaderText}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-24",
                  "text-blue-dark",
                  "mb-24",
                  "width-90"
                )}
                tag="div"
              >
                {subHead}
              </_Builtin.Block>
              <ButtonYellowLong
                buttonYellowLink={solutionsButtonLink}
                molocoLove={solutionsButtonText}
              />
            </_Builtin.Column>
            <_Builtin.Column tag="div" />
          </_Builtin.Row>
        </_Builtin.Container>
      </_Builtin.Block>
    </_Component>
  );
}
