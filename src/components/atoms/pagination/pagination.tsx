import { FC, useContext } from "react";
import { Pagination as PaginationMui, PaginationItem } from "@mui/material";
import { fetchData } from "@helpers";
import { UsersContext } from "@/App.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();
  console.log(location);
  return (
    <ThemeProvider theme={theme}>
      <PaginationMui
        count={1000}
        defaultPage={parseInt(location.search.slice(6))}
        renderItem={(item) => <PaginationItem component={Link} to={`/github-users-browser-react/?page=${item.page}`} {...item} />}
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
