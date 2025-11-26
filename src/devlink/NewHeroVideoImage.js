"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonYellowLong } from "./ButtonYellowLong";
import * as _utils from "./utils";
import _styles from "./NewHeroVideoImage.module.css";

export function NewHeroVideoImage({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "slider-hero", "relative")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.BackgroundVideoWrapper
        className={_utils.cx(_styles, "background-hero-video")}
        tag="div"
        sources={[
          "https://uploads-ssl.webflow.com/6237fca0466ffd9274a1dbdd/629a944b78c6401193c9366a_Your data_driving_performance_homepage-transcode.webm",
          "https://uploads-ssl.webflow.com/6237fca0466ffd9274a1dbdd/629a944b78c6401193c9366a_Your data_driving_performance_homepage-transcode.mp4",
        ]}
        posterImage="https://uploads-ssl.webflow.com/6237fca0466ffd9274a1dbdd/629a944b78c6401193c9366a_Your data_driving_performance_homepage-poster-00001.jpg"
        autoPlay={true}
        loop={true}
      />
      <_Builtin.Image
        className={_utils.cx(_styles, "mobile-hero-image")}
        loading="lazy"
        width="auto"
        alt=""
        src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62964e64393ba95b6723b5bc_Solution%20page_User%20Acquisition-02.webp"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "hero-content-wrap")}
        tag="div"
      >
        <_Builtin.Container
          className={_utils.cx(_styles, "container")}
          tag="div"
        >
          <_Builtin.Row
            tag="div"
            columns={{
              main: "9|3",
              medium: "",
              small: "",
              tiny: "",
            }}
          >
            <_Builtin.Column tag="div">
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "text-white",
                  "mb-0",
                  "text-blue-dark"
                )}
                tag="h1"
              >
                {"Your data."}
              </_Builtin.Heading>
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "text-white",
                  "mt-0",
                  "text-blue-dark"
                )}
                tag="h1"
              >
                {"Driving performance."}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-24", "mb-24", "text-blue")}
                tag="div"
              >
                {"Unlock the value of your unique first-party data."}
                <_Builtin.Link
                  button={false}
                  block=""
                  options={{
                    href: "https://moloco-dev.webflow.io/contact-us",
                  }}
                >
                  <_Builtin.Strong>
                    <br />
                  </_Builtin.Strong>
                </_Builtin.Link>
              </_Builtin.Block>
              <ButtonYellowLong />
            </_Builtin.Column>
            <_Builtin.Column tag="div" />
          </_Builtin.Row>
        </_Builtin.Container>
      </_Builtin.Block>
    </_Component>
  );
}
