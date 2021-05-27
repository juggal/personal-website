import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ palette, typography, spacing, shadows }: Theme) =>
  createStyles({
    root: {
      maxWidth: spacing(58),
      maxHeight: spacing(40),
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
      fontSize: spacing(3),
      "& span": {
        fontWeight: typography.fontWeightBold,
      },
      "& p": {
        fontWeight: typography.fontWeightRegular,
      },
    },
  });
