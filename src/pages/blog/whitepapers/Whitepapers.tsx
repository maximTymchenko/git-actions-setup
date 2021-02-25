import React, { FC, useState } from 'react';
import Layout from '../../../components/layout';
import BlogHeader from '../../../components/pagesComponents/Blog/BlogHeader';
import BlogFilter from '../../../components/pagesComponents/Blog/BlogFilter';
import LargeCompanyContainer from '../../../components/pagesComponents/MainPage/LargeCompanyContainer';
import SmallCompanyContainer from '../../../components/pagesComponents/MainPage/SmallCompanyContainer';
import Button from '../../../components/common/Button';
import arrDown from '../../../assets/img/arr-down.png';
import BlogVideo from '../../../components/pagesComponents/Blog/BlogVideo';
import arrTop from '../../../assets/img/arr-top.png';

const Whitepapers = () => {
    const [loadMoreArticles, setLoadMoreArticles] = useState<boolean>(false);

    return (
        <Layout>
            <section className="blog">
                <BlogHeader
                    blogTitle="Whitepapers"
                    blogSubtitle="Amazing whitepapers that are made together by both our team best specialists, proven market leaders and top experts. Subscribe and get all whitepapers and other reports to your inbox."
                />
                <BlogFilter />
                <div className="blog__cards">
                    <div className="blog__cards-wrapper">
                        <div className="blog__card">
                            <LargeCompanyContainer
                                labelType="whitepaper"
                                readtime="9 min read"
                                date="Feb 27, 2013"
                                logoPos="hide"
                                typeBG="bg-agile"
                                description="The State of Conversational AI and Consumer Trust"
                                label="WHITEPAPER"
                                hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                        <div className="blog__card">
                            <SmallCompanyContainer
                                labelType="whitepaper"
                                readtime="9 min read"
                                date="Feb 27, 2013"
                                type="bg-db"
                                size="blog"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash"
                                logoType="secondary"
                                label="WHITEPAPER"
                                logoType="hide"
                                hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                    </div>
                    <div className="blog__cards-wrapper">
                        <div className="blog__card">
                            <LargeCompanyContainer
                                labelType="whitepaper"
                                readtime="9 min read"
                                date="Feb 27, 2013"
                                typeBG="bg-ps"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                                label="WHITEPAPER"
                                logoPos="hide"
                                hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                        <div className="blog__card">
                            <LargeCompanyContainer
                                date="Feb 27, 2013"
                                readtime="9 min read"
                                labelType="whitepaper"
                                typeBG="bg-ai"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                                label="WHITEPAPER"
                                logoPos="hide"
                                hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                    </div>
                    <LargeCompanyContainer
                        date="Feb 27, 2013"
                        readtime="9 min read"
                        labelType="whitepaper"
                        typeBG="bg-rpa"
                        description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                        hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                        size="largest"
                        label="WHITEPAPER"
                        logoPos="hide"
                    />
                    <div className="blog__cards-wrapper">
                        <div className="blog__card">
                            <SmallCompanyContainer
                                date="Feb 27, 2013"
                                labelType="whitepaper"
                                readtime="9 min read"
                                type="bg-blockchain"
                                size="blog"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash"
                                logoType="hide"
                                label="WHITEPAPER"
                                hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                        <div className="blog__card">
                            <LargeCompanyContainer
                                readtime="9 min read"
                                labelType="whitepaper"
                                date="Feb 27, 2013"
                                logoPos="hide"
                                typeBG="bg-summit"
                                description="Hiring the best possible engineers"
                                label="WHITEPAPER"
                                hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                    </div>
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
                                    typeBG="bg-summit"
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

export default Whitepapers;
