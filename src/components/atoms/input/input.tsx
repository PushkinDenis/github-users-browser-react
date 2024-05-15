import styles from "./input.module.scss";
import { ChangeEvent, FC, useEffect, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDebounce } from "use-debounce";
import { SearchContext, InputClickContext } from "@/App.tsx";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [debounced] = useDebounce(searchTerm, 1000);

  const { setSearchValue } = useContext<any>(SearchContext);
  const { InputClick, setInputClick } = useContext<any>(InputClickContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${debounced}`);
        const json = await response.json();
        setSearchValue(json);
      } catch (error) {
        console.error("Error fetching", error);
      }
    };
    if (debounced) {
      fetchData();
    } else {
      setSearchValue(null);
    }
  }, [debounced]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchTerm(target.value);
    setInputClick(true);
  };

  const inputClick = () => {
    InputClick ? setInputClick(false) : setInputClick(true);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <ThemeProvider theme={theme}>
          <TextField sx={{ input: { width: "100%" } }} fullWidth id="outlined-search" label="Search" type="search" value={searchTerm} inputProps={{ className: styles.input }} onChange={handleInputChange} onClick={inputClick} />
        </ThemeProvider>
      </div>
    </>
  );
};
