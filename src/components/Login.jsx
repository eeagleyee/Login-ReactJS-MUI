import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// Login component definition
const Login = () => {
  // Styles for elements within the component
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "280px",
    margin: "10px auto",
  };
  const avatarStyle = { backgroundColor: "cadetblue" };
  const btnStyle = { margin: "10px 0" };

  // Render the login form
  return (
    <Grid>
      {/* Paper component to contain the login form */}
      <Paper elevation={10} style={paperStyle}>
        {/* Grid for aligning elements in the center */}
        <Grid align={"center"}>
          {/* Avatar for login icon */}
          <Avatar style={avatarStyle} src="/broken-image.jpg" />
          {/* Heading for sign in */}
          <h4>Sign In</h4>
        </Grid>
        {/* Username input field */}
        <TextField
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required
          style={{ marginBottom: "20px" }} // Style for space after username field
        />
        {/* Password input field */}
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
        />
        {/* Checkbox for 'Remember me' */}
        <FormControlLabel
          control={<Checkbox defaultChecked />} // Checkbox with default checked state
          label="Remember me"
        />
        {/* Sign in button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={btnStyle}
          color="primary"
        >
          Sign In
        </Button>
        {/* Forgot password link */}
        <Typography>
          <Link href="#">Forgot Password?</Link>
        </Typography>
        {/* Sign up link */}
        <Typography>
          {"Do you have an account? "}
          <Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login; // Export the Login component
