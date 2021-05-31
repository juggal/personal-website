import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ breakpoints }: Theme) =>
  createStyles({
    container: {
      height: "100%",
      width: "100%",
    },
    svg: {
      [breakpoints.down("md")]: {
        display: "none",
      },
    },
  });
