import { atom } from "recoil";

export const SideBarContentsAtom = atom<Number[]>({
  key: "SideBarContentsAtom",
  default: [],
});
