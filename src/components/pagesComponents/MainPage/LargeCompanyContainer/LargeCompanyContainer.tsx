import React, { FC } from 'react';
import './LargeCompanyContainer.scss';
import spectar from '../../../../assets/img/spectar.svg';

interface ILargeCompanyProps {
    img: any;
    description: string;
    label: string;
    hashtags?: string;
    hide?: string;
    typeBG?: string;
    size?: string;
}

const LargeCompanyContainer: FC = (props: ILargeCompanyProps) => {
    return (
        <div data-testid="large-company-container" className='large-company-container__wrapper'>
            <div className={`large-company-container large-company-container--${props.typeBG} large-company-container--${props.size}`}>
                <img className="large-company-container__logo" src={props.img} alt="Spectar" />
                <p className="large-company-container__desc">{props.description}</p>
            </div>
            <p className={`large-company-container__hashtags large-company-container__hashtags--${props.hide}`}
            >>
                <span className="large-company-container__label">{props.label}</span>
                {props.hashtags}
            </p>
        </div>
    );
};

export default LargeCompanyContainer;
