import * as React from "react";
import * as Types from "./types";

declare function ResourcesSlider(props: {
  as?: React.ElementType;
  slide1SmallText?: React.ReactNode;
  slide1Heading?: React.ReactNode;
  slide1BodyText?: React.ReactNode;
  slide1Image?: Types.Asset.Image;
  slide2SmallText?: React.ReactNode;
  slide2Heading?: React.ReactNode;
  slide2BodyText?: React.ReactNode;
  slide2Image?: Types.Asset.Image;
  slide1ButtonUrl?: Types.Basic.Link;
  slide1ButtonText?: React.ReactNode;
  slide2ButtonUrl?: Types.Basic.Link;
  slide2ButtonText?: React.ReactNode;
}): React.JSX.Element;
