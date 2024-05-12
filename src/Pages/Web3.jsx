import React from 'react';
import w3 from '../Assets/web3.webp';
import Nav from '../Components/Nav';
// import { Helmet } from 'react-helmet';

const Web3 = () => {
  return (
    <div>
        {/* <Helmet>
                <title>Web 3</title>
                <meta name="description" content="This is the Web 3.0 page of my website." />
                <meta property="og:title" content="WEB 3.0 Page" />
                <meta property="og:description" content="This is the Web 3.0 page of my website." />
                <meta name="image" content="https://i.im.ge/2024/05/12/ZnJU4J.Web3.png"/>
                <meta property="og:image" content="https://i.im.ge/2024/05/12/ZnJU4J.Web3.png" />
                <meta itemprop="image" content="https://i.im.ge/2024/05/12/ZnJU4J.Web3.png"/>
                <meta property="og:url" content="https://sample-website-seven.vercel.app/web3" />
                <meta property="og:type" content="website"/>
        </Helmet> */}
    <div className='bg-gray-900 h-screen '>
      <Nav/>
      <div className='grid grid-cols-2 px-10 py-20'> 
      <div>
        <div className='pt-10' >
          <img src={w3} alt='web3'/>
        </div>
      </div>
        <div >
          <h1 className='text-white text-justify text-lg'>Web 3.0, also known as the decentralized web, is the next stage in the evolution of the internet, emphasizing decentralization, security, and user empowerment. Emerging in the early 2010s, Web 3.0 builds upon the principles of Web 2.0 while introducing new technologies like blockchain, artificial intelligence, and semantic web. Decentralization is a core tenet of Web 3.0, achieved through blockchain technology, which enables peer-to-peer networks without the need for central authorities. This decentralization fosters trust, transparency, and resilience in online interactions. In Web 3.0, users have greater ownership and control over their data, facilitated by technologies like self-sovereign identity and zero-knowledge proofs, ensuring privacy and security. Interoperability is enhanced through the semantic web, allowing machines to understand and interpret data across different platforms seamlessly. Artificial intelligence and machine learning drive personalized experiences and insights, while smart contracts and tokenization revolutionize economic models by automating transactions and creating new forms of digital assets. Web 3.0 holds the promise of a more open, transparent, and inclusive internet, empowering users and reshaping the way we interact, collaborate, and transact online.</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Web3;