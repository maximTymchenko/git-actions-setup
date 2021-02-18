import React, { FC } from 'react';
import './BlogVideo.scss';
import Button from '../../../common/Button';
import triangleRight from '../../../../assets/img/triangle-right.svg';
import video from '../../../../assets/video/meeting_video.mp4';

interface IVideoBlogProps {
    videoDesc: string;
    video: video;
    videoPos: string;
    size: string;
}

const BlogVideo: FC = (props: IVideoBlogProps) => {
    return (
        <div>
            <div data-testid="blog-video" className="blog-video">
                <div className="blog-video__background">
                    <video
                        className={`blog-video__video blog-video__video--${props.videoPos}`}
                        src={props.video}
                        autoPlay
                        muted
                        loop
                    />
                </div>
                <div className={`blog-video__content blog-video__content--${props.size}`}>
                    <div className="blog-video__head">
                        <Button type="watch" desc="Watch now" icon={triangleRight}>
                            Watch now
                        </Button>
                        <div className="blog-video__asside">
                            <span className="blog-video__time">15:10</span>
                            <span className="blog-video__date">Feb 27, 2013</span>
                        </div>
                    </div>
                    <p className="blog-video__slogan">{props.videoDesc}</p>
                </div>
            </div>
            <div className="blog-video__footer">
                <span className="blog-video__label">VIDEO</span>
                <p className="blog-video__hashtag">
                    Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13
                    more
                </p>
            </div>
        </div>
    );
};

export default BlogVideo;
