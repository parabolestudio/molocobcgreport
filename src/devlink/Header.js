"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { NavLink } from "./NavLink";
import { SubNavLink } from "./SubNavLink";
import { LanguageNavLink } from "./LanguageNavLink";
import * as _utils from "./utils";
import _styles from "./Header.module.css";

export function Header({
  as: _Component = _Builtin.NavbarWrapper,
  imageImage = "https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62dacc6e54df9a55b4134c72_286_78%20moloco%20logo-01.webp",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      tag="div"
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
      <_Builtin.NavbarContainer
        className={_utils.cx(_styles, "container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "mobile-header-wrap")}
          tag="div"
        >
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "brand")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              loading="eager"
              width="auto"
              height="auto"
              alt=""
              src={imageImage}
            />
          </_Builtin.NavbarBrand>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "mobile-languages-icon")}
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
                loading="lazy"
                width="auto"
                height="auto"
                alt="Globe icon"
                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6241dee1ad1a5b643800b857_GLOBE-LINEART.svg"
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(
                _styles,
                "dropdown-list",
                "language-dropdown"
              )}
              tag="nav"
            >
              <NavLink
                overrideNavLinkText="English"
                overrideNavLinkLink={{
                  href: "#",
                }}
              />
              <NavLink
                overrideNavLinkText="Korean"
                overrideNavLinkLink={{
                  href: "#",
                }}
              />
              <NavLink
                overrideNavLinkText="Chinese"
                overrideNavLinkLink={{
                  href: "#",
                }}
              />
              <NavLink
                overrideNavLinkText="Japanese"
                overrideNavLinkLink={{
                  href: "#",
                }}
              />
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "menu-button")}
            tag="div"
          >
            <_Builtin.Icon
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "nav-bar")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "dropdown")}
            tag="div"
            delay={0}
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block-16")}
                tag="div"
              >
                {"Products"}
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "dropdown-list")}
              tag="nav"
            >
              <_Builtin.Container
                className={_utils.cx(_styles, "container")}
                tag="div"
              >
                <_Builtin.Row
                  className={_utils.cx(_styles, "columns")}
                  tag="div"
                  columns={{
                    main: "6|6",
                    medium: "",
                    small: "",
                    tiny: "",
                  }}
                >
                  <_Builtin.Column
                    className={_utils.cx(_styles, "hide-on-mobile")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "subnav-heading",
                        "text-blue"
                      )}
                      tag="h3"
                    >
                      {"Products"}
                    </_Builtin.Heading>
                  </_Builtin.Column>
                  <_Builtin.Column
                    className={_utils.cx(_styles, "subnav-left-border")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "nav-header")}
                      tag="h5"
                    >
                      {"Grow your users through performance advertising"}
                    </_Builtin.Heading>
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "#",
                      }}
                    />
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "nav-header")}
                      tag="h5"
                    >
                      {"Monetize your commerce platform"}
                    </_Builtin.Heading>
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "#",
                      }}
                      overrideSubNavLinkText="Moloco Retail Media Platform"
                    />
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "nav-header")}
                      tag="h5"
                    >
                      {"Launch a full-funnel advertising business"}
                    </_Builtin.Heading>
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "#",
                      }}
                      overrideSubNavLinkText="Moloco Monetization for Streaming & OTT"
                    />
                  </_Builtin.Column>
                </_Builtin.Row>
              </_Builtin.Container>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "dropdown")}
            tag="div"
            delay={0}
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "", "text-block-16")}
                tag="div"
              >
                {"Solutions"}
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "dropdown-list")}
              tag="nav"
            >
              <_Builtin.Container
                className={_utils.cx(_styles, "container")}
                tag="div"
              >
                <_Builtin.Row
                  className={_utils.cx(_styles, "columns")}
                  tag="div"
                  columns={{
                    main: "6|3|3",
                    medium: "",
                    small: "",
                    tiny: "",
                  }}
                >
                  <_Builtin.Column
                    className={_utils.cx(_styles, "hide-on-mobile")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "subnav-heading",
                        "text-blue"
                      )}
                      tag="h3"
                    >
                      {"Solutions"}
                    </_Builtin.Heading>
                  </_Builtin.Column>
                  <_Builtin.Column
                    className={_utils.cx(_styles, "subnav-left-border")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "nav-header")}
                      tag="div"
                    >
                      {"For Advertisers"}
                    </_Builtin.Block>
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "#",
                      }}
                      overrideSubNavLinkText="User Acquisition"
                    />
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "#",
                      }}
                      overrideSubNavLinkText="Gaming"
                    />
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "#",
                      }}
                      overrideSubNavLinkText="Fintech"
                    />
                  </_Builtin.Column>
                  <_Builtin.Column
                    className={_utils.cx(_styles, "column-22")}
                    tag="div"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "nav-header",
                        "secondary-header"
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"For Commerce Platforms"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "nav-header",
                        "secondary-header"
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"For Agencies"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "nav-header",
                        "secondary-header"
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"For Streaming Platforms"}
                    </_Builtin.DropdownLink>
                  </_Builtin.Column>
                </_Builtin.Row>
              </_Builtin.Container>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "dropdown")}
            tag="div"
            delay={0}
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link-header")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "", "text-block-16")}
                  tag="div"
                >
                  {"Resources"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "dropdown-list")}
              tag="nav"
            >
              <_Builtin.Container
                className={_utils.cx(_styles, "container")}
                tag="div"
              >
                <_Builtin.Row
                  className={_utils.cx(_styles, "columns")}
                  tag="div"
                  columns={{
                    main: "6|3|3",
                    medium: "",
                    small: "",
                    tiny: "",
                  }}
                >
                  <_Builtin.Column
                    className={_utils.cx(_styles, "hide-on-mobile")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "subnav-heading",
                        "text-blue"
                      )}
                      tag="h3"
                    >
                      {"Resources"}
                    </_Builtin.Heading>
                  </_Builtin.Column>
                  <_Builtin.Column
                    className={_utils.cx(_styles, "subnav-left-border")}
                    tag="div"
                  >
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "#",
                      }}
                      overrideSubNavLinkText="Blog"
                    />
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "#",
                      }}
                      overrideSubNavLinkText="Reports"
                    />
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "#",
                      }}
                      overrideSubNavLinkText="Case Studies"
                    />
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "#",
                      }}
                      overrideSubNavLinkText="Events"
                    />
                  </_Builtin.Column>
                  <_Builtin.Column
                    className={_utils.cx(_styles, "column-22")}
                    tag="div"
                  >
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "https://developer.moloco.cloud/",
                        target: "_blank",
                      }}
                      overrideSubNavLinkText="DSP Developer Hub"
                    />
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "https://rmp-docs.moloco.com/",
                        target: "_blank",
                      }}
                      overrideSubNavLinkText="RMP Developer Hub"
                    />
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "https://help.moloco.com/hc/en-us",
                      }}
                      overrideSubNavLinkText="Help Center"
                    />
                  </_Builtin.Column>
                </_Builtin.Row>
              </_Builtin.Container>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "dropdown")}
            tag="div"
            delay={0}
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "nav-link-header")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "", "text-block-16")}
                  tag="div"
                >
                  {"Company"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "dropdown-list")}
              tag="nav"
            >
              <_Builtin.Container
                className={_utils.cx(_styles, "container")}
                tag="div"
              >
                <_Builtin.Row
                  className={_utils.cx(_styles, "columns")}
                  tag="div"
                  columns={{
                    main: "6|6",
                    medium: "",
                    small: "",
                    tiny: "",
                  }}
                >
                  <_Builtin.Column
                    className={_utils.cx(_styles, "hide-on-mobile")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "subnav-heading",
                        "text-blue"
                      )}
                      tag="h3"
                    >
                      {"Company"}
                    </_Builtin.Heading>
                  </_Builtin.Column>
                  <_Builtin.Column
                    className={_utils.cx(_styles, "subnav-left-border")}
                    tag="div"
                  >
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "#",
                      }}
                      overrideSubNavLinkText="About Moloco"
                    />
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "#",
                      }}
                      overrideSubNavLinkText="Careers"
                    />
                    <SubNavLink
                      overrideSubNavLinkLink={{
                        href: "#",
                      }}
                      overrideSubNavLinkText="Newsroom"
                    />
                  </_Builtin.Column>
                </_Builtin.Row>
              </_Builtin.Container>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
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
                alt="Globe icon"
                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6241dee1ad1a5b643800b857_GLOBE-LINEART.svg"
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
              alt="Moloco search icon"
              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6241dee1ad1a5b511f00b859_SEARCH-LINEART.svg"
            />
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "button-yellow",
              "button-medium",
              "text-white",
              "ml-25"
            )}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Contact Us"}
          </_Builtin.Link>
        </_Builtin.NavbarMenu>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
