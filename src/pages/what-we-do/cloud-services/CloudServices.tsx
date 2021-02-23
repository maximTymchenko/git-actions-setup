import React, { FC, useState } from 'react';
import Layouts from '../../../components/layout';
import PageHeader from '../../../components/pagesComponents/WhatWeDo/PageHeader';
import TechList from '../../../components/pagesComponents/WhatWeDo/TechList';
import SectionTitle from '../../../components/common/SectionTitle';
import TechIcon from '../../../components/pagesComponents/MainPage/TechIcon';
import './CloudServices.scss';
import { FaReact, FaJava, FaGoogle, FaGooglePlay, FaBimobject, FaNode } from 'react-icons/fa';
import { SiAngular, SiAmazon, SiMicrosoftazure } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import bucketBGRectangle from '../../../assets/img/companies/rectangle-bucket-bg.svg';
import LargeCompanyContainer from '../../../components/pagesComponents/MainPage/LargeCompanyContainer';
import spectar from '../../../assets/img/companies/spectar.svg';
import walmart from '../../../assets/img/companies/walmart.svg';
import TextSpan from '../../../components/pagesComponents/MainPage/TextSpan';
import Button from '../../../components/common/Button';
import arrowRight from '../../../assets/img/arr-right.svg';
import Filter from '../../../components/common/Filter';
import { Link } from 'gatsby';

import './CloudServices.scss';

const CloudServices: FC = () => {
    const [showMoreIcons, setShowMoreIcons] = useState<boolean>(false);

    const toggleIconsVisibility = (): void => setShowMoreIcons(!showMoreIcons);

    const webDevelopmenList = [
        'Architecture planning',
        'Microservice architecture',
        'Event sourcing',
        'CQRS',
        'Amazon AWS',
        'Google Firebase',
        'Microsoft Azure',
    ];

    const techIcons = [
        <FaJava />,
        <DiJavascript1 />,
        <FaReact />,
        <SiAngular />,
        <SiAmazon />,
        <FaGoogle />,
        <SiMicrosoftazure />,
    ];

    if (showMoreIcons) {
        techIcons.push(
            <FaBimobject />,
            <SiAmazon />,
            <FaGoogle />,
            <SiMicrosoftazure />,
            <SiAngular />,
            <FaNode />,
            <SiAmazon />,
            <FaGoogle />,
        );
    }
    return (
        <Layouts>
            <PageHeader
                offset={-100}
                id="services"
                title="Cloud Services"
                subtitle="Discover"
                bgType="dots"
            />
            <section className="what-we-do">
                <Filter />
                <div className="web-development__wrapper">
                    <div id="services" className="web-development__body">
                        <SectionTitle title="Services" type="main" />
                        <TechList techList={webDevelopmenList} hide="hide" borderType="right" />
                    </div>
                    <div className="web-development__technologies">
                        <div className="web-development__icons">
                            <TechIcon
                                iconsArray={techIcons}
                                img={bucketBGRectangle}
                                label={showMoreIcons ? 'Show less' : '+30 more'}
                                bucketFunc={toggleIconsVisibility}
                                show="hide"
                                showBucket="true"
                                size="ml"
                                type="primary"
                                large="large"
                                margin="center"
                            />
                        </div>
                    </div>
                </div>
                <SectionTitle title="Relevant projects" type="main" />
                <div className="what-we-do__companies">
                    <div className="what-we-do__company">
                        <LargeCompanyContainer
                            typeBG="bg-main"
                            img={spectar}
                            description="Building a pioneering AR product for construction"
                            label="CASE STUDY"
                            hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                        />
                    </div>
                    <div className="what-we-do__company">
                        <LargeCompanyContainer
                            typeBG="bg-secondary"
                            img={walmart}
                            description="Increasing Walmart weekly ads conversion with a custom web app for Ad Tech company"
                            label="CASE STUDY"
                            hashtags="Amazon, Retail & E-commerce, React, Web development, +13 more"
                            logoPos="mb"
                        />
                    </div>
                </div>
                <SectionTitle title="Resources" type="main" />
                <div className="what-we-do__companies-wrapper">
                    <div className="what-we-do__companies">
                        <div className="what-we-do__company">
                            <LargeCompanyContainer
                                typeBG="bg-servers"
                                img={spectar}
                                description="Building a pioneering AR product for construction"
                                label="CASE STUDY"
                                hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                        <div className="what-we-do__company">
                            <LargeCompanyContainer
                                typeBG="bg-rooms"
                                img={walmart}
                                description="Increasing Walmart weekly ads conversion with a custom web app for Ad Tech company"
                                label="CASE STUDY"
                                hashtags="Amazon, Retail & E-commerce, React, Web development, +13 more"
                                logoPos="mb-more"
                            />
                        </div>
                    </div>
                    <Link to="/blog/">
                        <Button
                            icon={arrowRight}
                            type="primary"
                            desc="Read more on the blog"
                            subtype="large"
                        >
                            Read more on the blog
                        </Button>
                    </Link>
                </div>
                <TextSpan type="large-screen" title="Shall we chat quickly?">
                    Even a 5-minute intro call could potentially save you countless hours of endless
                    back-and-forth emails.
                </TextSpan>
            </section>
        </Layouts>
    );
};

export default CloudServices;
