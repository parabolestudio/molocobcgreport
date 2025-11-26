"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NumberCounter.module.css";

export function NumberCounter({
  as: _Component = _Builtin.Section,
  videoSectionYellowText = "MOLOCO OVERVIEW",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      tag="div"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "h6-yellow")} tag="h6">
          {videoSectionYellowText}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-block", "mb-32")}
          tag="div"
        >
          {
            "Moloco’s goal is to make the digital economy more transparent, equitable, and profitable by delivering advanced machine learning to companies of all sizes. With Moloco’s machine learning platform for growth and performance, every app publisher and online retailer can now unlock the value of their unique, first-party data."
          }
        </_Builtin.Block>
        <_Builtin.Video
          className={_utils.cx(_styles, "video")}
          options={{
            width: 940,
            height: 528,
            title:
              "世界 No.1 アプリ DSP のデータから読み解くiOS 14.5 以降モバイル広告に起きたこと",
            url: "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FOxmtGbzxQ2A%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOxmtGbzxQ2A&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FOxmtGbzxQ2A%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube",
          }}
        />
      </_Builtin.Container>
    </_Component>
  );
}
