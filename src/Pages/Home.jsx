import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../Components/Nav';
import illustrate from "../Assets/illustration 1.png";

const Home = () => {
  return (
    <div>
        <head>
        <title>Home</title>
        <meta name="description" content="This is the Home page of my website." />
        <meta property="og:title" content="Home Page" />
        <meta property="og:description" content="This is the Home page of my website." />
        <meta name="image" content="https://i.im.ge/2024/05/10/ZpiPoq.Icon.png" />
        <meta property="og:image" content="https://i.im.ge/2024/05/10/ZpiPoq.Icon.png" />
        <meta itemprop="image" content="https://i.im.ge/2024/05/10/ZpiPoq.Icon.png" />
        <meta property="og:url" content="https://sample-website-vert.vercel.app/" />
        <meta property="og:type" content="website" />
        </head>
      <div className='bg-gray-900 h-screen'>
        <Nav />
        <div className='grid grid-cols-2 px-20'>
          <div className='h-4/5 w-4/5 p-4'>
            <img src={illustrate} alt="illustrate" />
          </div>
          <div className='pt-24'>
            <h1 className='text-white font-medium text-justify'>Welcome to Sample Website, a dynamic online platform that seamlessly integrates elements from Web 1.0, Web 2.0, and Web 3.0 eras, offering a multifaceted digital experience. Explore the nostalgic charm of Web 1.0 with our collection of static web pages, reminiscent of the early days of the internet, providing informative content and resources. Immerse yourself in the interactive world of Web 2.0 as you engage with user-generated content, participate in discussions, and contribute to our vibrant online community. Additionally, discover the cutting-edge innovations of Web 3.0, where intelligent algorithms, decentralized technologies, and personalized experiences redefine the internet landscape. Whether you're seeking timeless information, social interactions, or futuristic advancements, sample website caters to all audiences, blending the best of past, present, and future web technologies into a unified digital platform.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
