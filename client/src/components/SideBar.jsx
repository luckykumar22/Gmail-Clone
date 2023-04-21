import React from 'react'
import { Drawer, styled } from '@mui/material'
import SideBarContent from './SideBarContent'

const SideBar = ({operDrawer}) => {
  return (
    <Drawer
      anchor='left'
      open={operDrawer}
      hideBackdrop={true}
      ModalProps={{
        keepMounted:true
      }}
      variant='persistent'
      sx={{
        '& .MuiDrawer-paper':{
          marginTop:'64px',
          width:250,
          background:'#F5F5F5',
          borderRight:'none',
          height:'calc(100vh-64px)'
        }
      }}

    >
      <SideBarContent />
    </Drawer>
  )
}

export default SideBar