import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ palette, typography, spacing }: Theme) =>
  createStyles({
    button: {
      background: "none",
      border: `4px solid ${palette.primary.dark}`,
      borderRadius: "50px",
      width: spacing(18),
      height: spacing(6),
    },
    text: {
      color: palette.text.primary,
      fontWeight: typography.fontWeightMedium,
      fontSize: spacing(3),
      textAlign: "justify",
    },
  });
