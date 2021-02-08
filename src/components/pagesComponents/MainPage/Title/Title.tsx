import React, { FC } from 'react';
import Button from '../../../common/Button';
import triangleRight from '../../../../assets/img/triangle-right.svg';

const Title: FC = () => {
    return (
        <div data-testid="title" className="main-title__body">
            <div className="main-title__wrapper">
                <div className="main-title__container">
                    <h2 className="main-title">
                        Your Superior Team <span className="main-title__span">to</span>
                    </h2>
                </div>
                <div className="main-title__animation">
                    <div className="main-title__image">
                        <div className="main-title__icon" />
                        <div className="main-title__border" />
                    </div>
                </div>
            </div>

            <div className="main-title__desktop-button">
                <Button type={'watch'} className="button" desc={'Watch now'} icon={triangleRight}>
                    Watch now
                </Button>
            </div>

            <div className="main-title__mobile-button">
                <Button type="circle" className="button" desc={'Watch now'} icon={triangleRight}>
                    Watch now
                </Button>
            </div>
        </div>
    );
};

export default Title;
