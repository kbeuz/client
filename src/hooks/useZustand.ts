import { create } from "zustand";
import { SearchModalProps, MenuSheetProps } from "../types";

type LanguageStore = {
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
};

export const useSearchModal = create<SearchModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export const useMenuSheet = create<MenuSheetProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export const useLanguageStore = create<LanguageStore>((set) => ({
  selectedLanguage: localStorage.getItem("lang") || "uz",
  setSelectedLanguage: (lang) => set({ selectedLanguage: lang }),
}));
