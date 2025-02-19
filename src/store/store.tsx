import { create } from "zustand";

interface SidebarMenu {
  isMenuOpen: boolean;
  isPrimaryTab: boolean;
  isSecondaryTab: boolean;
  expendedMenus: { [id: number]: boolean };
  showDocument: string;
  documentIcon: React.ReactElement | null;
  navigateFromDetails: string;
  setMenuOpen: (isMenuOpen: boolean) => void;
  setPrimaryTab: (isOpen: boolean) => void;
  setSecondaryTab: (isSecondaryTab: boolean) => void;
  toggleMenu: (id: number) => void;
  setShowDocument: (showDocument: string) => void;
  setDocumentIcon: (documentIcon: React.ReactElement) => void;
  setNavigateFromDetails: (navigateFromDetails: string) => void;
}

export const useSidebarMenu = create<SidebarMenu>((set) => ({
  isMenuOpen: true,
  isPrimaryTab: true,
  isSecondaryTab: true,
  expendedMenus: { 0: true },
  showDocument: "",
  documentIcon: null,
  isNavigatingFromTimeline: false,
  navigateFromDetails: "",
  setMenuOpen: (isMenuOpen: boolean) => set({isMenuOpen}),
  setPrimaryTab: (isPrimaryTab: boolean) => set({ isPrimaryTab }),
  toggleMenu: (id: number) =>
    set((state) => ({
      expendedMenus: { ...state.expendedMenus, [id]: !state.expendedMenus[id] },
    })),
  setSecondaryTab: (isSecondaryTab: boolean) => set({ isSecondaryTab }),
  setShowDocument: (showDocument: string) => set({ showDocument }),
  setDocumentIcon: (documentIcon: React.ReactElement) => set({ documentIcon }),
  setNavigateFromDetails: (navigateFromDetails: string) =>
    set({ navigateFromDetails }),
}));
