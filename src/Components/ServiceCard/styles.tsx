import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ palette, typography, spacing, shadows }: Theme) =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
      background: palette.secondary.main,
      borderRadius: "5px",
      boxShadow: shadows[5],
    },
    media: {
      padding: spacing(2),
    },
    icon: {
      width: spacing(8),
      height: spacing(8),
    },
    content: {
      color: palette.text.primary,
      "& h5": {
        fontWeight: typography.fontWeightBold,
      },
      "& h6": {
        fontWeight: typography.fontWeightRegular,
      },
    },
  });
