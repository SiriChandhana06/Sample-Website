import React from 'react';
import { Helmet } from 'react-helmet';
import w2 from '../Assets/web2.webp';
import Nav from '../Components/Nav';
import { Helmet } from 'react-helmet';

const Web2 = () => {
  return (
    <div>
      <Helmet>
                <title>Web 2</title>
                <meta name="description" content="This is the Web 2.0 page of my website." />
                <meta property="og:title" content="WEB 2.0 Page" />
                <meta property="og:description" content="This is the Web 2.0 page of my website." />
                <meta name="image" content="https://i.im.ge/2024/05/12/ZnJLYa.Web2.png"/>
                <meta property="og:image" content="https://i.im.ge/2024/05/12/ZnJLYa.Web2.png" />
                <meta itemprop="image" content="https://i.im.ge/2024/05/12/ZnJLYa.Web2.png"/>
                <meta property="og:url" content="https://sample-website-seven.vercel.app/web2" />
                <meta property="og:type" content="website"/>
        </Helmet>
    <div className='bg-gray-900 h-screen '>
      <Nav/>
      <div className='grid grid-cols-2 px-10 py-20'> 
      <div>
        <div className='pt-10 pl-20' >
          <img src={w2} alt='web2'/>
        </div>
      </div>
        <div >
          <h1 className='text-white text-justify text-lg'>Web 2.0 marks a pivotal shift in the internet landscape, transforming static web pages into dynamic, interactive platforms. Emerging in the early 2000s, this era emphasizes user-generated content and collaboration. Social media networks like Facebook and Twitter epitomize Web 2.0, enabling users to engage with content through likes, shares, and comments, fostering real-time communication and connection. Dynamic web applications, powered by technologies like AJAX, provide seamless and responsive user experiences, blurring the lines between web and desktop applications. Additionally, the semantic web enhances data interoperability, making information more accessible and interpretable by machines, while mobile and cloud computing ensure ubiquitous access to online content across devices. Web 2.0 has democratized content creation, empowering users to shape the digital discourse and participate in a global community, ultimately redefining the internet as a collaborative and interactive platform.</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Web2;