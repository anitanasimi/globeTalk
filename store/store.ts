// import { ILanguageState, LanguageSupported, SubscriptionState } from "../types/Subscription.tsx";
import { Subscription } from "@/types/Subscription";
import { create } from "zustand";



export type LanguagesSupported = 
|"en" | "zh" | "ru" | "de" | "es" | "fr" | "hi" | "ja" | "la" | "ar";

export const LanguageSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  de: "German",
  es: "Spanish",
  fr: "French",
  hi: "Hindi",
  ja: "Japanese",
  la: "Latin",
  ru: "Russian",
  zh: "Mandarin",
  ar: "Arabic",
};

interface SubscriptionState {
    subscription: Subscription |null | undefined
    setSubscription: (subscription:Subscription | null ) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));

