import { useState } from "react";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import useStyles from "./NumberCounterStyles";

function NumberCounter() {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(0);
  const valuePerNumber = 200;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const totalValue = quantity * valuePerNumber;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Selecione a quantidade de números
        </Typography>

        <div className={classes.counterContainer}>
          <IconButton
            className={`${classes.button} ${classes.minusButton}`}
            onClick={handleDecrement}
          >
            <FontAwesomeIcon icon={faMinus} />
          </IconButton>
          <Typography variant="h4" className={classes.quantity}>
            {quantity}
          </Typography>
          <IconButton className={classes.button} onClick={handleIncrement}>
            <FontAwesomeIcon icon={faPlus} />
          </IconButton>
        </div>

        <div className={classes.totalContainer}>
          <Typography variant="body2" className={classes.totalText}>
            Total:
          </Typography>
          <Typography variant="h6" className={classes.totalValue}>
            R$ {totalValue.toFixed(2)}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default NumberCounter;
