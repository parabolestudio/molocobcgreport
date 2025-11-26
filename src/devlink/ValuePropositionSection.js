"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ValuePropositionSection.module.css";

export function ValuePropositionSection({
  as: _Component = _Builtin.Section,
  productName = "This is the default text value for a symbol field",
  productTitle = "This is the default text value for a symbol field",
  firstImage,
  growthYellowText = "MOLOCO GROWTH PLATFORM",
  growthH2BlueText = "Performance that matches your growth ambitions",
  firstColImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6241c9efeb7567ec5fc39548_FPO-ICON-FLOAT.svg",
  firstColTitle = "Massively scalable automation",
  firstColContent = (
    <>
      {
        "Eliminate cumbersome hand-segmentation and multiply your performance across countless campaigns, geographies, and publishers."
      }
      <br />
    </>
  ),
  secondColImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6241c9efeb7567ec5fc39548_FPO-ICON-FLOAT.svg",
  secondColTitle = "Rapid and sustained ROAS",
  secondColContent = (
    <>
      {
        "Avoid the cost and time typically needed to train models. See returns in just a few weeks and maintain performance at any size budget."
      }
      <br />
    </>
  ),
  thirdColImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6241c9efeb7567ec5fc39548_FPO-ICON-FLOAT.svg",
  thirdColTitle = "Future-proofed adaptability",
  thirdColContent = (
    <>
      {
        "Protect against future privacy and regulatory risk with a platform designed to improve performance as data availability changes."
      }
      <br />
    </>
  ),
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-60")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "text-blue-medium",
            "text-center",
            "text-20"
          )}
          tag="h6"
        >
          {growthYellowText}
        </_Builtin.Heading>
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "text-blue",
            "text-center-2",
            "mt-0",
            "mb-24"
          )}
          tag="h2"
        >
          {growthH2BlueText}
        </_Builtin.Heading>
        <_Builtin.Grid className={_utils.cx(_styles, "grid-3")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "div")}
            id={_utils.cx(
              _styles,
              "w-node-_950dfca8-a6fd-7f39-fed1-28c15cf251c9-5cf251c2"
            )}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt="Value prop"
              src={firstColImage}
            />
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-bold-700",
                "text-blue-dark",
                "pt-10",
                "value-clamp",
                "text-31"
              )}
              tag="h3"
            >
              {firstColTitle}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-blue-dark", "text-18")}
              tag="div"
            >
              {firstColContent}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div")}
            id={_utils.cx(
              _styles,
              "w-node-_950dfca8-a6fd-7f39-fed1-28c15cf251cf-5cf251c2"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "text-32")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Value prop"
              src={secondColImage}
            />
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-bold-700",
                "text-blue-dark",
                "pt-10",
                "value-clamp",
                "text-31"
              )}
              tag="h3"
            >
              {secondColTitle}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-blue-dark", "text-18")}
              tag="div"
            >
              {secondColContent}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div")}
            id={_utils.cx(
              _styles,
              "w-node-_950dfca8-a6fd-7f39-fed1-28c15cf251d5-5cf251c2"
            )}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt="Value prop"
              src={thirdColImage}
            />
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-bold-700",
                "text-blue-dark",
                "pt-10",
                "value-clamp",
                "text-31"
              )}
              tag="h3"
            >
              {thirdColTitle}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-blue-dark", "text-18")}
              tag="div"
            >
              {thirdColContent}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Container>
    </_Component>
  );
}
