import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button} from '@pankod/refine-mui';
import { FormProps } from './interfaces/common';
import {useTheme} from '@mui/material/styles'
const Form = ({ type, register, onFinish, handleSubmit, formLoading, onFinishHandler }: FormProps) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} >
        {type} a Product
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px">
        <form style={{marginTop: "20px", width: "100px", display: "flex", flexDirection: "column", gap:"20px"}}
              onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText sx={{fontWeight: 500, margin: "10px", fontSize: 16, }}>Enter product</FormHelperText>
            <TextField 
              fullWidth
              required
              id="outlined-basic"
              color="info"
            />
          </FormControl>

        </form>
      </Box>
    </Box>
  )
}

export default Form