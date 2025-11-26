"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NewFooterDesktop.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3349":{"id":"e-3349","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-248","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a9a36c|99be2aea-ebe5-587c-c5b6-48e15e473dac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a9a36c|99be2aea-ebe5-587c-c5b6-48e15e473dac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-248-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1736966681764},"e-3455":{"id":"e-3455","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FLIP_EFFECT","instant":false,"config":{"actionListId":"flipInBottom","autoStopEventId":"e-3456"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f319d024-2a00-aee4-e61a-8d32c1b7dc8f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f319d024-2a00-aee4-e61a-8d32c1b7dc8f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1738576075909},"e-4053":{"id":"e-4053","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-397","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4054"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fcb|3f37c309-562d-c457-ed24-0c02bd540e13","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fcb|3f37c309-562d-c457-ed24-0c02bd540e13","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748507072587},"e-4057":{"id":"e-4057","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4058"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fcb|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fcb|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748507726640},"e-4063":{"id":"e-4063","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-397","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4064"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fcf|981341b9-2bb4-cd21-7859-666215a02e3e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fcf|981341b9-2bb4-cd21-7859-666215a02e3e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748524455989},"e-4135":{"id":"e-4135","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-397","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4261"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68415d7d7b699bdd0910ee0a|3f37c309-562d-c457-ed24-0c02bd540e13","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68415d7d7b699bdd0910ee0a|3f37c309-562d-c457-ed24-0c02bd540e13","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749114239776},"e-4139":{"id":"e-4139","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4140"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68415d7d7b699bdd0910ee0a|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68415d7d7b699bdd0910ee0a|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749114239776},"e-4237":{"id":"e-4237","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4238"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fd0|4152fcb8-e0b6-be20-61c1-715c83fd54f1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fd0|4152fcb8-e0b6-be20-61c1-715c83fd54f1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1752830222250},"e-4253":{"id":"e-4253","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4254"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fd0|e54cb75d-cdaa-f94c-86a3-7c7df073a8c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fd0|e54cb75d-cdaa-f94c-86a3-7c7df073a8c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1753709087471},"e-4255":{"id":"e-4255","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-397","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4256"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fd0|142193ab-aae5-bf65-c001-b577f125e95c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fd0|142193ab-aae5-bf65-c001-b577f125e95c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1753709458325}},"actionLists":{"a-248":{"id":"a-248","title":"Flywheel adapted 2","continuousParameterGroups":[{"id":"a-248-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-248-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":40,"yValue":40,"zValue":0,"xUnit":"%","yUnit":"%","zUnit":"px"}},{"id":"a-248-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":2,"yValue":2,"locked":true}},{"id":"a-248-n-82","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"PX"}},{"id":"a-248-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-79","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-248-n-86","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"value":0,"unit":""}},{"id":"a-248-n-87","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-248-n-88","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-248-n-12","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":0,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-248-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-94","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"yValue":100,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":5,"actionItems":[{"id":"a-248-n-83","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":null,"xUnit":"vw","yUnit":"vh","zUnit":"px"}}]},{"keyframe":7,"actionItems":[{"id":"a-248-n-81","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}}]},{"keyframe":15,"actionItems":[{"id":"a-248-n-80","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":null,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-21","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":1,"yValue":1,"zValue":1,"locked":true}},{"id":"a-248-n-135","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":360,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}}]},{"keyframe":20,"actionItems":[{"id":"a-248-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|54ef8ef6-7945-0c3c-aaa2-c093b1081ad3"},"value":1,"unit":""}},{"id":"a-248-n-59","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"yValue":100,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}},{"id":"a-248-n-89","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"value":1,"unit":""}}]},{"keyframe":30,"actionItems":[{"id":"a-248-n-136","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":360,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-248-n-92","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"value":1,"unit":""}},{"id":"a-248-n-85","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}}]},{"keyframe":40,"actionItems":[{"id":"a-248-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|c7888fff-0775-962d-c8e9-3af665a1ecbe"},"value":0,"unit":""}},{"id":"a-248-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473db9"},"value":1,"unit":""}},{"id":"a-248-n-84","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"xValue":0,"yValue":0,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-131","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":480,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}}]},{"keyframe":45,"actionItems":[{"id":"a-248-n-32","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473db9"},"value":0,"unit":""}},{"id":"a-248-n-33","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473db9"},"value":1,"unit":""}},{"id":"a-248-n-29","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-37","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|c7888fff-0775-962d-c8e9-3af665a1ecbe"},"value":1,"unit":""}}]},{"keyframe":54,"actionItems":[{"id":"a-248-n-40","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"xValue":0,"yValue":0,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-124","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dc2"},"value":1,"unit":""}}]},{"keyframe":55,"actionItems":[{"id":"a-248-n-132","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":480,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-248-n-123","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dc2"},"value":0,"unit":""}},{"id":"a-248-n-96","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":100,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}}]},{"keyframe":56,"actionItems":[{"id":"a-248-n-133","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":480,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}}]},{"keyframe":65,"actionItems":[{"id":"a-248-n-100","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-98","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-105","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}}]},{"keyframe":75,"actionItems":[{"id":"a-248-n-107","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":100,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-111","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-112","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-134","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":600,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}}]},{"keyframe":80,"actionItems":[{"id":"a-248-n-110","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-113","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-248-n-117","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-120","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|efdfa340-546e-67b9-9cca-a61e14138631"},"value":1,"unit":""}}]},{"keyframe":85,"actionItems":[{"id":"a-248-n-121","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|efdfa340-546e-67b9-9cca-a61e14138631"},"value":1,"unit":""}}]},{"keyframe":90,"actionItems":[{"id":"a-248-n-67","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|54ef8ef6-7945-0c3c-aaa2-c093b1081ad3"},"value":1,"unit":""}},{"id":"a-248-n-122","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|efdfa340-546e-67b9-9cca-a61e14138631"},"value":0,"unit":""}}]},{"keyframe":96,"actionItems":[{"id":"a-248-n-64","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-65","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":1,"yValue":1,"locked":true}},{"id":"a-248-n-138","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}}]},{"keyframe":100,"actionItems":[{"id":"a-248-n-71","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|54ef8ef6-7945-0c3c-aaa2-c093b1081ad3"},"value":0.05,"unit":""}},{"id":"a-248-n-69","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":4,"yValue":4,"locked":true}},{"id":"a-248-n-137","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0.05,"unit":""}}]}]}],"createdOn":1731350074518},"a-397":{"id":"a-397","title":"Center Content 5","actionItemGroups":[{"actionItems":[{"id":"a-397-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a99fcf|981341b9-2bb4-cd21-7859-666215a02e42"},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-397-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a99fcf|981341b9-2bb4-cd21-7859-666215a02e42"},"value":0,"unit":""}},{"id":"a-397-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-secondary-navy-blue","selectorGuids":["32728fe1-615f-a03e-7d0e-73b06ced561b"]},"value":0,"unit":""}},{"id":"a-397-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-dark-blue.is-semibold.h2-size.align-center-text","selectorGuids":["bd728530-05ba-510f-a033-a1b5e8ef5834","ab0dcd27-cd3f-71b4-2f40-ab2c503b70d0","c71937f5-33e6-e460-d96c-d5c5f5d2aa55","6e02f73d-43f1-bc7c-dcab-8f9ec7c6f5c7"]},"value":0,"unit":""}},{"id":"a-397-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-secondary-blue2-new","selectorGuids":["cb59a97a-1bca-4f02-a65a-0011eb624ce8"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-397-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a99fcf|981341b9-2bb4-cd21-7859-666215a02e42"},"xValue":0,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}},{"id":"a-397-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a99fcf|981341b9-2bb4-cd21-7859-666215a02e42"},"value":1,"unit":""}},{"id":"a-397-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".is-dark-blue.is-semibold.h2-size.align-center-text","selectorGuids":["bd728530-05ba-510f-a033-a1b5e8ef5834","ab0dcd27-cd3f-71b4-2f40-ab2c503b70d0","c71937f5-33e6-e460-d96c-d5c5f5d2aa55","6e02f73d-43f1-bc7c-dcab-8f9ec7c6f5c7"]},"value":1,"unit":""}},{"id":"a-397-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"ease","duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".button-secondary-navy-blue","selectorGuids":["32728fe1-615f-a03e-7d0e-73b06ced561b"]},"value":1,"unit":""}},{"id":"a-397-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"ease","duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".button-secondary-blue2-new","selectorGuids":["cb59a97a-1bca-4f02-a65a-0011eb624ce8"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737137769049},"a-398":{"id":"a-398","title":"Center Content 2","actionItemGroups":[{"actionItems":[{"id":"a-398-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".column-3x1.space-top-48px.px-20.gap-64","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4f","4f5b9d7f-8aff-64fd-d257-25ee8b88cdf5","dc65ed68-ac1e-56a5-d470-e46747d97435","3d31ebfd-74a8-2de4-b02a-156705d6037e"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".column-3x1.space-top-48px.px-20.gap-64","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4f","4f5b9d7f-8aff-64fd-d257-25ee8b88cdf5","dc65ed68-ac1e-56a5-d470-e46747d97435","3d31ebfd-74a8-2de4-b02a-156705d6037e"]},"value":0,"unit":""}},{"id":"a-398-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-main-section","selectorGuids":["b78bc07f-f271-f54e-84e7-87ef1a563b99"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-main-section","selectorGuids":["b78bc07f-f271-f54e-84e7-87ef1a563b99"]},"value":0,"unit":""}},{"id":"a-398-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-137","selectorGuids":["f6e6d838-1287-0af6-99a4-15c835979733"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-137","selectorGuids":["f6e6d838-1287-0af6-99a4-15c835979733"]},"value":0,"unit":""}},{"id":"a-398-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".banner-images-wrapper","selectorGuids":["4bf3d09a-7db0-c0d5-6b30-04834baac0a6"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".banner-images-wrapper","selectorGuids":["4bf3d09a-7db0-c0d5-6b30-04834baac0a6"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-398-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".column-3x1.space-top-48px.px-20.gap-64","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4f","4f5b9d7f-8aff-64fd-d257-25ee8b88cdf5","dc65ed68-ac1e-56a5-d470-e46747d97435","3d31ebfd-74a8-2de4-b02a-156705d6037e"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".column-3x1.space-top-48px.px-20.gap-64","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4f","4f5b9d7f-8aff-64fd-d257-25ee8b88cdf5","dc65ed68-ac1e-56a5-d470-e46747d97435","3d31ebfd-74a8-2de4-b02a-156705d6037e"]},"value":1,"unit":""}},{"id":"a-398-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".image-main-section","selectorGuids":["b78bc07f-f271-f54e-84e7-87ef1a563b99"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".image-main-section","selectorGuids":["b78bc07f-f271-f54e-84e7-87ef1a563b99"]},"value":1,"unit":""}},{"id":"a-398-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".image-137","selectorGuids":["f6e6d838-1287-0af6-99a4-15c835979733"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".image-137","selectorGuids":["f6e6d838-1287-0af6-99a4-15c835979733"]},"value":1,"unit":""}},{"id":"a-398-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".banner-images-wrapper","selectorGuids":["4bf3d09a-7db0-c0d5-6b30-04834baac0a6"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".banner-images-wrapper","selectorGuids":["4bf3d09a-7db0-c0d5-6b30-04834baac0a6"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737137769049},"flipInBottom":{"id":"flipInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-90,"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewFooterDesktop({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "footer-div-new")}
      data-w-id="f319d024-2a00-aee4-e61a-8d32c1b7dc8f"
      tag="section"
      grid={{
        type: "section",
      }}
      id="contact-desk-foot"
    >
      <_Builtin.HFlex
        className={_utils.cx(_styles, "footer-wrapper-new")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "column-3x1", "vertical-gap-adjust")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-135")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "moloco-logo")}
              button={false}
              aria-label="go to our homepage"
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "moloco-logo")}
                width="151"
                height="auto"
                loading="lazy"
                alt="Moloco white logo"
                src="https://cdn.prod.website-files.com/68d3fbd55d90bfdc11a99444/68d3fbd55d90bfdc11a99a91_Moloco_logo_Horiz_Secondary.webp"
              />
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-container", "space-top-24")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "is-dark-blue", "my-8", "h4")}
              >
                <_Builtin.Strong>{"Solutions"}</_Builtin.Strong>
              </_Builtin.Paragraph>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-container")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-new")}
                  button={false}
                  aria-label="Moloco cloud DSP"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Moloco Ads "}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-new")}
                  button={false}
                  aria-label="Moloco Monetization for streaming & OTT"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Moloco SDK"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-new")}
                  button={false}
                  aria-label="Moloco retail media platform"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Moloco Commerce Media"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-new")}
                  button={false}
                  aria-label="Moloco Monetization for streaming & OTT"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Moloco Streaming Monetization"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-container", "my-36")}
              id={_utils.cx(
                _styles,
                "w-node-f319d024-2a00-aee4-e61a-8d32c1b7dca3-c1b7dc8f"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new", "is-bold")}
                button={false}
                aria-label="Moloco for mobile app marketers"
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Moloco for Mobile App Marketers"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new", "is-bold")}
                button={false}
                aria-label="Moloco for agency partners"
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Moloco for Agency Partners"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new", "is-bold")}
                button={false}
                Moloco=""
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Moloco for Commerce Platforms"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new", "is-bold")}
                button={false}
                aria-label="Moloco for streaming platforms"
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Moloco for Streaming Platforms"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new", "is-bold")}
                button={false}
                aria-label="Moloco for streaming platforms"
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Moloco for Games"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-container-2")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new", "is-bold")}
                button={false}
                aria-label="about moloco"
                block=""
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Strong>{"About Moloco"}</_Builtin.Strong>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new", "is-bold")}
                button={false}
                aria-label=""
                block=""
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Strong>{"Blog"}</_Builtin.Strong>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new", "is-bold")}
                button={false}
                aria-label="careers"
                block=""
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Strong>{"Careers"}</_Builtin.Strong>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new", "is-bold")}
                button={false}
                aria-label="newsroom"
                block=""
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Strong>{"Newsroom"}</_Builtin.Strong>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new", "is-bold")}
                button={false}
                aria-label="dsp developer hub"
                block=""
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Strong>{"Help Center"}</_Builtin.Strong>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new", "is-bold")}
                button={false}
                aria-label="dsp developer hub"
                block=""
                options={{
                  href: "https://developer.moloco.cloud/",
                }}
              >
                <_Builtin.Strong>{"Moloco Ads Developer Hub"}</_Builtin.Strong>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new", "is-bold")}
                button={false}
                aria-label="dsp developer hub"
                block=""
                options={{
                  href: "https://mcm-docs.moloco.com/docs/what-is-moloco-mcm",
                }}
              >
                <_Builtin.Strong>
                  {"Commerce Media Developer Hub"}
                </_Builtin.Strong>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new")}
                button={false}
                aria-label="dsp developer hub"
                block=""
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Strong>{"Suppliers"}</_Builtin.Strong>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new")}
                button={false}
                aria-label="dsp developer hub"
                block=""
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Strong>{"Privacy Policy"}</_Builtin.Strong>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new")}
                button={false}
                aria-label="dsp developer hub"
                block=""
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Strong>{"Brand Safety Policy"}</_Builtin.Strong>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new")}
                button={false}
                aria-label="dsp developer hub"
                block=""
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Strong>{"Advertising Policy"}</_Builtin.Strong>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new")}
                button={false}
                aria-label="dsp developer hub"
                block=""
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Strong>{"Terms of Use"}</_Builtin.Strong>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-new")}
                button={false}
                aria-label="dsp developer hub"
                block=""
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Strong>{"Security"}</_Builtin.Strong>
              </_Builtin.Link>
              <_Builtin.HtmlEmbed
                className={_utils.cx(
                  _styles,
                  "",
                  "html-embed-footer",
                  "footer-link-new",
                  "is-dark-blue",
                  "is-bold"
                )}
                value="%3Cspan%20class%3D%22text-12%22%3E%20%0A%20%20%3Ca%20id%3D%22ot-sdk-link%22%20class%3D%22ot-sdk-show-settings%20text-footer%22%20href%3D%22%23%22%20style%3D%22color%3A%23000a73%3B%20text-decoration%3A%20none%3B%20font-weight%3A%20700%3B%20font-size%3A%201rem%3B%22%3EYour%20Privacy%20Choices%3C%2Fa%3E%0A%3C%2Fspan%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-138")}
            id={_utils.cx(
              _styles,
              "w-node-f319d024-2a00-aee4-e61a-8d32c1b7dcd2-c1b7dc8f"
            )}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "footer-copyright")}
              value="%C2%A9%20%3Cscript%3Edocument.write(new%20Date().getFullYear())%3B%3C%2Fscript%3E%20Moloco%2C%20Inc."
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-139")}
            id={_utils.cx(
              _styles,
              "w-node-f319d024-2a00-aee4-e61a-8d32c1b7dcd5-c1b7dc8f"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "social-media-new")}
              id={_utils.cx(
                _styles,
                "w-node-f319d024-2a00-aee4-e61a-8d32c1b7dcd6-c1b7dc8f"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "link-block-social-media",
                  "space-right-8px"
                )}
                button={false}
                aria-label="go to our facebook page"
                block="inline"
                options={{
                  href: "https://www.facebook.com/MolocoGlobal",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-105")}
                  id={_utils.cx(
                    _styles,
                    "w-node-f319d024-2a00-aee4-e61a-8d32c1b7dcd8-c1b7dc8f"
                  )}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/68d3fbd55d90bfdc11a99444/68d3fbd55d90bfdc11a9a453_Facebook.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "link-block-social-media",
                  "space-right-8px"
                )}
                button={false}
                aria-label=""
                block="inline"
                options={{
                  href: "https://twitter.com/molocohq?lang=en",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  id={_utils.cx(
                    _styles,
                    "w-node-f319d024-2a00-aee4-e61a-8d32c1b7dcda-c1b7dc8f"
                  )}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/68d3fbd55d90bfdc11a99444/68d3fbd55d90bfdc11a9a452_X.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "link-block-social-media",
                  "space-right-8px"
                )}
                button={false}
                block="inline"
                options={{
                  href: "https://www.linkedin.com/company/moloco/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  id={_utils.cx(
                    _styles,
                    "w-node-f319d024-2a00-aee4-e61a-8d32c1b7dcdc-c1b7dc8f"
                  )}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/68d3fbd55d90bfdc11a99444/68d3fbd55d90bfdc11a9a454_LinkedIn.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "link-block-social-media",
                  "space-right-8px"
                )}
                button={false}
                block="inline"
                options={{
                  href: "https://www.youtube.com/@moloco3602/videos",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  id={_utils.cx(
                    _styles,
                    "w-node-f319d024-2a00-aee4-e61a-8d32c1b7dcde-c1b7dc8f"
                  )}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/68d3fbd55d90bfdc11a99444/68d3fbd55d90bfdc11a9a450_YouTube.svg"
                />
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-_187b8e9f-7b29-7e98-0b3e-c05bd475efd7-c1b7dc8f"
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button-primary")}
              id={_utils.cx(
                _styles,
                "w-node-_6de9857a-7b17-e1e4-c22f-471cf0b215ad-c1b7dc8f"
              )}
              button={false}
              aria-label="contact us to learn more"
              block="inline"
              options={{
                href: "/contact-us",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "button-text-secondary-white-text-2"
                )}
                tag="div"
              >
                {"Get started"}
              </_Builtin.Block>
              <_Builtin.Image
                className={_utils.cx(_styles, "button-icon-2")}
                loading="lazy"
                width="16"
                height="auto"
                alt="White arrow to learn more about the subject "
                src="https://cdn.prod.website-files.com/68d3fbd55d90bfdc11a99444/68d3fbd55d90bfdc11a99cc3_Arrow-white.webp"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.HFlex>
      <_Builtin.Block
        className={_utils.cx(_styles, "footer-wrapper-new")}
        tag="div"
      />
    </_Component>
  );
}
