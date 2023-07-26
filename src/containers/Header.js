import React from 'react'
import Typography from '@mui/material/Typography';
import './ProductComponent.css'

const Header = () => {
  return (
    <div className="ui fixed menu">
        <div className="ui container center">
           <Typography className='app-heading'>FakeShop</Typography>
        </div>
    </div>
  )
}

export default Header