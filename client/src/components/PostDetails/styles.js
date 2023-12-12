import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "600px",
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 1,
  },
  imageSection: {
    marginLeft: "20px",

    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: "flex",
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  commentsOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#333333",
  },
  commentsInnerContainer: {
    height: "200px",
    overflowY: "auto",
    marginRight: "30px",
  },
  borderColor: {
    background: "hsla(300, 100%, 50%, 1)",

    background:
      "linear-gradient(225deg, hsla(300, 100%, 50%, 1) 0%, hsla(180, 100%, 50%, 1) 100%)",

    background:
      "-moz-linear-gradient(225deg, hsla(300, 100%, 50%, 1) 0%, hsla(180, 100%, 50%, 1) 100%)",

    background:
      "-webkit-linear-gradient(225deg, hsla(300, 100%, 50%, 1) 0%, hsla(180, 100%, 50%, 1) 100%)",
    margin: "20px 0",
  },
  recommendedStyles: {
    // margin: "20px",
    // cursor: "pointer",

    border: "5px black",
  },
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0DF2FF",
      },
    },
    "& .MuiButton-contained": {
      "&.Mui-disabled": {
        background: "#292929",
        color: "#717171",
      },
      marginTop: "10px",
      color: "black",
      background: "hsla(183, 100%, 53%, 1)",

      background:
        "linear-gradient(90deg, hsla(183, 100%, 53%, 1) 0%, hsla(214, 100%, 68%, 1) 100%)",
    },
  },
}));
