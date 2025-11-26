import * as React from "react";
import * as Types from "./types";

declare function LanguageNavLink(props: {
  as?: React.ElementType;
  overrideLanguageLinkText?: React.ReactNode;
  overrideLanguageLinkLink?: Types.Basic.Link;
  id?: Types.Basic.IdTextInput;
}): React.JSX.Element;
