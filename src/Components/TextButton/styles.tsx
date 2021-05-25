import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ palette, typography, spacing }: Theme) =>
  createStyles({
    button: {
      background: "none",
      border: `4px solid ${palette.primary.dark}`,
      borderRadius: "50px",
      width: "146px",
      height: "47px",
    },
    text: {
      color: palette.text.primary,
      fontWeight: typography.fontWeightMedium,
      fontSize: "24px",
      textAlign: "justify",
    },
  });
