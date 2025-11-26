"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ContactMcmLeftContent.module.css";

export function ContactMcmLeftContent({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "sticky-dynamic-img-mcm")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "contact-product-info", "height-adjust")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-159-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-155")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "back-button-wrapper")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-136")}
                width="10"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/687a425eb1e9dc9c40ce2ed7_back-chevron.svg"
              />
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "heading-h4-size",
                  "is-white",
                  "hover-underline"
                )}
              >
                {"BACK"}
              </_Builtin.Paragraph>
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "heading-h4-size",
              "is-white",
              "space-bottom-16px",
              "",
              "mcm-contact-space-top"
            )}
          >
            {"Moloco Commerce Media"}
          </_Builtin.Paragraph>
          <_Builtin.Heading
            className={_utils.cx(
              _styles,
              "h2-smaller",
              "is-white",
              "mcm-size-adjust"
            )}
            tag="h2"
          >
            {
              "Grow onsite advertising revenue 3-5x with the industry's most intelligent commerce media platform."
            }
          </_Builtin.Heading>
          <_Builtin.Block className={_utils.cx(_styles, "")} tag="div">
            <_Builtin.Image
              className={_utils.cx(_styles, "retail-ads")}
              width="197"
              height="auto"
              loading="lazy"
              alt=""
              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/68454a94cb21f012cb349664_commercemedia.webp"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
