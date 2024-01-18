import { useState } from "react";
import {
  TextField,
  Switch,
  FormControlLabel,
  FormGroup,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";
import useStyles from "./FormStyles";
import NumberCounter from "../NumberCounter/NumberCounter";
import NumberCard from "../NumberCard/NumberCard";

const Form = () => {
  const classes = useStyles();
  const [selectNumber, setSelectNumber] = useState(false);

  const handleSwitchChange = (event) => {
    setSelectNumber(event.target.checked);
  };

  return (
    <Container maxWidth="sm">
      <Paper className={classes.container}>
        <Typography variant="h5" gutterBottom>
          Doe e Concorra
        </Typography>
        <form>
          <TextField
            label="Nome"
            fullWidth
            margin="normal"
            variant="outlined"
            className={classes.inputField}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            className={classes.inputField}
          />
          <TextField
            label="Telefone"
            fullWidth
            margin="normal"
            variant="outlined"
            className={classes.inputField}
          />

          <div className={classes.switchContainer}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={selectNumber}
                    onChange={handleSwitchChange}
                    name="selectNumber"
                    color="primary"
                  />
                }
                label="Selecionar Número"
                classes={{ label: classes.switchLabel }}
              />
            </FormGroup>
          </div>
        </form>

        {selectNumber ? <NumberCard /> : <NumberCounter />}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <button
            style={{
              backgroundColor: "#ff4500",
              color: "#fff",
              padding: "15px 0",
              fontSize: "20px",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              width: "50%",
              marginRight: "10px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Doar e Concorrer
          </button>
          <button
            style={{
              backgroundColor: "#ff4500",
              color: "#fff",
              padding: "15px 0",
              fontSize: "20px",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              width: "40%",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Pix Flash
          </button>
        </div>
      </Paper>
    </Container>
  );
};

export default Form;
