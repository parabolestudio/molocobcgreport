"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IndustryAwardsSection.module.css";

export function IndustryAwardsSection({
  as: _Component = _Builtin.Section,
  textBlue2Text = "Industry-Ackwowledged Performance",
  introBodyText = (
    <>
      {
        "Data measurement platforms and brand safety certifiers across the industry have"
      }
      <br />
      {
        "consistently recognized Moloco for our excellence in performance, growth,"
      }
      <br />
      {"brand safety, and fraud mitigation."}
    </>
  ),
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-40")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-2")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "text-blue-2", "text-center")}
          tag="h2"
        >
          {textBlue2Text}
        </_Builtin.Heading>
        <_Builtin.Grid
          className={_utils.cx(_styles, "grid-accreditations")}
          tag="div"
        >
          <_Builtin.Image
            id={_utils.cx(
              _styles,
              "w-node-befba541-6bb9-57e7-c9aa-d17afc3047a2-00a4397b"
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
              "w-node-_085a2051-465d-0e7d-8fdc-b6c600a43981-00a4397b"
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
              "w-node-_085a2051-465d-0e7d-8fdc-b6c600a43984-00a4397b"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt="ROI Index"
            src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/63fe8531592f01abfcfd3824_Singular-roi-index2.webp"
          />
          <_Builtin.Image
            id={_utils.cx(
              _styles,
              "w-node-f8f74936-914f-a3a6-1b84-b08b804f2588-00a4397b"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt="ROI Index"
            src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62fbeed28981cb8b749bcb73_MOLOCO_2021_Certification_Badge_Website.webp"
          />
          <_Builtin.Image
            id={_utils.cx(
              _styles,
              "w-node-_8bc50091-c796-6306-d9b5-6265e5b1aace-00a4397b"
            )}
            loading="lazy"
            width="Auto"
            height="auto"
            alt="Great Place to Work 2023"
            src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/637bcb6e617d6c4be4fb6152_Great%20Place%202022_2023_website%20size.webp"
          />
        </_Builtin.Grid>
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "intro-body",
            "text-black",
            "text-accreditation"
          )}
        >
          {introBodyText}
        </_Builtin.Paragraph>
      </_Builtin.Container>
    </_Component>
  );
}
