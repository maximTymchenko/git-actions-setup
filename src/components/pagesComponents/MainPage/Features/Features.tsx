import React, { FC } from 'react';
import './Features.scss';
import arrowRight from '../../../../assets/img/arr-right.svg';
import SectionTitle from '../../../common/SectionTitle';
import Button from '../../../common/Button';

const Features: FC = () => {
    return (
        <div data-testid="features" className="features__wrapper">
            <div className="features__container">
                <SectionTitle
                    type="secondary"
                    className="title"
                    title="More amazing services and success stories awaiting you here"
                />
                <Button
                    type={'secondary'}
                    className="button"
                    desc={'Discover all'}
                    icon={arrowRight}
                >
                    Discover all
                </Button>
            </div>
        </div>
    );
};

export default Features;
