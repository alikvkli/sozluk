import {
    Box,
    IconButton,
    Menu,
    MenuItem,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Typography, Avatar
} from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IosShareIcon from '@mui/icons-material/IosShare';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkIcon from '@mui/icons-material/Link';
import BugReportIcon from '@mui/icons-material/BugReport';
import * as Styled from "./Entry.styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modalSlice";
import { UserInfo } from "../navbar/Navbar.styles";
import { InfoText, ProfilePhoto } from "./Entry.styles";

export default function Entry({ text }) {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState();
    const shareOpen = Boolean(anchorEl);
    const handleShare = event => {
        setAnchorEl(event.currentTarget)
    }
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleReport = () => {
        dispatch(openModal({
            name: "report-entry"
        }));
    }

    return (
        <>
            <Styled.EntryCard>
                <Styled.EntryTitle>Konuştuğu biri var mı?</Styled.EntryTitle>
                <Styled.EntryContent>{text}</Styled.EntryContent>
                <Styled.EntryActions>
                    <Box>
                        <IconButton>
                            <ArrowUpwardIcon />
                        </IconButton>
                        <IconButton>
                            <ArrowDownwardIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton onClick={handleShare}>
                            <IosShareIcon />
                        </IconButton>
                        <IconButton onClick={handleReport}>
                            <BugReportIcon />
                        </IconButton>
                    </Box>
                    <Menu
                        id="share-menu"
                        anchorEl={anchorEl}
                        open={shareOpen}
                        onClose={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 6px rgba(0,0,0,0.32))",
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
                        transformOrigin={{ horizontal: "right", vertical: "top" }}
                        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                        <MenuItem><FacebookIcon sx={{ marginRight: "5px", color: "#4267B2" }} /> Facebook</MenuItem>
                        <MenuItem><TwitterIcon sx={{ marginRight: "5px", color: "#1DA1F2" }} /> Twitter</MenuItem>
                        <MenuItem><WhatsAppIcon sx={{ marginRight: "5px", color: "#128C7E" }} /> Whatsapp</MenuItem>
                        <MenuItem><LinkIcon sx={{ marginRight: "5px", color: "#1DB954" }} /> Entry linkini
                            kopyala</MenuItem>
                    </Menu>
                </Styled.EntryActions>
                <Styled.UserInfo>
                    <Box display="flex" alignItems="flex-end" justifyContent="center" flexDirection="column">
                        <Styled.InfoText>deneyelim olacak mi</Styled.InfoText>
                        <Styled.InfoText>29.05.2013 20:23</Styled.InfoText>
                    </Box>
                    <Styled.ProfilePhoto alt="test"
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Ataturk1930s.jpg" />
                </Styled.UserInfo>
            </Styled.EntryCard>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>

    )
}
