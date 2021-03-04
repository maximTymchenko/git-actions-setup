import React, { FC } from 'react';
import './SmallPhotoIcon.scss';

type TOurTeam = {
    id: number;
    name: string;
    position: string;
    img: any;
}[];

interface ISmallPhotoIconProps {
    margin?: string;
    ourTalanted: TOurTeam;
}

const SmallPhotoIcon: FC = (props: ISmallPhotoIconProps) => {
    return (
        <div className={`small-photo-icon__container small-photo-icon__container--${props.margin}`}>
            {props.ourTalanted.map((talant) => (
                <div className="small-photo-icon" key={talant.id}>
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
