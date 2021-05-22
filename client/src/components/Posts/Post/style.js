import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "86.25%",
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
    borderRadius: "25px",
    height: "100%",
    position: "relative",
    transition: "transform 150ms",
    backgroundColor: "white",
    "&:hover": {
      transform: "scale(1.02)",
      opacity: 0.9,
    },
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
  },
  title: {
    padding: "0 15px",
  },
  cardActions: {
    padding: "0 10px 8px 10px",
    display: "flex",
    justifyContent: "space-between",
  },
});
