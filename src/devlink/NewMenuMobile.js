"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { LanguageNavLink } from "./LanguageNavLink";
import * as _utils from "./utils";
import _styles from "./NewMenuMobile.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1079":{"id":"e-1079","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3083"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar-mobile-dropdown","originalId":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98","appliesTo":"CLASS"},"targets":[{"selector":".navbar-mobile-dropdown","originalId":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678287591672},"e-1080":{"id":"e-1080","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-77","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3097"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar-mobile-dropdown","originalId":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98","appliesTo":"CLASS"},"targets":[{"selector":".navbar-mobile-dropdown","originalId":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1678287591684},"e-1081":{"id":"e-1081","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1082"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698938632325},"e-1082":{"id":"e-1082","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-77","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1081"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de7b34e3-8332-a739-cf27-b04e9a0053c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698938632328}},"actionLists":{"a-76":{"id":"a-76","title":"Dropdown Mobile Open","actionItemGroups":[{"actionItems":[{"id":"a-76-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98"},"heightValue":40,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-76-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-dropdown-icon","selectorGuids":["353b304b-4ff8-f6bf-b7c9-8fb8401ea405"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-76-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuart","duration":350,"target":{"useEventTarget":true,"id":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98"},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-76-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuart","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".nav-dropdown-icon","selectorGuids":["353b304b-4ff8-f6bf-b7c9-8fb8401ea405"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1678287614716},"a-77":{"id":"a-77","title":"Dropdown Mobile Close","actionItemGroups":[{"actionItems":[{"id":"a-77-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":true,"id":"65c3b92e6d4212a487b452b8|bc511df8-703a-adf7-7900-c9699f408d98"},"heightValue":40,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-77-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".nav-dropdown-icon","selectorGuids":["353b304b-4ff8-f6bf-b7c9-8fb8401ea405"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1678287614716}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewMenuMobile({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "menu-mobile-hidden")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "icons-mobile")} tag="div">
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
              <LanguageNavLink
                overrideLanguageLinkText="English"
                overrideLanguageLinkLink={{
                  href: "#",
                }}
              />
              <LanguageNavLink
                overrideLanguageLinkText="Korean"
                overrideLanguageLinkLink={{
                  href: "/ko",
                }}
              />
              <LanguageNavLink
                overrideLanguageLinkText="Chinese"
                overrideLanguageLinkLink={{
                  href: "https://www.moloco.com/zh",
                }}
              />
              <LanguageNavLink
                overrideLanguageLinkText="Japanese"
                overrideLanguageLinkLink={{
                  href: "https://www.moloco.com/ja",
                }}
              />
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-item-with-icon", "search-icon")}
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
              {"Products"}
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
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "nav-bar-secondary-theme",
                  "is-bold",
                  "is-dark-blue"
                )}
                tag="h6"
              >
                {"Grow your users through performance advertising"}
              </_Builtin.Heading>
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
                    {"Moloco Cloud DSP"}
                  </_Builtin.Heading>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "theme-mobile")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "nav-bar-secondary-theme",
                  "is-bold",
                  "is-dark-blue"
                )}
                tag="h6"
              >
                {"Monetize your commerce platform"}
              </_Builtin.Heading>
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
                    {"Moloco Retail Media Platform"}
                  </_Builtin.Heading>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "theme-mobile")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "nav-bar-secondary-theme",
                  "is-bold",
                  "is-dark-blue"
                )}
                tag="h6"
              >
                {"Launch a full-funnel advertising business"}
              </_Builtin.Heading>
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
                    {"Moloco Monetization for Streaming & OTT"}
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
                      "space-right-8px"
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
                      "space-right-8px"
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
                      "space-right-8px"
                    )}
                    tag="h5"
                  >
                    {"For Streaming Platforms"}
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
                    {"DSP Developer Hub"}
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
                    {"RMP Developer Hub"}
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
                    href: "https://help.moloco.com/hc/en-us",
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
                    {"Help Center"}
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
          block=""
          options={{
            href: "#",
          }}
        >
          {"Contact us"}
        </_Builtin.Link>
      </_Builtin.Section>
    </_Component>
  );
}
