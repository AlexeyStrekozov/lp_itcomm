import React from "react";
import { AppProps } from "next/app";
import smoothscroll from "smoothscroll-polyfill";
import Head from "next/head";
import { GetGeolocation } from "@/components/get_geolocation";

import { appWithTranslation } from "next-i18next";

import "../src/styles/index.css";
import { AppGlobalStateProvider } from "@/providers/app-context";

// kick off the polyfill!
if (typeof window !== "undefined") {
  smoothscroll.polyfill();
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppGlobalStateProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        {process.env.NODE_ENV !== "development" && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-101668469-1"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-101668469-1');`,
              }}
            ></script>

            <script
              dangerouslySetInnerHTML={{
                __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(43964189, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true })`,
              }}
            ></script>
            <noscript>
              <div>
                <img
                  src="https://mc.yandex.ru/watch/43964189"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                  }}
                  alt=""
                />
              </div>
            </noscript>
          </>
        )}
      </Head>
      <Component {...pageProps} />
      <GetGeolocation />
    </AppGlobalStateProvider>
  );
}

export default appWithTranslation(MyApp);
