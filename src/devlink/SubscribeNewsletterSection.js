"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SubscribeNewsletterSection.module.css";

export function SubscribeNewsletterSection({
  as: _Component = _Builtin.Section,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "bg-blue-light", "py-48")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "text-blue", "text-center")}
          tag="h2"
        >
          {"Subscribe to the Moloco Newsletter"}
        </_Builtin.Heading>
        <_Builtin.FormWrapper className={_utils.cx(_styles, "form-block")}>
          <_Builtin.FormForm
            className={_utils.cx(_styles, "form-2")}
            name="email-form"
            data-name="Email Form"
            method="get"
            id="email-form"
          >
            <_Builtin.FormBlockLabel
              className={_utils.cx(
                _styles,
                "form-label",
                "uppercase",
                "text-blue",
                "text-16",
                "_w-100"
              )}
              htmlFor="Email"
            >
              {"Email"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "form-field")}
              autoFocus={false}
              maxLength={256}
              name="Email"
              data-name="Email"
              type="email"
              disabled={false}
              required={true}
              id="Email"
            />
            <_Builtin.Paragraph className={_utils.cx(_styles, "form-text")}>
              {
                "© 2022 Moloco, Inc. All rights reserved. Your Privacy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna"
              }
            </_Builtin.Paragraph>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-center")}
              tag="div"
            >
              <_Builtin.FormButton
                className={_utils.cx(
                  _styles,
                  "button-white-bg",
                  "button-long",
                  "bg-transparent"
                )}
                type="submit"
                value="Subscribe"
                data-wait="Please wait..."
              />
            </_Builtin.Block>
          </_Builtin.FormForm>
          <_Builtin.FormSuccessMessage>
            <_Builtin.Block tag="div">
              {"Thank you! Your submission has been received!"}
            </_Builtin.Block>
          </_Builtin.FormSuccessMessage>
          <_Builtin.FormErrorMessage>
            <_Builtin.Block tag="div">
              {"Oops! Something went wrong while submitting the form."}
            </_Builtin.Block>
          </_Builtin.FormErrorMessage>
        </_Builtin.FormWrapper>
      </_Builtin.Container>
    </_Component>
  );
}
