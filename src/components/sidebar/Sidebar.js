import * as Styled from "./Sidebar.styles";
import {
    List, ListItemButton, ListItemIcon, ListItemText, Box, IconButton, Typography, Divider, ListItemSecondaryAction
} from "@mui/material";
import {useSelector} from "react-redux";
import TagIcon from '@mui/icons-material/Tag';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import TimelineIcon from '@mui/icons-material/Timeline';

export default function Sidebar() {

    const menuItems = [
        {
            name: "1 aralık 2022 kosta rika almanya maçı",
            number: 508
        },
        {
            name: "1 aralık 2022 japonya ispanya maçı",
            number: 96
        },
        {
            name: "h. şükür dedi diye değiştirilen trt spikeri",
            number: 123
        },
        {
            name: "birinin seni sevmesi için çaba göstermek",
            number: 44
        },
        {
            name: "kablolu kulaklığı kim kullanıyor",
            number: 232
        },
        {
            name: "leğene ileğen diyen anadolu insanı",
            number: 63
        },
        {
            name: "efendi erkeğin acımasız bir erkeğe dönüşmesi",
            number: 234
        },
        {
            name: "asgari ücrete rekor zam 10 bin tl",
            number: 45
        },
        {
            name: "almanya milli futbol takımı",
            number: 178
        },
        {
            name: "saçlarını kısa kestiren kadınlar cennete giremez",
            number: 45
        },
        {
            name: "terapi yerine geçebilecek şey",
            number: 51
        },
        {
            name: "iran'da başörtü yasağının fiilen kaldırılması",
            number: 54
        },
        {
            name: "sahtesi mümkün olmayan meslekler",
            number: 63
        },
        {
            name: "hakan şükür yerine kullanılabilecek alternatifler",
            number: 84
        },
        {
            name: "alper bakırcıgil",
            number: 20
        },
        {
            name: "veda ederken 2022 bir not bırakmak",
            number: 18
        },
        {
            name: "spotify wrapped 2022",
            number: 45
        },
    ];

    const {sideBar} = useSelector(state => state.app);
    return (<Styled.Container show={sideBar.toString()}>
        <Styled.ListHeader>
            <IconButton color="primary">
                <TagIcon/>
                <Typography fontWeight="bold">Gündem</Typography>
            </IconButton>
            <IconButton color="primary">
                <TimelineIcon/>
                <Typography fontWeight="bold">Akış</Typography>
            </IconButton>
            <IconButton color="primary">
                <ContactSupportIcon/>
                <Typography fontWeight="bold">Sorunsallar</Typography>
            </IconButton>
        </Styled.ListHeader>

        <Styled.CustomList>
            {menuItems.map((item, index) => (
                <ListItemButton key={index}>
                    <ListItemIcon>
                        <TagIcon/>
                    </ListItemIcon>
                    <ListItemText sx={{paddingRight:"30px"}} primary={item.name}/>
                    <ListItemSecondaryAction>{item.number}</ListItemSecondaryAction>
                </ListItemButton>
            ))}
        </Styled.CustomList>
    </Styled.Container>)
}
