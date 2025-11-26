"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { SecondaryNavItem } from "./SecondaryNavItem";
import * as _utils from "./utils";
import _styles from "./SecondaryNavTabs.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-885":{"id":"e-885","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-906"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"de82528c-4304-04cd-98ba-9754deb52bad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de82528c-4304-04cd-98ba-9754deb52bad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650364758436},"e-886":{"id":"e-886","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-885"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"de82528c-4304-04cd-98ba-9754deb52bad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de82528c-4304-04cd-98ba-9754deb52bad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650364758436},"e-887":{"id":"e-887","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-910"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"de82528c-4304-04cd-98ba-9754deb52bb1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de82528c-4304-04cd-98ba-9754deb52bb1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650364710289},"e-999":{"id":"e-999","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1000"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"da7cb633-14f3-227a-f890-231f7983e498","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"da7cb633-14f3-227a-f890-231f7983e498","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689709146829},"e-1000":{"id":"e-1000","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-999"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"da7cb633-14f3-227a-f890-231f7983e498","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"da7cb633-14f3-227a-f890-231f7983e498","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689709146829}},"actionLists":{"a-12":{"id":"a-12","title":"Show Tabs 4","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".secondary-nav","selectorGuids":["853aa9cd-aca0-aaa2-17e0-4d8015f9ff44"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1511900465514},"a-10":{"id":"a-10","title":"Hide Tabs 4","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"de82528c-4304-04cd-98ba-9754deb52bb1"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650296004850},"a-13":{"id":"a-13","title":"Hide Tabs 6","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"de82528c-4304-04cd-98ba-9754deb52bb1"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650296004850},"a-44":{"id":"a-44","title":"Show Tabs 5","actionItemGroups":[{"actionItems":[{"id":"a-44-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".secondary-nav","selectorGuids":["853aa9cd-aca0-aaa2-17e0-4d8015f9ff44"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1511900465514},"a-45":{"id":"a-45","title":"Hide Tabs 7","actionItemGroups":[{"actionItems":[{"id":"a-45-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"da7cb633-14f3-227a-f890-231f7983e49c"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650296004850}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SecondaryNavTabs({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "secondary-nav-wrap")}
        tag="div"
      >
        <_Builtin.Container
          className={_utils.cx(_styles, "container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "secondary-nav-mobile-container")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "responsive-tabs-dropdown")}
              data-w-id="de82528c-4304-04cd-98ba-9754deb52bad"
              tag="div"
            >
              <_Builtin.Block tag="div">{"Open Dropdown"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "relative")}
              tag="div"
            >
              <_Builtin.List
                className={_utils.cx(
                  _styles,
                  "secondary-nav",
                  "text-14",
                  "bg-blue-dark"
                )}
                data-w-id="de82528c-4304-04cd-98ba-9754deb52bb1"
                tag="ul"
                unstyled={true}
              >
                <SecondaryNavItem
                  overrideSecondaryNavLinkText="Blog"
                  overrideSecondaryNavLinkLink={{
                    href: "#",
                  }}
                />
                <SecondaryNavItem
                  overrideSecondaryNavLinkText="R&D BLog"
                  overrideSecondaryNavLinkLink={{
                    href: "#",
                  }}
                />
                <SecondaryNavItem
                  overrideSecondaryNavLinkText="Reports"
                  overrideSecondaryNavLinkLink={{
                    href: "#",
                  }}
                />
                <SecondaryNavItem
                  overrideSecondaryNavLinkText="Case Studies"
                  overrideSecondaryNavLinkLink={{
                    href: "#",
                  }}
                />
                <SecondaryNavItem
                  overrideSecondaryNavLinkText="Events"
                  overrideSecondaryNavLinkLink={{
                    href: "#",
                  }}
                />
                <SecondaryNavItem
                  overrideSecondaryNavLinkText="Developer Hub"
                  overrideSecondaryNavLinkLink={{
                    href: "#",
                  }}
                />
                <SecondaryNavItem
                  overrideSecondaryNavLinkText="Help Center"
                  overrideSecondaryNavLinkLink={{
                    href: "https://help.moloco.com/hc/en-us",
                  }}
                />
              </_Builtin.List>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Container>
      </_Builtin.Block>
    </_Component>
  );
}
