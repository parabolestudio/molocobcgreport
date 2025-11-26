"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CmsList.module.css";

export function CmsList({ as: _Component = _Builtin.FormWrapper }) {
  return (
    <_Component className={_utils.cx(_styles, "filter_form-wrapper")}>
      <_Builtin.FormForm
        className={_utils.cx(_styles, "filter_form")}
        name="wf-form-filter"
        data-name="filter"
        method="get"
        fs-cmsfilter-element="filters"
        id="wf-form-filter"
      >
        <_Builtin.Section
          className={_utils.cx(_styles, "filter_wrapper")}
          tag="div"
          grid={{
            type: "section",
          }}
        >
          <_Builtin.Container
            className={_utils.cx(_styles, "container", "mb-24")}
            tag="div"
          >
            <_Builtin.Row
              tag="div"
              columns={{
                main: "3|9",
                medium: "",
                small: "",
                tiny: "",
              }}
            >
              <_Builtin.Column tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "filter_block")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "filter_block-header")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-small")}
                      tag="h3"
                    >
                      {"Tags"}
                    </_Builtin.Heading>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "filter_reset")}
                      button={false}
                      fs-cmsfilter-element="reset"
                      fs-cmsfilter-reset="type"
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Clear"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "filter_options")}
                    tag="div"
                  >
                    <_Builtin.NotSupported _atom="DynamoWrapper" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "dropdown-filter")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle tag="div">
                    <_Builtin.Icon
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                    <_Builtin.Block tag="div">{"Dropdown"}</_Builtin.Block>
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList tag="nav" />
                </_Builtin.DropdownWrapper>
                <_Builtin.Block tag="div">
                  <_Builtin.Block
                    className={_utils.cx(_styles, "custom-selectbox")}
                    tag="div"
                  >
                    <_Builtin.FormSelect
                      className={_utils.cx(
                        _styles,
                        "filter-select",
                        "text-12",
                        "text-bold-700",
                        "letter-spacing-1",
                        "text-blue-medium"
                      )}
                      name="select-2"
                      data-name="Select 2"
                      required={false}
                      multiple={false}
                      fs-cmsfilter-field="type"
                      fs-cmsfilter-tagcategory="type"
                      id="select-2"
                      options={[
                        {
                          t: "ALL PRODUCTS",
                          v: "",
                        },
                        {
                          t: "Moloco Cloud",
                          v: "Moloco Cloud",
                        },
                        {
                          t: "MOLOCO Studio",
                          v: "MOLOCO Studio",
                        },
                        {
                          t: "MOLOCO Retail Media",
                          v: "MOLOCO Retail Media",
                        },
                        {
                          t: "Social Good",
                          v: "Social Good",
                        },
                        {
                          t: "DSP",
                          v: "DSP",
                        },
                        {
                          t: "Awards",
                          v: "Awards",
                        },
                        {
                          t: "Corporate",
                          v: "Corporate",
                        },
                      ]}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Column>
              <_Builtin.Column tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "filter_header")}
                  tag="div"
                >
                  <_Builtin.FormTextInput
                    className={_utils.cx(
                      _styles,
                      "filter_search-field",
                      "text-12",
                      "text-bold-700",
                      "letter-spacing-1"
                    )}
                    autoFocus={false}
                    maxLength={256}
                    name="field-2"
                    data-name="Field 2"
                    placeholder="SEARCH"
                    type="text"
                    disabled={false}
                    required={true}
                    fs-cmsfilter-field="*"
                    id="field-2"
                  />
                </_Builtin.Block>
              </_Builtin.Column>
            </_Builtin.Row>
          </_Builtin.Container>
          <_Builtin.Block tag="div">
            <_Builtin.Block tag="div">
              <_Builtin.Container
                className={_utils.cx(_styles, "container")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "container", "px-0")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "filter_grid")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "filter_column")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "filter_block")}
                        tag="div"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "filter_content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "content_filter")}
                        tag="div"
                      >
                        <_Builtin.NotSupported _atom="DynamoWrapper" />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "filter_empty")}
                        tag="div"
                        fs-cmsfilter-element="empty"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "filter_empty-icon")}
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt=""
                          src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624f1c72bd83b93d873409cb_error.svg"
                        />
                        <_Builtin.Block tag="div">
                          {"No results found."}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Container>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Section>
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
    </_Component>
  );
}
