import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ palette, typography, spacing }: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      bottom: "0px",
      width: "100%",
      height: spacing(6),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: palette.secondary.main,
      color: palette.text.primary,
      fontWeight: typography.fontWeightMedium,
      fontSize: spacing(2),
    },
  });
