
import {Typography, TextField, Button, Box} from "@mui/material"

export default function ContactUs({}){
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
            <Box mt={2} display="flex" justifyContent="center">
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