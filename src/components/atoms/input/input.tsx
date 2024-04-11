import styles from "./input.module.scss";
import { FC } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
type Input = {
  type?: "text" | "password" | "radio" | "checkbox" | "hidden" | "button" | "image" | "reset" | "file" | "submit";
  placeholder?: string;
  value?: string;
};

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#ffff",
          fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
          borderColor: "#ffff",
          "&.Mui-focused ": {
            color: "#ffff",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#ffff",
          borderColor: "#ffff",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffff",
            borderWidth: "1px",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffff",
            borderWidth: "1px",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffff",
            borderWidth: "2px",
          },
        },
      },
    },
  },
});
export const Input: FC<Input> = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TextField id="outlined-search" label="Search field" type="search" inputProps={{ className: styles.input }} />
      </ThemeProvider>
    </>
  );
};
