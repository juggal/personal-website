import React from "react";
import { Home } from "@views/Home";
import { Navbar } from "@components/Navbar";
import { theme } from "./utils";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

function App(): JSX.Element {
  const muiTheme = createMuiTheme(theme);
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
