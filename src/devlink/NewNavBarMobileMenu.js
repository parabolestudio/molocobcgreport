"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NewNavBarMobileMenu.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1075":{"id":"e-1075","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1076"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678289027907},"e-1076":{"id":"e-1076","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1075"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678289027907},"e-1079":{"id":"e-1079","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3083"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar-mobile-dropdown","originalId":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98","appliesTo":"CLASS"},"targets":[{"selector":".navbar-mobile-dropdown","originalId":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678287591672},"e-1080":{"id":"e-1080","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-77","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3097"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar-mobile-dropdown","originalId":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98","appliesTo":"CLASS"},"targets":[{"selector":".navbar-mobile-dropdown","originalId":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678287591684},"e-1081":{"id":"e-1081","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1082"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698938632325},"e-1082":{"id":"e-1082","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-77","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1081"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698938632328},"e-1083":{"id":"e-1083","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1084"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698938733393},"e-1084":{"id":"e-1084","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1083"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698938733395},"e-1503":{"id":"e-1503","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1514"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56a8511d-512d-fdfa-cc63-26c1373704d9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56a8511d-512d-fdfa-cc63-26c1373704d9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701679824636},"e-1504":{"id":"e-1504","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3079"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56a8511d-512d-fdfa-cc63-26c1373704d9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56a8511d-512d-fdfa-cc63-26c1373704d9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701679824636},"e-3050":{"id":"e-3050","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3093"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"66db415213a1439543c40d18|b39745e4-8317-9315-67fa-2b2b057b4799","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66db415213a1439543c40d18|b39745e4-8317-9315-67fa-2b2b057b4799","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725645163872},"e-3051":{"id":"e-3051","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3072"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"66db415213a1439543c40d18|b39745e4-8317-9315-67fa-2b2b057b4799","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66db415213a1439543c40d18|b39745e4-8317-9315-67fa-2b2b057b4799","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725645163872},"e-3052":{"id":"e-3052","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3053"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66db415213a1439543c40d18|b39745e4-8317-9315-67fa-2b2b057b479a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66db415213a1439543c40d18|b39745e4-8317-9315-67fa-2b2b057b479a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725645163872},"e-3053":{"id":"e-3053","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3052"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66db415213a1439543c40d18|b39745e4-8317-9315-67fa-2b2b057b479a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66db415213a1439543c40d18|b39745e4-8317-9315-67fa-2b2b057b479a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725645163872},"e-3054":{"id":"e-3054","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3055"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"66dd965f3de86b5508e3d555|b39745e4-8317-9315-67fa-2b2b057b4799","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66dd965f3de86b5508e3d555|b39745e4-8317-9315-67fa-2b2b057b4799","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725797983900},"e-3055":{"id":"e-3055","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3054"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"66dd965f3de86b5508e3d555|b39745e4-8317-9315-67fa-2b2b057b4799","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66dd965f3de86b5508e3d555|b39745e4-8317-9315-67fa-2b2b057b4799","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725797983900},"e-3056":{"id":"e-3056","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3057"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66dd965f3de86b5508e3d555|b39745e4-8317-9315-67fa-2b2b057b479a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66dd965f3de86b5508e3d555|b39745e4-8317-9315-67fa-2b2b057b479a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725797983900},"e-3057":{"id":"e-3057","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3056"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66dd965f3de86b5508e3d555|b39745e4-8317-9315-67fa-2b2b057b479a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66dd965f3de86b5508e3d555|b39745e4-8317-9315-67fa-2b2b057b479a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725797983900},"e-4071":{"id":"e-4071","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-408","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4072"}},"mediaQueries":["main"],"target":{"id":"67ff9f90bbc59406bfeb32a4|2d224188-f55c-c38b-3036-36a6f1a2ce26","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ff9f90bbc59406bfeb32a4|2d224188-f55c-c38b-3036-36a6f1a2ce26","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748858389747}},"actionLists":{"a-73":{"id":"a-73","title":"Menu Mobile Open","actionItemGroups":[{"actionItems":[{"id":"a-73-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"value":"none"}},{"id":"a-73-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-73-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-json","selectorGuids":["2fe998e1-182d-9713-b9e0-c2d386a7003a"]},"value":0}},{"id":"a-73-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-73-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"value":1,"unit":""}},{"id":"a-73-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-73-n-7","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-json","selectorGuids":["2fe998e1-182d-9713-b9e0-c2d386a7003a"]},"value":50}},{"id":"a-73-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675962502962},"a-74":{"id":"a-74","title":"Menu Mobile Close","actionItemGroups":[{"actionItems":[{"id":"a-74-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"value":"none"}},{"id":"a-74-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":250,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-74-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-json","selectorGuids":["2fe998e1-182d-9713-b9e0-c2d386a7003a"]},"value":0}},{"id":"a-74-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"value":0,"unit":""}},{"id":"a-74-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":250,"target":{},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675962502962},"a-76":{"id":"a-76","title":"Dropdown Mobile Open","actionItemGroups":[{"actionItems":[{"id":"a-76-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98"},"heightValue":40,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-76-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-dropdown-icon","selectorGuids":["353b304b-4ff8-f6bf-b7c9-8fb8401ea405"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-76-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuart","duration":350,"target":{"useEventTarget":true,"id":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98"},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-76-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuart","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".nav-dropdown-icon","selectorGuids":["353b304b-4ff8-f6bf-b7c9-8fb8401ea405"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678287614716},"a-77":{"id":"a-77","title":"Dropdown Mobile Close","actionItemGroups":[{"actionItems":[{"id":"a-77-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":true,"id":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98"},"heightValue":40,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-77-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".nav-dropdown-icon","selectorGuids":["353b304b-4ff8-f6bf-b7c9-8fb8401ea405"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678287614716},"a-184":{"id":"a-184","title":"Menu Mobile Open 3","actionItemGroups":[{"actionItems":[{"id":"a-184-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"value":"none"}},{"id":"a-184-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-184-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-json","selectorGuids":["2fe998e1-182d-9713-b9e0-c2d386a7003a"]},"value":0}},{"id":"a-184-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-184-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"value":1,"unit":""}},{"id":"a-184-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-184-n-7","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-json","selectorGuids":["2fe998e1-182d-9713-b9e0-c2d386a7003a"]},"value":50}},{"id":"a-184-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1675962502962},"a-185":{"id":"a-185","title":"Menu Mobile Close 3","actionItemGroups":[{"actionItems":[{"id":"a-185-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"value":"none"}},{"id":"a-185-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":250,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-185-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-json","selectorGuids":["2fe998e1-182d-9713-b9e0-c2d386a7003a"]},"value":0}},{"id":"a-185-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".nav-bar-menu-dropdown","selectorGuids":["932f8c26-309f-afe3-0876-cc8b954b28ac"]},"value":0,"unit":""}},{"id":"a-185-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":250,"target":{},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1675962502962},"a-408":{"id":"a-408","title":"Button Appear","actionItemGroups":[{"actionItems":[{"id":"a-408-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".full-width.flex-child-align-right","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4c","41776757-5c4d-721e-cfb0-40e69e4c3bef"]},"value":0,"unit":""}},{"id":"a-408-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67ff9f90bbc59406bfeb32a4|2d224188-f55c-c38b-3036-36a6f1a2ce31"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-408-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67ff9f90bbc59406bfeb32a4|2d224188-f55c-c38b-3036-36a6f1a2ce31"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-408-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".full-width.flex-child-align-right","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4c","41776757-5c4d-721e-cfb0-40e69e4c3bef"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1748858394558}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewNavBarMobileMenu({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "navbar-mobile")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "banner-mobile")} tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "full-width",
            "align-horizontal",
            "align-center",
            "banner-alignment"
          )}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "banner-quote")}
            button={false}
            block=""
            options={{
              href: "https://www.moloco.com/event/advertising-week-nyc-2024",
            }}
          >
            {
              "Join us as Moloco takes the stage for Advertising Week NYC 2024, Oct 7-10"
            }
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "button-banner-on-mobile")}
            button={false}
            block="inline"
            options={{
              href: "https://www.moloco.com/event/advertising-week-nyc-2024",
              target: "_blank",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "button-icon-banner")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="White arrow to learn more about the subject "
              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6544c48db72afc64022178de_Arrow-white.webp"
            />
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "content-nav-bar")}
        tag="div"
      >
        <_Builtin.Link
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "moloco-logo-mobile")}
            loading="eager"
            width="134"
            height="15"
            alt="Moloco logo primary"
            src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6544ad7675a308ab53b4c354_Moloco_logo_Horiz_Primary%201.webp"
          />
        </_Builtin.Link>
        <_Builtin.Block
          className={_utils.cx(_styles, "menu-mobile-nav")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-animate-icon")}
            data-w-id="56a8511d-512d-fdfa-cc63-26c1373704d9"
            tag="div"
          >
            <_Builtin.NotSupported _atom="Animation" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "nav-bar-menu-dropdown")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "icons-mobile")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "icons-mobile-align-right")}
            tag="div"
          >
            <_Builtin.DropdownWrapper
              className={_utils.cx(
                _styles,
                "desktop-languages-icon",
                "nav-item-with-icon"
              )}
              tag="div"
              delay={0}
              hover={false}
            >
              <_Builtin.DropdownToggle
                className={_utils.cx(_styles, "internationalization")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "nav-link-icon")}
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt="Click here to change the language"
                  src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b26262a2d236b857f596_Language-icon.webp"
                />
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className={_utils.cx(_styles, "language-dropdow-list")}
                tag="nav"
              >
                <_Builtin.NotSupported _atom="LocalesWrapper" />
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "nav-item-with-icon",
                "search-icon"
              )}
              button={false}
              block="inline"
              options={{
                href: "/search",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "nav-link-icon")}
                width="auto"
                height="auto"
                loading="eager"
                alt="Click here to search"
                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b1af4dcc797a66ca9092_Search%20icon.webp"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Section
          className={_utils.cx(_styles, "navbar-mobile-scroller")}
          grid={{
            type: "section",
          }}
          tag="div"
        >
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "navbar-mobile-dropdown")}
            tag="div"
            id="version-A-mobile"
            delay={0}
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "dropdown-toggle-mobile")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "no-padding",
                  "space-right-4px",
                  "is-dark-blue",
                  "is-medium"
                )}
                tag="h5"
              >
                {"Solutions"}
              </_Builtin.Heading>
              <_Builtin.Icon
                className={_utils.cx(_styles, "nav-dropdown-icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "dropdown-list-mobile")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px",
                        "is-bold"
                      )}
                      tag="h5"
                    >
                      {"Moloco Ads"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {
                        "Reach 2 billion daily users on the advertising platform built for app marketers"
                      }
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px",
                        "is-bold"
                      )}
                      tag="h5"
                    >
                      {"Moloco Commerce Media"}
                      <br />
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {"AI-powered onsite ads for retailers"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px",
                        "is-bold"
                      )}
                      tag="h5"
                    >
                      {"Moloco Streaming Monetization"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {"The AI-native ad stack for large streaming providers"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px",
                        "is-bold"
                      )}
                      tag="h5"
                    >
                      {"Moloco SDK"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {
                        "Improve app monetization with a direct Moloco integration"
                      }
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "navbar-mobile-dropdown")}
            tag="div"
            delay={0}
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "dropdown-toggle-mobile")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "no-padding",
                  "space-right-4px",
                  "is-dark-blue",
                  "is-medium"
                )}
                tag="h5"
              >
                {"Resources"}
              </_Builtin.Heading>
              <_Builtin.Icon
                className={_utils.cx(_styles, "nav-dropdown-icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "dropdown-list-mobile")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {"Blog"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {"Reports"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {"Case Studies"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {"Events"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {"Moloco Help Center"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://developer.moloco.cloud/",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {"Moloco Ads Developer Hub"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://rmp-docs.moloco.com/docs",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {"Commerce Media Developer Hub"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "theme-mobile",
                  "not-global-en-ja"
                )}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {"Commerce Media GrowthU"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "navbar-mobile-dropdown")}
            tag="div"
            delay={0}
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "dropdown-toggle-mobile")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "no-padding",
                  "space-right-4px",
                  "is-dark-blue",
                  "is-medium"
                )}
                tag="h5"
              >
                {"Company"}
              </_Builtin.Heading>
              <_Builtin.Icon
                className={_utils.cx(_styles, "nav-dropdown-icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "dropdown-list-mobile")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {"About Moloco"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {"Careers"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "theme-mobile")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(_styles, "clicable-links-pages")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "nav-bar-secondary-page",
                        "is-dark-blue",
                        "space-right-8px"
                      )}
                      tag="h5"
                    >
                      {"Newsroom"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.Link
            className={_utils.cx(_styles, "button-primary", "space-top-40px")}
            button={true}
            id="contact-mobile-nav"
            block=""
            options={{
              href: "#",
            }}
          >
            {"Contact us"}
          </_Builtin.Link>
        </_Builtin.Section>
      </_Builtin.Block>
    </_Component>
  );
}
