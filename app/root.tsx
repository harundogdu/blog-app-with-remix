import {Links, LinksFunction, LiveReload, Meta, Outlet, Scripts} from "remix";
import {IDocumentProps, IErrorProps, ILayoutProps} from "~/types/IRoot";

import styles from "~/styles/app.css"
import Navbar from "~/components/header/navbar";
import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";

export const links: LinksFunction = () => {
    return [{rel: "stylesheet", href: styles}]
}

export default function App() {
    return (
        <Document>
            <Layout>
                <Outlet/>
            </Layout>
        </Document>
    );
}


export function Document({children, title}: IDocumentProps) {
    return (
        <html lang="tr">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <title>{title ? title : "Remix Blog App"}</title>
            <Meta/>
            <Links/>
        </head>
        <body>
        {children}
        {
            process.env.NODE_ENV === "development" ?
                <LiveReload/> :
                null
        }
        <Scripts/>
        </body>
        </html>
    )
}

export function Layout({children}: ILayoutProps) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export function ErrorBoundary({error}: IErrorProps) {
    return (
        <Document>
            <Layout>
                <h1>Something went wrong!</h1>
                <p>{error.message}</p>
            </Layout>
        </Document>
    )

    /*return (
        <>
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
        </>
    )*/
}
