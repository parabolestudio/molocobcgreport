"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Testimonial.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-4025":{"id":"e-4025","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-389","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4026"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fe368620-8a70-e4fa-a26b-fdc0db3a9450","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fe368620-8a70-e4fa-a26b-fdc0db3a9450","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748353097007},"e-4071":{"id":"e-4071","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-408","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4072"}},"mediaQueries":["main"],"target":{"id":"67ff9f90bbc59406bfeb32a4|2d224188-f55c-c38b-3036-36a6f1a2ce26","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ff9f90bbc59406bfeb32a4|2d224188-f55c-c38b-3036-36a6f1a2ce26","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748858389747},"e-4187":{"id":"e-4187","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-415","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4188"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b93e5e8e-086b-04ef-d0dd-c23a7c26c330","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b93e5e8e-086b-04ef-d0dd-c23a7c26c330","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749802349108},"e-4189":{"id":"e-4189","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-416","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4190"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b6f3201c-ecce-53b2-f048-aaaf77bd38f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b6f3201c-ecce-53b2-f048-aaaf77bd38f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749803129584},"e-4169":{"id":"e-4169","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-417","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4170"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2ef7b4af-faf9-331a-6d05-745903662f44","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2ef7b4af-faf9-331a-6d05-745903662f44","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1751534360800},"e-4208":{"id":"e-4208","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-418","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4209"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"db189957-6385-ee00-def6-f476dafc8ec3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"db189957-6385-ee00-def6-f476dafc8ec3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749801433650}},"actionLists":{"a-389":{"id":"a-389","title":"Newsletter","actionItemGroups":[{"actionItems":[{"id":"a-389-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-389-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"value":0,"unit":""}},{"id":"a-389-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-389-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-389-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"value":0,"unit":""}},{"id":"a-389-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-389-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-389-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"value":1,"unit":""}},{"id":"a-389-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-389-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-389-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"value":1,"unit":""}},{"id":"a-389-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"inOutCubic","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737137769049},"a-408":{"id":"a-408","title":"Button Appear","actionItemGroups":[{"actionItems":[{"id":"a-408-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".full-width.flex-child-align-right","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4c","41776757-5c4d-721e-cfb0-40e69e4c3bef"]},"value":0,"unit":""}},{"id":"a-408-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67ff9f90bbc59406bfeb32a4|2d224188-f55c-c38b-3036-36a6f1a2ce31"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-408-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"67ff9f90bbc59406bfeb32a4|2d224188-f55c-c38b-3036-36a6f1a2ce31"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-408-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".full-width.flex-child-align-right","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4c","41776757-5c4d-721e-cfb0-40e69e4c3bef"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1748858394558},"a-415":{"id":"a-415","title":"Newsletter 2","actionItemGroups":[{"actionItems":[{"id":"a-415-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-415-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"value":0,"unit":""}},{"id":"a-415-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-415-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-415-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"value":0,"unit":""}},{"id":"a-415-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-415-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-415-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"value":1,"unit":""}},{"id":"a-415-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-415-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-415-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"value":1,"unit":""}},{"id":"a-415-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"inOutCubic","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737137769049},"a-416":{"id":"a-416","title":"Newsletter 3","actionItemGroups":[{"actionItems":[{"id":"a-416-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-416-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"value":0,"unit":""}},{"id":"a-416-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-416-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-416-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"value":0,"unit":""}},{"id":"a-416-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-416-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-416-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"value":1,"unit":""}},{"id":"a-416-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-416-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-416-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"value":1,"unit":""}},{"id":"a-416-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"inOutCubic","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737137769049},"a-417":{"id":"a-417","title":"Newsletter 4","actionItemGroups":[{"actionItems":[{"id":"a-417-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-417-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"value":0,"unit":""}},{"id":"a-417-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-417-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-417-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"value":0,"unit":""}},{"id":"a-417-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-417-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-417-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"value":1,"unit":""}},{"id":"a-417-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-417-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-417-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"value":1,"unit":""}},{"id":"a-417-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"inOutCubic","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737137769049},"a-418":{"id":"a-418","title":"Newsletter 5","actionItemGroups":[{"actionItems":[{"id":"a-418-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-418-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"value":0,"unit":""}},{"id":"a-418-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-418-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-418-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"value":0,"unit":""}},{"id":"a-418-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-418-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-418-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".is-semibold.align-center-text.h2-smaller.px-5.is-white.space-bottom-24px","selectorGuids":["0a1fdd52-ae2b-2c4b-8133-53b293cacaa3","5b87603a-d8fa-49b2-a50c-dca10322630a","10e90a91-3dc1-25f6-dfcb-06f20d1e531b","cc57c546-3096-73f8-c14c-8380d71ceef2","5f75d001-5fbb-4d47-a6c1-efc3007b0897","aa0d12db-17f0-496a-b6c1-3862823f129f"]},"value":1,"unit":""}},{"id":"a-418-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-418-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-418-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".body-text.is-white.space-bottom-24px.align-center","selectorGuids":["5aec8765-67ba-3761-9988-406676dc30c1","6c310db8-8b3f-89d6-86fd-bfd023b87d84","e7675a10-8cd8-0ef6-64fa-2d5fed0c2dfb","9a2e9993-f496-b31c-ab73-24257709619c"]},"value":1,"unit":""}},{"id":"a-418-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"inOutCubic","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".newsletter-form","selectorGuids":["dc92b5a0-fbf2-2d78-476a-ec9fbfc5ae88"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737137769049}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Testimonial({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "bg-light-gray",
        "width-100",
        "px-0",
        "py-0"
      )}
      tag="div"
    >
      <_Builtin.Section
        className={_utils.cx(
          _styles,
          "py-60",
          "space-top-80px",
          "bg-light-gray",
          "px-0-tablet"
        )}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "hero-section-div-relative-auto-height",
            "hide-element"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "background-image",
              "gradient-cover",
              "hide-element"
            )}
            loading="lazy"
            width="auto"
            alt=""
            src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/67ffa1db4361068ce1e8f68d_section.webp"
          />
        </_Builtin.Block>
        <_Builtin.BlockContainer
          className={_utils.cx(
            _styles,
            "full-width",
            "_1440-max-width",
            "align-center"
          )}
          id={_utils.cx(
            _styles,
            "w-node-_238dfef6-4783-2abb-ffb4-908f9f8025b8-9f8025b4"
          )}
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "full-width", "space-bottom-24px")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "is-semibold",
                "space-bottom-40px",
                "h1-medium",
                "align-center-text",
                "px-5",
                "h2-size"
              )}
              tag="h2"
            >
              {"Trusted by the world's biggest brands "}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.SliderWrapper
            className={_utils.cx(
              _styles,
              "client-quote-slider-old",
              "bg-light-gray",
              "height-auto"
            )}
            animation="slide"
            easing="ease"
            duration={500}
            infinite={true}
            disableSwipe={false}
            autoplay={false}
            delay={4000}
            autoMax={0}
            hideArrows={true}
            navRound={true}
            navNumbers={false}
            navShadow={true}
            navInvert={true}
            navSpacing={3}
            iconArrows={true}
          >
            <_Builtin.SliderMask
              className={_utils.cx(_styles, "slider-mask-v2", "mx-0-tablet")}
            >
              <_Builtin.SliderSlide
                className={_utils.cx(_styles, "slider-clients-v2")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "colored-spacer-teal-curved")}
                  tag="div"
                />
                <_Builtin.HFlex
                  className={_utils.cx(_styles, "slider-clients-content-v2")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "jio-logo-2")}
                    tag="div"
                  >
                    <_Builtin.Image
                      width="271"
                      height="auto"
                      loading="lazy"
                      alt="Profile"
                      src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6602ac3e9f885c2598d92932_Jio-Large.webp"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "quote-slider-client-v2")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "h2-smaller",
                        "space-bottom-16px"
                      )}
                      tag="h3"
                    >
                      <_Builtin.Strong>{"JIO"}</_Builtin.Strong>
                    </_Builtin.Heading>
                    <_Builtin.Blockquote
                      className={_utils.cx(_styles, "block-quote-v2")}
                    >
                      {
                        "“By using Moloco’s advanced algorithms and highly optimized ad-serving infrastructure, we were able to deliver ads to 32M viewers concurrently during Tata IPL 2023 and offer new monetization opportunities to our advertisers.”"
                      }
                      <br />
                      {"‍"}
                      <br />
                      <_Builtin.Strong>
                        {"— Akash Saxena"}
                        <br />
                      </_Builtin.Strong>
                      {"CPTO, JioCinema"}
                      <br />
                    </_Builtin.Blockquote>
                  </_Builtin.Block>
                </_Builtin.HFlex>
              </_Builtin.SliderSlide>
            </_Builtin.SliderMask>
            <_Builtin.SliderArrow
              className={_utils.cx(_styles, "left-arrow-3")}
              dir="left"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon-6")}
                widget={{
                  type: "icon",
                  icon: "slider-left",
                }}
              />
            </_Builtin.SliderArrow>
            <_Builtin.SliderArrow
              className={_utils.cx(_styles, "left-arrow-3-copy")}
              dir="right"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon-5")}
                widget={{
                  type: "icon",
                  icon: "slider-right",
                }}
              />
            </_Builtin.SliderArrow>
            <_Builtin.SliderNav
              className={_utils.cx(_styles, "", "slide-nav-3", "hide-element")}
            />
          </_Builtin.SliderWrapper>
        </_Builtin.BlockContainer>
      </_Builtin.Section>
    </_Component>
  );
}
