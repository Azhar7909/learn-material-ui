import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "33ch",
    },
  },
  loginForm: {
    height: 'auto',
    width: 300,
    margin: "0 auto",
    padding:5,
    textAlign: 'center',
    marginTop: 20,
  },
  
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.loginForm}>
        <h3>LogIn</h3>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="email/userName" label="Email / User Name" />
          <TextField id="Password" label="Password" />
          <Button variant="contained" color="primary">
            LogIn
          </Button>
        </form>
      </Paper>
    </div>
  );
}
