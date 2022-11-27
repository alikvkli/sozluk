import {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import * as Styled from "./Navbar.styles";
import {
    AppBar, Badge, Avatar, Typography, Menu, MenuItem, ListItemIcon, Switch
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {useDispatch, useSelector} from "react-redux";
import {setMode} from "../../redux/appSlice";


export default function Navbar() {
    const {mode} = useSelector(state => state.app);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="sticky" color="primary" sx={{left: 0, top: 0}}>
            <Styled.MenuBar>
                <Typography variant="h6" component="div">
                    Sözlük
                </Typography>
                <Styled.Search>
                    <Styled.SearchIconWrapper>
                        <SearchIcon/>
                    </Styled.SearchIconWrapper>
                    <Styled.SearchInputBase
                        placeholder="Hmmm... ara bir bakalım bulabilecek miyiz..."
                        inputProps={{"aria-label": "search"}}
                    />
                </Styled.Search>
                <Styled.Icons>
                    <Badge sx={{display: "flex", alignItems: "center"}}>
                        <DarkModeIcon/>
                        <Switch onChange={e => dispatch(setMode())}/>
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <MailIcon color="white"/>
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon color="white"/>
                    </Badge>
                    <Avatar
                        onClick={handleClick}
                        alt="Cindy Baker"
                        sx={{width: "32px", height: "32px", objectFit: "contain"}}
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Ataturk1930s.jpg"
                    />
                </Styled.Icons>
            </Styled.MenuBar>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: "right", vertical: "top"}}
                anchorOrigin={{horizontal: "right", vertical: "bottom"}}
            >
                <MenuItem>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small"/>
                    </ListItemIcon>
                    Ayarlar
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small"/>
                    </ListItemIcon>
                    Çıkış Yap
                </MenuItem>
            </Menu>
        </AppBar>
    );
}
