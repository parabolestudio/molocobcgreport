"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { DividerYellow } from "./DividerYellow";
import { LeadershipCard } from "./LeadershipCard";
import * as _utils from "./utils";
import _styles from "./SecondaryNavOrTabsMenu.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-859":{"id":"e-859","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{"625d6cb62e1d9ae2b2136c11|cb52ffbb-8c83-5caf-d80f-bee1fa359a57":{"id":"cc9b7d3e-7171-f2db-ab10-8dd1d4ae193a"}},"playInReverse":false,"autoStopEventId":"e-860"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cc9b7d3e-7171-f2db-ab10-8dd1d4ae193a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc9b7d3e-7171-f2db-ab10-8dd1d4ae193a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650296574319},"e-861":{"id":"e-861","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-862"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cc9b7d3e-7171-f2db-ab10-8dd1d4ae193e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc9b7d3e-7171-f2db-ab10-8dd1d4ae193e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650296680173}},"actionLists":{"a-4":{"id":"a-4","title":"Show Tabs","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tabs-menu","selectorGuids":["9fb07f7f-61e8-240d-1b9d-4587ce1b5f4c"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1511900465514},"a-5":{"id":"a-5","title":"Hide Tabs","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"cc9b7d3e-7171-f2db-ab10-8dd1d4ae193e"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650296004850}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SecondaryNavOrTabsMenu({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "responsive-tabs-dropdown")}
          data-w-id="cc9b7d3e-7171-f2db-ab10-8dd1d4ae193a"
          tag="div"
        >
          <_Builtin.Block tag="div">{"Open Dropdown"}</_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
      <_Builtin.TabsWrapper
        className={_utils.cx(_styles, "tabs")}
        current="Tab 1"
        easing="ease"
        fadeIn={300}
        fadeOut={100}
      >
        <_Builtin.TabsMenu
          className={_utils.cx(_styles, "tabs-menu")}
          data-w-id="cc9b7d3e-7171-f2db-ab10-8dd1d4ae193e"
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
        <_Builtin.TabsContent tag="div">
          <_Builtin.TabsPane
            className={_utils.cx(_styles, "tab-pane")}
            tag="div"
            data-w-tab="Tab 1"
          >
            <_Builtin.Container
              className={_utils.cx(_styles, "container")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-center")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-bold-700",
                    "text-blue-medium",
                    "mb-16",
                    "letter-spacing-1",
                    "uppercase"
                  )}
                  tag="div"
                >
                  {"About Moloco"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-24",
                    "line-height-1-3",
                    "mb-48"
                  )}
                  tag="div"
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
                  }
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Container>
            <DividerYellow />
          </_Builtin.TabsPane>
          <_Builtin.TabsPane
            className={_utils.cx(_styles, "tab-pane")}
            tag="div"
            data-w-tab="Tab 2"
          >
            <_Builtin.Container
              className={_utils.cx(_styles, "container")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-center")}
                tag="div"
              >
                <_Builtin.Grid
                  className={_utils.cx(_styles, "grid-8", "mb-32")}
                  tag="div"
                >
                  <LeadershipCard />
                  <LeadershipCard />
                  <LeadershipCard />
                  <LeadershipCard />
                  <LeadershipCard />
                  <LeadershipCard />
                  <LeadershipCard />
                </_Builtin.Grid>
              </_Builtin.Block>
            </_Builtin.Container>
          </_Builtin.TabsPane>
          <_Builtin.TabsPane
            className={_utils.cx(_styles, "tab-pane")}
            tag="div"
            data-w-tab="Tab 3"
          >
            <_Builtin.Container
              className={_utils.cx(_styles, "container")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-center")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-bold-700",
                    "text-blue-medium",
                    "mb-16",
                    "letter-spacing-1",
                    "uppercase"
                  )}
                  tag="div"
                >
                  {"Careers"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-24",
                    "line-height-1-3",
                    "mb-48"
                  )}
                  tag="div"
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
                  }
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Container>
          </_Builtin.TabsPane>
          <_Builtin.TabsPane
            className={_utils.cx(_styles, "tab-pane")}
            tag="div"
            data-w-tab="Tab 4"
          >
            <_Builtin.Container
              className={_utils.cx(_styles, "container")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-center")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-bold-700",
                    "text-blue-medium",
                    "mb-16",
                    "letter-spacing-1",
                    "uppercase"
                  )}
                  tag="div"
                >
                  {"Newsroom"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-24",
                    "line-height-1-3",
                    "mb-48"
                  )}
                  tag="div"
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
                  }
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Container>
          </_Builtin.TabsPane>
        </_Builtin.TabsContent>
      </_Builtin.TabsWrapper>
    </_Component>
  );
}
