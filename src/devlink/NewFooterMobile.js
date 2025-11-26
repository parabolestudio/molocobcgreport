"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NewFooterMobile.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-4057":{"id":"e-4057","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4058"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fcb|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fcb|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748507726640},"e-4071":{"id":"e-4071","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-408","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4072"}},"mediaQueries":["main"],"target":{"id":"68d3fbd55d90bfdc11a99443|2d224188-f55c-c38b-3036-36a6f1a2ce26","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99443|2d224188-f55c-c38b-3036-36a6f1a2ce26","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1748858389747},"e-4139":{"id":"e-4139","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4140"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68415d7d7b699bdd0910ee0a|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68415d7d7b699bdd0910ee0a|e2687d8b-a579-e40e-3ae7-f3a92f5562c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1749114239776},"e-4237":{"id":"e-4237","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4238"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fd0|4152fcb8-e0b6-be20-61c1-715c83fd54f1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fd0|4152fcb8-e0b6-be20-61c1-715c83fd54f1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1752830222250},"e-4253":{"id":"e-4253","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-398","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4254"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3fbd55d90bfdc11a99fd0|e54cb75d-cdaa-f94c-86a3-7c7df073a8c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3fbd55d90bfdc11a99fd0|e54cb75d-cdaa-f94c-86a3-7c7df073a8c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1753709087471}},"actionLists":{"a-398":{"id":"a-398","title":"Center Content 2","actionItemGroups":[{"actionItems":[{"id":"a-398-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".column-3x1.space-top-48px.px-20.gap-64","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4f","4f5b9d7f-8aff-64fd-d257-25ee8b88cdf5","dc65ed68-ac1e-56a5-d470-e46747d97435","3d31ebfd-74a8-2de4-b02a-156705d6037e"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".column-3x1.space-top-48px.px-20.gap-64","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4f","4f5b9d7f-8aff-64fd-d257-25ee8b88cdf5","dc65ed68-ac1e-56a5-d470-e46747d97435","3d31ebfd-74a8-2de4-b02a-156705d6037e"]},"value":0,"unit":""}},{"id":"a-398-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-main-section","selectorGuids":["b78bc07f-f271-f54e-84e7-87ef1a563b99"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-main-section","selectorGuids":["b78bc07f-f271-f54e-84e7-87ef1a563b99"]},"value":0,"unit":""}},{"id":"a-398-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-137","selectorGuids":["f6e6d838-1287-0af6-99a4-15c835979733"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-137","selectorGuids":["f6e6d838-1287-0af6-99a4-15c835979733"]},"value":0,"unit":""}},{"id":"a-398-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".banner-images-wrapper","selectorGuids":["4bf3d09a-7db0-c0d5-6b30-04834baac0a6"]},"yValue":32,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".banner-images-wrapper","selectorGuids":["4bf3d09a-7db0-c0d5-6b30-04834baac0a6"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-398-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".column-3x1.space-top-48px.px-20.gap-64","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4f","4f5b9d7f-8aff-64fd-d257-25ee8b88cdf5","dc65ed68-ac1e-56a5-d470-e46747d97435","3d31ebfd-74a8-2de4-b02a-156705d6037e"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".column-3x1.space-top-48px.px-20.gap-64","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4f","4f5b9d7f-8aff-64fd-d257-25ee8b88cdf5","dc65ed68-ac1e-56a5-d470-e46747d97435","3d31ebfd-74a8-2de4-b02a-156705d6037e"]},"value":1,"unit":""}},{"id":"a-398-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".image-main-section","selectorGuids":["b78bc07f-f271-f54e-84e7-87ef1a563b99"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".image-main-section","selectorGuids":["b78bc07f-f271-f54e-84e7-87ef1a563b99"]},"value":1,"unit":""}},{"id":"a-398-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".image-137","selectorGuids":["f6e6d838-1287-0af6-99a4-15c835979733"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".image-137","selectorGuids":["f6e6d838-1287-0af6-99a4-15c835979733"]},"value":1,"unit":""}},{"id":"a-398-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutCubic","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".banner-images-wrapper","selectorGuids":["4bf3d09a-7db0-c0d5-6b30-04834baac0a6"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-398-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"inOutCubic","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".banner-images-wrapper","selectorGuids":["4bf3d09a-7db0-c0d5-6b30-04834baac0a6"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737137769049},"a-408":{"id":"a-408","title":"Button Appear","actionItemGroups":[{"actionItems":[{"id":"a-408-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".full-width.flex-child-align-right","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4c","41776757-5c4d-721e-cfb0-40e69e4c3bef"]},"value":0,"unit":""}},{"id":"a-408-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a99443|2d224188-f55c-c38b-3036-36a6f1a2ce31"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-408-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"68d3fbd55d90bfdc11a99443|2d224188-f55c-c38b-3036-36a6f1a2ce31"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-408-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".full-width.flex-child-align-right","selectorGuids":["e0f39306-9afb-6e3d-ca14-d2e75fd67a4c","41776757-5c4d-721e-cfb0-40e69e4c3bef"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1748858394558}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewFooterMobile({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "content",
        "background-white",
        "is-centered",
        "flex-fill-container"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "div-block-129",
          "flex-fill-container",
          "padding-0"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "footer-width",
            "is-centered",
            "fill-container"
          )}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "is-centered")}
            button={false}
            aria-label=""
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              width="165"
              height="auto"
              loading="lazy"
              alt="Moloco white logo"
              src="https://cdn.prod.website-files.com/68d3fbd55d90bfdc11a99444/68d3fbd55d90bfdc11a99a91_Moloco_logo_Horiz_Secondary.webp"
            />
          </_Builtin.Link>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "footer-dropdown-new")}
            tag="div"
            delay={0}
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "dropdown-toggle-mobile")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "no-padding",
                  "space-right-4px",
                  "is-dark-blue",
                  "is-bold",
                  "h5-size"
                )}
              >
                {"Solutions"}
              </_Builtin.Paragraph>
              <_Builtin.Icon
                className={_utils.cx(_styles, "footer-dropdown-icon-new")}
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
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-footer")}
                  tag="div"
                >
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
                        "is-semibold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Moloco Ads"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16px"
                    )}
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
                        "is-semibold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Moloco SDK"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-semibold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Moloco Commerce Media"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-semibold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Moloco Streaming Monetization"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-48px"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"For Mobile App Marketers"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"For Agency Partners"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"For Commerce Platforms"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"For Streaming Platforms"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"For Games"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "footer-dropdown-new")}
            tag="div"
            delay={0}
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "dropdown-toggle-mobile")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "no-padding",
                  "space-right-4px",
                  "is-dark-blue",
                  "is-bold",
                  "h5-size"
                )}
              >
                {"Company"}
              </_Builtin.Paragraph>
              <_Builtin.Icon
                className={_utils.cx(_styles, "footer-dropdown-icon-new")}
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
                className={_utils.cx(_styles, "footer-company-wrapper")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"About Moloco"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Blog"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Careers"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Newsroom"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Help Center"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "space-right-8px",
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Moloco Ads Developer Hub"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "space-right-8px",
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Commerce Media Developer Hub"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Suppliers"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Privacy Policy"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Brand Safety Policy"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Advertising Policy"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Terms of Use"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "clicable-links-pages",
                      "space-top-16x"
                    )}
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
                        "is-bold",
                        "link-hover"
                      )}
                      tag="h5"
                    >
                      {"Security"}
                    </_Builtin.Heading>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.Block
            className={_utils.cx(_styles, "full-width", "space-top-40px")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "column-3x1", "flex-stretch")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-privacy-wrapper")}
              id={_utils.cx(
                _styles,
                "w-node-_12c2df38-e0ff-a436-4a58-c38a3d28a8af-3d28a861"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(
                  _styles,
                  "",
                  "html-embed-footer",
                  "footer-link-new",
                  "is-dark-blue",
                  "is-bold",
                  "py-0"
                )}
                value="%3Cspan%20class%3D%22text-12%22%3E%20%0A%20%20%3Ca%20id%3D%22ot-sdk-link%22%20class%3D%22ot-sdk-show-settings%20text-footer%22%20href%3D%22%23%22%20style%3D%22color%3A%23000a73%3B%20text-decoration%3A%20none%3B%20font-weight%3A%20700%3B%20font-size%3A%200.875rem%3B%22%3EYour%20Privacy%20Choices%3C%2Fa%3E%0A%3C%2Fspan%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-copyright")}
                tag="div"
              >
                {"© 2024 Moloco, Inc."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "social-media-new")}
              id={_utils.cx(
                _styles,
                "w-node-_12c2df38-e0ff-a436-4a58-c38a3d28a8b2-3d28a861"
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
                block="inline"
                options={{
                  href: "https://www.facebook.com/MolocoGlobal",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  id={_utils.cx(
                    _styles,
                    "w-node-_12c2df38-e0ff-a436-4a58-c38a3d28a8b4-3d28a861"
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
                block="inline"
                options={{
                  href: "https://twitter.com/molocohq?lang=en",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  id={_utils.cx(
                    _styles,
                    "w-node-_12c2df38-e0ff-a436-4a58-c38a3d28a8b6-3d28a861"
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
                    "w-node-_12c2df38-e0ff-a436-4a58-c38a3d28a8b8-3d28a861"
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
                    "w-node-_12c2df38-e0ff-a436-4a58-c38a3d28a8ba-3d28a861"
                  )}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/68d3fbd55d90bfdc11a99444/68d3fbd55d90bfdc11a9a450_YouTube.svg"
                />
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              id={_utils.cx(
                _styles,
                "w-node-f4dcf613-9b09-fc68-804a-6105289cee5f-3d28a861"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "button-primary")}
                id={_utils.cx(
                  _styles,
                  "w-node-f4dcf613-9b09-fc68-804a-6105289cee60-3d28a861"
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
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
