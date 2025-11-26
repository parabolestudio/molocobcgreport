"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ProgramDetailHero.module.css";

export function ProgramDetailHero({
  as: _Component = _Builtin.Block,
  headingText = "Your data. Driving performance.",
  subtext = "Our advanced machine learning engine provides app/game advertisers the best performance, transparency and scale.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-11")} tag="div">
      <_Builtin.Container
        className={_utils.cx(_styles, "container-2")}
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
              className={_utils.cx(_styles, "text-white")}
              tag="h2"
            >
              {headingText}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-white", "mb-24")}
              tag="div"
            >
              {subtext}
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "button-yellow",
                "button-long",
                "text-black"
              )}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-blue-2")}
                tag="div"
              >
                {"Learn More"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Column>
          <_Builtin.Column tag="div" />
        </_Builtin.Row>
      </_Builtin.Container>
    </_Component>
  );
}
