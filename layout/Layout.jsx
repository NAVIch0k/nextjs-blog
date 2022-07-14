import Head from "next/head"
import Header from "../components/Header/Header"
import Player from "../components/Player/Player"

const Layout = ({ children, title, description, keywords }) => {
    return (
        <>
            <Head>
                <title>{title || 'Музыкальная площадка'}</title>
                <meta name="description" content={`Музыкальная площадка. Здесь можно послушать музыку.` + description} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={keywords || "Музыка, треки, артисты"} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header/>
            {children}
            <Player/>
        </>
    )
}

export default Layout
