import {Avatar, Box, Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const StyledText = styled(Typography)(({theme}) => ({
    color: theme.palette.text
}));


export default function NotificationTab() {

    const notifications = [
        {
            text: "almanya milli futbol takımı? başlığına yeni bir entry girildi.",
            date: "2 dakika önce"
        },
        {
            text: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            date: "1 saat önce"
        },
        {
            text: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            date: "1 gün önce",
        },
        {
            text: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            date: "30 saniye önce"
        },
        {
            text: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            date: "1 ay önce"
        },
    ]

    return (
        <Box spacing={3}>
            {notifications.map((item, index) => (
                <Stack key={index} display="flex" flexDirection="row" mb={3} justifyContent="flex-start"
                       alignItems="center"
                       gap="10px">
                    <Avatar>
                        <NotificationsActiveIcon color="white"/>
                    </Avatar>
                    <Stack display="flex" flexDirection="column">
                        <Stack display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                            <StyledText fontSize={14}>{item?.date}</StyledText>
                        </Stack>
                        <StyledText fontSize={14}>{item?.text}</StyledText>
                    </Stack>

                </Stack>
            ))}
        </Box>
    )
}
