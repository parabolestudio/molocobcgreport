"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FeaturedKoIpsos.module.css";

export function FeaturedKoIpsos({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-60", "bg-soft-gray")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-2")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-center",
            "text-bold-700",
            "uppercase",
            "text-blue-medium"
          )}
          tag="div"
        >
          {"리소스"}
        </_Builtin.Block>
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "text-center",
            "mb-48",
            "text-blue-dark",
            "mt-10"
          )}
          tag="h2"
        >
          {"몰로코 | 입소스 "}
          <br />
          {"모바일 앱 퍼포먼스 마케팅 글로벌 보고서 출시"}
        </_Builtin.Heading>
        <_Builtin.HtmlEmbed value="%3Cdiv%20class%3D%22hs-cta-embed%20hs-cta-simple-placeholder%20hs-cta-embed-139713594803%22%20style%3D%22max-width%3A100%25%3B%20width%3A2000px%3B%22%20data-hubspot-wrapper-cta-id%3D%22139713594803%22%3E%0A%20%20%3Ca%20href%3D%22https%3A%2F%2Fcta-service-cms2.hubspot.com%2Fweb-interactives%2Fpublic%2Fv1%2Ftrack%2Fredirect%3FencryptedPayload%3DAVxigLL3QobGNXHliqRhDAT58eZ%252B8ka9HOeeXZUOEZyNLSNIpOCLgnyZpZir9ILa2hcAdgxQ7KAVF1bQR22Ah%252FKTpr%252B%252FEwk7zv6bcG8dGPMokxKPrqyxjwDHlYPg6p4ZZsnXKQ7wUcy%252F%252B3PNle6OcYIthXR1UXPNxU6n3w%252FTx0h8OBMxyhzoHHJz5ze%252BnvAv3U9BR%252BWDgq1FIa5rYdVaoZWrtE2apd4vlKC2X7opCx2wbw%253D%253D%26webInteractiveContentId%3D139713594803%26portalId%3D6381084%22%20target%3D%22_blank%22%20rel%3D%22noopener%22%20crossorigin%3D%22anonymous%22%3E%0A%20%20%20%20%3Cimg%20alt%3D%22ipsos-moloco-ko-report%22%20loading%3D%22lazy%22%20src%3D%22https%3A%2F%2Fno-cache.hubspot.com%2Fcta%2Fdefault%2F6381084%2Finteractive-139713594803.png%22%20style%3D%22height%3A%20100%25%3B%20width%3A%20100%25%3B%20object-fit%3A%20fill%22%20onerror%3D%22this.style.display%3D'none'%22%3E%0A%20%20%3C%2Fa%3E%0A%3C%2Fdiv%3E" />
      </_Builtin.Container>
    </_Component>
  );
}
