import { globalFontFace } from "@vanilla-extract/css";

export const Pretendard = "Pretendard";

globalFontFace(Pretendard, {
  src: 'url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css")',
  fontStyle: "normal",
});
