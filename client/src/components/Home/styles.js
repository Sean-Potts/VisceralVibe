import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#333333",
      color: "#EBEBEB",
      textShadow: "1px 0px 0px black",
    },
  },
  multilineColor: {
    color: "red",
  },
  searchButton: {
    color: "black",
    background: "hsla(183, 100%, 53%, 1)",

    background:
      "linear-gradient(90deg, hsla(183, 100%, 53%, 1) 0%, hsla(214, 100%, 68%, 1) 100%)",
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
}));
