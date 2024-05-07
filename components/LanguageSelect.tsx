"use client";
import {
  LanguageSupportedMap,
  useLangugageStore,
  useSubscriptionStore,
} from "@/store/store";
import { usePathname } from "next/navigation";

import { LanguageSupported } from "@/types";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import LoadingSpinner from "./LoadingSpinner";

function LanguageSelect() {
  const [language, setLanguage, getLanguages, getNotSupportedLanguages] =
    useLangugageStore((state) => [
      state.language,
      state.setLanguage,
      state.getLanguages,
      state.getNonSupportedLangugages,
    ]);

  const pathName = usePathname();
  const isChatPage = pathName.includes("/chat");

  return (
    isChatPage && (
      <div>
        <Select
          onValueChange={(value: LanguageSupported) => setLanguage(value)}
        >
          <SelectTrigger className="w-[150px] text-black dark:text-white">
            <SelectValue
              placeholder={LanguageSupportedMap[language]}
              className=""
            />
          </SelectTrigger>
          <SelectContent>
            <>
              {getLanguages(true).map((language) => (
                <SelectItem key={language} value={language}>
                  {LanguageSupportedMap[language]}
                </SelectItem>
              ))}
              {getNotSupportedLanguages(true).map((language) => (
                <Link href={"/register"} key={language} prefetch={false}>
                  <SelectItem
                    key={language}
                    value={language}
                    disabled
                    className="bg-gray-300/50 text-gray-500 dark:text-white py-2 my-1"
                  >
                    {LanguageSupportedMap[language]} (PRO)
                  </SelectItem>
                </Link>
              ))}
            </>
          </SelectContent>
        </Select>
      </div>
    )
  );
}

export default LanguageSelect;
