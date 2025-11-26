"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { LanguageNavLink } from "./LanguageNavLink";
import * as _utils from "./utils";
import _styles from "./NavBarDesktopNavy.module.css";

export function NavBarDesktopNavy({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "main-nav-bar")}
      tag="div"
      id="Nav-bar-mobile"
      config={{
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
        animation: "default",
        collapse: "medium",
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "nav-container")} tag="div">
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
              width="167"
              height="15"
              loading="eager"
              alt="White horizontal Moloco logo"
              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62a9400479333a5aae13d9ea_Moloco_logo_Horiz_Wht.webp"
            />
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-bar-block", "hidden")}
            tag="div"
            id="alt-0"
          >
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
                  {"Products"}
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
                    width="auto"
                    height="auto"
                    loading="lazy"
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
                      "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd03-de3ffcf5"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-theme")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd04-de3ffcf5"
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
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd05-de3ffcf5"
                        )}
                        tag="h5"
                      >
                        {"products"}
                      </_Builtin.Heading>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-page")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd07-de3ffcf5"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block tag="div">
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
                                "space-right-8px"
                              )}
                              tag="h5"
                            >
                              {"Moloco Ads (Moloco Cloud DSP)"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block tag="div">
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
                            className={_utils.cx(
                              _styles,
                              "clicable-links-pages"
                            )}
                            button={false}
                            aria-label="moloco retail media platform"
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
                              {"Moloco Commerce Media (Retail Media Platform)"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block tag="div">
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
                            className={_utils.cx(
                              _styles,
                              "clicable-links-pages"
                            )}
                            button={false}
                            aria-label="moloco monetization for streaming & ott page"
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
                              {"Moloco Streaming Monetization"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                    width="auto"
                    height="auto"
                    loading="lazy"
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
                      "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd28-de3ffcf5"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-theme")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd29-de3ffcf5"
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
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd2a-de3ffcf5"
                        )}
                        tag="h5"
                      >
                        {"SOLUTIONS"}
                      </_Builtin.Heading>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-page")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd2c-de3ffcf5"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        id={_utils.cx(
                          _styles,
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd2d-de3ffcf5"
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
                            aria-label="mobile app marketers page"
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
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                            aria-label="commerce platforms page"
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
                              {"For Agency Partners"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                            aria-label="commerce platforms page"
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
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                            aria-label="streaming platform page"
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
                              {"For Streaming Platforms"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                    width="auto"
                    height="auto"
                    loading="lazy"
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
                      "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd4f-de3ffcf5"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-theme")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd50-de3ffcf5"
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
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd51-de3ffcf5"
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
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd53-de3ffcf5"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        id={_utils.cx(
                          _styles,
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd54-de3ffcf5"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd68-de3ffcf5"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        id={_utils.cx(
                          _styles,
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd69-de3ffcf5"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              href: "https://help.moloco.com/hc/en-us",
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
                              {"Moloco Ads Help Center"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                    width="auto"
                    height="auto"
                    loading="lazy"
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
                      "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd81-de3ffcf5"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-theme")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd82-de3ffcf5"
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
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd85-de3ffcf5"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        id={_utils.cx(
                          _styles,
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd86-de3ffcf5"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-bar-block", "hidden")}
            tag="div"
            id="alt-1"
          >
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
                    width="auto"
                    height="auto"
                    loading="lazy"
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
                      "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffd9f-de3ffcf5"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-theme")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffda0-de3ffcf5"
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
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffda1-de3ffcf5"
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
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffda3-de3ffcf5"
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
                              {"Moloco Ads (Moloco Cloud DSP)"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                          {"Grow your app on the open internet"}
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
                              {"Moloco Commerce Media (Retail Media Platform)"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                            "Turn online retail and marketplaces into a thriving ads business"
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
                              {"Moloco Streaming Monetization"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                          {"Future-proof your streaming ad platform"}
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
                    width="auto"
                    height="auto"
                    loading="lazy"
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
                      "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffdc4-de3ffcf5"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-theme")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffdc5-de3ffcf5"
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
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffdc6-de3ffcf5"
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
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffdc8-de3ffcf5"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        id={_utils.cx(
                          _styles,
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffdc9-de3ffcf5"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffddd-de3ffcf5"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        id={_utils.cx(
                          _styles,
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffdde-de3ffcf5"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              href: "https://help.moloco.com/hc/en-us",
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
                              {"Moloco Ads Help Center"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                    width="auto"
                    height="auto"
                    loading="lazy"
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
                      "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffdf6-de3ffcf5"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-theme")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffdf7-de3ffcf5"
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
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffdfa-de3ffcf5"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        id={_utils.cx(
                          _styles,
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffdfb-de3ffcf5"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                    "is-white"
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
                    width="auto"
                    height="auto"
                    loading="lazy"
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
                      "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffe14-de3ffcf5"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-theme")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffe15-de3ffcf5"
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
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffe16-de3ffcf5"
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
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffe18-de3ffcf5"
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
                              {"For Marketers"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                          {"Moloco Ads - Grow your app on the open internet"}
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
                              {"For Publishers"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                          {"Moloco SDK - Maximize your app's revenue"}
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
                              {"For Retailers/Marketplaces"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                            "Moloco Commerce Media - Build your own performance ads business"
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
                              {"For Streaming Platforms"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                            "Moloco Streaming Monetization - Future-proof your streaming ads platform"
                          }
                        </_Builtin.Heading>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className={_utils.cx(_styles, "navbar-dropdown", "hidden")}
              tag="div"
              id="version-B"
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
                    width="auto"
                    height="auto"
                    loading="lazy"
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
                    className={_utils.cx(_styles, "navbar-dropdown-flex-sub")}
                    id={_utils.cx(
                      _styles,
                      "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffe41-de3ffcf5"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-theme")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffe42-de3ffcf5"
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
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffe43-de3ffcf5"
                        )}
                        tag="h5"
                      >
                        {"Solutions"}
                      </_Builtin.Heading>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-page-sub")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffe45-de3ffcf5"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block tag="div" id="for-marketers">
                        <_Builtin.Block tag="div">
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "clicable-links-pages"
                            )}
                            button={false}
                            aria-label="moloco for marketers"
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
                              {"For Marketers"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block tag="div" id="for-publishers">
                        <_Builtin.Block tag="div">
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "clicable-links-pages"
                            )}
                            button={false}
                            aria-label="moloco sdk for publishers"
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
                              {"For Publishers"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block tag="div" id="for-retailers">
                        <_Builtin.Block tag="div">
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "clicable-links-pages"
                            )}
                            button={false}
                            aria-label="moloco commerce for retailers"
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
                              {"For Retailers/Marketplaces"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block tag="div" id="for-streaming">
                        <_Builtin.Block tag="div">
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "clicable-links-pages"
                            )}
                            button={false}
                            aria-label="moloco for streaming"
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
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "nav-arrow-theme")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffe5e-de3ffcf5"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "triangle-left")}
                        tag="div"
                        id="arrow-for-marketers"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "triangle-left")}
                        tag="div"
                        id="arrow-for-publishers"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "triangle-left")}
                        tag="div"
                        id="arrow-for-retailers"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "triangle-left")}
                        tag="div"
                        id="arrow-for-streaming"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "sub-dropdown-page",
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffe63-de3ffcf5"
                      )}
                      id={_utils.cx(_styles, "sub-dropdown-page")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "sub-nav")}
                        tag="div"
                        id="sub-for-marketers"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "clicable-links-pages-2"
                            )}
                            button={false}
                            aria-label="moloco ads page"
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
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "nav-bar-secondary-page",
                            "is-dark-blue",
                            "pb-10"
                          )}
                          tag="h5"
                        >
                          {"Grow your app on the open internet"}
                        </_Builtin.Heading>
                        <_Builtin.Block tag="div">
                          <_Builtin.Link
                            className={_utils.cx(_styles, "sub-links-pages")}
                            button={false}
                            aria-label="moloco ads for agencies"
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
                              {"Moloco Ads for Agencies"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                          <_Builtin.Link
                            className={_utils.cx(_styles, "sub-links-pages")}
                            button={false}
                            aria-label="moloco ads case studies and blogs"
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
                              {"Case studies, blogs, reports"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                          <_Builtin.Link
                            className={_utils.cx(_styles, "sub-links-pages")}
                            button={false}
                            aria-label="moloco ads developer hub"
                            block="inline"
                            options={{
                              href: "#",
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
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                          <_Builtin.Link
                            className={_utils.cx(_styles, "sub-links-pages")}
                            button={false}
                            aria-label="moloco ads help center"
                            block="inline"
                            options={{
                              href: "#",
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
                              {"Moloco Ads Help Center"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "sub-nav")}
                        tag="main"
                        id="sub-for-publishers"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "clicable-links-pages-2"
                            )}
                            button={false}
                            aria-label="moloco sdk page"
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
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "nav-bar-secondary-page",
                            "is-dark-blue",
                            "pb-10"
                          )}
                          tag="h5"
                        >
                          {"Maximize your app's revenue"}
                        </_Builtin.Heading>
                        <_Builtin.Block tag="div">
                          <_Builtin.Link
                            className={_utils.cx(_styles, "sub-links-pages")}
                            button={false}
                            aria-label="moloco sdk blogs and case studies"
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
                              {"Case studies, blogs, reports"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                          <_Builtin.Link
                            className={_utils.cx(_styles, "sub-links-pages")}
                            button={false}
                            aria-label="moloco sdk help center"
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
                              {"Moloco SDK Help Center"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "sub-nav")}
                        tag="div"
                        id="sub-for-retailers"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "clicable-links-pages-2"
                            )}
                            button={false}
                            aria-label="moloco commerce media page"
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
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "nav-bar-secondary-page",
                            "is-dark-blue",
                            "pb-10"
                          )}
                          tag="h5"
                        >
                          {"Build your own performance ads business"}
                        </_Builtin.Heading>
                        <_Builtin.Block tag="div">
                          <_Builtin.Link
                            className={_utils.cx(_styles, "sub-links-pages")}
                            button={false}
                            aria-label="moloco commerce media case studies and blogs"
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
                              {"Case studies, blogs, reports"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                          <_Builtin.Link
                            className={_utils.cx(_styles, "sub-links-pages")}
                            button={false}
                            aria-label="Commerce Media GrowthU"
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
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                          <_Builtin.Link
                            className={_utils.cx(_styles, "sub-links-pages")}
                            button={false}
                            aria-label="commerce developer hub"
                            block="inline"
                            options={{
                              href: "#",
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
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "sub-nav")}
                        tag="div"
                        id="sub-for-streaming"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "clicable-links-pages-2"
                            )}
                            button={false}
                            aria-label="moloco streaming page"
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
                              {"Moloco Streaming"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "nav-bar-secondary-page",
                            "is-dark-blue",
                            "pb-10"
                          )}
                          tag="h5"
                        >
                          {"Future-proof your streaming ads platform"}
                        </_Builtin.Heading>
                        <_Builtin.Block tag="div">
                          <_Builtin.Link
                            className={_utils.cx(_styles, "sub-links-pages")}
                            button={false}
                            aria-label="moloco streaming blogs"
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
                              {"Case studies, blogs, reports"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav-2"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "hidden")}
              value="%3Cscript%3E%0A%20%20%20%20%20%20%20%20document.addEventListener('DOMContentLoaded'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20Get%20references%20to%20all%20necessary%20elements%0A%20%20%20%20%20%20%20%20const%20forMarketersLink%20%3D%20document.getElementById('for-marketers')%3B%0A%20%20%20%20%20%20%20%20const%20forPublishersLink%20%3D%20document.getElementById('for-publishers')%3B%0A%20%20%20%20%20%20%20%20const%20forRetailersLink%20%3D%20document.getElementById('for-retailers')%3B%0A%20%20%20%20%20%20%20%20const%20forStreamingLink%20%3D%20document.getElementById('for-streaming')%3B%0A%0A%20%20%20%20%20%20%20%20const%20subForMarketers%20%3D%20document.getElementById('sub-for-marketers')%3B%0A%20%20%20%20%20%20%20%20const%20subForPublishers%20%3D%20document.getElementById('sub-for-publishers')%3B%0A%20%20%20%20%20%20%20%20const%20subForRetailers%20%3D%20document.getElementById('sub-for-retailers')%3B%0A%20%20%20%20%20%20%20%20const%20subForStreaming%20%3D%20document.getElementById('sub-for-streaming')%3B%0A%0A%20%20%20%20%20%20%20%20const%20arrowForMarketers%20%3D%20document.getElementById('arrow-for-marketers')%3B%0A%20%20%20%20%20%20%20%20const%20arrowForPublishers%20%3D%20document.getElementById('arrow-for-publishers')%3B%0A%20%20%20%20%20%20%20%20const%20arrowForRetailers%20%3D%20document.getElementById('arrow-for-retailers')%3B%0A%20%20%20%20%20%20%20%20const%20arrowForStreaming%20%3D%20document.getElementById('arrow-for-streaming')%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20const%20subNavContainer%20%3D%20document.getElementById('sub-dropdown-page')%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Function%20to%20show%20the%20corresponding%20sub-nav%20and%20hide%20others%0A%20%20%20%20%20%20%20%20function%20showSubNav(subNavElement)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20allSubNavs%20%3D%20%5BsubForMarketers%2C%20subForPublishers%2C%20subForRetailers%2C%20subForStreaming%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20allArrows%20%3D%20%5BarrowForMarketers%2C%20arrowForPublishers%2C%20arrowForRetailers%2C%20arrowForStreaming%5D%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20allSubNavs.forEach(function(subNav%2C%20index)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(subNav%20%3D%3D%3D%20subNavElement)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20subNav.style.display%20%3D%20'block'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20subNavContainer.style.display%20%3D%20'block'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09allArrows%5Bindex%5D.style.borderRightColor%20%3D%20'white'%3B%20%2F%2F%20Show%20corresponding%20arrow%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20subNav.style.display%20%3D%20'none'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09allArrows%5Bindex%5D.style.borderRightColor%20%3D%20'transparent'%3B%20%2F%2F%20Hide%20other%20arrows%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2FsubNavContainer.style.display%20%3D%20'none'%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Show%20sub-for-marketers%20and%20its%20arrow%20by%20default%0A%20%20%20%20%20%20%20%20%2F%2FshowSubNav(subForMarketers)%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%2F%2F%20Show%20none%20by%20default%0A%09%09%09%09%2F%2FshowSubNav(false)%3B%0A%09%09%09%09subNavContainer.style.display%20%3D%20'none'%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Event%20listeners%20for%20each%20nav%20link%0A%20%20%20%20%20%20%20%20forMarketersLink.addEventListener('mouseover'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20showSubNav(subForMarketers)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20forPublishersLink.addEventListener('mouseover'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20showSubNav(subForPublishers)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20forRetailersLink.addEventListener('mouseover'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20showSubNav(subForRetailers)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20forStreamingLink.addEventListener('mouseover'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20showSubNav(subForStreaming)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2FsubNavContainer.style.display%20%3D%20'none'%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%0A%3C%2Fscript%3E"
            />
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
                    "is-white"
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
                    width="auto"
                    height="auto"
                    loading="lazy"
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
                      "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffeb9-de3ffcf5"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-theme")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffeba-de3ffcf5"
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
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffebb-de3ffcf5"
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
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffebd-de3ffcf5"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        id={_utils.cx(
                          _styles,
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffebe-de3ffcf5"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffed2-de3ffcf5"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        id={_utils.cx(
                          _styles,
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffed3-de3ffcf5"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              href: "https://help.moloco.com/hc/en-us",
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
                              {"Moloco Ads Help Center"}
                            </_Builtin.Heading>
                            <_Builtin.Image
                              className={_utils.cx(
                                _styles,
                                "icon-secondary-nav"
                              )}
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Dark blue arrow to learn more about the subject "
                              src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/6543b2b845a2672524fa4e23_Right-arrow.webp"
                            />
                          </_Builtin.Link>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "not-global")}
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
                                "not-global"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                    "is-white"
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
                    width="auto"
                    height="auto"
                    loading="lazy"
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
                      "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffef0-de3ffcf5"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-theme")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffef1-de3ffcf5"
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
                        "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffef4-de3ffcf5"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        id={_utils.cx(
                          _styles,
                          "w-node-ee2591cf-eb81-07fa-ea7c-6f5ede3ffef5-de3ffcf5"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                              width="auto"
                              height="auto"
                              loading="lazy"
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
                  width="auto"
                  height="auto"
                  loading="eager"
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
                    href: "/?lang=en",
                  }}
                />
                <LanguageNavLink
                  overrideLanguageLinkText="한국어"
                  overrideLanguageLinkLink={{
                    href: "/ko",
                  }}
                />
                <LanguageNavLink
                  overrideLanguageLinkText="简体中文"
                  overrideLanguageLinkLink={{
                    href: "/zh",
                  }}
                />
                <LanguageNavLink
                  overrideLanguageLinkText="日本語"
                  overrideLanguageLinkLink={{
                    href: "/ja",
                  }}
                />
                <LanguageNavLink
                  overrideLanguageLinkText="Français"
                  overrideLanguageLinkLink={{
                    href: "/fr",
                  }}
                />
                <LanguageNavLink
                  overrideLanguageLinkText="Deutsch"
                  overrideLanguageLinkLink={{
                    href: "/de",
                  }}
                />
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
    </_Component>
  );
}
