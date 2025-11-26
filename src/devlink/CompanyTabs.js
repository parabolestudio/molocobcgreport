"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CompanyTabs.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-859":{"id":"e-859","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{"625d6cb62e1d9ae2b2136c11|cb52ffbb-8c83-5caf-d80f-bee1fa359a57":{"id":"cc9b7d3e-7171-f2db-ab10-8dd1d4ae193a"}},"playInReverse":false,"autoStopEventId":"e-860"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cc9b7d3e-7171-f2db-ab10-8dd1d4ae193a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc9b7d3e-7171-f2db-ab10-8dd1d4ae193a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650296574319},"e-881":{"id":"e-881","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-882"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"28f6d10d-0694-6f28-51d7-04820a1c5196","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"28f6d10d-0694-6f28-51d7-04820a1c5196","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650361496683}},"actionLists":{"a-4":{"id":"a-4","title":"Show Tabs","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tabs-menu","selectorGuids":["9fb07f7f-61e8-240d-1b9d-4587ce1b5f4c"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1511900465514},"a-7":{"id":"a-7","title":"Hide Tabs 2","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"65c3b92e6d4212a487b450ab|3ee50f3c-ab8e-020b-4cd7-7c34a91302a3"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650296004850}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CompanyTabs({ as: _Component = _Builtin.TabsWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "tabs")}
      current="Tab 2"
      easing="ease"
      fadeIn={300}
      fadeOut={100}
    >
      <_Builtin.TabsMenu
        className={_utils.cx(_styles, "tabs-menu")}
        data-w-id="28f6d10d-0694-6f28-51d7-04820a1c5196"
        tag="div"
      >
        <_Builtin.TabsLink
          className={_utils.cx(
            _styles,
            "tab-link",
            "text-bold-700",
            "letter-spacing-1",
            "uppercase",
            "text-center"
          )}
          data-w-tab="Tab 1"
          block="inline"
        >
          <_Builtin.Block tag="div">{"About Moloco"}</_Builtin.Block>
        </_Builtin.TabsLink>
        <_Builtin.TabsLink
          className={_utils.cx(
            _styles,
            "tab-link",
            "text-bold-700",
            "letter-spacing-1",
            "uppercase",
            "text-center"
          )}
          data-w-tab="Tab 2"
          block="inline"
        >
          <_Builtin.Block tag="div">{"Leadership"}</_Builtin.Block>
        </_Builtin.TabsLink>
        <_Builtin.TabsLink
          className={_utils.cx(
            _styles,
            "tab-link",
            "text-bold-700",
            "letter-spacing-1",
            "uppercase",
            "text-center"
          )}
          data-w-tab="Tab 3"
          block="inline"
        >
          <_Builtin.Block tag="div">{"Careers"}</_Builtin.Block>
        </_Builtin.TabsLink>
        <_Builtin.TabsLink
          className={_utils.cx(
            _styles,
            "tab-link",
            "text-bold-700",
            "letter-spacing-1",
            "uppercase",
            "text-center"
          )}
          data-w-tab="Tab 4"
          block="inline"
        >
          <_Builtin.Block tag="div">{"Newsroom"}</_Builtin.Block>
        </_Builtin.TabsLink>
      </_Builtin.TabsMenu>
    </_Component>
  );
}
