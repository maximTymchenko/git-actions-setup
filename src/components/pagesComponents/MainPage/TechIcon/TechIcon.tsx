import React, { FC } from 'react';
import './TechIcon.scss';
import Bucket from '../../WhatWeDo/Bucket';
import bucketBGRectangle from '../../../../assets/img/companies/rectangle-bucket-bg.svg';

interface ITechIcons {
    large: string;
    img: string;
    show: string;
    label: string;
    margin: string;
    size: string;
    iconsArray: Element[];
    showBucket: boolean;
    type: string;
}

const TechIcon: FC = (props: ITechIcons) => {
    return (
        <div
            data-testid="tech-icon"
            className={`tech__img-wrapper tech__img-wrapper--${props.type}`}
        >
            {props.iconsArray.map((icon, index) => (
                <span key={index} className={`tech__img tech__img--${props.large}`}>
                    {icon}
                </span>
            ))}
            {props.showBucket && (
                <Bucket
                    bucketBG={props.img}
                    label={props.label}
                    hide={props.show}
                    marginBG={props.margin}
                    size={props.size}
                />
            )}
        </div>
    );
};

export default TechIcon;
