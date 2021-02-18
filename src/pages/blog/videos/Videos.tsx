import React, { FC } from 'react';
import Layout from '../../../components/layout';
import BlogHeader from '../../../components/pagesComponents/Blog/BlogHeader';
import BlogFilter from '../../../components/pagesComponents/Blog/BlogFilter';
import LargeCompanyContainer from '../../../components/pagesComponents/MainPage/LargeCompanyContainer';
import SmallCompanyContainer from '../../../components/pagesComponents/MainPage/SmallCompanyContainer';
import Button from '../../../components/common/Button';
import arrDown from '../../../assets/img/arr-down.png';
import BlogVideo from '../../../components/pagesComponents/Blog/BlogVideo';
import video from '../../../assets/video/aws-video.mp4';
import videoMeeting from '../../../assets/video/meeting_video.mp4';

const Videos = () => {
    return (
        <Layout>
            <section className="blog">
                <BlogHeader
                    blogTitle="Videos"
                    blogSubtitle="Videos full of insights, tips, advice, forecasts from industry leaders, starup founders, product owners and our own in-house experts. No boring stuff. Guaranteed. Subscribe for more videos and inspiration."
                />
                <BlogFilter />
                <div className="blog__cards">
                    <div className="blog__video">
                        <BlogVideo videoDesc="Overview of updated AWS" video={video} size="large" />
                    </div>
                    <div className="blog__video">
                        <BlogVideo
                            videoDesc="Hiring the best possible engineers"
                            video={video}
                            size="large"
                        />
                    </div>
                    <div className="blog__video">
                        <BlogVideo
                            videoDesc="Hiring the best possible engineers"
                            video={video}
                            size="large"
                        />
                    </div>
                    <div className="blog__video">
                        <BlogVideo videoDesc="Overview of updated AWS" video={video} size="large" />
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

export default Videos;
