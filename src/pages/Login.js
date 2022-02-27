import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';
import { login } from "../redux/actions/auth";
const Login = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate ()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })
  const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase()))
      setErrors({ email: "Email is invalid" });
    else setErrors({ email: "" });
  };

  const validatePassword = password => {
    if (password.length < 8)
      setErrors({ password: "Password must have at least 8 characters" });
    else setErrors({ password: "" });
  };


  const findFormErrors = () => {
    const { email, password } = form
    const newErrors = {}
    // name errors
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (password.length < 8) { newErrors.password = 'Password must have at least 8 characters'; setErrors({ password: "Password must have at least 8 characters" }); }
    if (!re.test(String(email).toLowerCase())) { newErrors.email = "Email is invalid"; setErrors({ email: "Email is invalid" }); }

    return newErrors
  }


  const handleChange = (e) => {
    if (e.target.name === "email") {
      validateEmail(e.target.value);
    }
    if (e.target.name === "password") {
      validatePassword(e.target.value);
    }

    setForm({
      ...form,
      [e.target.name]: e.target.value

    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors()
    console.log(newErrors)
    if (Object.keys(newErrors).length === 0) {

      console.log("No Errors")
      console.log(form)
      dispatch(login(form.email,form.password))
        .then(() => {
          navigate("/profile");
        
        })
        .catch((e) => {
          console.log("Error", e)
          // setLoading(false);
        });
    }

  }


  useEffect(()=>{
      isLoggedIn && navigate("/profile")
  },[isLoggedIn])


  return (
    <>
      {/* <Head>
        <title>Login | Material Kit</title>
      </Head> */}
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <Link
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </Link>
          <form onSubmit={handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Sign in
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Sign in on the internal platform
              </Typography>
            </Box>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  color="info"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  onClick={handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Login with Facebook
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  fullWidth
                  color="error"
                  startIcon={<GoogleIcon />}
                  onClick={handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Login with Google
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                or login with email address
              </Typography>
            </Box>
            <TextField
              error={Boolean(form.email && errors.email)}
              fullWidth
              helperText={form.email && errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              // onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={form.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(form.password && errors.password)}
              fullWidth
              helperText={form.password && errors.password}
              label="Password"
              margin="normal"
              name="password"
              onChange={handleChange}
              type="password"
              value={form.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                //  disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
                Sign In Now
              </Button>
            </Box>
            <Typography   color="textSecondary"
              variant="body2"
              >
              {message}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Don&apos;t have an account?
              {' '}
              <Link
                href="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Sign Up
                </Link>
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;