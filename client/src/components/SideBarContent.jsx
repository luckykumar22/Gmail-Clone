import { CreateOutlined } from '@mui/icons-material'
import { Box, Button, styled,List, ListItem, } from '@mui/material'
import React from 'react'
import { SIDEBAR_DATA } from '../config/sidebar.config'

const ComposeButton=styled(Button)({
    background:'#c2e7ff',
    color:'#001d35',
    padding:'15',
    borderRadius:'16',
    textTransform:'none',
    width:130
})

const Container=styled(Box)({
    padding:8,
    '& > ul':{
        padding: '10 0 0 5',
        cursor:'pointer',
        fontSize:14,
        fontWeight:500,
    },
    '& > ul> li> svg':{
        marginRight:20
    }
})

const SideBarContent = () => {
  return (
    <Container>
        <ComposeButton>
            <CreateOutlined /> Compose
        </ComposeButton>
        <List>
            {
                SIDEBAR_DATA.map(data=>(
                    <ListItem>
                        <data.icon />{data.title}
                    </ListItem>
                ))
            }
        </List>
    </Container>
  )
}

export default SideBarContent