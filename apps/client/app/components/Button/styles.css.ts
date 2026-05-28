import { recipe } from "@vanilla-extract/recipes";
import { colors } from "~/styles/colors";

export const buttonStyle = recipe({
  base: {
    padding: "1.2rem 2rem",

    justifyContent: "center",
    alignItems: "center",

    border: "none",
    borderRadius: "12px",

    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",

    whiteSpace: "nowrap",

    cursor: "pointer",

    transition: "ease-in-out 0.2s",

    ":disabled": {
      opacity: "0.64",

      pointerEvents: "none",
    },
  },

  variants: {
    type: {
      primary: {
        backgroundColor: colors.neutral_900,
        color: colors.neutral_white,

        "&:hover": {
          backgroundColor: colors.neutral_200,
        },
      },
      secondary: {
        border: "1px solid rgba(105, 106, 117, 0.30)",
        borderRadius: "6px",

        backgroundColor: colors.neutral_white,
        color: colors.neutral_500,

        "&:hover": {
          backgroundColor: colors.neutral_200,
        },
      },
      text: {
        border: "none",

        backgroundColor: colors.neutral_white,

        fontWeight: "400",

        "&:hover": {
          color: colors.neutral_900,
        },
      },
    },
  },
  defaultVariants: {
    type: "primary",
  },
});
