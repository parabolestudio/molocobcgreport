"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IndustrySection.module.css";

export function IndustrySection({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-40")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-3")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "text-blue", "text-center-2")}
          tag="h2"
        >
          {"Industry-Ackwowledged Performance"}
        </_Builtin.Heading>
        <_Builtin.Grid
          className={_utils.cx(_styles, "grid-accreditations")}
          tag="div"
        >
          <_Builtin.Image
            id={_utils.cx(
              _styles,
              "w-node-ad4e0de9-9834-443e-7463-ab09b12439ee-b12439e9"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt="Performance Index"
            src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6241e2d54e24e6e109cace23_AppsFlyer-Top-10-2018%201.webp"
          />
          <_Builtin.Image
            id={_utils.cx(
              _styles,
              "w-node-ad4e0de9-9834-443e-7463-ab09b12439ef-b12439e9"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt="Deloitte"
            src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6241e2d54e24e63d0ccace24_Deloitte%20Technology%20Fast%20500%201.webp"
          />
          <_Builtin.Image
            id={_utils.cx(
              _styles,
              "w-node-ad4e0de9-9834-443e-7463-ab09b12439f0-b12439e9"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt="Effective Index"
            src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6241e2d54e24e6ae9fcace25_EMMA%20Award%20badge%201.webp"
          />
          <_Builtin.Image
            id={_utils.cx(
              _styles,
              "w-node-ad4e0de9-9834-443e-7463-ab09b12439f1-b12439e9"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt="Top Companies"
            src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6241e2d54e24e649b8cace26_Kochava%201.webp"
          />
          <_Builtin.Image
            id={_utils.cx(
              _styles,
              "w-node-ad4e0de9-9834-443e-7463-ab09b12439f2-b12439e9"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt="ROI Index"
            src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6241e2d54e24e60a11cace27_molocco_Social_Share_500x500%201.webp"
          />
        </_Builtin.Grid>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "text-black", "intro-body")}
        >
          {
            "Mobile measurement platforms across the industry have consistently recognized Moloco for our excellence in performance, growth, and fraud mitigation."
          }
        </_Builtin.Paragraph>
      </_Builtin.Container>
    </_Component>
  );
}
