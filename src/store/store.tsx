import { create } from "zustand";

interface SidebarMenu {
  isOpen: boolean;
  expendedMenus: { [id: number]: boolean };
  showDocument: string;
  setOpen: (isOpen: boolean) => void;
  toggleMenu: (id: number) => void;
  setShowDocument: (showDocument: string) => void;
}

export const useSidebarMenu = create<SidebarMenu>((set) => ({
  isOpen: true,
  expendedMenus: { 0: true },
  showDocument: "",
  setOpen: (isOpen: boolean) => set({ isOpen }),
  toggleMenu: (id: number) =>
    set((state) => ({
      expendedMenus: { ...state.expendedMenus, [id]: !state.expendedMenus[id] },
    })),
  setShowDocument: (showDocument: string) => set({ showDocument }),
}));
