"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Demo5.module.css";

export function Demo5({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "div-block-7", "relative")}
      tag="div"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
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
              {"Moloco Cloud DSP"}
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
              {
                "Quickly scale user acquisition and achieve greater lifetime value through battle-tested prediction models."
              }
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "btn-hero-yellow")}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Get Started"}
            </_Builtin.Link>
          </_Builtin.Column>
          <_Builtin.Column tag="div" />
        </_Builtin.Row>
      </_Builtin.Container>
    </_Component>
  );
}
