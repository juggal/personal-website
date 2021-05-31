import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ breakpoints, spacing }: Theme) =>
  createStyles({
    container: {
      height: "100%",
      width: "100%",
    },
    svg: {
      [breakpoints.down("sm")]: {
        display: "none",
      },
    },
    heading: {
      height: "10%",
      [breakpoints.only("xs")]: {
        marginBottom: spacing(3),
      },
    },
    content: {
      height: "90%",
    },

    cardSpacing: {
      "& > div:not(:last-child)": {
        marginBottom: spacing(3),
      },
    },
  });
