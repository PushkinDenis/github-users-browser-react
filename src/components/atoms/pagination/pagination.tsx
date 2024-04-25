import { FC, useContext } from "react";
import { Pagination as PaginationMui } from "@mui/material";
import { fetchData } from "@helpers";
import { UsersContext } from "@/App.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontFamily: `var(--github-font)`,
          fontSize: `var(--font-small)`,

          "&.Mui-selected ": {
            backgroundColor: "var(--color-purple)",
            color: "var(--color-white)",
          },
          "&:hover": {
            backgroundColor: "var(--color-purple)",
            color: "var(--color-white)",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "var(--color-purple)",
            color: "var(--color-white)",
          },
          "&.Mui-focused": {
            backgroundColor: "var(--color-purple)",
            color: "var(--color-white)",
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          ul: {
            justifyContent: "center",
            marginBottom: "20px",
          },
        },
      },
    },
  },
});

export const Pagination: FC = () => {
  const { setUsers } = useContext<any>(UsersContext);
  return (
    <ThemeProvider theme={theme}>
      <PaginationMui
        count={1000}
        color="primary"
        onChange={(event, page) => {
          console.log(event);
          if (page !== 1) {
            const newPage = `${page}00`;
            fetchData("100", newPage)
              .then((result) => result)
              .then((result) => setUsers(result));
          } else {
            const newPage = `0`;
            fetchData("100", newPage)
              .then((result) => result)
              .then((result) => setUsers(result));
          }
        }}
      />
    </ThemeProvider>
  );
};
