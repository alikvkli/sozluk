import {styled, Box, List, Badge} from "@mui/material";

export const MenuItem = styled(Badge)(({theme}) => ({
    [theme.breakpoints.down("md")]: {
        "&:not(:first-of-type)": {
            display: "none",
        }
    }
}));

export const Container = styled(Box)((props) => ({
    display: "flex",
    justifyContent: "center",
    background: props.theme.palette.background.default,
    //padding: "16px",
    [props.theme.breakpoints.up("lg")]: {
        position: "fixed",
        top: "64px",
        bottom: 0,
        right: 0,
        width: "25%",
        height: "100%",
        boxShadow: "0 2px 4px rgba(0,0,0,0.16)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    [props.theme.breakpoints.down("lg")]: {
        display: props.show === "true" ? 'block' : 'none',
        position: "fixed",
        top: 0,
        left:0,
        zIndex: 2,
        width: "100%",
        height: "100%",
    }
}));

export const ListHeader = styled(Box)(({theme}) => ({
    border: "1px solid #dedede",
    padding: 10,
    display: "flex",
    justifyContent: "space-around",
}))

export const CustomList = styled(List)(({theme}) => ({
    maxHeight: "800px",
    overflowY: "auto",
    padding:16,
    [theme.breakpoints.down("md")]: {
        paddingBottom:"80px",
    },
    "&::-webkit-scrollbar": {
        width: "6px",
        height: "6px"
    },
    "&::-webkit-scrollbar-button": {
        width: 0,
        height: 0
    },
    "&::-webkit-scrollbar-thumb": {
        background: "#cccccc",
        border: "0px none #ffffff",
        borderRadius: "38px"
    },
    "&::-webkit-scrollbar-thumb:hover": {
        background: "#cccccc"
    },
    "&::-webkit-scrollbar-thumb:active": {
        background: "#cccccc"
    },
    "&::-webkit-scrollbar-track": {
        background: "#ffffff",
        border: "0px none #ffffff",
        borderRadius: "6px",
    },
    "&::-webkit-scrollbar-track:hover": {
        background: "#ffffff"
    },
    "&::-webkit-scrollbar-track:active": {
        background: "#ffffff"
    },
    "&::-webkit-scrollbar-corner": {
        background: "transparent"
    }

}))

export const ContentBox = styled(Box)(({theme}) => ({
    background: theme.palette.background.default,
    padding: "16px",
    [theme.breakpoints.up("lg")]: {
        position: "fixed",
        top: "64px",
        bottom: 0,
        right: 0,
        left: 0,
        width: "25%",
        height: "100%",
        boxShadow: "0 2px 4px rgba(0,0,0,0.16)"
    },
    [theme.breakpoints.down("lg")]: {
        position: "fixed",
        top: 0,
        zIndex: 2,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    }
}));

