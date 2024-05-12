import React from 'react';
import tch from '../Assets/web123.jpg';
import tch1 from '../Assets/tech.png';
import Nav from '../Components/Nav';
import { Helmet } from 'react-helmet';

const Tech = () => {
  return (
    <div>
       <Helmet>
                <title>TECHNICAL</title>
                <meta name="description" content="This is the about page of my website." />
                <meta property="og:title" content="Technical Page" />
                <meta property="og:description" content="This is the about page of my website." />
                <meta property="og:image" content="https://i.im.ge/2024/05/10/ZpiPoq.Icon.png" />
                <meta property="og:url" content="https://sample-website-qbc7.vercel.app/tech" />
                <meta property="og:type" content="website"/>
        </Helmet>
    <div className='bg-gray-900'>
      <Nav/>
      <div className='grid grid-cols-2 px-10 py-20'> 
      <div>
        <div className='pt-32 pr-10' >
          <img src={tch1} alt='tech'/>
        </div>
      </div>
        <div >
          <h1 className='text-white text-justify text-xl font-bold'>Web 1.0: <br/> <span className='text-lg font-normal'>Web 1.0, the early phase of the internet, was characterized by static web pages and limited user interaction. Websites were primarily built using HTML for structure, CSS for styling, and basic JavaScript for minimal interactivity like form validation. Content was predominantly read-only, with users passively consuming information rather than actively engaging with it.</span></h1>
          <h1 className='text-white text-justify text-xl font-bold'>Web 2.0: <br/><span className='text-lg font-normal'>Web 2.0 brought about a shift towards dynamic and interactive web experiences. With the advent of AJAX, websites could update content without full page reloads, providing a more seamless user experience. Server-side scripting languages like PHP and databases such as MySQL enabled the development of complex web applications. Social media platforms emerged, allowing users to create and share content, fostering online communities and collaboration. </span></h1>
          <h1 className='text-white text-justify text-xl font-bold'>Web 3.0: <br/> <span className='text-lg font-normal'> Web 3.0, also known as the decentralized web, aims to create a more open, secure, and interconnected internet. Blockchain technology underpins this phase, enabling decentralized data storage and transaction processing. Smart contracts automate agreements, and decentralized identity solutions provide privacy and security. Semantic web technologies enhance data interoperability, while machine learning and AI personalize user experiences. The emphasis is on user ownership of data and the ability to interact with the web in a more autonomous and secure manner.</span></h1>
        </div>
      </div>
      <div className='grid grid-cols-2 px-10 py-10'>
      <div>
        <h1 className='text-xl text-white font-bold'>Example:</h1><br/><br/>
        <h1 className='text-white text-justify text-xl font-bold'>Web 1.0:<span className='text-lg font-normal'>An example of a Web 1.0 website is a basic online encyclopedia like Encarta. Users could visit the website to read articles on various topics, but there was limited interactivity beyond clicking hyperlinks to navigate between pages. The content was static, and users couldn't contribute or edit the articles.</span></h1>
        <h1 className='text-white text-justify text-xl font-bold'>Web 2.0:<span className='text-lg font-normal'>A prime example of a Web 2.0 platform is Facebook. Users can create profiles, connect with friends, share posts, photos, and videos, and interact with each other through comments, likes, and shares. Facebook employs dynamic features like news feeds that update in real-time without requiring page refreshes. Additionally, users can create and join groups, events, and pages, contributing to the platform's content and community.</span></h1>
        <h1 className='text-white text-justify text-xl font-bold'>Web 3.0:<span className='text-lg font-normal'>An example of Web 3.0 is a decentralized social media platform like Steemit. On Steemit, users can create and share content similar to traditional social media platforms. However, the platform operates on a blockchain, ensuring decentralization and data ownership. Users are rewarded with cryptocurrency for their contributions, such as posts, comments, and votes. The platform uses smart contracts to automate reward distribution and ensure transparency, and the content is stored on a decentralized network, providing security and resilience against censorship.</span></h1>
      </div>
      <div className='pt-24 pl-10'>
      <img src={tch} alt='technical'/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Tech