import { create } from "zustand";

interface SidebarMenu {
  isPrimaryTab: boolean;
  isSecondaryTab: boolean;
  expendedMenus: { [id: number]: boolean };
  showDocument: string;
  documentIcon: React.ReactElement | null;
  setPrimaryTab: (isOpen: boolean) => void;
  setSecondaryTab: (isSecondaryTab: boolean) => void;
  toggleMenu: (id: number) => void;
  setShowDocument: (showDocument: string) => void;
  setDocumentIcon: (documentIcon: React.ReactElement) => void;
}

export const useSidebarMenu = create<SidebarMenu>((set) => ({
  isPrimaryTab: true,
  isSecondaryTab: true,
  expendedMenus: { 0: true },
  showDocument: "",
  documentIcon: null,
  setPrimaryTab: (isPrimaryTab: boolean) => set({ isPrimaryTab }),
  toggleMenu: (id: number) =>
    set((state) => ({
      expendedMenus: { ...state.expendedMenus, [id]: !state.expendedMenus[id] },
    })),
  setSecondaryTab: (isSecondaryTab: boolean) => set({ isSecondaryTab }),
  setShowDocument: (showDocument: string) => set({ showDocument }),
  setDocumentIcon: (documentIcon: React.ReactElement) => set({ documentIcon }),
}));
