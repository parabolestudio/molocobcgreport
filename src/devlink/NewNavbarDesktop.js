"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NewNavbarDesktop.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1185":{"id":"e-1185","name":"","animationType":"preset","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-96","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1186"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1699376653705},"e-1186":{"id":"e-1186","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-97","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1185"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1699376653705}},"actionLists":{"a-96":{"id":"a-96","title":"Navbar - down","actionItemGroups":[{"actionItems":[{"id":"a-96-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":100,"target":{"selector":".navbar-desktop","selectorGuids":["0362414e-05ac-bf52-e27b-3169ba094ae2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1699617557891},"a-97":{"id":"a-97","title":"Navbar - Up","actionItemGroups":[{"actionItems":[{"id":"a-97-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar-desktop","selectorGuids":["0362414e-05ac-bf52-e27b-3169ba094ae2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-97-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":250,"target":{"selector":".navbar-desktop","selectorGuids":["0362414e-05ac-bf52-e27b-3169ba094ae2"]},"yValue":-110,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1699617605366}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewNavbarDesktop({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar-desktop")}
      tag="div"
      id="Nav-bar-desktop"
    >
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "main-nav-bar")}
        tag="div"
        id="Nav-bar-mobile"
        config={{
          animation: "default",
          collapse: "medium",
          docHeight: false,
          duration: 400,
          easing: "ease",
          easing2: "ease",
          noScroll: false,
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-bar-left-align")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "brand-desktop")}
              button={false}
              aria-label="homepage"
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "moloco-logo")}
                loading="eager"
                width="167"
                height="15"
                alt="Moloco logo primary"
                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6544ad7675a308ab53b4c354_Moloco_logo_Horiz_Primary%201.webp"
              />
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-bar-block")}
              tag="div"
            >
              <_Builtin.DropdownWrapper
                className={_utils.cx(_styles, "navbar-dropdown")}
                tag="div"
                id="version-A"
                delay={50}
                hover={true}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "navbar-dropdown-toggle")}
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
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav-icon")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "arrow-icon-nav")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="click here to open the menu"
                      src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b02eda0132f5f03118e9_Nav-bar-arrow.webp"
                    />
                  </_Builtin.Link>
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(_styles, "dropdown-secondary-nav")}
                  tag="nav"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cropdown-list-content")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar-dropdown-grid")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_931ad66f-4536-c944-30c4-a0ebae39f2f5-4874aee1"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dropdown-theme")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_931ad66f-4536-c944-30c4-a0ebae39f2f6-4874aee1"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "is-uppercase",
                            "is-dark-blue",
                            "is-bold",
                            "space-right-16px"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_931ad66f-4536-c944-30c4-a0ebae39f2f7-4874aee1"
                          )}
                          tag="h5"
                        >
                          {"Solutions"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dropdown-page")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_931ad66f-4536-c944-30c4-a0ebae39f2f9-4874aee1"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Block tag="div">
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages"
                              )}
                              button={false}
                              aria-label="moloco cloud dsp page"
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
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                          <_Builtin.Heading
                            className={_utils.cx(
                              _styles,
                              "nav-bar-secondary-page",
                              "is-dark-blue"
                            )}
                            tag="h5"
                          >
                            {
                              "Reach 2 billion daily users on the advertising platform built for app marketers"
                            }
                          </_Builtin.Heading>
                        </_Builtin.Block>
                        <_Builtin.Block tag="div">
                          <_Builtin.Block tag="div">
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages"
                              )}
                              button={false}
                              aria-label="moloco cloud dsp page"
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
                              </_Builtin.Heading>
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                          <_Builtin.Heading
                            className={_utils.cx(
                              _styles,
                              "nav-bar-secondary-page",
                              "is-dark-blue"
                            )}
                            tag="h5"
                          >
                            {"AI-powered onsite ads for retailers"}
                          </_Builtin.Heading>
                        </_Builtin.Block>
                        <_Builtin.Block tag="div">
                          <_Builtin.Block tag="div">
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages"
                              )}
                              button={false}
                              aria-label="moloco cloud dsp page"
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
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                          <_Builtin.Heading
                            className={_utils.cx(
                              _styles,
                              "nav-bar-secondary-page",
                              "is-dark-blue"
                            )}
                            tag="h5"
                          >
                            {
                              "The AI-native ad stack for large streaming providers"
                            }
                          </_Builtin.Heading>
                        </_Builtin.Block>
                        <_Builtin.Block tag="div">
                          <_Builtin.Block tag="div">
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages"
                              )}
                              button={false}
                              aria-label="moloco cloud dsp page"
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
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                          <_Builtin.Heading
                            className={_utils.cx(
                              _styles,
                              "nav-bar-secondary-page",
                              "is-dark-blue"
                            )}
                            tag="h5"
                          >
                            {
                              "Improve app monetization with a direct Moloco integration"
                            }
                          </_Builtin.Heading>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.DropdownWrapper
                className={_utils.cx(_styles, "navbar-dropdown")}
                tag="div"
                delay={50}
                hover={true}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "navbar-dropdown-toggle")}
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
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav-icon")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "arrow-icon-nav")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="click here to open the menu"
                      src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b02eda0132f5f03118e9_Nav-bar-arrow.webp"
                    />
                  </_Builtin.Link>
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(_styles, "dropdown-secondary-nav")}
                  tag="nav"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cropdown-list-content")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar-dropdown-grid")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_931ad66f-4536-c944-30c4-a0ebae39f31a-4874aee1"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dropdown-theme")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_931ad66f-4536-c944-30c4-a0ebae39f31b-4874aee1"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "is-uppercase",
                            "is-dark-blue",
                            "is-bold",
                            "space-right-16px"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_931ad66f-4536-c944-30c4-a0ebae39f31c-4874aee1"
                          )}
                          tag="h5"
                        >
                          {"resources"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dropdown-page")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_931ad66f-4536-c944-30c4-a0ebae39f31e-4874aee1"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          id={_utils.cx(
                            _styles,
                            "w-node-_931ad66f-4536-c944-30c4-a0ebae39f31f-4874aee1"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages"
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
                                  "space-right-8px"
                                )}
                                tag="h5"
                              >
                                {"Blog"}
                              </_Builtin.Heading>
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages",
                                "space-top-8px"
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
                                  "space-right-8px"
                                )}
                                tag="h5"
                              >
                                {"Reports"}
                              </_Builtin.Heading>
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages",
                                "space-top-8px"
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
                                  "space-top-8px"
                                )}
                                tag="h5"
                              >
                                {"Case Studies"}
                              </_Builtin.Heading>
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages",
                                "space-top-8px"
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
                                  "space-top-8px"
                                )}
                                tag="h5"
                              >
                                {"Events"}
                              </_Builtin.Heading>
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dropdown-page")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_931ad66f-4536-c944-30c4-a0ebae39f333-4874aee1"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          id={_utils.cx(
                            _styles,
                            "w-node-_931ad66f-4536-c944-30c4-a0ebae39f334-4874aee1"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages"
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
                                  "space-top-8px"
                                )}
                                tag="h5"
                              >
                                {"Moloco Help Center"}
                              </_Builtin.Heading>
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages",
                                "space-top-8px"
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
                                  "space-right-8px"
                                )}
                                tag="h5"
                              >
                                {"Moloco Ads Developer Hub"}
                              </_Builtin.Heading>
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages",
                                "space-top-8px"
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
                                  "space-top-8px"
                                )}
                                tag="h5"
                              >
                                {"Commerce Media Developer Hub"}
                              </_Builtin.Heading>
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "not-global-en-ja")}
                            tag="div"
                          >
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages",
                                "space-top-8px"
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
                                  "not-global-en-ja"
                                )}
                                tag="h5"
                              >
                                {"Commerce Media GrowthU"}
                              </_Builtin.Heading>
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.DropdownWrapper
                className={_utils.cx(_styles, "navbar-dropdown")}
                tag="div"
                delay={50}
                hover={true}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "navbar-dropdown-toggle")}
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
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav-icon")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "arrow-icon-nav")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="click here to open the menu"
                      src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b02eda0132f5f03118e9_Nav-bar-arrow.webp"
                    />
                  </_Builtin.Link>
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(_styles, "dropdown-secondary-nav")}
                  tag="nav"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cropdown-list-content")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar-dropdown-grid")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_931ad66f-4536-c944-30c4-a0ebae39f34c-4874aee1"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dropdown-theme")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_931ad66f-4536-c944-30c4-a0ebae39f34d-4874aee1"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "is-uppercase",
                            "is-dark-blue",
                            "is-bold",
                            "space-right-16px"
                          )}
                          tag="h5"
                        >
                          {"company"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "dropdown-page")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_931ad66f-4536-c944-30c4-a0ebae39f350-4874aee1"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          id={_utils.cx(
                            _styles,
                            "w-node-_931ad66f-4536-c944-30c4-a0ebae39f351-4874aee1"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages"
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
                                  "space-right-8px"
                                )}
                                tag="h5"
                              >
                                {"About Moloco"}
                              </_Builtin.Heading>
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages",
                                "space-top-8px"
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
                                  "space-right-8px"
                                )}
                                tag="h5"
                              >
                                {"Careers"}
                              </_Builtin.Heading>
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                          <_Builtin.Block tag="div">
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "clicable-links-pages",
                                "space-top-8px"
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
                                  "space-top-8px"
                                )}
                                tag="h5"
                              >
                                {"Newsroom"}
                              </_Builtin.Heading>
                              <_Builtin.Image
                                className={_utils.cx(
                                  _styles,
                                  "icon-secondary-nav"
                                )}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt="Dark blue arrow to learn more about the subject "
                                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                              />
                            </_Builtin.Link>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "other-elements")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-bar-icon-block")}
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
                aria-label="search"
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
            <_Builtin.Link
              className={_utils.cx(_styles, "button-primary")}
              button={true}
              aria-label="contact us"
              id="contact-desk-nav"
              block=""
              options={{
                href: "#",
              }}
            >
              {"Contact us"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
