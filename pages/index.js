import * as React from 'react';
import {Container, Stack} from "@mui/material";
import {Fragment} from "react";
import Navbar from "../src/components/navbar/Navbar";
import Sidebar from "../src/components/sidebar/Sidebar";
import Feed from "../src/components/feed/Feed";
export default function Index({mode,setMode}) {
  return (
    <Fragment>
        <Navbar/>
        <Stack direction="row" flexWrap="wrap" spacing={2} justifyContent="flex-start">
            <Sidebar/>
            <Feed/>
        </Stack>
    </Fragment>
  );
}
