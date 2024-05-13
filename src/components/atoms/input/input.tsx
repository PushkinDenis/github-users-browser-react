import styles from "./input.module.scss";
import { ChangeEvent, FC, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../../../variables.scss";
import { useDebounce } from "use-debounce";

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

type UserSearchCardType = {
  login: string;
  html_url: string;
};

export const Input: FC<InputProps> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState<UserSearchCardType | null>(null);

  const [debounced] = useDebounce(searchTerm, 1000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${debounced}`);
        const json = await response.json();
        setResult(json);
        console.log(result);
      } catch (error) {
        console.error("Error fetching", error);
      }
    };
    if (debounced) {
      fetchData();
    } else {
      setResult(null);
    }
  }, [debounced]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchTerm(target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <TextField id="outlined-search" label="Search" type="search" value={searchTerm} inputProps={{ className: styles.input }} onChange={handleInputChange} />
      </ThemeProvider>
      {result && result.login && (
        <>
          <div>{result.login}</div>
          <div>{result.html_url}</div>
        </>
      )}
    </>
  );
};
