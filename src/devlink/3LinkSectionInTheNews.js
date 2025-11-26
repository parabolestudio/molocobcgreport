"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./3LinkSectionInTheNews.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-4057":{"id":"e-4057","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4058"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"681362fed4c3d7a6e9920ab5|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"681362fed4c3d7a6e9920ab5|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748507726640},"e-4139":{"id":"e-4139","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4140"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68415d7d7b699bdd0910ee0a|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68415d7d7b699bdd0910ee0a|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749114239776},"e-4372":{"id":"e-4372","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4373"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68e775548e2d9afa35770152|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68e775548e2d9afa35770152|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1759999318354},"e-4400":{"id":"e-4400","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4487"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68ecef4028c92e25c2b4698a|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68ecef4028c92e25c2b4698a|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1760358210752},"e-4436":{"id":"e-4436","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4437"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68f630e3c19d41ee7f0676e9|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68f630e3c19d41ee7f0676e9|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1760964837372},"e-4459":{"id":"e-4459","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4460"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68f9f848a554a59bedb6e29f|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68f9f848a554a59bedb6e29f|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1761212490758},"e-4475":{"id":"e-4475","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4476"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68fa0530d4ae4db9ecd1e7b7|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68fa0530d4ae4db9ecd1e7b7|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1761215795258},"e-4651":{"id":"e-4651","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4652"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6915b58ad0a9229067c094f0|7fa9fe2b-b17d-25d9-f990-f8e92c8e04f8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6915b58ad0a9229067c094f0|7fa9fe2b-b17d-25d9-f990-f8e92c8e04f8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1763033918125}},"actionLists":{"a-398":{"id":"a-398","title":"Center Content 2","actionItemGroups":[{"actionItems":[{"id":"a-398-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".column-3x1.space-top-48px.px-20.gap-64","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4f","4f5b9d7f-8aff-64fd-d257-25ee8b88cdf5","dc65ed68-ac1e-56a5-d470-e46747d97435","3d31ebfd-74a8-2de4-b02a-156705d6037e"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".column-3x1.space-top-48px.px-20.gap-64","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4f","4f5b9d7f-8aff-64fd-d257-25ee8b88cdf5","dc65ed68-ac1e-56a5-d470-e46747d97435","3d31ebfd-74a8-2de4-b02a-156705d6037e"]},"value":0,"unit":""}},{"id":"a-398-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-main-section","selectorGuids":["b78bc07f-f271-f54e-84e7-87ef1a563b99"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-main-section","selectorGuids":["b78bc07f-f271-f54e-84e7-87ef1a563b99"]},"value":0,"unit":""}},{"id":"a-398-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-137","selectorGuids":["f6e6d838-1287-0af6-99a4-15c835979733"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-137","selectorGuids":["f6e6d838-1287-0af6-99a4-15c835979733"]},"value":0,"unit":""}},{"id":"a-398-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".banner-images-wrapper","selectorGuids":["4bf3d09a-7db0-c0d5-6b30-04834baac0a6"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".banner-images-wrapper","selectorGuids":["4bf3d09a-7db0-c0d5-6b30-04834baac0a6"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-398-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".column-3x1.space-top-48px.px-20.gap-64","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4f","4f5b9d7f-8aff-64fd-d257-25ee8b88cdf5","dc65ed68-ac1e-56a5-d470-e46747d97435","3d31ebfd-74a8-2de4-b02a-156705d6037e"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".column-3x1.space-top-48px.px-20.gap-64","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4f","4f5b9d7f-8aff-64fd-d257-25ee8b88cdf5","dc65ed68-ac1e-56a5-d470-e46747d97435","3d31ebfd-74a8-2de4-b02a-156705d6037e"]},"value":1,"unit":""}},{"id":"a-398-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".image-main-section","selectorGuids":["b78bc07f-f271-f54e-84e7-87ef1a563b99"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".image-main-section","selectorGuids":["b78bc07f-f271-f54e-84e7-87ef1a563b99"]},"value":1,"unit":""}},{"id":"a-398-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".image-137","selectorGuids":["f6e6d838-1287-0af6-99a4-15c835979733"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".image-137","selectorGuids":["f6e6d838-1287-0af6-99a4-15c835979733"]},"value":1,"unit":""}},{"id":"a-398-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".banner-images-wrapper","selectorGuids":["4bf3d09a-7db0-c0d5-6b30-04834baac0a6"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".banner-images-wrapper","selectorGuids":["4bf3d09a-7db0-c0d5-6b30-04834baac0a6"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737137769049}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function __3LinkSectionInTheNews({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "gray-gradient-light",
        "width-100",
        "flex-align-center"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "content", "when-empty-hide-2")}
        tag="div"
      >
        <_Builtin.HFlex
          className={_utils.cx(_styles, "flex-block-8-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-153")}
            id={_utils.cx(
              _styles,
              "w-node-_8565fe02-7e8d-e4c1-434e-43e464b89431-64b8942e"
            )}
            tag="div"
          >
            <_Builtin.NotSupported _atom="DynamoWrapper" />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "column-3x1", "gap-24")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "align-center", "space-top-24px")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button-primary-new-dark-blue")}
              id={_utils.cx(
                _styles,
                "w-node-_8565fe02-7e8d-e4c1-434e-43e464b89446-64b8942e"
              )}
              button={false}
              aria-label="see open positions"
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "button-text")}
                tag="div"
              >
                {"See All"}
              </_Builtin.Block>
              <_Builtin.Image
                className={_utils.cx(_styles, "button-icon")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="White arrow to learn more about the subject "
                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6544c48db72afc64022178de_Arrow-white.webp"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.HFlex>
      </_Builtin.Block>
    </_Component>
  );
}
