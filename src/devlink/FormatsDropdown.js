"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormatsDropdown.module.css";

export function FormatsDropdown({ as: _Component = _Builtin.Block }) {
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
              t: "ALL FORMATS",
              v: "",
            },
            {
              t: "PDF",
              v: "pdf",
            },
            {
              t: "PNG",
              v: "png",
            },
            {
              t: "JPG",
              v: "jpg",
            },
          ]}
        />
      </_Builtin.Block>
    </_Component>
  );
}
