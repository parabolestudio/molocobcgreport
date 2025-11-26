"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./MolocoLocations.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-15":{"id":"e-15","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-979"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60188b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60188b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1027"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60188b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60188b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1028"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf601893","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf601893","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-967"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf601893","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf601893","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-19":{"id":"e-19","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-970"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60189b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60189b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-966"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60189b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60189b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-973"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018a3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018a3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-984"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018a3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018a3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-23":{"id":"e-23","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-969"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018ab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018ab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-977"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018ab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018ab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-25":{"id":"e-25","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-963"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-978"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-27":{"id":"e-27","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-981"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018bd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018bd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-28":{"id":"e-28","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-975"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018bd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018bd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-29":{"id":"e-29","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-976"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-30":{"id":"e-30","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-968"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-31":{"id":"e-31","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-972"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-32":{"id":"e-32","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-965"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-33":{"id":"e-33","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-964"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-34":{"id":"e-34","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-983"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-35":{"id":"e-35","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-982"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-36":{"id":"e-36","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-974"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-37":{"id":"e-37","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-971"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-38":{"id":"e-38","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-980"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-3738":{"id":"e-3738","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-363","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3739"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740046734284},"e-3739":{"id":"e-3739","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-364","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3738"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740046734288},"e-3740":{"id":"e-3740","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-363","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3741"}},"mediaQueries":["main","medium"],"target":{"selector":".tooltip-container","originalId":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7f1","appliesTo":"CLASS"},"targets":[{"selector":".tooltip-container","originalId":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7f1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740046752051},"e-3741":{"id":"e-3741","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-364","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3740"}},"mediaQueries":["main","medium"],"target":{"selector":".tooltip-container","originalId":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7f1","appliesTo":"CLASS"},"targets":[{"selector":".tooltip-container","originalId":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7f1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740046752059}},"actionLists":{"a-3":{"id":"a-3","title":"Show Partner Tooltip","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutElastic","duration":100,"target":{"useEventTarget":"SIBLINGS","selector":".partner-tooltip-wrapper","selectorGuids":["3fcd6540-0ce9-0701-a5fd-c6016137ee5f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1649078273052},"a-2":{"id":"a-2","title":"Hide Partner Tooltip","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutElastic","duration":100,"target":{"useEventTarget":"SIBLINGS","selector":".partner-tooltip-wrapper","selectorGuids":["3fcd6540-0ce9-0701-a5fd-c6016137ee5f"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1649078197982},"a-363":{"id":"a-363","title":"Show Location","actionItemGroups":[{"actionItems":[{"id":"a-363-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".partner-tooltip-wrapper","selectorGuids":["3fcd6540-0ce9-0701-a5fd-c6016137ee5f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-363-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".partner-tooltip-wrapper","selectorGuids":["3fcd6540-0ce9-0701-a5fd-c6016137ee5f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1740045446536},"a-364":{"id":"a-364","title":"Hide Location","actionItemGroups":[{"actionItems":[{"id":"a-364-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".partner-tooltip-wrapper","selectorGuids":["3fcd6540-0ce9-0701-a5fd-c6016137ee5f"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1740045446536}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MolocoLocations({
  as: _Component = _Builtin.Section,
  locationYellowText = "MOLOCO LOCATIONS",
  locationHeadingText = (
    <>
      {"Find an office near you"}
      <br />
    </>
  ),
  siliconValleyImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62582039ff475c74f19c6111_FPO-ICON-FLOAT%20(1).webp",
  sanFransiscoImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62582039ff475c74f19c6111_FPO-ICON-FLOAT%20(1).webp",
  seattleImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62582039ff475c74f19c6111_FPO-ICON-FLOAT%20(1).webp",
  beijingImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62582039ff475c74f19c6111_FPO-ICON-FLOAT%20(1).webp",
  londonImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62582039ff475c74f19c6111_FPO-ICON-FLOAT%20(1).webp",
  seoulImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62582039ff475c74f19c6111_FPO-ICON-FLOAT%20(1).webp",
  singaporeImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62582039ff475c74f19c6111_FPO-ICON-FLOAT%20(1).webp",
  tokyoImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62582039ff475c74f19c6111_FPO-ICON-FLOAT%20(1).webp",
  siliconValleyHoverText = (
    <>
      <br />
      {
        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
      }
    </>
  ),
  sanfranciscoHoverText = (
    <>
      <br />
      {
        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
      }
    </>
  ),
  seattleHoverText = (
    <>
      <br />
      {
        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
      }
    </>
  ),
  beijingHoverText = (
    <>
      <br />
      {
        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
      }
    </>
  ),
  londonHoverText = (
    <>
      <br />
      {
        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
      }
    </>
  ),
  seoulHoverText = (
    <>
      <br />
      {
        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
      }
    </>
  ),
  singaporeHoverText = (
    <>
      <br />
      {
        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
      }
    </>
  ),
  tokyoHoverText = (
    <>
      <br />
      {
        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
      }
    </>
  ),
  _1stLocation = "Silicon Valley ",
  _2ndLocationTitle = "San Francisco",
  _3rdLocationTitle = "Seattle",
  _4thLocationTitle = "Beijing",
  _5thLocationTitle = "London",
  _6thLocationTitle = "Seoul",
  _7thLocationTitle = "Singapore",
  _8thLocationTitle = "Tokyo",
  nyTitle = "New York",
  nyImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62582039ff475c74f19c6111_FPO-ICON-FLOAT%20(1).webp",
  nyHoverText = (
    <>
      {"Company Info"}
      <br />
      {
        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
      }
    </>
  ),
  indiaTitle = "Gurgaon",
  indiaImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62582039ff475c74f19c6111_FPO-ICON-FLOAT%20(1).webp",
  indiaHoverText = "This is the default text value",
  laTitle = "Los Angeles",
  laImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62582039ff475c74f19c6111_FPO-ICON-FLOAT%20(1).webp",
  laHoverText = "1019 E 4TH PL STE 400/WeWork, LOS ANGELES, CA 90013-2773",
  berlinTitle = "Berlin",
  berlinHoverText = "Unten den Linden 40 10117 Berlin",
  berlinImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62582039ff475c74f19c6111_FPO-ICON-FLOAT%20(1).webp",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-60", "bg-soft-gray")}
      grid={{
        type: "section",
      }}
      tag="div"
      id="Locations"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-2")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "text-center", "text-blue-medium")}
          tag="h5"
        >
          {locationYellowText}
        </_Builtin.Heading>
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "text-blue-dark-2",
            "text-center",
            "pb-24"
          )}
          tag="h2"
        >
          {locationHeadingText}
        </_Builtin.Heading>
        <_Builtin.TabsWrapper
          className={_utils.cx(_styles, "tabs-partners")}
          current="Exchanges"
          easing="ease-in-out-sine"
          fadeIn={300}
          fadeOut={100}
        >
          <_Builtin.TabsContent
            className={_utils.cx(_styles, "partner-tab-content")}
            tag="div"
          >
            <_Builtin.TabsPane tag="div" data-w-tab="Exchanges">
              <_Builtin.Grid
                className={_utils.cx(_styles, "grid-18")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b49-e5830b3e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-15")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src={siliconValleyImage}
                  />
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-center",
                      "text-blue-dark",
                      "text-18"
                    )}
                    tag="h5"
                  >
                    {_1stLocation}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip-2",
                        "bg-yellow",
                        "p-16",
                        "text-medium-500"
                      )}
                      tag="div"
                    >
                      {siliconValleyHoverText}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b53-e5830b3e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b54-e5830b3e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src={sanFransiscoImage}
                  />
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-center",
                      "text-blue-dark",
                      "text-18"
                    )}
                    tag="h5"
                  >
                    {_2ndLocationTitle}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip-2",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      {sanfranciscoHoverText}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b5d-e5830b3e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b5e-e5830b3e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src={seattleImage}
                  />
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-center",
                      "text-blue-dark",
                      "text-18"
                    )}
                    tag="h5"
                  >
                    {_3rdLocationTitle}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip-2",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      {seattleHoverText}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-c033eb00-588c-c989-1d27-81dce9db188d-e5830b3e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-c033eb00-588c-c989-1d27-81dce9db188e-e5830b3e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src={nyImage}
                  />
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-center",
                      "text-blue-dark",
                      "text-18"
                    )}
                    tag="h5"
                  >
                    {nyTitle}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip-2",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      {nyHoverText}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b67-e5830b3e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b68-e5830b3e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src={beijingImage}
                  />
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-center",
                      "text-blue-dark",
                      "text-18"
                    )}
                    tag="h5"
                  >
                    {_4thLocationTitle}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip-2",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      {beijingHoverText}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b71-e5830b3e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b72-e5830b3e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src={londonImage}
                  />
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-center",
                      "text-blue-dark",
                      "text-18"
                    )}
                    tag="h5"
                  >
                    {_5thLocationTitle}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip-2",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      {londonHoverText}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b7b-e5830b3e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b7c-e5830b3e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src={seoulImage}
                  />
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-center",
                      "text-blue-dark"
                    )}
                    tag="h5"
                  >
                    {_6thLocationTitle}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip-2",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      {seoulHoverText}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b85-e5830b3e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b86-e5830b3e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src={singaporeImage}
                  />
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-center",
                      "text-blue-dark",
                      "text-18"
                    )}
                    tag="h5"
                  >
                    {_7thLocationTitle}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip-2",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      {singaporeHoverText}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b8f-e5830b3e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-b987cf0c-6aea-30e9-e45c-2058e5830b90-e5830b3e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src={tokyoImage}
                  />
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-center",
                      "text-blue-dark",
                      "text-18"
                    )}
                    tag="h5"
                  >
                    {_8thLocationTitle}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip-2",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      {tokyoHoverText}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_97685e1f-63fc-f8a4-4832-f9b6c4ff5bb4-e5830b3e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_97685e1f-63fc-f8a4-4832-f9b6c4ff5bb5-e5830b3e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src={indiaImage}
                  />
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-center",
                      "text-blue-dark",
                      "text-18"
                    )}
                    tag="h5"
                  >
                    {indiaTitle}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip-2",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      {indiaHoverText}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6dbc8f00-516d-50bb-1a9f-27c4a6a4601d-e5830b3e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6dbc8f00-516d-50bb-1a9f-27c4a6a4601e-e5830b3e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src={laImage}
                  />
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-center",
                      "text-blue-dark",
                      "text-18"
                    )}
                    tag="h5"
                  >
                    {laTitle}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip-2",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      {laHoverText}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_011374c3-082d-70c3-ec5c-e4d109cd66dc-e5830b3e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_011374c3-082d-70c3-ec5c-e4d109cd66dd-e5830b3e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src={berlinImage}
                  />
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-center",
                      "text-blue-dark",
                      "text-18"
                    )}
                    tag="h5"
                  >
                    {berlinTitle}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip-2",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      {berlinHoverText}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.TabsPane>
          </_Builtin.TabsContent>
        </_Builtin.TabsWrapper>
      </_Builtin.Container>
    </_Component>
  );
}
