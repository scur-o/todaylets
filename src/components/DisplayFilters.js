import React from 'react'
import { Chip, Stack } from '@mui/material'



const filterList = [
    { key: 0, label: 'item0'},
    { key: 2, label: 'item2'},
    { key: 3, label: 'item3'},
]

const handleDelete = () => {
    return (console.log('Deleted'))
}

const DisplayFilters = () => {
  return (
    <Stack direction="row" spacing={1}>
        {filterList.map((item) => {
            return (
                
                <Chip 
        
                    sx={{color: "white"}} 
                    color="info" 
                    label={item.label} 
                    variant="outlined" 
                    onDelete={handleDelete}
                />
                
            )
        })}
        
    </Stack>
    
  )
}

export default DisplayFilters