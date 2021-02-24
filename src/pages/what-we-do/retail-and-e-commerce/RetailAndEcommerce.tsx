import React, { FC } from 'react';
import './RetailAndEcommerce.scss';
import Layouts from '../../../components/layout';
import PageHeader from '../../../components/pagesComponents/WhatWeDo/PageHeader';
import TechList from '../../../components/pagesComponents/WhatWeDo/TechList';
import SectionTitle from '../../../components/common/SectionTitle';
import TechIcon from '../../../components/pagesComponents/MainPage/TechIcon';
import Bucket from '../../../components/pagesComponents/WhatWeDo/Bucket';
import bucketBGRectangle from '../../../assets/img/companies/rectangle-bucket-bg.svg';
import LargeCompanyContainer from '../../../components/pagesComponents/MainPage/LargeCompanyContainer';
import spectar from '../../../assets/img/companies/spectar.svg';
import walmart from '../../../assets/img/companies/walmart.svg';
import TextSpan from '../../../components/pagesComponents/MainPage/TextSpan';
import Button from '../../../components/common/Button';
import arrowRight from '../../../assets/img/arr-right.svg';
import statflo from '../../../assets/img/companies/statflo.svg';
import Filter from '../../../components/common/Filter';
import { Link } from 'gatsby';

const RetailAndEcommerce: FC = () => {
    return (
        <Layouts>
            <PageHeader
                offset={-210}
                id="relevant"
                title="Retail and E-commerce"
                subtitle="Discover"
                bgType="dots"
                btnPosition="moved"
            />
            <section className="what-we-do">
                <Filter />
                <SectionTitle title="Relevant projects" type="main" />
                <div id="relevant" className="what-we-do__companies">
                    <div className="what-we-do__company">
                        <LargeCompanyContainer
                            typeBG="bg-triangle"
                            img={statflo}
                            description="Entirely rebuilt 1:1 SMS outreach SaaS product for extra profitable retail platform"
                            label="CASE STUDY"
                            logoPos="mb-less"
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
                                logoPos="mb-more"
                                hashtags="Amazon, Retail & E-commerce, React, Web development, +13 more"
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

export default RetailAndEcommerce;
