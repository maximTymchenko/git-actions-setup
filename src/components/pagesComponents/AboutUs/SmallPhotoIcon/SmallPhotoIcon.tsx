import React, { FC } from 'react';
import './SmallPhotoIcon.scss';
import CEO from '../../../../assets/img/aboutUs/CEO.jpeg';

const SmallPhotoIcon: FC = (props) => {
    return (
        <div className="small-photo-icon__container">
            {props.ourTalanted.map((talant) => (
                <div className="small-photo-icon">
                    <div className="small-photo-icon__wrapper">
                        <img src={talant.img} alt="" className="small-photo-icon__img" />
                    </div>
                    <div className="small-photo-icon__description">
                        <span className="small-photo-icon__name">{talant.name}</span>
                        <span className="small-photo-icon__position">{talant.position}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SmallPhotoIcon;
