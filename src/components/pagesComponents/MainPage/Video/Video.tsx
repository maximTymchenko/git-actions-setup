import React, { FC, useState } from 'react'
import Button from '../../../common/Button'
import './Video.scss'
import spectarBlack from '../../../../assets/img/spectar-black.svg'
import triangleRight from '../../../../assets/img/triangle-right.svg'
import video from '../../../../assets/video/video.mp4'

const Video: FC = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false)

  return (
    <div data-testid="video" className="video">
      <div className="video__background">
        <video src={video} autoPlay muted loop />
      </div>
      <div className="video__wrapper">
        <img src={spectarBlack} alt="Spectar" className="video__logo" />
        <p className="video__slogan">
          “I could probably go into sales for you. It's incredible. Thanks for
          the great service.”
        </p>
        <span className="video__name">Anthony, CTO of Spectar.io</span>
        <div className="video__button" onClick={() => setShowVideo(true)}>
          <Button
            icon={triangleRight}
            type={'primary'}
            className="button"
            desc={'Watch video'}
          >
            Watch video
          </Button>
        </div>
        {/* {showVideo && (
          <div className="video__intro">
            <iframe
              className="video__iframe"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/pDWUf_g2zsc"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        )} */}
      </div>
    </div>
  )
}

export default Video
