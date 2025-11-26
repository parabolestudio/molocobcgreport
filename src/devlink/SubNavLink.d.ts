import * as React from "react";
import * as Types from "./types";

declare function SubNavLink(props: {
  as?: React.ElementType;
  overrideSubNavLinkLink?: Types.Basic.Link;
  overrideSubNavLinkText?: React.ReactNode;
}): React.JSX.Element;
