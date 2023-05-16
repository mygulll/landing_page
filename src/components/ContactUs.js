import * as React from 'react';
import {Typography, TextField, Button, Box} from "@mui/material"
import Rating from '@mui/material/Rating';

export default function ContactUs({}){
  const [value, setValue] = React.useState(0);
    return(
    <div>
          <form>
            <TextField label="Name" variant="outlined" fullWidth />
            <Box mt={2}>
              <TextField label="Email" variant="outlined" fullWidth />
            </Box>
            <Box mt={2}>
              <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
            </Box>
            <Box mt={3}>
              <center>
                <Typography component="legend">Rate Us</Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    />
              </center>
            </Box>
            <Box mt={4} display="flex" justifyContent="center">
                <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit">
                    Send
                </Button>
            </Box>
          </form>
      </div>

    );
}