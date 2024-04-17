import styles from "./input.module.scss";
import { FC } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../../../variables.scss";

type InputProps = {
  type?: "text" | "password" | "radio" | "checkbox" | "hidden" | "button" | "image" | "reset" | "file" | "submit";
  placeholder?: string;
  value?: string;
  label?: string;
};

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "var(--color-white)",
          fontFamily: `var(--github-font)`,
          fontSize: `var(--font-small)`,
          borderColor: "var(--color-white)",
          "&.Mui-focused ": {
            color: "var(--color-white)",
            fontSize: "var(--font-small)",
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "var(--color-white)",
          width: "300px",
          borderColor: "var(--color-white)",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--color-white)",
            borderWidth: "2px",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--color-white)",
            borderWidth: "2px",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--color-white)",
            borderWidth: "2px",
          },
        },
      },
    },
  },
});

export const Input: FC<InputProps> = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TextField id="outlined-search" label="Search" type="search" inputProps={{ className: styles.input }} />
      </ThemeProvider>
    </>
  );
};
