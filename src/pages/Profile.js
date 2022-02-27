// import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../components/AccountProfile';
import { ProfileDetails } from '../components/ProfileDetails';
import { Navbar } from '../components/Navbar';
import { getcolor } from '../redux/actions/userData'
const Account = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector(state => state.auth);
  const {label,color} = useSelector(state => state.userData);
  console.log(user, color)
  useEffect(() => {
    dispatch(getcolor())
      .then(() => {
        // navigate("/profile");
       

      })
      .catch((e) => {
        console.log("Error", e)
        // setLoading(false);
      });
  }, [])

 
  return (
    <>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          bgcolor: color
        }}
      >
        <Navbar />
        <Container maxWidth="lg">
          <Typography
            sx={{ mb: 3 }}
            variant="h4"
          >
            Account
          </Typography>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <AccountProfile user={user} />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <ProfileDetails user={user} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

// Account.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

export default Account;
