import * as React from "react";
import * as Types from "./types";

declare function SecondaryNavItem(props: {
  as?: React.ElementType;
  overrideSecondaryNavLinkText?: React.ReactNode;
  overrideSecondaryNavLinkLink?: Types.Basic.Link;
}): React.JSX.Element;
