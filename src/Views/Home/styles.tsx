import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ spacing, transitions }: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      height: "100vh",
    },
    animate: {
      animation: `$moveUpDown 1s ${transitions.easing.sharp} infinite alternate`,
    },
    "@keyframes moveUpDown": {
      "0%": {
        bottom: "50px",
      },
      "100%": {
        bottom: "0px",
      },
    },
  });
