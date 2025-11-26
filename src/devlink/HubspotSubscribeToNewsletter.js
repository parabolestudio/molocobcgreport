"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HubspotSubscribeToNewsletter.module.css";

export function HubspotSubscribeToNewsletter({
  as: _Component = _Builtin.Section,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-48", "bg-soft-blue")}
      grid={{
        type: "section",
      }}
      tag="div"
      id="newsletter"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "text-blue", "text-center")}
          tag="h2"
        >
          {"Subscribe to the Moloco Newsletter"}
        </_Builtin.Heading>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "form-block", "subscribe-en")}
          value="%3C!--%5Bif%20lte%20IE%208%5D%3E%0A%3Cscript%20charset%3D%22utf-8%22%20type%3D%22text%2Fjavascript%22%20src%3D%22%2F%2Fjs.hsforms.net%2Fforms%2Fv2-legacy.js%22%3E%3C%2Fscript%3E%0A%3C!%5Bendif%5D--%3E%0A%3Cscript%20charset%3D%22utf-8%22%20type%3D%22text%2Fjavascript%22%20src%3D%22%2F%2Fjs.hsforms.net%2Fforms%2Fv2.js%22%3E%3C%2Fscript%3E%0A%3Cscript%3E%0Ahbspt.forms.create(%7B%0Aregion%3A%20%22na1%22%2C%0AportalId%3A%20%226381084%22%2C%0AformId%3A%20%223f85ed41-65a4-4296-ba12-397b075543b7%22%0A%7D)%3B%0A%3C%2Fscript%3E"
        />
      </_Builtin.Container>
    </_Component>
  );
}
