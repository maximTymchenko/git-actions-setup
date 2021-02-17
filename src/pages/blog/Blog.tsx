import React, { FC } from 'react';
import './Blog.scss';
import Layout from '../../components/layout';
import BlogHeader from '../../components/pagesComponents/Blog/BlogHeader';
import BlogFilter from '../../components/pagesComponents/Blog/BlogFilter';
import LargeCompanyContainer from '../../components/pagesComponents/MainPage/LargeCompanyContainer';
import SmallCompanyContainer from '../../components/pagesComponents/MainPage/SmallCompanyContainer';
import walmart from '../../assets/img/companies/walmart.svg';
import statflo from '../../assets/img/companies/statflo.svg';

const Blog: FC = () => {
    return (
        <Layout>
            <section className="blog">
                <BlogHeader
                    blogTitle="Blog"
                    blogSubtitle=" Articles, stories, case studies technical guides, best practices, tech videos,
                    and lots of resources to help you build, grow, and skyrocket your product or
                    digital side of your business."
                />
                <BlogFilter />
                <div className="blog__cards">
                    <div className="blog__cards-wrapper">
                        <div className="blog__card">
                            <LargeCompanyContainer
                                typeBG="bg-rooms"
                                img={walmart}
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash"
                                label="EDITORIAL"
                                logoPos="mb-more"
                                // hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                        <div className="blog__card">
                            <SmallCompanyContainer
                                type="secondary"
                                size="blog"
                                img={statflo}
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash"
                                logoType="secondary"
                                label="EDITORIAL"
                                // hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                    </div>
                    <div className="blog__cards-wrapper">
                        <div className="blog__card">
                            <SmallCompanyContainer
                                type="secondary"
                                size="blog"
                                img={statflo}
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash"
                                logoType="secondary"
                                label="EDITORIAL"
                                // hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                        <div className="blog__card">
                            <LargeCompanyContainer
                                typeBG="bg-rooms"
                                img={walmart}
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                                label="EDITORIAL"
                                logoPos="mb-more"
                                // hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Blog;
