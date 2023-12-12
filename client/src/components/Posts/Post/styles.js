import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  mediaVideo: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    position: "relative", // Add this to position the video element properly
  },

  videoElement: {
    width: "100%", // Make the video element fill its container
    height: "100%", // Make the video element fill its container
    objectFit: "cover", // This property ensures that the video covers the entire container
    position: "absolute", // Position the video element within its container
    top: 0,
    left: 0,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    backgroundColor: "#333333",
    color: "white",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "#EBEBEB",
    textShadow: "1px 0px 0px black",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "black",
    zIndex: "10",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
    color: "#E0E0E0",
    textShadow: "1px 0px 0px black",
  },
  likeColor: {
    color: "hsla(183, 100%, 53%, 1)",
  },
  deleteColor: {
    color: "#FF47FF",
  },
});
