import {Avatar, Box, Stack, Typography} from "@mui/material";
import {utils} from "../../utils";
import {styled} from "@mui/material/styles";

const StyledText = styled(Typography)(({theme}) => ({
    color: theme.palette.text
}));

export default function MessagesTab() {

    const stringToColor = (string) => {
        let hash = 0;
        let i;
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = '#';
        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        return color;
    }
    const stringAvatar = (name) => {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: utils.idetiferText(name),
        };
    }

    const messages = [
        {
            name: "yashar kedioglu",
            text: "Lorem Ipsum, dizgi ve.",
            date: "2 dakika önce"
        },
        {
            name: "pertli nick",
            text: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            date: "1 saat önce"
        },
        {
            name: "bozo1",
            text: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            date: "1 gün önce",
        },
        {
            name: "haroyin",
            text: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            date: "30 saniye önce"
        },
        {
            name: "kasaba insani",
            text: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            date: "1 ay önce"
        },
    ]

    return (
        <Box spacing={3}>
            {messages.map((item, index) => (
                <Stack key={index} display="flex" flexDirection="row" mb={3} justifyContent="flex-start"
                       alignItems="center"
                       gap="10px">
                    <Avatar {...stringAvatar(item.name)} />
                    <Stack display="flex" flexDirection="column" flex={1}>
                        <Stack display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                            <Typography fontSize={18}>{item?.name}</Typography>
                            <StyledText fontSize={14}>{item?.date}</StyledText>
                        </Stack>
                        <StyledText fontSize={14}>{item?.text}</StyledText>
                    </Stack>

                </Stack>
            ))}
        </Box>
    )
}
