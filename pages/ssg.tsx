import { GetStaticProps, NextPage, NextPageContext } from 'next'

import Head from 'next/head'
import { deflate } from 'zlib'

type SSGProps = {
    message: string,
}

const SSG:NextPage<SSGProps> = (props) => {
    const {message} = props
    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    Page geanarated by SSG
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getStaticProps:GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}に getStaticProps を実行`
    console.log(message)
    return {
        props: {message},
    }
}

export default SSG