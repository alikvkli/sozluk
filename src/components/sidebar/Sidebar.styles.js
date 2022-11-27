import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const ContentBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
        flex:"none",
        display: "none",
    },
    [theme.breakpoints.up("sm")]: {
        display: "block",
    },
}));
