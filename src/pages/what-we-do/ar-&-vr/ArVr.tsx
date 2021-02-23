import React, { FC } from 'react';
import './ArVr.scss';
import Layouts from '../../../components/layout';
import PageHeader from '../../../components/pagesComponents/WhatWeDo/PageHeader';
import SectionTitle from '../../../components/common/SectionTitle';
import LargeCompanyContainer from '../../../components/pagesComponents/MainPage/LargeCompanyContainer';
import spectar from '../../../assets/img/companies/spectar.svg';
import walmart from '../../../assets/img/companies/walmart.svg';
import TextSpan from '../../../components/pagesComponents/MainPage/TextSpan';
import Button from '../../../components/common/Button';
import arrowRight from '../../../assets/img/arr-right.svg';
import Filter from '../../../components/common/Filter';
import { Link } from 'gatsby';

const ArVr: FC = () => {
    return (
        <Layouts>
            <PageHeader
                offset={-210}
                id="relevant"
                title="AR & VR"
                subtitle="Discover"
                bgType="dots"
            />
            <section className="what-we-do">
                <Filter />
                <SectionTitle title="Relevant projects" type="main" />
                <div id="relevant" className="what-we-do__company">
                    <LargeCompanyContainer
                        typeBG="bg-main"
                        img={spectar}
                        description="Building a pioneering AR product for construction"
                        label="CASE STUDY"
                        hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                    />
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

export default ArVr;
