import React from 'react'
import { Button, styled } from '@mui/material'


const SearchButton = () => {
  const ButtonStyled = styled('button')({
    background: 'linear-gradient(45deg, #43cea2 30%,  #185a9d 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(67, 206, 162, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  });

  return (
    <div>
      <ButtonStyled>GO</ButtonStyled>
    </div>
    
    

    
  )
}

export default SearchButton