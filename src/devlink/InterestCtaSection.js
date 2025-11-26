"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonYellowBorderWithBlueText } from "./ButtonYellowBorderWithBlueText";
import { ButtonYellowLong } from "./ButtonYellowLong";
import * as _utils from "./utils";
import _styles from "./InterestCtaSection.module.css";

export function InterestCtaSection({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "bg-blue-medium", "py-60")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "text-yellow", "text-center")}
          tag="h2"
        >
          {"Interest CTA"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "intro-body")}>
          {
            "Lorem ipsum dolor sit amet cotuer adipiscing, sed diam. Duis autem vel eum iriure dolor. Tui laoreet dolore magna aliquam erat enim ad minim venia."
          }
        </_Builtin.Paragraph>
        <_Builtin.Row
          className={_utils.cx(_styles, "columns-6")}
          tag="div"
          columns={{
            main: "2|4|4|2",
            medium: "6|6|6|6",
            small: "small-stack",
            tiny: "",
          }}
        >
          <_Builtin.Column
            className={_utils.cx(_styles, "column-4", "pd-16")}
            tag="div"
          />
          <_Builtin.Column
            className={_utils.cx(_styles, "column-5", "mb-24")}
            tag="div"
          >
            <ButtonYellowBorderWithBlueText />
          </_Builtin.Column>
          <_Builtin.Column
            className={_utils.cx(_styles, "column-15")}
            tag="div"
          >
            <ButtonYellowLong molocoLove="Signup" />
          </_Builtin.Column>
          <_Builtin.Column tag="div" />
        </_Builtin.Row>
      </_Builtin.Container>
    </_Component>
  );
}
