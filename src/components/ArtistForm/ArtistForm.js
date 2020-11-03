import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
    makeStyles
  } from '@material-ui/core';

const ArtistForm = () => {
    return (
    <form>
    <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Artist Profile"
        />
        <Divider />
        <CardContent>
            <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                    <TextField fullWidth
                        helperText="Please specify the first name"
                        label="First name"
                        name="firstName"
                        required
                        variant="outlined"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        label="Last name"
                        name="lastName"
                        required
                        variant="outlined"
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        label="Nationality"
                        name="nationality"
                        required
                        variant="outlined"
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        label="About"
                        name="about"
                        required
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
            <Button color="primary" variant="contained">
                Create
            </Button>
        </Box>
    </Card>
    </form>
    );
}
export default ArtistForm;
