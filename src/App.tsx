import React from "react";
import { Home } from "@views/Home";
import { Navbar } from "@components/Navbar";
import { theme } from "./utils";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { Main } from "@views/Main";

function App(): JSX.Element {
  const muiTheme = createMuiTheme(theme);
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
