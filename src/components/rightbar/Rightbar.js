import * as Styled from "./Rightbar.styles";
import {
    IconButton, Typography,
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import {useState} from "react";
import NotificationTab from "./NotificationTab";
import MessagesTab from "./MessagesTab";
import {changeRightBar} from "../../redux/appSlice";

export default function Rightbar() {
    const dispatch = useDispatch();

    const handleTab = (type) => {
        dispatch(changeRightBar(type))
    }

    const {rightBar,rightBarShow} = useSelector(state => state.app);
    return (<Styled.Container show={rightBarShow.toString()}>
        <Styled.ListHeader>

            <IconButton color={rightBar === "notifications" ? 'error' : 'primary'} sx={{borderRadius: "0", gap: "5px"}}
                        onClick={() => handleTab("notifications")}>
                <NotificationsIcon color="white"/>
                <Typography fontWeight="bold">Bildirimler</Typography>
            </IconButton>

            <IconButton color={rightBar === "messages" ? 'error' : 'primary'} sx={{borderRadius: "0", gap: "5px"}}
                        onClick={() => handleTab("messages")}>
                <MailIcon color="white"/>
                <Typography fontWeight="bold">Mesajlar</Typography>
            </IconButton>

        </Styled.ListHeader>

        <Styled.CustomList>
            {rightBar === "notifications" ? <NotificationTab/> : <MessagesTab/>}
        </Styled.CustomList>
    </Styled.Container>)
}


