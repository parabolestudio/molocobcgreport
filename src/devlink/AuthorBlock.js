"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AuthorBlock.module.css";

export function AuthorBlock({ as: _Component = _Builtin.Grid }) {
  return (
    <_Component className={_utils.cx(_styles, "grid-13")} tag="div">
      <_Builtin.Block
        id={_utils.cx(
          _styles,
          "w-node-_318d808d-3dcb-562c-b669-888db2b79b31-b2b79b30"
        )}
        tag="div"
      >
        <_Builtin.Row
          className={_utils.cx(_styles, "blog-author-columns")}
          tag="div"
          columns={{
            main: "6|6",
            medium: "",
            small: "",
            tiny: "",
          }}
        >
          <_Builtin.Column tag="div">
            <_Builtin.Block tag="div">
              <_Builtin.Image
                className={_utils.cx(_styles, "image", "author-img")}
                dyn={{
                  bind: {},
                }}
                loading="lazy"
                width="auto"
                alt=""
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
              />
            </_Builtin.Block>
          </_Builtin.Column>
          <_Builtin.Column tag="div">
            <_Builtin.Heading
              className={_utils.cx(_styles, "text-20", "mb-4")}
              tag="h5"
              dyn={{
                bind: {},
              }}
            >
              {"Heading"}
            </_Builtin.Heading>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "link-arrow-blue",
                "text-blue-medium",
                "text-18",
                "text-semi-bold-600",
                "text-decoration-none"
              )}
              button={false}
              dyn={{
                bind: {},
              }}
              block=""
              options={{
                href: "#",
              }}
            >
              {"More by this author"}
            </_Builtin.Link>
          </_Builtin.Column>
        </_Builtin.Row>
      </_Builtin.Block>
    </_Component>
  );
}
