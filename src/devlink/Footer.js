"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FooterHeadingLink } from "./FooterHeadingLink";
import { SocialIcon } from "./SocialIcon";
import { ButtonYellowMedium } from "./ButtonYellowMedium";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({
  as: _Component = _Builtin.Section,

  socialIconLink2 = {
    href: "https://twitter.com/molocohq?lang=en",
    target: "_blank",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "py-56", "bg-blue-medium")}
      grid={{
        type: "section",
      }}
      tag="footer"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-2")}
        tag="div"
      >
        <_Builtin.Row
          className={_utils.cx(_styles, "columns-3")}
          tag="div"
          columns={{
            main: "3|9",
            medium: "",
            small: "",
            tiny: "",
          }}
        >
          <_Builtin.Column className={_utils.cx(_styles, "mb-48")} tag="div">
            <_Builtin.Link
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt="Moloco white logo"
                src="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/62a74b94b129021b04cd5bbf_White_logo_143_39-02.webp"
              />
            </_Builtin.Link>
          </_Builtin.Column>
          <_Builtin.Column tag="div">
            <_Builtin.Row
              className={_utils.cx(_styles, "footer-nav-columns-wrap")}
              tag="div"
              columns={{
                main: "5|4|3",
                medium: "",
                small: "",
                tiny: "",
              }}
            >
              <_Builtin.Column
                className={_utils.cx(_styles, "footer-column", "px-8")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "text-white", "my-8")}
                  tag="h4"
                >
                  <_Builtin.Strong>{"Solutions"}</_Builtin.Strong>
                </_Builtin.Heading>
                <_Builtin.List
                  className={_utils.cx(_styles, "footer-list")}
                  tag="ul"
                  unstyled={false}
                >
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "footer-nav-list-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer-nav-link")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Moloco for User Acquisition"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "footer-nav-list-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer-nav-link")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Moloco for Games"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "footer-nav-list-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer-nav-link")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Moloco for Fintech"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "footer-nav-list-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer-nav-link")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Moloco for Retail & E-Commerce"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "footer-nav-list-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer-nav-link")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Moloco for Agencies"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "footer-nav-list-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer-nav-link")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Moloco for Streaming Platforms"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                </_Builtin.List>
              </_Builtin.Column>
              <_Builtin.Column
                className={_utils.cx(_styles, "footer-column", "px-8")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "text-white", "my-8")}
                  tag="h4"
                >
                  <_Builtin.Strong>{"Products"}</_Builtin.Strong>
                </_Builtin.Heading>
                <_Builtin.List
                  className={_utils.cx(_styles, "footer-list")}
                  tag="ul"
                  unstyled={false}
                >
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "footer-nav-list-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer-nav-link")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Moloco Cloud DSP"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "footer-nav-list-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer-nav-link")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Moloco Retail Media Platform"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "footer-nav-list-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer-nav-link")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Moloco Monetization for Streaming & OTT"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                </_Builtin.List>
              </_Builtin.Column>
              <_Builtin.Column
                className={_utils.cx(_styles, "footer-column", "px-8")}
                tag="div"
              >
                <FooterHeadingLink
                  overrideFooterHeadingLinkLink={{
                    href: "#",
                  }}
                  footerHeadingLinkLink="Blog & Resources"
                />
                <FooterHeadingLink
                  overrideFooterHeadingLinkLink={{
                    href: "#",
                  }}
                  footerHeadingLinkLink="Company"
                />
                <FooterHeadingLink
                  overrideFooterHeadingLinkLink={{
                    href: "#",
                  }}
                  footerHeadingLinkLink="Careers"
                />
                <FooterHeadingLink
                  overrideFooterHeadingLinkLink={{
                    href: "#",
                  }}
                  footerHeadingLinkLink="R&D Blog"
                />
                <FooterHeadingLink
                  overrideFooterHeadingLinkLink={{
                    href: "/#newsletter",
                  }}
                  footerHeadingLinkLink="Newsletter"
                />
                <FooterHeadingLink
                  overrideFooterHeadingLinkLink={{
                    href: "#",
                  }}
                  footerHeadingLinkLink="Developers"
                />
              </_Builtin.Column>
            </_Builtin.Row>
          </_Builtin.Column>
        </_Builtin.Row>
      </_Builtin.Container>
      <_Builtin.Container
        className={_utils.cx(_styles, "container-2")}
        tag="div"
      >
        <_Builtin.Row
          tag="div"
          columns={{
            main: "5|4|3",
            medium: "",
            small: "",
            tiny: "",
          }}
        >
          <_Builtin.Column tag="div">
            <_Builtin.Block className={_utils.cx(_styles, "hide")} tag="div">
              {"© 2022 Moloco, Inc. All rights reserved"}
              <br />
              {"Privacy Policy| Brand Safety Policy | Advertising Policy"}
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "text-14", "text-white")}
              value="%C2%A9%202023%20Moloco%2C%20Inc.%20%3Cspan%20class%3D%22text-12%22%3EAll%20Rights%20Reserved%3Cbr%3E%3Ca%20href%3D%22%2Fprivacy-policy%22%20class%3D%22text-white%22%3EPrivacy%20Policy%3C%2Fa%3E%C2%A0%7C%20%3Ca%20href%3D%22%2Fbrand-safety-policy%22%20class%3D%22text-white%22%3EBrand%20Safety%20Policy%3C%2Fa%3E%20%7C%20%3Ca%20href%3D%22%2Fadvertising-policy%22%20class%3D%22text-white%22%3EAdvertising%20Policy%3C%2Fa%3E%20%7C%20%3Ca%20id%3D%22ot-sdk-link%22%20class%3D%22ot-sdk-show-settings%20text-white%22%20href%3D%22%23%22%3EYour%20Privacy%20Choices%3C%2Fa%3E%0A%3C%2Fspan%3E"
            />
          </_Builtin.Column>
          <_Builtin.Column className={_utils.cx(_styles, "column-8")} tag="div">
            <SocialIcon
              link={{
                href: "https://www.facebook.com/molocoads/",
                target: "_blank",
              }}
              linkBlockLink={{
                href: "https://www.facebook.com/MolocoGlobal",
                target: "_blank",
              }}
              overrideImageImage="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/64c14691d0eb99d69a2bbb58_meta.webp"
            />
            <SocialIcon
              link={socialIconLink2}
              overrideImageImage="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/64c146916961eee448045222_twitterx.webp"
              linkBlockLink={{
                href: "https://twitter.com/molocohq?lang=en",
                target: "_blank",
              }}
            />
            <SocialIcon
              overrideImageImage="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/64c14691fa52986105a458ff_linkedin.webp"
              link={{
                href: "https://www.linkedin.com/company/moloco/",
                target: "_blank",
              }}
              linkBlockLink={{
                href: "https://www.linkedin.com/company/moloco/",
                target: "_blank",
              }}
            />
            <SocialIcon
              overrideImageImage="https://cdn.prod.website-files.com/6237fca0466ffd9274a1dbdd/64c146910b89296a51dabe47_youtube.webp"
              link={{
                href: "https://www.youtube.com/@moloco3602/videos",
                target: "_blank",
              }}
              linkBlockLink={{
                href: "https://www.youtube.com/@moloco3602/videos",
                target: "_blank",
              }}
            />
          </_Builtin.Column>
          <_Builtin.Column
            className={_utils.cx(_styles, "footer-contact-column")}
            tag="div"
          >
            <ButtonYellowMedium
              link={{
                href: "#",
              }}
              overrideTextBlockText="Get Started"
            />
          </_Builtin.Column>
        </_Builtin.Row>
      </_Builtin.Container>
    </_Component>
  );
}
