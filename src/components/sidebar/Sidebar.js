import TagIcon from '@mui/icons-material/Tag';
import * as Styled from "./Sidebar.styles";
import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Typography,
    Switch,
} from "@mui/material";

export default function Sidebar() {
    return (
        <Styled.ContentBox>
            <Box
                bgcolor={"background.default"}
                p={2}
                sx={{
                    position: "sticky",
                    top: "50px",
                    bottom:0,
                    right:0,
                    left:0,
                    width: "300px",
                    height: "100vh",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.16)",
                }}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <TagIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Anasayfa"/>
                    </ListItemButton>
                </List>
            </Box>
        </Styled.ContentBox>
    )
}
