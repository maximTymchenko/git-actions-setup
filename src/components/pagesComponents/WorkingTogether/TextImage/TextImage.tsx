import React, { FC } from 'react';
import './TextImage.scss';
import SectionHeader from '../../HowWeWork/SectionHeader';

interface ISectionHeader {
    image: any;
    relative?: string;
    position: string;
    shadow?: string;
    id: string;
}
const TextImage: FC = (props: ISectionHeader) => {
    return (
        <div
            data-testid="text-image"
            id={props.id}
            className={`text-image__wrapper text-image__wrapper--${props.position}`}
        >
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
