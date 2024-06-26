import React from 'react';
import w1 from '../Assets/web1.jpg';
import Nav from '../Components/Nav';
import { Helmet } from 'react-helmet';

const Web1 = () => {
  return (
    <div>
      <Helmet>
      <title>Web 1</title>
        <meta name="title" content="Web 3" />
        <meta name="description" content="This is the Web 1.0 page of my website." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sample-website-hello.vercel.app/web1" />
        <meta property="og:title" content="Web 1" />
        <meta property="og:description" content="This is the Web 1.0 page of my website." />
        <meta property="og:image"
          content="https://github.com/SiriChandhana06/Sample-Website/blob/master/src/images/Web1.png?raw=true" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sample-website-hello.vercel.app/web1" />
        <meta property="twitter:title" content="Web 1" />
        <meta property="twitter:description" content="This is the Web 1.0 page of my website." />
        <meta property="twitter:image" content="https://github.com/SiriChandhana06/Sample-Website/blob/master/src/images/Web1.png?raw=true" />

      </Helmet>

    <div className='bg-gray-900 h-screen '>
      <Nav/>
      <div className='grid grid-cols-2 px-10 py-20'> 
      <div>
        <div className='pt-10' >
          <img src={w1} alt='web1'/>
        </div>
      </div>
        <div >
          <h1 className='text-white text-justify text-lg'>Web 1.0, often termed as the "read-only" web, delineates the foundational phase of the internet, prevailing from the late 1980s to the early 2000s. This period was defined by static web pages delivering fixed content to users, with minimal interactivity and negligible user-generated contributions. Websites, typically authored in HTML, offered one-way communication, lacking mechanisms for user engagement or content creation. Content was primarily controlled and updated by web developers and businesses, necessitating technical proficiency for any modifications. Commercial entities began establishing their online presence, utilizing websites as digital extensions of their offline operations. Early e-commerce ventures emerged, though transactions were rudimentary compared to contemporary standards. Technologies such as early web browsers and search engines played pivotal roles in facilitating user access and navigation within the burgeoning online landscape. Despite its simplicity, Web 1.0 laid the groundwork for subsequent web iterations, setting the stage for the dynamic and interactive web experiences that followed.</h1>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Web1;