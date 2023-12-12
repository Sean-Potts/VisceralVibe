import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: "10px",
    color: "black",
    background: "hsla(183, 100%, 53%, 1)",

    background:
      "linear-gradient(90deg, hsla(183, 100%, 53%, 1) 0%, hsla(214, 100%, 68%, 1) 100%)",
  },
  clearButton: {
    color: "black",
    background: "hsla(308, 96%, 72%, 1)",
    background:
      "linear-gradient(90deg, hsla(308, 96%, 72%, 1) 0%, hsla(300, 100%, 50%, 1) 100%)",
  },
}));
