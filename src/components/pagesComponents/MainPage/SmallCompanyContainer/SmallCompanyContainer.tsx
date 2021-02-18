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
    readtime?: string;
    date?: string;
}

const SmallCompanyContainer: FC = (props: ISmallCompanyProps) => {
    return (
        <div data-testid="small-company-container" className="small-company-container__wrapper">
            <div
                className={`small-company-container small-company-container--${props.type} small-company-container--${props.size}`}
            >
                <div className="small-company-container__header">
                    <img
                        className={`small-company-container__logo small-company-container__logo--${props.logoType}`}
                        src={props.img}
                        alt="Walmart"
                    />
                    <div className="small-company-container__time">
                        <span className="small-company-container__date">{props.date}</span>
                        <span className="small-company-container__readtime">{props.readtime}</span>
                    </div>
                </div>
                <p className="small-company-container__desc">{props.description}</p>
            </div>
            <div className="small-company-container__footer">
                <span className="small-company-container__label">{props.label}</span>
                <p
                    className={`small-company-container__hashtags small-company-container__hashtags--${props.hide}`}
                >
                    {props.hashtags}
                </p>
            </div>
        </div>
    );
};

export default SmallCompanyContainer;
