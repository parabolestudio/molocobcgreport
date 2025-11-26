"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { NewNavBarMobileMenu } from "./NewNavBarMobileMenu";
import * as _utils from "./utils";
import _styles from "./McmNavMobile.module.css";

export function McmNavMobile({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "hero-navbar-mobile-container-opt")}
      tag="div"
    >
      <NewNavBarMobileMenu />
    </_Component>
  );
}
