import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ breakpoints, spacing }: Theme) =>
  createStyles({
    container: {
      width: "100%",
      height: "100%",
    },
    heading: {
      height: "10%",
    },
    content: {
      height: "90%",
      [breakpoints.only("xs")]: {
        paddingTop: spacing(5),
      },
    },
    form: {
      [breakpoints.only("xs")]: {
        padding: spacing(2),
      },
    },
  });
