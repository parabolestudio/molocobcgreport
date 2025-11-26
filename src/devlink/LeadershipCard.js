"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonYellowBorderWithWhiteText } from "./ButtonYellowBorderWithWhiteText";
import * as _utils from "./utils";
import _styles from "./LeadershipCard.module.css";

export function LeadershipCard({
  as: _Component = _Builtin.Block,
  overrideTextWhiteText = "Heading",
  overrideLineClamp1Text = "Title with no acronyms and Co-Founder",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "leadership-block",
        "grayscale",
        "text-left"
      )}
      id={_utils.cx(
        _styles,
        "w-node-c3da223c-ff8b-a436-479c-0dad70bf33a2-70bf33a2"
      )}
      tag="div"
    >
      <_Builtin.Image
        loading="lazy"
        height="auto"
        width="auto"
        alt="Leader ship image"
        src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62558d3c0fc34406877c1cba_image%203.webp"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "leadership-overlay-block")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "text-white", "mt-0", "my-4")}
          tag="h4"
        >
          {overrideTextWhiteText}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "line-clamp-1", "text-white", "mb-24")}
          tag="div"
        >
          {overrideLineClamp1Text}
        </_Builtin.Block>
        <ButtonYellowBorderWithWhiteText overrideText14Text="Read Bio" />
      </_Builtin.Block>
    </_Component>
  );
}
