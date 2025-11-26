"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NewCodeLineClamp.module.css";

export function NewCodeLineClamp({ as: _Component = _Builtin.HtmlEmbed }) {
  return (
    <_Component
      className={_utils.cx(_styles, "code-line-clamp")}
      value="%3Cstyle%3E%0A%0A.text-style-3lines%20%7B%0A%20%20%20overflow%3A%20hidden%3B%0A%20%20%20text-overflow%3A%20ellipsis%3B%0A%20%20%20display%3A%20-webkit-box%3B%0A%20%20%20-webkit-line-clamp%3A%203%3B%0A%20%20%20-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A.text-style-4lines%20%7B%0A%20%20%20overflow%3A%20hidden%3B%0A%20%20%20text-overflow%3A%20ellipsis%3B%0A%20%20%20display%3A%20-webkit-box%3B%0A%20%20%20-webkit-line-clamp%3A%204%3B%0A%20%20%20-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A.text-style-6lines%20%7B%0A%20%20%20overflow%3A%20hidden%3B%0A%20%20%20text-overflow%3A%20ellipsis%3B%0A%20%20%20display%3A%20-webkit-box%3B%0A%20%20%20-webkit-line-clamp%3A%206%3B%0A%20%20%20-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
    />
  );
}
