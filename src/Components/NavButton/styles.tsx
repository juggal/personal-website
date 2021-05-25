import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ typography }: Theme) =>
  createStyles({
    buttonText: {
      fontSize: "28px",
      fontWeight: typography.fontWeightMedium,
      "&:hover": {
        background: "none",
      },
    },
  });
