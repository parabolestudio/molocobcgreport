"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./LeadershipModel.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-939":{"id":"e-939","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-940"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c69d9f63-5f3d-2471-d429-4a5c414b3e8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c69d9f63-5f3d-2471-d429-4a5c414b3e8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650954277963},"e-941":{"id":"e-941","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-942"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c69d9f63-5f3d-2471-d429-4a5c414b3e80","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c69d9f63-5f3d-2471-d429-4a5c414b3e80","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1540665917126}},"actionLists":{"a-17":{"id":"a-17","title":"Open team modal 2","actionItemGroups":[{"actionItems":[{"id":"a-17-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"boundaryMode":true,"id":"c69d9f63-5f3d-2471-d429-4a5c414b3e7e"},"value":"none"}},{"id":"a-17-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"boundaryMode":true,"id":"c69d9f63-5f3d-2471-d429-4a5c414b3e7f"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-17-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"boundaryMode":true,"id":"c69d9f63-5f3d-2471-d429-4a5c414b3e7e"},"value":"flex"}}]},{"actionItems":[{"id":"a-17-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"","duration":500,"target":{"boundaryMode":true,"id":"c69d9f63-5f3d-2471-d429-4a5c414b3e7f"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1540417593267},"a-18":{"id":"a-18","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".team-info-block","selectorGuids":["54388b91-ad62-8ad0-2a15-13f006d894f1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-18-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".team-info-modal","selectorGuids":["54388b91-ad62-8ad0-2a15-13f006d894f0"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1650956217511}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LeadershipModel({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-40")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "text-blue-medium-2", "text-center")}
          tag="h5"
        >
          {"MOLOCO LOVE"}
        </_Builtin.Heading>
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "text-blue-dark",
            "text-center",
            "pb-60"
          )}
          tag="h2"
        >
          {"Leadership team"}
        </_Builtin.Heading>
      </_Builtin.Container>
      <_Builtin.Container
        className={_utils.cx(_styles, "container-9")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "text-center")} tag="div">
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
