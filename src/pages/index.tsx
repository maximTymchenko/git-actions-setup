import React, { FC } from 'react';
import Layout from '../components/layout';
import CookiesPopup from '../components/Cookies';
import Title from '../components/pagesComponents/MainPage/Title';
import Services from '../components/pagesComponents/MainPage/Services';
import Technologies from '../components/pagesComponents/MainPage/Technologies';
import Features from '../components/pagesComponents/MainPage/Features';
import Video from '../components/pagesComponents/MainPage/Video';
import TextSpan from '../components/pagesComponents/MainPage/TextSpan';
import '../styles/index.scss';
import arrowRight from '../assets/img/arr-right.svg';

const HomePage: FC = () => (
    <Layout>
        <main className="main">
            <div className="main__wrapper">
                <Title />
                <Services />
                <Technologies />
                <Features
                    buttonIcon={arrowRight}
                    title="More amazing services and success stories awaiting you here"
                    buttonText="Discover all"
                />
                <Video />
            </div>
            <TextSpan title="Shall we chat quickly?">
                Even a 5-minute intro call could potentially save you countless hours of endless
                back-and-forth emails.
            </TextSpan>
        </main>
        <CookiesPopup />
    </Layout>
);

export default HomePage;
