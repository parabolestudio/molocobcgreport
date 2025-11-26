import * as React from "react";
import * as Types from "./types";

declare function ValuePropositionSection(props: {
  as?: React.ElementType;
  productName?: React.ReactNode;
  productTitle?: React.ReactNode;
  firstImage?: Types.Asset.Image;
  growthYellowText?: React.ReactNode;
  growthH2BlueText?: React.ReactNode;
  firstColImage?: Types.Asset.Image;
  firstColTitle?: React.ReactNode;
  firstColContent?: React.ReactNode;
  secondColImage?: Types.Asset.Image;
  secondColTitle?: React.ReactNode;
  secondColContent?: React.ReactNode;
  thirdColImage?: Types.Asset.Image;
  thirdColTitle?: React.ReactNode;
  thirdColContent?: React.ReactNode;
}): React.JSX.Element;
