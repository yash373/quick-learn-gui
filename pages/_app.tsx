import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Quick Learn - Enhance Your Knowledge Effortlessly</title>
        <meta name="description" content="Quick Learn provides a seamless and interactive way to enhance your skills and knowledge through an open-source, user-friendly GUI." />
        <meta name="keywords" content="Quick Learn, open-source learning, interactive GUI, skill enhancement, education tools, tech learning, user-friendly interface" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Yash373 and contributors" />
        <meta property="og:title" content="Quick Learn - Enhance Your Knowledge Effortlessly" />
        <meta property="og:description" content="Quick Learn offers a comprehensive platform to boost your skills using an open-source, intuitive interface." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/yash373/quick-learn-gui" />
        <meta property="og:image" content="path_to_your_image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quick Learn - Enhance Your Knowledge Effortlessly" />
        <meta name="twitter:description" content="Quick Learn offers an interactive and user-friendly platform for skill enhancement." />
        <meta name="twitter:image" content="path_to_your_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
