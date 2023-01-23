import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

type SSRProps = {
    message: string,
}

const SSR:NextPage<SSRProps> = (props) => {
    const {message} = props

    return (
        <div>
            <Head>
                <title>Server Side Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    Page geanarated by SSR
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getServerSideProps:GetServerSideProps<SSRProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}に getStaticProps を実行`
    console.log(message)
    return {
        props: {message},
    }
}

export default SSR