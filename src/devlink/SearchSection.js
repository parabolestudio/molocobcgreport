"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SearchSection.module.css";

export function SearchSection({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "section",
        "bg-blue-medium",
        "py-60",
        "hidde-now"
      )}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Row
          className={_utils.cx(_styles, "d-flex", "align-center", "py-60")}
          tag="div"
          columns={{
            main: "3|9",
            medium: "medium-stack",
            small: "",
            tiny: "",
          }}
        >
          <_Builtin.Column tag="div">
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-yellow",
                "text-18",
                "text-align",
                "search-text"
              )}
              tag="h5"
            >
              {"SEARCHRESULTS FOR"}
            </_Builtin.Heading>
          </_Builtin.Column>
          <_Builtin.Column tag="div">
            <_Builtin.SearchForm
              className={_utils.cx(_styles, "site-search-field-wrap")}
              action="/search"
            >
              <_Builtin.SearchInput
                className={_utils.cx(
                  _styles,
                  "site-search-field",
                  "text-14",
                  "text-bold-700",
                  "letter-spacing-1",
                  "uppercase",
                  "mb-0"
                )}
                autoFocus={false}
                disabled={false}
                required={true}
                name="query"
                placeholder="Searched Text Here"
                type="search"
                maxLength={256}
                fs-cmsfilter-field="*"
              />
              <_Builtin.SearchButton
                className={_utils.cx(_styles, "search-button")}
                type="submit"
                value="Search"
              />
            </_Builtin.SearchForm>
          </_Builtin.Column>
        </_Builtin.Row>
      </_Builtin.Container>
    </_Component>
  );
}
