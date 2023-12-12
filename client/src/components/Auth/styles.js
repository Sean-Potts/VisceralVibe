import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "#333333",
    color: "#F5F5F5",
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
    "& .MuiInputBase-root": {
      color: "#F5F5F5",
      marginTop: "10px",
    },
    "& .MuiInputLabel-formControl": {
      color: "#E0E0E0",
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(14px, 6px) scale(0.75)",
    },
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "black",
    background: "hsla(183, 100%, 53%, 1)",

    background:
      "linear-gradient(90deg, hsla(183, 100%, 53%, 1) 0%, hsla(214, 100%, 68%, 1) 100%)",
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  accountButton: {
    color: "#F5F5F5",
  },

  root: {
    "& .MuiFormLabel-root.Mui-disabled": {
      color: "red",
    },
  },
}));
