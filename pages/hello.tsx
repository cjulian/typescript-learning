import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from "styled-components";

const ImageWrapper = styled.div`
  border: 1px solid red;
  max-width: 900px;
`;

const Hello: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="My first typescript page"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <h1>My First TypeScript Page</h1>
      <p>This is my first page using typescript.  It&apos;s mostly just the same as JS so far.</p>
        <Image src="/landscape.jpeg" layout="responsive" width="1601" height="664" alt="a bunch of icons" priority/>
    </div>
  )
}

export default Hello
