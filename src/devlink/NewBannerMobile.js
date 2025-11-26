"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NewBannerMobile.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-4071":{"id":"e-4071","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-408","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4072"}},"mediaQueries":["main"],"target":{"id":"67ff9f90bbc59406bfeb32a4|2d224188-f55c-c38b-3036-36a6f1a2ce26","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ff9f90bbc59406bfeb32a4|2d224188-f55c-c38b-3036-36a6f1a2ce26","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748858389747}},"actionLists":{"a-408":{"id":"a-408","title":"Button Appear","actionItemGroups":[{"actionItems":[{"id":"a-408-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".full-width.flex-child-align-right","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4c","41776757-5c4d-721e-cfb0-40e69e4c3bef"]},"value":0,"unit":""}},{"id":"a-408-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67ff9f90bbc59406bfeb32a4|2d224188-f55c-c38b-3036-36a6f1a2ce31"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-408-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67ff9f90bbc59406bfeb32a4|2d224188-f55c-c38b-3036-36a6f1a2ce31"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-408-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".full-width.flex-child-align-right","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4c","41776757-5c4d-721e-cfb0-40e69e4c3bef"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1748858394558}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewBannerMobile({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);
  return;
}
