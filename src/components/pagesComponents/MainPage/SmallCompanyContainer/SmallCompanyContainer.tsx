import React, { FC } from 'react';
import './SmallCompanyContainer.scss';

interface ISmallCompanyProps {
    img: any;
    description: string;
    label?: string;
    hashtags?: string;
    type?: string;
    hide?: string;
    logoType?: string;
    size?: string;
}

const SmallCompanyContainer: FC = (props: ISmallCompanyProps) => {
    return (
        <div data-testid="small-company-container" className="small-company-container__wrapper">
            <div
                className={`small-company-container small-company-container--${props.type} small-company-container--${props.size}`}
            >
                <img
                    className={`small-company-container__logo small-company-container__logo--${props.logoType}`}
                    src={props.img}
                    alt="Walmart"
                />
                <p className="small-company-container__desc">{props.description}</p>
            </div>
            <p
                className={`small-company-container__hashtags small-company-container__hashtags--${props.hide}`}
            >
                <span className="small-company-container__label">{props.label}</span>
                {props.hashtags}
            </p>
        </div>
    );
};

export default SmallCompanyContainer;
