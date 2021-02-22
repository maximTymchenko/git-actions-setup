import React, { FC, useState } from 'react';
import Layout from '../../../components/layout';
import BlogHeader from '../../../components/pagesComponents/Blog/BlogHeader';
import BlogFilter from '../../../components/pagesComponents/Blog/BlogFilter';
import LargeCompanyContainer from '../../../components/pagesComponents/MainPage/LargeCompanyContainer';
import SmallCompanyContainer from '../../../components/pagesComponents/MainPage/SmallCompanyContainer';
import Button from '../../../components/common/Button';
import arrDown from '../../../assets/img/arr-down.png';
import arrTop from '../../../assets/img/arr-top.png';

const PressCenter = () => {
    const [loadMoreArticles, setLoadMoreArticles] = useState<boolean>(false);

    return (
        <Layout>
            <section className="blog">
                <BlogHeader
                    blogTitle="Press Center"
                    blogSubtitle="The latest Blackbird announcements, promos, online workshops, webinars, and other activities are here. Subscribe to be up-to-date with all the good things happening in product development, outsourcing."
                />
                <BlogFilter />
                <div className="blog__cards">
                    <div className="blog__cards-wrapper">
                        <div className="blog__card">
                            <LargeCompanyContainer
                                readtime="WORKSHOPS"
                                date="Feb 27, 2013"
                                logoPos="hide"
                                typeBG="bg-server-room"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash"
                                hide="hide"
                            />
                        </div>
                        <div className="blog__card">
                            <SmallCompanyContainer
                                date="Feb 27, 2013"
                                readtime="ANNOUNCEMENT"
                                type="bg-server-connect"
                                size="blog"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash"
                                logoType="secondary"
                                logoType="hide"
                                hide="hide"
                            />
                        </div>
                    </div>
                    <div className="blog__cards-wrapper">
                        <div className="blog__card">
                            <LargeCompanyContainer
                                readtime="WORKSHOPS"
                                date="Feb 27, 2013"
                                typeBG="bg-desktop"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                                hide="hide"
                                logoPos="hide"
                            />
                        </div>
                        <div className="blog__card">
                            <LargeCompanyContainer
                                date="Feb 27, 2013"
                                readtime="WEBINAR"
                                typeBG="bg-phones"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                                hide="hide"
                                logoPos="hide"
                            />
                        </div>
                    </div>
                    <LargeCompanyContainer
                        date="Feb 27, 2013"
                        readtime="PROMO"
                        typeBG="bg-code"
                        description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                        size="largest"
                        hide="hide"
                        logoPos="hide"
                    />
                </div>
                {loadMoreArticles && (
                    <div className="blog__cards blog__cards--bn">
                        <div className="blog__cards-wrapper">
                            <div className="blog__card">
                                <LargeCompanyContainer
                                    readtime="9 min read"
                                    date="Feb 27, 2013"
                                    typeBG="bg-desktop"
                                    description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                                    label="EDITORIAL"
                                    logoPos="hide"
                                    labelType="editorial"
                                    hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                                />
                            </div>
                            <div className="blog__card">
                                <LargeCompanyContainer
                                    date="Feb 27, 2013"
                                    readtime="9 min read"
                                    typeBG="bg-phones"
                                    description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                                    label="EDITORIAL"
                                    labelType="editorial"
                                    logoPos="hide"
                                    hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                                />
                            </div>
                        </div>
                        <LargeCompanyContainer
                            date="Feb 27, 2013"
                            readtime="9 min read"
                            typeBG="bg-code"
                            description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                            hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            size="largest"
                            label="EDITORIAL"
                            logoPos="hide"
                            labelType="editorial"
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
                                    labelType="editorial"
                                    hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                                />
                            </div>
                            <div className="blog__card">
                                <LargeCompanyContainer
                                    date="Feb 27, 2013"
                                    readtime="9 min read"
                                    typeBG="bg-phones"
                                    description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                                    label="EDITORIAL"
                                    labelType="editorial"
                                    logoPos="hide"
                                    hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="blog__btn" onClick={() => setLoadMoreArticles(!loadMoreArticles)}>
                    <Button
                        type="primary"
                        subtype="large"
                        icon={loadMoreArticles ? arrTop : arrDown}
                    >
                        {loadMoreArticles ? 'Show less articles' : 'Load more articles'}
                    </Button>
                </div>
            </section>
        </Layout>
    );
};

export default PressCenter;
