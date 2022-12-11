import {useState, Fragment, useRef} from "react";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from '@mui/icons-material/Close';
import * as Styled from "./Navbar.styles";
import {
    Avatar, Typography, Menu, MenuItem, ListItemIcon, Switch, Toolbar, IconButton, Fab, Box, styled, Divider
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {useDispatch, useSelector} from "react-redux";
import {changeRightBar, setMode, showRightBar, showSideBar} from "../../redux/appSlice";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const StyledFab = styled(Fab)({
    position: 'absolute', zIndex: 1, top: -30, left: 0, right: 0, margin: '0 auto',
});

export default function Navbar() {
    const dispatch = useDispatch();
    const searchRef = useRef();
    const {sideBar, rightBarShow} = useSelector(state => state.app);
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchResult, setSearchResult] = useState(false)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleSidebar = () => {
        dispatch(showSideBar());
    }
    const handleSearch = () => {
        setSearchResult(true);
    }

    const handleRightBar = type => {
        dispatch(changeRightBar(type));
        if (!rightBarShow) {
            dispatch(showRightBar());
        }
    }

    const handleHideRightBar = () => {
        dispatch(showRightBar());
    }


    useOnClickOutside(searchRef, () => setSearchResult(false));

    return (<Fragment>
        <Styled.DesktopAppBar position="fixed" color="primary">
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
                        onChange={handleSearch}

                    />
                    {searchResult && (<Styled.SearchResult ref={searchRef}>
                        <ul>
                            <li>ikonik duruş</li>
                            <li>türkiye</li>
                            <li>o ses türkiye</li>
                            <li>netflix türkiye</li>
                            <li>türkiye a milli futbol takımı</li>
                            <li>11 haziran 2021 italya türkiye maçı</li>
                        </ul>
                    </Styled.SearchResult>)}
                </Styled.Search>
                <Styled.Icons>
                    <Styled.MenuItem sx={{display: "flex", alignItems: "center"}}>
                        <DarkModeIcon/>
                        <Switch onChange={e => dispatch(setMode())}/>
                    </Styled.MenuItem>
                    <Styled.MenuItem badgeContent={4} color="error">
                        <MailIcon color="white"/>
                    </Styled.MenuItem>
                    <Styled.MenuItem badgeContent={4} color="error">
                        <NotificationsIcon color="white"/>
                    </Styled.MenuItem>
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
                    elevation: 0, sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32, height: 32, ml: -0.5, mr: 1,
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
        </Styled.DesktopAppBar>
        <Styled.MobileAppBar position="fixed" color="primary">
            <Toolbar>
                <StyledFab color="secondary" aria-label="add">
                    <AddIcon/>
                </StyledFab>

                <IconButton color="inherit" onClick={() => handleRightBar("messages")}>
                    <MailIcon/>
                </IconButton>

                <IconButton color="inherit" onClick={() => handleRightBar("notifications")}>
                    <NotificationsIcon/>
                </IconButton>
                <Box sx={{flexGrow: 1}}/>
                {rightBarShow ? (
                    <IconButton color="inherit" aria-label="open drawer" onClick={handleHideRightBar}>
                        <CloseIcon/>
                    </IconButton>
                ) : (
                    <IconButton color="inherit" aria-label="open drawer" onClick={handleSidebar}>
                        {sideBar ? <CloseIcon/> : <MenuIcon/>}
                    </IconButton>
                )}

            </Toolbar>
        </Styled.MobileAppBar>
    </Fragment>);
}


