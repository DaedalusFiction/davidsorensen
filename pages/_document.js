import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../utility/createEmotionCache";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="keywords"
                        content="web development, website, websites, portfolio, artist, musician, author, template, custom website, developer"
                    />
                    <meta
                        data-n-head="ssr"
                        data-hid="description"
                        name="description"
                        content="Charlottesville Virginia Web Development"
                    />
                    <meta
                        data-n-head="ssr"
                        name="twitter:card"
                        content="Charlottesville Virginia Web Development"
                    />
                    <meta
                        data-n-head="ssr"
                        name="twitter:title"
                        content="Fictional Web"
                    />
                    <meta
                        data-n-head="ssr"
                        name="twitter:description"
                        content="Charlottesville Virginia Web Development"
                    />
                    <meta
                        data-n-head="ssr"
                        name="twitter:creator"
                        content="David Sorensen"
                    />

                    {/* <meta data-n-head="ssr" name="og:title" content="Zuzu's Hot Five"> */}
                    <meta data-n-head="ssr" name="og:type" content="website" />
                    <meta
                        data-n-head="ssr"
                        name="og:url"
                        content="https://fictionalweb.com"
                    />

                    <meta
                        data-n-head="ssr"
                        name="og:description"
                        content="Charlottesville Virginia Web Development"
                    />
                    <meta
                        data-n-head="ssr"
                        name="og:site_name"
                        content="Fictional Web"
                    />

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="images/favicons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="images/favicons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="images/favicons/favicon-16x16.png"
                    />
                    <link
                        rel="manifest"
                        href="images/favicons/site.webmanifest"
                    />
                    <link
                        rel="mask-icon"
                        href="images/favicons/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff"></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    /* eslint-disable */
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />;
                },
        });
    /* eslint-enable */

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(" ")}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            ...emotionStyleTags,
        ],
    };
};
