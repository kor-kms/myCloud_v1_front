import { atom } from "recoil";

export const SideBarContentsAtom = atom<boolean>({
  key: "SideBarContentsAtom",
  default: false,
});
