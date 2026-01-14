import { basePath } from "@/helpers/general";
import { useState } from "react";

export function LocaleSwitcher() {
  const [showDropdown, setShowDropdown] = useState(false);

  const locales = [
    { code: "en", name: "English", href: "?locale=en" },
    { code: "zh", name: "简体中文", href: "?locale=zh" },
    { code: "ja", name: "日本語", href: "?locale=ja" },
    { code: "ko", name: "한국어", href: "?locale=ko" },
  ];
  return (
    <div className="fixed top-10 md:top-20 right-5 md:left-20 md:right-auto">
      <button
        className="cursor-pointer"
        style={{ padding: 0 }}
        onClick={() => {
          console.log("Navigate to global hooks info");
          setShowDropdown(!showDropdown);
        }}
      >
        <img
          src={`${basePath}/icons/globe.svg`}
          alt="globe"
          className="w-7 h-7 md:w-8 md:h-8"
        />
      </button>
      {showDropdown && (
        <div className="absolute right-0 md:right-auto md:left-0 top-0 mt-10 bg-white shadow-lg rounded-[5px] w-fit">
          <div role="list" className="flex flex-col p-2 gap-2">
            {locales.map((locale) => (
              <div key={locale.code} role="listitem" className="">
                <a
                  hrefLang={locale.code}
                  href={locale.href}
                  className="text-[18px] no-underline text-black-blue whitespace-nowrap"
                  tabIndex={0}
                >
                  {locale.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
