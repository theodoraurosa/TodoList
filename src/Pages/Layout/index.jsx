import { BiCalendarEvent, BiTask } from "react-icons/bi";
import { CgAdd, CgAlbum, CgChevronDoubleRight, CgFormatCenter, CgFormatJustify, CgMenuBoxed, CgSearch } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router"
import "./layout.css"
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Badge, Box } from "@mui/material";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ListIcon from '@mui/icons-material/List';
import MenuIcon from '@mui/icons-material/Menu';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const Layout = () => {

    return (<div className="container">
      <aside className="menu">
        <Box display="flex" flexDirection="row" fullWidth 
            justifyContent="space-between"
            alignContent="center" alignItems="center">

            <h2>Menu</h2>
            <MenuIcon/>
        </Box>
            <div >
            <TextField 
                id="outlined-search"  type="search" 
                size="small"
                fullWidth
                style={{ borderRadius: 32}}
                sx={{ '& .MuiTextField-root': { backgroundColor: "#223344" } }}
                slotProps={{
                    input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    },
                }}
                variant="outlined"
            />
            </div>

            <nav className="tasks">
            <h3>Tasks</h3>
            <MenuList>
                <MenuItem>
                <ListItemIcon>
                    <KeyboardDoubleArrowRightIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText><NavLink to="upcoming">Upcoming</NavLink></ListItemText>
                <Badge ml={2} badgeContent={15} color="secondary"></Badge>
                </MenuItem>

                <MenuItem>
                <ListItemIcon>
                    <ListIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText><NavLink to="today">Today</NavLink></ListItemText>
                <Badge ml={2} badgeContent={8} color="secondary"></Badge>
                </MenuItem>
                <MenuItem>
                <ListItemIcon>
                    <CalendarTodayIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Calendary</ListItemText>
                
                </MenuItem> 
            </MenuList>
            
            </nav>
            <nav className="lists">
            <h3>Lists</h3>
            <ul>
                <li><a href="#"className="work"> <BiTask />Work</a></li>
                <li><a href="#" className="personal">   <BiTask />Personal</a></li>
                <li><a href="#" className="study">    <BiTask />Study</a></li>
                <li><a href="#"> <CgAdd />Add new list</a></li>
            </ul>
            </nav>

            <div className="settings">
            <a href="#"> <CgFormatCenter />Settings</a>
            <a href="#"> <FaSignOutAlt />  Sign Out</a>
            </div>
        </aside>
            
        <main class="content">
            <Outlet />
        </main>

     
      </div>)
}

export default Layout;