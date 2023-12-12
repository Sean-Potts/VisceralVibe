import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "black",
      background: "hsla(183, 100%, 53%, 1)",
      textShadow: "0px 0px 0px black",
      background:
        "linear-gradient(90deg, hsla(183, 100%, 53%, 1) 0%, hsla(214, 100%, 68%, 1) 100%)",
    },
    justifyContent: "space-around",
  },
  colors: {
    color: "#E0E0E0",

    backgroundColor: "#333333",
  },
  root: {
    "& .MuiPaper-root": {
      borderRadius: "100px",
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
    },
  },
}));
