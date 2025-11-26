import * as React from "react";
import * as Types from "./types";

declare function NavLink(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  overrideNavLinkText?: React.ReactNode;
  overrideNavLinkLink?: Types.Basic.Link;
}): React.JSX.Element;
