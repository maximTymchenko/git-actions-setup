import React, { FC } from 'react';
import './TextImage.scss';
import SectionHeader from '../../HowWeWork/SectionHeader';

interface ISectionHeader {
    subtitleText?: string;
    secondaryTitleText?: string;
    titleText: string;
    large: string;
    image: any;
    relative?: string;
    typeValue: string;
    size: string;
    position: string;
    descriptionMain: string;
    descriptionPrimary: string;
    descriptionSecondary: string;
    shadow?: string;
    id: string;
    children: string;
    childrenS: string;
}
const TextImage: FC = (props: ISectionHeader) => {
    return (
        <div
            data-testid="text-image"
            id={props.id}
            className={`text-image__wrapper text-image__wrapper--${props.position}`}
        >
            <SectionHeader
                typeValue={props.typeValue}
                subtitleTextF={props.subtitleText}
                titleText={props.titleText}
                large={props.large}
                size={props.size}
                // secondaryTitleText={props.secondaryTitleText}
            />
            <div className={`text-image__body text-image__body--${props.shadow}`}>
                <img
                    className={`text-image__images text-image__images--${props.relative}`}
                    src={props.image}
                    alt=""
                />
            </div>
        </div>
    );
};

export default TextImage;
