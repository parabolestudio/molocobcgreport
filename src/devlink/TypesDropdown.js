"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TypesDropdown.module.css";

export function TypesDropdown({ as: _Component = _Builtin.Block }) {
  return (
    <_Component tag="div">
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
            "text-blue-medium",
            "uppercase",
            "ml-0"
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
              t: "All Types",
              v: "",
            },
            {
              t: "Tradeshow",
              v: "Tradeshow",
            },
            {
              t: "Virtual",
              v: "Virtual",
            },
            {
              t: "Hosted",
              v: "Hosted",
            },
            {
              t: "Webinar",
              v: "webinar",
            },
          ]}
        />
      </_Builtin.Block>
    </_Component>
  );
}
