import React, { useState } from 'react'
import { FormGroup, Checkbox, FormControlLabel, Typography, Stack} from '@mui/material';
import { Container } from '@mui/system';

const Checkboxtemplate = () => {
  const color = {
    color: 'white'
  }
  const [checkedList, setCheckedList] = useState([])
  const [checked, setChecked] = useState(false)
 
  console.log(checkedList)
  const handleChange = (event) => {

    const newItem = event.target.name

    setChecked(event.target.checked)

    if (checked){
      setCheckedList([...checkedList, newItem])
    }
  }

  return (
    <Container>
    <FormGroup>
      <Stack>
        <Typography sx={{ color: 'white'}}> Category 1</Typography>
        <FormControlLabel 
            control={<Checkbox 
                        size='small'
                        sx={color}
                        checked={checked}
                      />} 
            label="item 1" 
            name="item1"
            sx={{color}}
            onChange={handleChange}
            />
          <FormControlLabel 
            control={<Checkbox 
                        size='small'
                        sx={{color}}
                      />} 
            label="item 2"
            name="item2" 
            sx={{color}}
            onChange={handleChange}
            />
            <FormControlLabel 
            control={<Checkbox 
                        size='small'
                        sx={{color}}
                      />} 
            label="item 3" 
            sx={{color}}
            onChange={handleChange}
            />
      </Stack>

      <Stack>
        <Typography sx={{color}}> Category 2</Typography>
        <FormControlLabel 
            control={<Checkbox 
                        size='small'
                        sx={{color}}
                      />} 
            label="item 1" 
            sx={{ color: 'white'}}
            onChange={handleChange}
            />
          <FormControlLabel 
            control={<Checkbox 
                        size='small'
                        sx={{color}}
                      />} 
            label="item 2" 
            sx={{ color: 'white'}}
            onChange={handleChange}
            />
            <FormControlLabel 
            control={<Checkbox 
                        size='small'
                        sx={{color}}
                      />} 
            label="item 3" 
            sx={{color}}
            onChange={handleChange}
            />
      </Stack>

      <Stack>
        <Typography sx={{color}}> Category 3</Typography>
        <FormControlLabel 
            control={<Checkbox 
                        size='small'
                        sx={{color}}
                      />} 
            label="item 1" 
            sx={{color}}
            onChange={handleChange}
            />
          <FormControlLabel 
            control={<Checkbox 
                        size='small'
                        sx={{color}}
                      />} 
            label="item 2" 
            sx={{color}}
            onChange={handleChange}
            />
            <FormControlLabel 
            control={<Checkbox 
                        size='small'
                        sx={{color}}
                      />} 
            label="item 3" 
            sx={{color}}
            onChange={handleChange}
            />
      </Stack>
        
            
    </FormGroup>
    </Container>

  )
}

export default Checkboxtemplate