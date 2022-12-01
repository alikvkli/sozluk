import {styled} from "@mui/material/styles";
import {Stack} from "@mui/system";
import {Box} from "@mui/material";

export const FeedStack = styled(Stack)(({theme}) => ({
    [theme.breakpoints.up("lg")]: {
        float: "right",
        width: "75%",
        paddingLeft: 20,
        marginTop: 64
    },
    [theme.breakpoints.down("lg")]: {
        display: "flex",
        alignItems:"center",
        marginTop:64,
    }
}));

export const FeedBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.down("md")]:{
        marginBottom:"60px",
        marginTop:"16px"
    },
    [theme.breakpoints.up("md")]:{
        marginTop:"16px"
    }
}))
