import React, { FC } from 'react'
import './VideoItem.scss'
import Button from '../../../common/Button'

interface IVideo {
  num: string
  label: string
  buttonName: string
  buttonDesc: string
  buttonIcon: string
  size: string
  buttonType: string
  labelType: string
  position: string
  numberType: string
}

const VideoItem: FC = (props: IVideo) => {
  return (
    <div data-testid="video-item" className="video-item">
      <div
        className={`video-item__container video-item__container--${props.size}`}
      >
        <span
          className={`video-item__number video-item__number--${props.numberType}`}
        >
          {props.num}
        </span>
        <div
          className={`video-item__button video-item__button--${props.position}`}
        >
          <Button
            type={props.buttonType}
            className="button"
            children={props.buttonName}
            desc={props.buttonDesc}
            icon={props.buttonIcon}
          />
        </div>
        <span
          className={`video-item__label video-item__label--${props.labelType}`}
        >
          {props.label}
        </span>
      </div>
    </div>
  )
}

export default VideoItem
