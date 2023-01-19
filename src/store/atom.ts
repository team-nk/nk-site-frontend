import { atom } from "recoil";

export const applyInfoState = atom({
  key: "applyInfoState",
  default: {
    position: "",
    name: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    major: "",
    reasonApplyNK: "",
    togetherProject: "",
    participating: "",
    skill: "",
    portfolio: "",
  },
});
