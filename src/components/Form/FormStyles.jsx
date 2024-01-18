import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
    width: "60vw",
    position: "relative",
    right: "25%",

    [theme.breakpoints.down("sm")]: {
      width: "80vw",
      right: "auto",
      margin: "0 auto",
      marginTop: "15px",
    },
  },
  switchContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2),
  },
  switchLabel: {
    color: "#ff4500",
  },
  inputField: {
    fontSize: "16px",
    width: "100%",
  },

  "@media (min-width: 1900px)": {
    container: {
      backgroundColor: "#f5f5f5",
      padding: theme.spacing(3),
      marginTop: theme.spacing(5),
      width: "60vw",
      position: "relative",
      right: "54%",
    },
  },
}));

export default useStyles;
