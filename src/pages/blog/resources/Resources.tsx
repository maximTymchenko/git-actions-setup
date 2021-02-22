import React, { FC, useState } from 'react';
import Layout from '../../../components/layout';
import BlogHeader from '../../../components/pagesComponents/Blog/BlogHeader';
import BlogFilter from '../../../components/pagesComponents/Blog/BlogFilter';
import LargeCompanyContainer from '../../../components/pagesComponents/MainPage/LargeCompanyContainer';
import SmallCompanyContainer from '../../../components/pagesComponents/MainPage/SmallCompanyContainer';
import Button from '../../../components/common/Button';
import arrDown from '../../../assets/img/arr-down.png';
import BlogVideo from '../../../components/pagesComponents/Blog/BlogVideo';
import video from '../../../assets/video/meeting_video.mp4';
import arrTop from '../../../assets/img/arr-top.png';

const Resources: FC = () => {
    const [loadMoreArticles, setLoadMoreArticles] = useState<boolean>(false);

    return (
        <Layout>
            <section className="blog">
                <BlogHeader
                    blogTitle="Resources"
                    blogSubtitle="Resources for anyone interested in bringing their product ideas to life and for one who pushes his digital side of the business beyond possible. Subscribe for more resources and inspiration right to your inbox."
                />
                <BlogFilter />
                <div className="blog__cards">
                    <div className="blog__cards-wrapper">
                        <div className="blog__card">
                            <LargeCompanyContainer
                                readtime="9 min read"
                                date="Feb 27, 2013"
                                logoPos="hide"
                                labelType="whitepaper"
                                typeBG="bg-server-room"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash"
                                label="WHITEPAPER"
                                hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                        <div className="blog__card">
                            <SmallCompanyContainer
                                date="Feb 27, 2013"
                                readtime="9 min read"
                                type="bg-server-connect"
                                size="blog"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash"
                                logoType="secondary"
                                label="BROCHURE"
                                logoType="hide"
                                labelType="whitepaper"
                                hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
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
                                label="DEMO"
                                labelType="editorial"
                                logoPos="hide"
                                hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                        <div className="blog__card">
                            <LargeCompanyContainer
                                date="Feb 27, 2013"
                                readtime="9 min read"
                                typeBG="bg-phones"
                                description="This is how to migrate from AWS to Google Cloud and save some serious cash "
                                label="CASE STUDY"
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
                        labelType="whitepaper"
                        logoPos="hide"
                        label="WHITEPAPER"
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
                                labelType="whitepaper"
                                label="WHITEPAPER"
                                hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                        <div className="blog__card">
                            <BlogVideo
                                videoDesc="Hiring the best possible engineers"
                                video={video}
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
                                <BlogVideo
                                    videoDesc="Hiring the best possible engineers"
                                    video={video}
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

export default Resources;
