import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import * as React from "react";
import {useSelector} from "react-redux";
import {useMemo, useState} from "react";
import {red} from '@mui/material/colors';
import Modal  from "../src/components/modals/Modal";
import {Roboto} from "@next/font/google";

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                primary: {
                    main: "#3f51b5",
                },
                secondary: {
                    main: '#19857b',
                },
                error: {
                    main: red.A400,
                },
                divider: "#fde68a",
                text: {
                    primary: "#000",
                    secondary: "#27272a",
                },
                typography: {
                    fontFamily: roboto.style.fontFamily,
                }
            } : {
                primary: {
                    main: "#dbf4ff",
                },
                divider: "#004282",
                background: {
                    default: "#000e21",
                    paper: "#000e21",
                },
                text: {
                    primary: "#fff",
                    secondary: "#71717a",
                },
                typography: {
                    fontFamily: roboto.style.fontFamily,
                }
            }),
    },
});


export default function Layout(props) {
    const {Component, pageProps} = props;
    const {mode} = useSelector(state => state.app);
    const {open, data} = useSelector(state => state.modal);
    const [appTheme, setAppTheme] = useState(mode)


    useMemo(() => {
        setAppTheme(mode);
    }, [mode])

    const theme = useMemo(() => createTheme(getDesignTokens(appTheme), [appTheme]));
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {open && <Modal name={open} data={data} />}
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
