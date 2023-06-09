import React from 'react'
import {Box,IconButton} from '@mui/material'
import InputBase from "@mui/material/InputBase"
import  LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import  DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import  NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import  SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import  PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import  SearchIcon from '@mui/icons-material/Search'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import { useLocation, useNavigate } from 'react-router-dom'

function Topbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const HadleClickSearch = ()=>{
    navigate('/admin/dashboard/student/search')
  }
  return (
    <Box display="flex" justifyContent="space-between" py={2} style={{width:'99%'}} >
         {/* //Search bar */}
         {
           !(location.pathname === "/admin/dashboard/student/search") ? (
            <div display="flex" className='flex bg-transparent rounded-lg border border-[#66ACFF]' >
            <InputBase onClick={HadleClickSearch} sx={{ml:2,flex:1,color:'#66ACFF'}} placeholder="Search"/>
            <IconButton  type="button" sx={{p:1}}>
              <SearchIcon sx={{color: "#66ACFF"}}/>
            </IconButton>
         </div>
           ) :(
            <div>
               <h3 className='text-[#66ACFF] text-2xl'>Search</h3>
            </div>
           )
         }
          {/* Icons */}
          <Box display="flex" >
          <IconButton>
            {
               'dark' === 'light' ? 
              <DarkModeOutlinedIcon sx={{color: "#66ACFF"}}/> :            
              <LightModeOutlinedIcon sx={{color: "#66ACFF"}}/> 
            }
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon sx={{color: "#66ACFF"}}/>
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon sx={{color: "#66ACFF"}}/>
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon sx={{color: "#66ACFF"}}/>
          </IconButton>
          <IconButton>
            <PowerSettingsNewIcon sx={{color: "#66ACFF"}}/>
          </IconButton>
          </Box>
    </Box>
  )
}

export default Topbar
