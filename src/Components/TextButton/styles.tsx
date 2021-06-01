import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ palette, typography, spacing, breakpoints }: Theme) =>
  createStyles({
    button: {
      background: "none",
      border: `4px solid ${palette.primary.dark}`,
      borderRadius: "50px",
      width: spacing(18),
      height: spacing(6),
      [breakpoints.only("xs")]: {
        width: spacing(16),
        height: spacing(5),
      },
    },
    text: {
      color: palette.text.primary,
      fontWeight: typography.fontWeightMedium,
      textAlign: "justify",
    },
  });
