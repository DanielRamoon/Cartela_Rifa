import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    marginBottom: theme.spacing(2),
    backgroundColor: "#eee",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  counterContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
  },
  quantity: {
    margin: `0 ${theme.spacing(2)}px`,
  },
  totalContainer: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#cecece",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    height: "50px",
  },
  totalText: {
    color: "#777",
    fontSize: "20px",
  },
  totalValue: {
    color: "#777",
    fontWeight: "bold",
  },
  button: {
    color: "#ff4500",
    backgroundColor: "#cecece",
  },
  minusButton: {
    color: "#666",
  },
}));

export default useStyles;
