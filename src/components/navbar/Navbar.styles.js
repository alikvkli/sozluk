import {styled, alpha} from "@mui/material/styles";
import {Toolbar, InputBase, AppBar, Badge} from "@mui/material";
import {Box} from "@mui/system";

export const MenuBar = styled(Toolbar)(({theme}) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}));

export const SearchResult = styled("div")(({theme}) => ({
    position: "absolute",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    width: "100%",
    padding: "10px",
    height: "300px",
    overflowY: "auto",
    boxShadow: "2px 3px 6px 0px rgba(0,0,0,0.16)",
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
    },
    "ul": {
        padding: "5px",
        margin: 0,
        "li": {
            listStyleType: "none",
            "&:not(:last-child)": {
                "&::after": {
                    content: '""',
                    display: "block",
                    margin:"10px 0",
                    borderWidth: "0",
                    borderStyle: "solid",
                    borderColor: "#dedede",
                    borderBottomWidth: "thin"
                }
            }
        }
    }
}));

export const Search = styled("div")(({theme}) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
    [theme.breakpoints.down("md")]: {
        display: "none",
    }
}));

export const SearchIconWrapper = styled("div")(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const SearchInputBase = styled(InputBase)(({theme}) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.between("md", "lg")]: {
            width: "40ch",
            "&:focus": {
                width: "50ch",
            },
        },
        [theme.breakpoints.up("lg")]: {
            width: "50ch",
            "&:focus": {
                width: "80ch",
            },
        },

    },
}));

export const Icons = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    cursor: "pointer",
}));

export const MenuItem = styled(Badge)(({theme}) => ({
    [theme.breakpoints.down("md")]: {
        "&:not(:first-of-type)": {
            display: "none",
        }
    }
}));

export const DesktopAppBar = styled(AppBar)(({theme}) => ({
    left: 0,
    top: 0,
    zIndex: 1,
}))

export const MobileAppBar = styled(AppBar)(({theme}) => ({
    [theme.breakpoints.down("lg")]: {
        display: "block",
    },
    zIndex: 3,
    top: 'auto',
    bottom: 0,
    display: "none"
}))


