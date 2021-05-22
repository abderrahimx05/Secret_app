import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    position: "relative",
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "white",
    textDecoration: "none",
    fontSize: "3rem",
    [theme.breakpoints.down("xs")]: {
      width: "20px",
      justifyContent: "none",
      fontSize: "2rem",
    },
  },
  image: {
    marginLeft: "15px",
    position: "absolute",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    fontSize: "2rem",
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      width: "200px",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down("xs")]: {
      display: "none",

      justifyContent: "center",
    },
  },
  logout: {
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "90%",
    },
  },
}));
