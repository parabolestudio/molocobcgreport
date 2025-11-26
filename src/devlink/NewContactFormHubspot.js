"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NewContactFormHubspot.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3349":{"id":"e-3349","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-248","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a9a36c|99be2aea-ebe5-587c-c5b6-48e15e473dac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a9a36c|99be2aea-ebe5-587c-c5b6-48e15e473dac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-248-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1736966681764},"e-4019":{"id":"e-4019","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4020"}},"mediaQueries":["main"],"target":{"id":"68d3fbd55d90bfdc11a99443|998ee1fb-1ad2-1044-449a-c2c5e61d47ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99443|998ee1fb-1ad2-1044-449a-c2c5e61d47ef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748257513735},"e-4035":{"id":"e-4035","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-391","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4036"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99443|b055c9a1-17c4-7ab8-e4bc-d56597dfe0a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99443|b055c9a1-17c4-7ab8-e4bc-d56597dfe0a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748434477168},"e-4053":{"id":"e-4053","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-397","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4054"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fcb|3f37c309-562d-c457-ed24-0c02bd540e13","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fcb|3f37c309-562d-c457-ed24-0c02bd540e13","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748507072587},"e-4063":{"id":"e-4063","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-397","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4064"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fcf|981341b9-2bb4-cd21-7859-666215a02e3e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fcf|981341b9-2bb4-cd21-7859-666215a02e3e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748524455989},"e-4071":{"id":"e-4071","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-408","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4072"}},"mediaQueries":["main"],"target":{"id":"68d3fbd55d90bfdc11a99443|2d224188-f55c-c38b-3036-36a6f1a2ce26","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99443|2d224188-f55c-c38b-3036-36a6f1a2ce26","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748858389747},"e-4097":{"id":"e-4097","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4098"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fcf|1d3b4d34-a769-558f-c0f7-282287e71f56","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fcf|1d3b4d34-a769-558f-c0f7-282287e71f56","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748952409980},"e-4099":{"id":"e-4099","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4100"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fcb|e41369e9-d477-f83d-f8e3-3d94f8a6b554","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fcb|e41369e9-d477-f83d-f8e3-3d94f8a6b554","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748952440451},"e-4103":{"id":"e-4103","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-272","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4104"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fce|5f6bcb71-07ba-f9eb-4533-71363decee2e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fce|5f6bcb71-07ba-f9eb-4533-71363decee2e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749039194783},"e-4105":{"id":"e-4105","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-272","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4106"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fce|5f6bcb71-07ba-f9eb-4533-71363decee2e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fce|5f6bcb71-07ba-f9eb-4533-71363decee2e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749039194783},"e-4107":{"id":"e-4107","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4108"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fce|5f6bcb71-07ba-f9eb-4533-71363decee32","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fce|5f6bcb71-07ba-f9eb-4533-71363decee32","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749039194783},"e-4109":{"id":"e-4109","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fce|5f6bcb71-07ba-f9eb-4533-71363decee32","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fce|5f6bcb71-07ba-f9eb-4533-71363decee32","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749039194783},"e-4115":{"id":"e-4115","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-272","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fce|b059fc00-bce0-7638-ebb1-26831fe05f3d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fce|b059fc00-bce0-7638-ebb1-26831fe05f3d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749039197594},"e-4117":{"id":"e-4117","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-272","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4118"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fce|b059fc00-bce0-7638-ebb1-26831fe05f3d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fce|b059fc00-bce0-7638-ebb1-26831fe05f3d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749039197594},"e-4119":{"id":"e-4119","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fce|b059fc00-bce0-7638-ebb1-26831fe05f41","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fce|b059fc00-bce0-7638-ebb1-26831fe05f41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749039197594},"e-4121":{"id":"e-4121","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4122"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fce|b059fc00-bce0-7638-ebb1-26831fe05f41","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fce|b059fc00-bce0-7638-ebb1-26831fe05f41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749039197594},"e-4135":{"id":"e-4135","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-397","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4261"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68415d7d7b699bdd0910ee0a|3f37c309-562d-c457-ed24-0c02bd540e13","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68415d7d7b699bdd0910ee0a|3f37c309-562d-c457-ed24-0c02bd540e13","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749114239776},"e-4141":{"id":"e-4141","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-272","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4142"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68415d7d7b699bdd0910ee0a|7aa30341-4f8f-260f-aef2-efb82b2a5a3a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68415d7d7b699bdd0910ee0a|7aa30341-4f8f-260f-aef2-efb82b2a5a3a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749114239776},"e-4143":{"id":"e-4143","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4280"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68415d7d7b699bdd0910ee0a|e41369e9-d477-f83d-f8e3-3d94f8a6b554","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68415d7d7b699bdd0910ee0a|e41369e9-d477-f83d-f8e3-3d94f8a6b554","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749114239776},"e-4147":{"id":"e-4147","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99443|998ee1fb-1ad2-1044-449a-c2c5e61d47eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99443|998ee1fb-1ad2-1044-449a-c2c5e61d47eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749122184355},"e-4161":{"id":"e-4161","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-272","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4162"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68454852a4d85d00911dd3bc|5f6bcb71-07ba-f9eb-4533-71363decee2e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68454852a4d85d00911dd3bc|5f6bcb71-07ba-f9eb-4533-71363decee2e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749370965360},"e-4163":{"id":"e-4163","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-272","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4164"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68454852a4d85d00911dd3bc|5f6bcb71-07ba-f9eb-4533-71363decee2e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68454852a4d85d00911dd3bc|5f6bcb71-07ba-f9eb-4533-71363decee2e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749370965360},"e-4165":{"id":"e-4165","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4166"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68454852a4d85d00911dd3bc|5f6bcb71-07ba-f9eb-4533-71363decee32","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68454852a4d85d00911dd3bc|5f6bcb71-07ba-f9eb-4533-71363decee32","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749370965360},"e-4167":{"id":"e-4167","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4168"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68454852a4d85d00911dd3bc|5f6bcb71-07ba-f9eb-4533-71363decee32","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68454852a4d85d00911dd3bc|5f6bcb71-07ba-f9eb-4533-71363decee32","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749370965360},"e-4173":{"id":"e-4173","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-272","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68454852a4d85d00911dd3bc|b059fc00-bce0-7638-ebb1-26831fe05f3d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68454852a4d85d00911dd3bc|b059fc00-bce0-7638-ebb1-26831fe05f3d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749370965360},"e-4175":{"id":"e-4175","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-272","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68454852a4d85d00911dd3bc|b059fc00-bce0-7638-ebb1-26831fe05f3d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68454852a4d85d00911dd3bc|b059fc00-bce0-7638-ebb1-26831fe05f3d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749370965360},"e-4177":{"id":"e-4177","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68454852a4d85d00911dd3bc|b059fc00-bce0-7638-ebb1-26831fe05f41","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68454852a4d85d00911dd3bc|b059fc00-bce0-7638-ebb1-26831fe05f41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749370965360},"e-4179":{"id":"e-4179","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4180"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68454852a4d85d00911dd3bc|b059fc00-bce0-7638-ebb1-26831fe05f41","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68454852a4d85d00911dd3bc|b059fc00-bce0-7638-ebb1-26831fe05f41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749370965360},"e-4192":{"id":"e-4192","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4193"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fcf|345f49c5-59f0-86b1-740c-354652b48ae5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fcf|345f49c5-59f0-86b1-740c-354652b48ae5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749468374848},"e-4235":{"id":"e-4235","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-382","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4236"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fd0|a6350a9d-8a7e-f8e5-c7ed-a85e9bd2e46d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fd0|a6350a9d-8a7e-f8e5-c7ed-a85e9bd2e46d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1752829620920},"e-4255":{"id":"e-4255","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-397","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4256"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fd0|142193ab-aae5-bf65-c001-b577f125e95c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fd0|142193ab-aae5-bf65-c001-b577f125e95c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1753709458325}},"actionLists":{"a-248":{"id":"a-248","title":"Flywheel adapted 2","continuousParameterGroups":[{"id":"a-248-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-248-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":40,"yValue":40,"zValue":0,"xUnit":"%","yUnit":"%","zUnit":"px"}},{"id":"a-248-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":2,"yValue":2,"locked":true}},{"id":"a-248-n-82","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"PX"}},{"id":"a-248-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-79","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-248-n-86","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"value":0,"unit":""}},{"id":"a-248-n-87","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-248-n-88","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-248-n-12","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":0,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-248-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-94","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"yValue":100,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":5,"actionItems":[{"id":"a-248-n-83","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":null,"xUnit":"vw","yUnit":"vh","zUnit":"px"}}]},{"keyframe":7,"actionItems":[{"id":"a-248-n-81","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}}]},{"keyframe":15,"actionItems":[{"id":"a-248-n-80","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":null,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-21","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":1,"yValue":1,"zValue":1,"locked":true}},{"id":"a-248-n-135","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":360,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}}]},{"keyframe":20,"actionItems":[{"id":"a-248-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|54ef8ef6-7945-0c3c-aaa2-c093b1081ad3"},"value":1,"unit":""}},{"id":"a-248-n-59","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"yValue":100,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}},{"id":"a-248-n-89","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"value":1,"unit":""}}]},{"keyframe":30,"actionItems":[{"id":"a-248-n-136","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":360,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-248-n-92","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"value":1,"unit":""}},{"id":"a-248-n-85","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}}]},{"keyframe":40,"actionItems":[{"id":"a-248-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|c7888fff-0775-962d-c8e9-3af665a1ecbe"},"value":0,"unit":""}},{"id":"a-248-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473db9"},"value":1,"unit":""}},{"id":"a-248-n-84","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"xValue":0,"yValue":0,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-131","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":480,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}}]},{"keyframe":45,"actionItems":[{"id":"a-248-n-32","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473db9"},"value":0,"unit":""}},{"id":"a-248-n-33","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473db9"},"value":1,"unit":""}},{"id":"a-248-n-29","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-37","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|c7888fff-0775-962d-c8e9-3af665a1ecbe"},"value":1,"unit":""}}]},{"keyframe":54,"actionItems":[{"id":"a-248-n-40","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dbb"},"xValue":0,"yValue":0,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-124","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dc2"},"value":1,"unit":""}}]},{"keyframe":55,"actionItems":[{"id":"a-248-n-132","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":480,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-248-n-123","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|99be2aea-ebe5-587c-c5b6-48e15e473dc2"},"value":0,"unit":""}},{"id":"a-248-n-96","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":100,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}}]},{"keyframe":56,"actionItems":[{"id":"a-248-n-133","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":480,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}}]},{"keyframe":65,"actionItems":[{"id":"a-248-n-100","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-98","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-105","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}}]},{"keyframe":75,"actionItems":[{"id":"a-248-n-107","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":100,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-111","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-112","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-134","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":600,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}}]},{"keyframe":80,"actionItems":[{"id":"a-248-n-110","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-113","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-248-n-117","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-248-n-120","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|efdfa340-546e-67b9-9cca-a61e14138631"},"value":1,"unit":""}}]},{"keyframe":85,"actionItems":[{"id":"a-248-n-121","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|efdfa340-546e-67b9-9cca-a61e14138631"},"value":1,"unit":""}}]},{"keyframe":90,"actionItems":[{"id":"a-248-n-67","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|54ef8ef6-7945-0c3c-aaa2-c093b1081ad3"},"value":1,"unit":""}},{"id":"a-248-n-122","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|efdfa340-546e-67b9-9cca-a61e14138631"},"value":0,"unit":""}}]},{"keyframe":96,"actionItems":[{"id":"a-248-n-64","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"px"}},{"id":"a-248-n-65","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":1,"yValue":1,"locked":true}},{"id":"a-248-n-138","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":1,"unit":""}}]},{"keyframe":100,"actionItems":[{"id":"a-248-n-71","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a9a207|54ef8ef6-7945-0c3c-aaa2-c093b1081ad3"},"value":0.05,"unit":""}},{"id":"a-248-n-69","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":4,"yValue":4,"locked":true}},{"id":"a-248-n-137","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0.05,"unit":""}}]}]}],"createdOn":1731350074518},"a-382":{"id":"a-382","title":"page-hero-section-opt 2025","actionItemGroups":[{"actionItems":[{"id":"a-382-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-white.space-bottom-28px.width-850.large-h1","selectorGuids":["569930cf-5871-a139-2af1-3b23c85a6a42","de6872c8-99f1-aa44-7b2c-e83d2fc5e66e","ee318cca-a078-fbc5-50ed-8d85f3af4914","baa48a9d-aee6-915f-a8b5-799595ae9233"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-382-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"68d3fbd55d90bfdc11a99443|998ee1fb-1ad2-1044-449a-c2c5e61d47ef"},"value":0,"unit":""}},{"id":"a-382-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-secondary-white-new","selectorGuids":["ae2039a0-b0c9-8020-18fd-b823963d6f3e"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-382-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-40px","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","dc2e0a54-7f1f-ab9d-433c-7df14baf70ab"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-382-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a99443|998ee1fb-1ad2-1044-449a-c2c5e61d4806"},"xValue":0,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}},{"id":"a-382-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a99443|998ee1fb-1ad2-1044-449a-c2c5e61d4806"},"value":0,"unit":""}},{"id":"a-382-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".align-left","selectorGuids":["011fda00-f1c8-923f-925b-3e59a71df06f"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-382-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-white.space-bottom-28px.large-h1","selectorGuids":["569930cf-5871-a139-2af1-3b23c85a6a42","de6872c8-99f1-aa44-7b2c-e83d2fc5e66e","02a4fcd2-3c44-8f6d-ec8d-5271007b98f2"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-382-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-main-image","selectorGuids":["aed5e5c4-eed0-5f77-81ab-2d6545b7613b"]},"xValue":32,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}},{"id":"a-382-n-26","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a99443|998ee1fb-1ad2-1044-449a-c2c5e61d4806"},"xValue":32,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}}]},{"actionItems":[{"id":"a-382-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".is-white.space-bottom-28px.width-850.large-h1","selectorGuids":["569930cf-5871-a139-2af1-3b23c85a6a42","de6872c8-99f1-aa44-7b2c-e83d2fc5e66e","ee318cca-a078-fbc5-50ed-8d85f3af4914","baa48a9d-aee6-915f-a8b5-799595ae9233"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-382-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":true,"id":"68d3fbd55d90bfdc11a99443|998ee1fb-1ad2-1044-449a-c2c5e61d47ef"},"value":1,"unit":""}},{"id":"a-382-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".button-secondary-white-new","selectorGuids":["ae2039a0-b0c9-8020-18fd-b823963d6f3e"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-382-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-40px","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","dc2e0a54-7f1f-ab9d-433c-7df14baf70ab"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-382-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".align-left","selectorGuids":["011fda00-f1c8-923f-925b-3e59a71df06f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-382-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".is-white.space-bottom-28px.large-h1","selectorGuids":["569930cf-5871-a139-2af1-3b23c85a6a42","de6872c8-99f1-aa44-7b2c-e83d2fc5e66e","02a4fcd2-3c44-8f6d-ec8d-5271007b98f2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-382-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".hero-main-image","selectorGuids":["aed5e5c4-eed0-5f77-81ab-2d6545b7613b"]},"xValue":0,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}},{"id":"a-382-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".hero-main-image","selectorGuids":["aed5e5c4-eed0-5f77-81ab-2d6545b7613b"]},"xValue":0,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}},{"id":"a-382-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"inOutCubic","duration":1300,"target":{"id":"68d3fbd55d90bfdc11a99443|998ee1fb-1ad2-1044-449a-c2c5e61d4806"},"xValue":0,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}},{"id":"a-382-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a99443|998ee1fb-1ad2-1044-449a-c2c5e61d4806"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737137769049},"a-391":{"id":"a-391","title":"Left Content fade in","actionItemGroups":[{"actionItems":[{"id":"a-391-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".vcentered-cell","selectorGuids":["6f1876c5-da6c-f3a5-f112-ebb985cda83f"]},"value":0,"unit":""}},{"id":"a-391-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-40px","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","dc2e0a54-7f1f-ab9d-433c-7df14baf70ab"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-391-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-40px","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","dc2e0a54-7f1f-ab9d-433c-7df14baf70ab"]},"value":0,"unit":""}},{"id":"a-391-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-white.space-bottom-28px.is-semibold","selectorGuids":["569930cf-5871-a139-2af1-3b23c85a6a42","de6872c8-99f1-aa44-7b2c-e83d2fc5e66e","c7cc3c4e-1a88-0182-9e14-a1522842e48e"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-391-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".is-white.space-bottom-28px.is-semibold","selectorGuids":["569930cf-5871-a139-2af1-3b23c85a6a42","de6872c8-99f1-aa44-7b2c-e83d2fc5e66e","c7cc3c4e-1a88-0182-9e14-a1522842e48e"]},"value":1,"unit":""}},{"id":"a-391-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-40px","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","dc2e0a54-7f1f-ab9d-433c-7df14baf70ab"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-391-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-40px","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","dc2e0a54-7f1f-ab9d-433c-7df14baf70ab"]},"value":1,"unit":""}},{"id":"a-391-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".vcentered-cell","selectorGuids":["6f1876c5-da6c-f3a5-f112-ebb985cda83f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737137769049},"a-397":{"id":"a-397","title":"Center Content 5","actionItemGroups":[{"actionItems":[{"id":"a-397-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a99fcf|981341b9-2bb4-cd21-7859-666215a02e42"},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-397-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a99fcf|981341b9-2bb4-cd21-7859-666215a02e42"},"value":0,"unit":""}},{"id":"a-397-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-secondary-navy-blue","selectorGuids":["32728fe1-615f-a03e-7d0e-73b06ced561b"]},"value":0,"unit":""}},{"id":"a-397-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-dark-blue.is-semibold.h2-size.align-center-text","selectorGuids":["bd728530-05ba-510f-a033-a1b5e8ef5834","ab0dcd27-cd3f-71b4-2f40-ab2c503b70d0","c71937f5-33e6-e460-d96c-d5c5f5d2aa55","6e02f73d-43f1-bc7c-dcab-8f9ec7c6f5c7"]},"value":0,"unit":""}},{"id":"a-397-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-secondary-blue2-new","selectorGuids":["cb59a97a-1bca-4f02-a65a-0011eb624ce8"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-397-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a99fcf|981341b9-2bb4-cd21-7859-666215a02e42"},"xValue":0,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}},{"id":"a-397-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","id":"68d3fbd55d90bfdc11a99fcf|981341b9-2bb4-cd21-7859-666215a02e42"},"value":1,"unit":""}},{"id":"a-397-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".is-dark-blue.is-semibold.h2-size.align-center-text","selectorGuids":["bd728530-05ba-510f-a033-a1b5e8ef5834","ab0dcd27-cd3f-71b4-2f40-ab2c503b70d0","c71937f5-33e6-e460-d96c-d5c5f5d2aa55","6e02f73d-43f1-bc7c-dcab-8f9ec7c6f5c7"]},"value":1,"unit":""}},{"id":"a-397-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"ease","duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".button-secondary-navy-blue","selectorGuids":["32728fe1-615f-a03e-7d0e-73b06ced561b"]},"value":1,"unit":""}},{"id":"a-397-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"ease","duration":2000,"target":{"useEventTarget":"CHILDREN","selector":".button-secondary-blue2-new","selectorGuids":["cb59a97a-1bca-4f02-a65a-0011eb624ce8"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737137769049},"a-408":{"id":"a-408","title":"Button Appear","actionItemGroups":[{"actionItems":[{"id":"a-408-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".full-width.flex-child-align-right","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4c","41776757-5c4d-721e-cfb0-40e69e4c3bef"]},"value":0,"unit":""}},{"id":"a-408-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a99443|2d224188-f55c-c38b-3036-36a6f1a2ce31"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-408-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a99443|2d224188-f55c-c38b-3036-36a6f1a2ce31"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-408-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".full-width.flex-child-align-right","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4c","41776757-5c4d-721e-cfb0-40e69e4c3bef"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1748858394558},"a-272":{"id":"a-272","title":"page-hero-section-opt","actionItemGroups":[{"actionItems":[{"id":"a-272-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-white.space-bottom-28px.width-850.large-h1","selectorGuids":["569930cf-5871-a139-2af1-3b23c85a6a42","de6872c8-99f1-aa44-7b2c-e83d2fc5e66e","ee318cca-a078-fbc5-50ed-8d85f3af4914","baa48a9d-aee6-915f-a8b5-799595ae9233"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-272-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-page-hero-partner-logos-opt","selectorGuids":["eb43882a-94e3-f084-db1e-1ad9d95b7c45"]},"value":0,"unit":""}},{"id":"a-272-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-272-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-secondary","selectorGuids":["4feb4bc6-66d8-37d3-4082-e3859062aac0"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-272-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".p1.is-white.space-bottom-28px.width-850","selectorGuids":["569930cf-5871-a139-2af1-3b23c85a6a16","569930cf-5871-a139-2af1-3b23c85a6a5e","96cfe4bd-3ec9-6e81-e655-925e23fe03ce","8bfa1245-bc77-5ef4-cf69-7de840cb80a5"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-272-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"yValue":12,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-272-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":1300,"target":{},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-272-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":1000,"target":{"selector":".home-page-hero-partner-logos-opt","selectorGuids":["eb43882a-94e3-f084-db1e-1ad9d95b7c45"]},"value":1,"unit":""}},{"id":"a-272-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".button-secondary","selectorGuids":["4feb4bc6-66d8-37d3-4082-e3859062aac0"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-272-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".p1.is-white.space-bottom-28px.width-850","selectorGuids":["569930cf-5871-a139-2af1-3b23c85a6a16","569930cf-5871-a139-2af1-3b23c85a6a5e","96cfe4bd-3ec9-6e81-e655-925e23fe03ce","8bfa1245-bc77-5ef4-cf69-7de840cb80a5"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-272-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".is-white.space-bottom-28px.width-850.large-h1","selectorGuids":["569930cf-5871-a139-2af1-3b23c85a6a42","de6872c8-99f1-aa44-7b2c-e83d2fc5e66e","ee318cca-a078-fbc5-50ed-8d85f3af4914","baa48a9d-aee6-915f-a8b5-799595ae9233"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-272-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737137769049}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewContactFormHubspot({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "content", "align-center")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "full-width", "align-center")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "live_wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "live_block")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "live_heading")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "is-dark-blue",
                  "space-bottom-40px",
                  "align-center"
                )}
                tag="h2"
              >
                {"Get in touch with us"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.FormWrapper
              className={_utils.cx(_styles, "hubspot_form-block")}
            >
              <_Builtin.FormForm
                name="wf-form-Contact-us---Form"
                data-name="Contact us - Form"
                method="get"
                id="wf-form-Contact-us---Form"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "hubspot_field-list")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "hubspot_field-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "hubspot_field-inner")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "hs-form")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "form-columns-1")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "hs-form-field")}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(_styles, "field-label")}
                              htmlFor="Name-4"
                            >
                              {"Name *"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "hs-input")}
                              autoFocus={false}
                              maxLength={256}
                              name="Name"
                              data-name="Name"
                              placeholder="Write your name"
                              type="text"
                              disabled={false}
                              required={true}
                              id="Name-4"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hubspot_divider")}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "form-columns-2")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "hs-form-field")}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(_styles, "field-label")}
                              htmlFor="Company-Name-3"
                            >
                              {"Company name *"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "hs-input")}
                              autoFocus={false}
                              maxLength={256}
                              name="Company-Name"
                              data-name="Company Name"
                              placeholder="Write your company name"
                              type="text"
                              disabled={false}
                              required={true}
                              id="Company-Name-3"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "hs-form-field")}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(_styles, "field-label")}
                              htmlFor="Business-Email-3"
                            >
                              {"Business email *"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextInput
                              className={_utils.cx(_styles, "hs-input")}
                              autoFocus={false}
                              maxLength={256}
                              name="Business-Email"
                              data-name="Business Email"
                              placeholder="Write your business email"
                              type="email"
                              disabled={false}
                              required={true}
                              id="Business-Email-3"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hubspot_divider")}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "form-columns-1")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "hs-form-field")}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(_styles, "field-label")}
                              htmlFor="Country-Region"
                            >
                              <_Builtin.Strong>
                                {"Country / Region *"}
                              </_Builtin.Strong>
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(
                                _styles,
                                "hs-fieldtype-select"
                              )}
                              name="Country-Region"
                              data-name="Country Region"
                              required={true}
                              multiple={false}
                              id="Country-Region"
                              options={[
                                {
                                  t: "Select one...",
                                  v: "",
                                },
                                {
                                  t: "test 1",
                                  v: "test 1",
                                },
                                {
                                  t: "test 2",
                                  v: "test 2",
                                },
                                {
                                  t: "test 3",
                                  v: "test 3",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hubspot_divider")}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "form-columns-1")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "hs-form-field")}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(_styles, "field-label")}
                              htmlFor="Option"
                            >
                              <_Builtin.Strong>
                                {"Which option best describes you?*"}
                              </_Builtin.Strong>
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormSelect
                              className={_utils.cx(
                                _styles,
                                "hs-fieldtype-select"
                              )}
                              name="Option"
                              data-name="Option"
                              required={false}
                              multiple={false}
                              id="Option"
                              options={[
                                {
                                  t: "Please select the best option",
                                  v: "",
                                },
                                {
                                  t: "test 1",
                                  v: "First",
                                },
                                {
                                  t: "test 2",
                                  v: "test 2",
                                },
                                {
                                  t: "test 3",
                                  v: "test 3",
                                },
                              ]}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hubspot_divider")}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "form-columns-1")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "hs-form-field")}
                            tag="div"
                          >
                            <_Builtin.FormBlockLabel
                              className={_utils.cx(_styles, "field-label")}
                              htmlFor="Message-3"
                            >
                              {"anything else?"}
                            </_Builtin.FormBlockLabel>
                            <_Builtin.FormTextarea
                              className={_utils.cx(
                                _styles,
                                "hs-input",
                                "hs-fieldtype-textarea"
                              )}
                              name="Message"
                              maxLength={5000}
                              data-name="Message"
                              placeholder="Write your message..."
                              required={false}
                              autoFocus={false}
                              id="Message-3"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hubspot_divider")}
                          tag="div"
                        />
                        <_Builtin.Paragraph
                          className={_utils.cx(_styles, "p1", "is-small")}
                        >
                          {
                            "Moloco is committed to respecting your privacy, and we’ll only use your personal information for the purposes set forth in our Privacy Policy. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick the box below:"
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hubspot_divider")}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "form-columns-1")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "hubspot_field-inner"
                            )}
                            tag="div"
                          >
                            <_Builtin.FormCheckboxWrapper>
                              <_Builtin.FormCheckboxInput
                                className={_utils.cx(
                                  _styles,
                                  "custom-checkbox_input"
                                )}
                                type="checkbox"
                                name="Privacy-Check-Box"
                                data-name="Privacy Check Box"
                                required={true}
                                checked={false}
                                id="Privacy-Check-Box"
                                form={{
                                  type: "checkbox-input",
                                  name: "Privacy Check Box",
                                }}
                                inputType="custom"
                                customClassName="w-checkbox-input--inputType-custom"
                              />
                              <_Builtin.FormInlineLabel
                                className={_utils.cx(_styles, "checkbox-label")}
                              >
                                {
                                  "I agree to receive updates, marketing, and other communications from Moloco."
                                }
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hubspot_divider")}
                          tag="div"
                        />
                        <_Builtin.Paragraph
                          className={_utils.cx(_styles, "p1", "is-small")}
                        >
                          {
                            "You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our "
                          }
                          <_Builtin.Link
                            button={false}
                            target="_blank"
                            block=""
                            options={{
                              href: "https://www.moloco.com/privacy-policy",
                            }}
                          >
                            <_Builtin.Span
                              className={_utils.cx(_styles, "text-link")}
                            >
                              {"Privacy Policy"}
                            </_Builtin.Span>
                          </_Builtin.Link>
                          {"."}
                          <br />
                          {""}
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hubspot_divider")}
                          tag="div"
                        />
                        <_Builtin.Paragraph
                          className={_utils.cx(_styles, "p1", "is-small")}
                        >
                          {
                            "By clicking submit you consent to receive updates, marketing, and other communications from Moloco."
                          }
                          <br />
                          {""}
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hubspot_field-inner")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "hs_submit")}
                            tag="div"
                          >
                            <_Builtin.FormButton
                              className={_utils.cx(_styles, "hs-button")}
                              type="submit"
                              value="Submit"
                              data-wait="Please wait..."
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage
                className={_utils.cx(_styles, "submitted-message")}
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "is-dark-blue")}
                  tag="h2"
                >
                  {"Success!"}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "p1", "is-small")}
                  tag="div"
                >
                  {"Thank you! We have received your submission."}
                </_Builtin.Block>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage
                className={_utils.cx(_styles, "form-message-error")}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "custom-error-message")}
                  tag="div"
                  id="hubspot-success"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "is-white")}
                    tag="h2"
                  >
                    {"Error!"}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "p1", "is-small", "is-white")}
                    tag="div"
                  >
                    {"Form submission failed. Please try again."}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "hubspot_form-embed")}
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
