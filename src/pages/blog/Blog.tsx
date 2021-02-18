import React, { FC } from 'react';
import './Blog.scss';
import Layout from '../../components/layout';
import BlogHeader from '../../components/pagesComponents/Blog/BlogHeader';
import BlogFilter from '../../components/pagesComponents/Blog/BlogFilter';
import LargeCompanyContainer from '../../components/pagesComponents/MainPage/LargeCompanyContainer';
import SmallCompanyContainer from '../../components/pagesComponents/MainPage/SmallCompanyContainer';
import Button from '../../components/common/Button';
import arrDown from '../../assets/img/arr-down.png';

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
                                readtime="9 min read"
                                date="Feb 27, 2013"
                                logoPos="hide"
                                typeBG="bg-server-room"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash"
                                label="EDITORIAL"
                                // hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                        <div className="blog__card">
                            <SmallCompanyContainer
                                readtime="9 min read"
                                type="bg-server-connect"
                                size="blog"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash"
                                logoType="secondary"
                                label="EDITORIAL"
                                logoType="hide"

                                // hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                    </div>
                    <div className="blog__cards-wrapper">
                        <div className="blog__card">
                            <LargeCompanyContainer
                                readtime="9 min read"
                                date="Feb 27, 2013"
                                typeBG="bg-desktop"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                                label="EDITORIAL"
                                logoPos="hide"
                                // hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                        <div className="blog__card">
                            <LargeCompanyContainer
                                date="Feb 27, 2013"
                                readtime="9 min read"
                                typeBG="bg-phones"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                                label="EDITORIAL"
                                logoPos="hide"
                                // hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                    </div>
                    <LargeCompanyContainer
                        date="Feb 27, 2013"
                        readtime="9 min read"
                        typeBG="bg-code"
                        description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                        // hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                        size="largest"
                        label="EDITORIAL"
                        logoPos="hide"
                    />
                    <div className="blog__cards-wrapper">
                        <div className="blog__card">
                            <SmallCompanyContainer
                                date="Feb 27, 2013"
                                readtime="9 min read"
                                type="bg-building"
                                size="blog"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash"
                                logoType="hide"
                                label="EDITORIAL"
                                // hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                        <div className="blog__card">
                            <LargeCompanyContainer
                                date="Feb 27, 2013"
                                readtime="9 min read"
                                typeBG="bg-rooms"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash"
                                label="EDITORIAL"
                                logoPos="hide"
                                // hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                    </div>
                </div>
                <div className="blog__btn">
                    <Button type="primary" subtype="large" icon={arrDown}>
                        Load more articles
                    </Button>
                </div>
            </section>
        </Layout>
    );
};

export default Blog;
