import { Photo,StarOutline,DeleteOutline,MailOutlined, SendOutlined , InsertDriveFileOutlined } from '@mui/icons-material'

export const SIDEBAR_DATA=[
    {
        name:'inbox',
        title:'Inbox',
        icon: Photo,
    },
    {
        name:'starred',
        title:'Starred',
        icon: StarOutline,
    },
    {
        name:'sent',
        title:'Sent',
        icon: SendOutlined,
    },
    {
        name:'draft',
        title:'Draft',
        icon: InsertDriveFileOutlined,
    },
    {
        name:'delete',
        title:'Delete',
        icon: DeleteOutline,
    },
    {
        name:'all mail',
        title:'All Mail',
        icon: MailOutlined,
    }
]
