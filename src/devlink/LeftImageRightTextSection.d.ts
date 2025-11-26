import * as React from "react";
import * as Types from "./types";

declare function LeftImageRightTextSection(props: {
  as?: React.ElementType;
  overrideImageImage?: Types.Asset.Image;
  overrideHeadingText?: React.ReactNode;
  overrideCopyText?: React.ReactNode;
}): React.JSX.Element;
