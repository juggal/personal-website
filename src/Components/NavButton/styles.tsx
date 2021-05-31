import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ spacing, typography }: Theme) =>
  createStyles({
    button: {
      "&:hover": {
        background: "none",
      },
    },
    buttonText: {
      fontWeight: typography.fontWeightMedium,
    },
  });
