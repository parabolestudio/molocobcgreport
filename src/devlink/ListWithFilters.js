"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ListWithFilters.module.css";

export function ListWithFilters({ as: _Component = _Builtin.FormWrapper }) {
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
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-vertical", "padding-xlarge")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "page-padding")}
              tag="div"
            >
              <_Builtin.Container tag="div">
                <_Builtin.Row
                  tag="div"
                  columns={{
                    main: "3|9",
                    medium: "",
                    small: "",
                    tiny: "",
                  }}
                >
                  <_Builtin.Column
                    className={_utils.cx(_styles, "column-11")}
                    tag="div"
                  >
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
                    <_Builtin.Block
                      className={_utils.cx(_styles, "filter_block-2")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "filter_options-2")}
                        tag="div"
                      >
                        <_Builtin.FormSelect
                          className={_utils.cx(_styles, "filter-select")}
                          name="select-2"
                          data-name="Select 2"
                          required={false}
                          multiple={false}
                          fs-cmsfilter-field="type"
                          fs-cmsfilter-tagcategory="type"
                          id="select-2"
                          options={[
                            {
                              t: "Select a Type",
                              v: "",
                            },
                            {
                              t: "Press Releases",
                              v: "Press Releases",
                            },
                            {
                              t: "retail media",
                              v: "retail media",
                            },
                            {
                              t: "Ad Fraud",
                              v: "Ad Fraud",
                            },
                            {
                              t: "Awards",
                              v: "Awards",
                            },
                            {
                              t: "Case Study",
                              v: "Case Study",
                            },
                            {
                              t: "Cloud Infrastructure",
                              v: "Cloud Infrastructure",
                            },
                            {
                              t: "Connected TV (CTV)",
                              v: "Connected TV (CTV)",
                            },
                            {
                              t: "Creative",
                              v: "Creative",
                            },
                            {
                              t: "Data",
                              v: "Data",
                            },
                            {
                              t: "Digital Marketing",
                              v: "Digital Marketing",
                            },
                            {
                              t: "Ecommerce",
                              v: "Ecommerce",
                            },
                            {
                              t: "Events",
                              v: "Events",
                            },
                            {
                              t: "fintech",
                              v: "fintech",
                            },
                            {
                              t: "hyper casual",
                              v: "hyper casual",
                            },
                            {
                              t: "Industry News",
                              v: "Industry News",
                            },
                            {
                              t: "INFRASTRUCTURE",
                              v: "INFRASTRUCTURE",
                            },
                            {
                              t: "interview",
                              v: "interview",
                            },
                            {
                              t: "Learning Center",
                              v: "Learning Center",
                            },
                            {
                              t: "Machine Learning",
                              v: "Machine Learning",
                            },
                            {
                              t: "Mobile Ad Networks",
                              v: "Mobile Ad Networks",
                            },
                            {
                              t: "Mobile Advertsing",
                              v: "Mobile Advertsing",
                            },
                            {
                              t: "mobile gaming",
                              v: "mobile gaming",
                            },
                            {
                              t: "Moloco Cloud DSP",
                              v: "Moloco Cloud DSP",
                            },
                            {
                              t: "MOLOCO Product",
                              v: "MOLOCO Product",
                            },
                            {
                              t: "MOLOCO Products",
                              v: "MOLOCO Products",
                            },
                            {
                              t: "MOLOCO Studio",
                              v: "MOLOCO Studio",
                            },
                            {
                              t: "People & Culture",
                              v: "People & Culture",
                            },
                            {
                              t: "Retail",
                              v: "Retail",
                            },
                            {
                              t: "Social Good",
                              v: "Social Good",
                            },
                            {
                              t: "sponsored ads",
                              v: "sponsored ads",
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
                        className={_utils.cx(_styles, "filter_search-field")}
                        autoFocus={false}
                        maxLength={256}
                        name="field-2"
                        data-name="Field 2"
                        placeholder="Search here..."
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
              <_Builtin.Container tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "container-6")}
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
