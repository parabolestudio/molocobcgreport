"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ProductsDropdown.module.css";

export function ProductsDropdown({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "filter-dropdown-menu")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "custom-selectbox")}
        tag="div"
      >
        <_Builtin.FormSelect
          className={_utils.cx(_styles, "filter-dropdown")}
          name="Filter-dropdown"
          data-name="Filter-dropdown"
          required={false}
          multiple={false}
          fs-cmsfilter-field="category"
          fs-cmsfilter-tagcategory="category"
          id="Filter-dropdown"
          options={[
            {
              t: "ALL CATEGORIES",
              v: "",
            },
            {
              t: "Moloco Cloud DSP",
              v: "Moloco Cloud DSP",
            },
            {
              t: "Moloco Studio",
              v: "Moloco Studio",
            },
            {
              t: "Moloco Retail Media Platform",
              v: "Moloco Retail Media Platform",
            },
            {
              t: "Corporate",
              v: "Corporate",
            },
          ]}
        />
      </_Builtin.Block>
    </_Component>
  );
}
