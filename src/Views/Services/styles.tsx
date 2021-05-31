import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ breakpoints, spacing }: Theme) =>
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
    heading: {
      height: "10%",
      [breakpoints.only("xs")]: {
        marginBottom: spacing(10),
      },
    },
    content: {
      height: "90%",
    },
  });
