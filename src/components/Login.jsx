import {
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "280px",
    margin: "10px auto",
  };
  const avatarStyle = { backgroundColor: "cadetblue" };
  const btnStyle = { margin: "10px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align={"center"}>
          <Avatar style={avatarStyle} src="/broken-image.jpg" />
          <h4>Sign In</h4>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required
          style={{ marginBottom: "20px" }}
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={btnStyle}
          color="primary"
        >
          Sign In
        </Button>
        <Typography>
          <Link href="#">Forgot Password?</Link>
        </Typography>
        <Typography>
          {"Do you have an account? "}
          <Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
