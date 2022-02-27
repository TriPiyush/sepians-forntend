// import { useState } from 'react';
import {
 
  Card,
  CardContent,
  CardHeader,
  Divider,
 
} from '@mui/material';


export const ProfileDetails = (props) => {

  

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          
        </CardContent>
        <Divider />
      
      </Card>
    </form>
  );
};
