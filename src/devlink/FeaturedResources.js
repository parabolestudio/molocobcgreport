"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FeaturedBlogs } from "./FeaturedBlogs";
import { FeaturedRDBlogs } from "./FeaturedRDBlogs";
import { FeaturedCaseStudies } from "./FeaturedCaseStudies";
import * as _utils from "./utils";
import _styles from "./FeaturedResources.module.css";

export function FeaturedResources({
  as: _Component = _Builtin.Section,
  resourcesTitle = "What's new at Moloco",
  resourcesText = "Resources",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-60", "bg-soft-gray")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-2")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-center",
            "text-bold-700",
            "uppercase",
            "text-blue-medium"
          )}
          tag="div"
        >
          {resourcesText}
        </_Builtin.Block>
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "text-center",
            "mb-48",
            "text-blue-dark",
            "mt-10"
          )}
          tag="h2"
        >
          {resourcesTitle}
        </_Builtin.Heading>
        <_Builtin.Block className={_utils.cx(_styles, "px-0")} tag="div" />
        <FeaturedBlogs />
        <FeaturedRDBlogs />
        <FeaturedCaseStudies />
      </_Builtin.Container>
    </_Component>
  );
}
