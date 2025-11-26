"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { HsContactFormCode } from "./HsContactFormCode";
import { HsContactFormCode2025 } from "./HsContactFormCode2025";
import * as _utils from "./utils";
import _styles from "./FormSectionOnContactPage.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2140":{"id":"e-2140","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2141"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66599130a6c7425b7ae74bc3|10dcdd0b-d2f0-f75d-17cf-95316196433a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66599130a6c7425b7ae74bc3|10dcdd0b-d2f0-f75d-17cf-95316196433a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717420430012},"e-2141":{"id":"e-2141","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2140"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66599130a6c7425b7ae74bc3|10dcdd0b-d2f0-f75d-17cf-95316196433a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66599130a6c7425b7ae74bc3|10dcdd0b-d2f0-f75d-17cf-95316196433a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1717420430018}},"actionLists":{"a-136":{"id":"a-136","title":"Show Module 2 Contents on Click","actionItemGroups":[{"actionItems":[{"id":"a-136-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".hide-element","selectorGuids":["a5c9bae6-ec50-8cd3-e2f0-a610176b8461"]},"value":"flex"}},{"id":"a-136-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"66599130a6c7425b7ae74bc3|10dcdd0b-d2f0-f75d-17cf-95316196433c"},"value":"none"}},{"id":"a-136-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","id":"66599130a6c7425b7ae74bc3|e26c4892-9a62-13f2-ce7f-94d327a06802"},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1717419401346},"a-131":{"id":"a-131","title":"Hide Module 2 Contents on Click","actionItemGroups":[{"actionItems":[{"id":"a-131-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".hide-element","selectorGuids":["a5c9bae6-ec50-8cd3-e2f0-a610176b8461"]},"value":"none"}},{"id":"a-131-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"66599130a6c7425b7ae74bc3|10dcdd0b-d2f0-f75d-17cf-95316196433c"},"value":"flex"}},{"id":"a-131-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","id":"66599130a6c7425b7ae74bc3|e26c4892-9a62-13f2-ce7f-94d327a06802"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1717419401346}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FormSectionOnContactPage({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "scroll-form-contact")}
      data-w-id="8134d688-0bf1-fc39-a510-dd81681b0f95"
      tag="div"
    >
      <_Builtin.HFlex
        className={_utils.cx(_styles, "flex-block-11-copy")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "space-bottom-40px")}
          tag="div"
        >
          {
            "We'd love to talk with you about how Moloco's AI-powered solutions can help you grow, monetize, and reach your goals."
          }
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "hide-element")}
          tag="div"
        >
          <HsContactFormCode />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-160")}
          tag="div"
        >
          <HsContactFormCode2025 />
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "global-styles")}
          value="%3Cstyle%3E%0A%2F*%20Max%20width%20of%20fieldset%20element%20inside%20form%20*%2F%0A.hs-form%3Efieldset%20%7B%0A%20max-width%3A%20100%25%3B%0A%20%7D%0A%2F*%20Form%20Input%20*%2F%0A.hs-input%20%7B%0A%20width%3A%20100%25%20!important%3B%0A%20%7D%0A%2F*%20Global%20Styles%20*%2F%0Abody%20%7B%0A%20%20%20%20font-family%3A%20'Montserrat'%2C%20sans-serif%3B%0A%20%20%20%20color%3A%20%23040078%3B%0A%20%20%20%20background-color%3A%20%23FFFFFF%0A%7D%0A%2F*%20Form%20Styles%20*%2F%0A.hs-form%20label%20%7B%0A%09%09color%3A%20%23000a73%3B%0A%20%20%20%20font-weight%3A%20bold%3B%0A%20%20%09font-size%3A%201rem%3B%0A%7D%0A.hs-form%20input%5Btype%3D%22submit%22%5D%3Ahover%20%7B%0A%20%20%20%20background-color%3A%20%23000a73%3B%0A%7D%0A.hs-error-msg%20%7B%0A%20%20%20%20color%3A%20%23ef6051%20!important%3B%0A%7D%0A.hs-richtext%20p%20%7B%0A%20%20%20%20font-size%3A%201rem%3B%0A%7D%0A.hs-input%5Btype%3Dcheckbox%5D%20%7B%0A%20%20width%3A%201rem%20!important%3B%0A%20%20height%3A%201rem%20!important%3B%0A%20%20margin-right%3A%200.5rem%3B%0A%7D%0A.legal-consent-container%20.hs-form-booleancheckbox-display%20p%20%7B%0A%20%20font-size%3A%201rem%3B%0A%7D%0A%3C%2Fstyle%3E"
        />
      </_Builtin.HFlex>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-158-2")}
        tag="div"
      />
    </_Component>
  );
}
