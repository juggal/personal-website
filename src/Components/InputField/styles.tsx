import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ palette, typography, spacing }: Theme) =>
  createStyles({
    root: {
      backgroundColor: palette.secondary.main,
      color: palette.text.primary,
      fontSize: spacing(3),
      fontWeight: typography.fontWeightRegular,
      padding: spacing(1.5),
      borderRadius: "5px",
    },
  });
