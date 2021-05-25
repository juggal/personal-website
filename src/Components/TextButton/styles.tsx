import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ palette, typography }: Theme) =>
  createStyles({
    button: {
      background: "none",
      border: `4px solid ${palette.primary.dark}`,
      borderRadius: "50px",
      width: "145px",
      height: "45px",
    },
    text: {
      color: palette.text.primary,
      fontWeight: typography.fontWeightMedium,
      fontSize: "24px",
      textAlign: "justify",
    },
  });
