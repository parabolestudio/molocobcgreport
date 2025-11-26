"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { CompanyTabs } from "./CompanyTabs";
import * as _utils from "./utils";
import _styles from "./IndustryRelationships.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-15":{"id":"e-15","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-979"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60188b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60188b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1027"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60188b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60188b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1028"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf601893","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf601893","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-967"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf601893","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf601893","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-19":{"id":"e-19","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-970"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60189b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60189b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-966"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60189b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf60189b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-973"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018a3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018a3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-984"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018a3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018a3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-23":{"id":"e-23","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-969"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018ab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018ab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-977"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018ab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018ab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-25":{"id":"e-25","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-963"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-978"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092236916},"e-27":{"id":"e-27","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-981"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018bd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018bd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-28":{"id":"e-28","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-975"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018bd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018bd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-29":{"id":"e-29","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-976"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-30":{"id":"e-30","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-968"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-31":{"id":"e-31","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-972"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-32":{"id":"e-32","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-965"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-33":{"id":"e-33","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-964"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-34":{"id":"e-34","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-983"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-35":{"id":"e-35","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-982"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-36":{"id":"e-36","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-974"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-37":{"id":"e-37","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-971"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-38":{"id":"e-38","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-980"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6fb1e10c-706b-8f8b-7db9-5a1bdf6018e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649092238875},"e-3738":{"id":"e-3738","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-363","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3739"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740046734284},"e-3739":{"id":"e-3739","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-364","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3738"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740046734288},"e-3740":{"id":"e-3740","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-363","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3741"}},"mediaQueries":["main","medium"],"target":{"selector":".tooltip-container","originalId":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7f1","appliesTo":"CLASS"},"targets":[{"selector":".tooltip-container","originalId":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7f1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740046752051},"e-3741":{"id":"e-3741","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-364","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3740"}},"mediaQueries":["main","medium"],"target":{"selector":".tooltip-container","originalId":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7f1","appliesTo":"CLASS"},"targets":[{"selector":".tooltip-container","originalId":"65c3b92e6d4212a487b44fc4|f3dc2773-69df-53f9-ea16-f1c1454db7f1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740046752059}},"actionLists":{"a-3":{"id":"a-3","title":"Show Partner Tooltip","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutElastic","duration":100,"target":{"useEventTarget":"SIBLINGS","selector":".partner-tooltip-wrapper","selectorGuids":["3fcd6540-0ce9-0701-a5fd-c6016137ee5f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1649078273052},"a-2":{"id":"a-2","title":"Hide Partner Tooltip","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutElastic","duration":100,"target":{"useEventTarget":"SIBLINGS","selector":".partner-tooltip-wrapper","selectorGuids":["3fcd6540-0ce9-0701-a5fd-c6016137ee5f"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1649078197982},"a-363":{"id":"a-363","title":"Show Location","actionItemGroups":[{"actionItems":[{"id":"a-363-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".partner-tooltip-wrapper","selectorGuids":["3fcd6540-0ce9-0701-a5fd-c6016137ee5f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-363-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".partner-tooltip-wrapper","selectorGuids":["3fcd6540-0ce9-0701-a5fd-c6016137ee5f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1740045446536},"a-364":{"id":"a-364","title":"Hide Location","actionItemGroups":[{"actionItems":[{"id":"a-364-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".partner-tooltip-wrapper","selectorGuids":["3fcd6540-0ce9-0701-a5fd-c6016137ee5f"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1740045446536}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function IndustryRelationships({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-32")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "text-center",
            "text-blue-dark",
            "mb-16"
          )}
          tag="h2"
        >
          {"Industry relationships"}
        </_Builtin.Heading>
        <_Builtin.TabsWrapper
          className={_utils.cx(_styles, "tabs-partners")}
          current="Exchanges"
          easing="ease-in-out-sine"
          fadeIn={300}
          fadeOut={100}
        >
          <_Builtin.TabsMenu
            className={_utils.cx(_styles, "tab-partners-menu", "mb-48")}
            tag="div"
          >
            <_Builtin.TabsLink
              className={_utils.cx(
                _styles,
                "tab-partner-link",
                "tab-border-right"
              )}
              data-w-tab="Exchanges"
              block="inline"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "partner-tab-text")}
                tag="div"
              >
                {"mobile exchanges"}
              </_Builtin.Block>
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(
                _styles,
                "tab-partner-link",
                "tab-border-right"
              )}
              data-w-tab="Mobile Management Partners"
              block="inline"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "partner-tab-text")}
                tag="div"
              >
                {"data measurement Partners"}
              </_Builtin.Block>
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "tab-partner-link")}
              data-w-tab="Mobile Partners"
              block="inline"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "partner-tab-text")}
                tag="div"
              >
                {"certifications"}
              </_Builtin.Block>
            </_Builtin.TabsLink>
          </_Builtin.TabsMenu>
          <_Builtin.TabsContent
            className={_utils.cx(_styles, "partner-tab-content")}
            tag="div"
          >
            <_Builtin.TabsPane tag="div" data-w-tab="Exchanges">
              <_Builtin.Grid className={_utils.cx(_styles, "grid-4")} tag="div">
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601857-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601858-df601845"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62432086d7235c68916cfd9a_preview-lightbox-AdColony%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
                    </_Builtin.Block>
                    <CompanyTabs />
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601860-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601861-df601845"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Chartboost"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62432087ef3f556c0e85ee9b_preview-lightbox-Chartboost%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601868-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601869-df601845"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Fyber"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6243208608e9dc1e8502e00a_preview-lightbox-Fyber%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601870-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601871-df601845"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Google"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62432087c093d98fbecabcdf_preview-lightbox-Google%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601878-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601879-df601845"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Mopub"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624320877e3673770087efd7_preview-lightbox-Mopub%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601880-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601881-df601845"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Unity"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624320877bf46b2bf8420887_preview-lightbox-Unity%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.TabsPane>
            <_Builtin.TabsPane
              tag="div"
              data-w-tab="Mobile Management Partners"
            >
              <_Builtin.Grid className={_utils.cx(_styles, "grid-4")} tag="div">
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf60188a-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf60188b-df601845"
                    )}
                    data-w-id="6fb1e10c-706b-8f8b-7db9-5a1bdf60188b"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62432086d7235c68916cfd9a_preview-lightbox-AdColony%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601892-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf601893-df601845"
                    )}
                    data-w-id="6fb1e10c-706b-8f8b-7db9-5a1bdf601893"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Chartboost"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62432087ef3f556c0e85ee9b_preview-lightbox-Chartboost%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf60189a-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf60189b-df601845"
                    )}
                    data-w-id="6fb1e10c-706b-8f8b-7db9-5a1bdf60189b"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Fyber"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6243208608e9dc1e8502e00a_preview-lightbox-Fyber%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018a2-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018a3-df601845"
                    )}
                    data-w-id="6fb1e10c-706b-8f8b-7db9-5a1bdf6018a3"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Google"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62432087c093d98fbecabcdf_preview-lightbox-Google%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018aa-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018ab-df601845"
                    )}
                    data-w-id="6fb1e10c-706b-8f8b-7db9-5a1bdf6018ab"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Mopub"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624320877e3673770087efd7_preview-lightbox-Mopub%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018b2-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018b3-df601845"
                    )}
                    data-w-id="6fb1e10c-706b-8f8b-7db9-5a1bdf6018b3"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Unity"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624320877bf46b2bf8420887_preview-lightbox-Unity%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.TabsPane>
            <_Builtin.TabsPane tag="div" data-w-tab="Mobile Partners">
              <_Builtin.Grid className={_utils.cx(_styles, "grid-4")} tag="div">
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "tooltip-container",
                    "relative"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018bc-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018bd-df601845"
                    )}
                    data-w-id="6fb1e10c-706b-8f8b-7db9-5a1bdf6018bd"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="ADColony"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62432086d7235c68916cfd9a_preview-lightbox-AdColony%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018c4-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "img-partner")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018c5-df601845"
                    )}
                    data-w-id="6fb1e10c-706b-8f8b-7db9-5a1bdf6018c5"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Chartboost"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62432087ef3f556c0e85ee9b_preview-lightbox-Chartboost%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018cc-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018cd-df601845"
                    )}
                    data-w-id="6fb1e10c-706b-8f8b-7db9-5a1bdf6018cd"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Fyber"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6243208608e9dc1e8502e00a_preview-lightbox-Fyber%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018d4-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018d5-df601845"
                    )}
                    data-w-id="6fb1e10c-706b-8f8b-7db9-5a1bdf6018d5"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Google"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62432087c093d98fbecabcdf_preview-lightbox-Google%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018dc-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018dd-df601845"
                    )}
                    data-w-id="6fb1e10c-706b-8f8b-7db9-5a1bdf6018dd"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Mopub"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624320877e3673770087efd7_preview-lightbox-Mopub%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
                    "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018e4-df601845"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    id={_utils.cx(
                      _styles,
                      "w-node-_6fb1e10c-706b-8f8b-7db9-5a1bdf6018e5-df601845"
                    )}
                    data-w-id="6fb1e10c-706b-8f8b-7db9-5a1bdf6018e5"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Unity"
                    src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/624320877bf46b2bf8420887_preview-lightbox-Unity%201.webp"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "partner-tooltip-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "partner-tooltip",
                        "bg-yellow",
                        "p-16"
                      )}
                      tag="div"
                    >
                      <_Builtin.Span
                        className={_utils.cx(_styles, "text-bold-700")}
                      >
                        {"Company Info"}
                      </_Builtin.Span>
                      <br />
                      {
                        "Lorem ipsum dolor sit anuoe amet io nunei a ertseem sem. Detri asg weasker grewm."
                      }
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
