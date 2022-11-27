import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {CacheProvider} from '@emotion/react';
import createEmotionCache from '../src/components/createEmotionCache';
import {Provider} from "react-redux";
import {store} from "../src/redux/store";
import Layout from "./_layout";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <Provider store={store}>
                <Layout Component={Component} pageProps={pageProps}/>
            </Provider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
