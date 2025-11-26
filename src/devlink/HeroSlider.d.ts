import * as React from "react";
import * as Types from "./types";

declare function HeroSlider(props: {
  as?: React.ElementType;
  slide1Heading1?: React.ReactNode;
  slide1Heading2?: React.ReactNode;
  slide1Paragraph?: React.ReactNode;
  slide1ButtonLink?: Types.Basic.Link;
  slide1ButtonText?: React.ReactNode;
  slide2Heading?: React.ReactNode;
  slide2Paragraph?: React.ReactNode;
  slide2Link?: Types.Basic.Link;
  slide2ButtonText?: React.ReactNode;
  slide3Heading?: React.ReactNode;
  slide3Paragraph?: React.ReactNode;
  slide3Link?: Types.Basic.Link;
  slide3ButtonText?: React.ReactNode;
}): React.JSX.Element;
