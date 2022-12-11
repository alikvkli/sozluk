import * as React from 'react';
import {Container, Grid, Stack} from "@mui/material";
import {Fragment} from "react";
import Navbar from "../src/components/navbar/Navbar";
import Sidebar from "../src/components/sidebar/Sidebar";
import Feed from "../src/components/feed/Feed";
import Rightbar from "../src/components/rightbar/Rightbar";

export default function Index({mode, setMode}) {
    return (
        <Fragment>
            <Navbar/>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Sidebar/>
                </Grid>
                <Grid item lg={5}>
                    <Feed/>
                </Grid>
                <Grid item xs>
                    <Rightbar/>
                </Grid>
            </Grid>

        </Fragment>
    );
}
