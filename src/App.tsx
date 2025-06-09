import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import Banner from "./components/Banner";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Banner />
  </ThemeProvider>
);

export default App;
