import React, { FC, useState } from 'react';
import Layouts from '../../components/layout';
import PageHeader from '../../components/pagesComponents/WhatWeDo/PageHeader';
import SmallCompanyContainer from '../../components/pagesComponents/MainPage/SmallCompanyContainer';
import LargeCompanyContainer from '../../components/pagesComponents/MainPage/LargeCompanyContainer';
import TechList from '../../components/pagesComponents/WhatWeDo/TechList';
import TechIcon from '../../components/pagesComponents/MainPage/TechIcon';
import walmart from '../../assets/img/companies/walmart.svg';
import spectar from '../../assets/img/companies/spectar.svg';
import statflo from '../../assets/img/companies/statflo.svg';
import bucket from '../../assets/img/companies/bucket.svg';
import helmet from '../../assets/img/companies/helmet.svg';
import './whatWeDo.scss';
import Bucket from '../../components/pagesComponents/WhatWeDo/Bucket';
import bucketBG from '../../assets/img/companies/bucket-bg.svg';
import bucketBGRectangle from '../../assets/img/companies/rectangle-bucket-bg.svg';
import SectionTitle from '../../components/common/SectionTitle';
import TextDescription from '../../components/common/TextDescription';
import Filter from '../../components/common/Filter';
import { FaReact, FaNode, FaJava, FaHtml5, FaGoogle, FaBimobject } from 'react-icons/fa';
import {
    SiRails,
    SiAngular,
    SiPhp,
    SiPython,
    SiCsharp,
    SiIos,
    SiSwift,
    SiAmazon,
    SiMicrosoftazure,
} from 'react-icons/si';
import { DiJavascript1, DiAndroid } from 'react-icons/di';

// import NewFilter from '../../components/common/NewFilter';

const whatWeDo: FC = () => {
    const [showMoreIcons, setShowMoreIcons] = useState<boolean>(false);

    const toggleIconsVisibility = (): void => setShowMoreIcons(!showMoreIcons);

    const techIcons: any[] = [
        <FaJava />,
        <DiJavascript1 />,
        <FaReact />,
        <SiAngular />,
        <FaNode />,
        <SiPhp />,
        <SiRails />,
        <FaHtml5 />,
        <SiPython />,
        <SiCsharp />,
        <SiIos />,
        <DiAndroid />,
        <SiSwift />,
        <FaBimobject />,
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
            <SiPhp />,
            <SiRails />,
            <FaHtml5 />,
            <SiPython />,
            <SiCsharp />,
            <SiCsharp />,
        );
    }

    const webDevelopmenList: string[] = [
        'Architecture planning',
        'Microservice architecture',
        'Event sourcing',
        'CQRS',
        'Amazon AWS',
        'Google Firebase',
        'Microsoft Azure',
    ];

    const researchList: string[] = [
        'Chatbots',
        'Blockchain',
        'VR',
        'AR',
        'Drone',
        'Digital enterprise',
        'R&D',
    ];

    const qualityControlList: string[] = [
        'Inspection',
        'Functional testing',
        'QA automation',
        'Performance testing',
        'Security testing',
        'Digital enterprise',
        'R&D',
    ];

    const analyticslList: string[] = [
        'ROI calcultation',
        'Functional testing',
        'QA automation',
        'Performance testing',
        'Security testing',
    ];

    return (
        <Layouts>
            <PageHeader
                offset={190}
                id="what-we-do"
                title="What We Do"
                subtitle="Discover"
                bgType="dots"
            />
            <section className="what-we-do">
                <Filter />
                <div className="what-we-do__description">
                    <SectionTitle type="primary" title="Retail and E-commerce" />
                    <TextDescription>
                        Our clients’ products are heavily used by such companies like Walmart, The
                        Home Depot, CVS Pharmacy in the USA and Canada. It’s a joy to be a part of
                        their success.
                    </TextDescription>
                </div>

                <div className="what-we-do__companies">
                    <div className="what-we-do__company">
                        <SmallCompanyContainer
                            img={walmart}
                            description="Increasing Walmart weekly ads conversion with a custom web app for Ad Tech
                    company"
                            hide="hide"
                        />
                    </div>
                    <div className="what-we-do__company">
                        <SmallCompanyContainer
                            type="secondary"
                            img={statflo}
                            description="Entirely rebuilt 1:1 SMS outreach SaaS product for extra profitable retail platform"
                            hide="hide"
                            logoType="secondary"
                        />
                    </div>

                    <Bucket
                        icon={bucket}
                        bucketBG={bucketBG}
                        label="Similar projects"
                        size="large"
                        displacement="displacement"
                    />
                </div>
                <div className="what-we-do__description">
                    <SectionTitle type="primary" title="Construction" />
                    <TextDescription>
                        The construction industry is well-known to us: from creating a fully custom
                        ERP system for a large general engineering contractor to working on a
                        pioneering AR-based product for both HoloLens versions and its web
                        dashboard.
                    </TextDescription>
                </div>
                <div className="what-we-do__companies">
                    <div className="what-we-do__company what-we-do__company--large">
                        <LargeCompanyContainer
                            typeBG="bg-main"
                            img={spectar}
                            description="Building a pioneering AR product for construction"
                            label="CASE STUDY"
                            hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            hide="hide"
                            size="large"
                        />
                    </div>
                    <div className="what-we-do__bucket">
                        <Bucket
                            icon={helmet}
                            size="big"
                            displacement="displacement"
                            bucketBG={bucketBG}
                            label="Similar projects"
                        />
                    </div>
                </div>
                <div className="what-we-do__description-wrapper" id="what-we-do">
                    <div className="what-we-do__description">
                        <SectionTitle type="primary" title="Finance and ERP" />
                        <TextDescription>
                            It took a few years of close-up work with large U.S. general engineering
                            contractor to investigate, analyze, optimize their internal processes,
                            and finally built an ERP system which put them into the growth stage.
                        </TextDescription>
                    </div>
                    <div className="what-we-do__description">
                        <SectionTitle type="primary" title="Media" />
                        <TextDescription>
                            We helped to build products that are made to reach, interact, and
                            monetize large audiences. 1:1 SMS outreach products, chatbots,
                            proprietary software products for internal marketing teams. We did it
                            all.
                        </TextDescription>
                    </div>
                </div>
                <SectionTitle type="lighter" title="All services" />
                <TextDescription>
                    Only market-tested services are listed below. Nevertheless, we are always open
                    to challenge ourselves. It is inbred part of our R&D DNA.
                </TextDescription>
            </section>
            <section className="what-we-do">
                <div className="what-we-do__tech-wrapper">
                    <div className="what-we-do__tech-container">
                        <TechList
                            techList={webDevelopmenList}
                            title="Web development"
                            borderType="bottom"
                        />
                        <TechList
                            techList={webDevelopmenList}
                            title="Mobile development"
                            borderType="bottom"
                        />
                    </div>
                    <div className="what-we-do__tech-container">
                        <TechList
                            techList={webDevelopmenList}
                            title="Cloud services"
                            borderType="bottom"
                        />
                        <TechList techList={researchList} title="Research" borderType="bottom" />
                    </div>
                    <div className="what-we-do__tech-container">
                        <TechList
                            techList={qualityControlList}
                            title="Quality control"
                            borderType="bottom"
                        />
                        <TechList techList={analyticslList} title="Analytics" borderType="bottom" />
                    </div>
                </div>
                <div className="what-we-do__tech-icons">
                    <TechIcon
                        iconsArray={techIcons}
                        large="large"
                        img={bucketBGRectangle}
                        label={showMoreIcons ? 'Show less' : '+50 more'}
                        show="hide"
                        margin="moved"
                        size="mobile"
                        showBucket="true"
                        size="mr"
                        type="secondary"
                        bucketFunc={toggleIconsVisibility}
                    />
                </div>
            </section>
        </Layouts>
    );
};

export default whatWeDo;
