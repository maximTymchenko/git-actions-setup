import React, { FC } from 'react';
import './Features.scss';
import arrowRight from '../../../../assets/img/arr-right.svg';
import SectionTitle from '../../../common/SectionTitle';
import Button from '../../../common/Button';
import { Link } from 'gatsby';

const Features: FC = () => {
    return (
        <div data-testid="features" className="features__wrapper">
            <div className="features__container">
                <SectionTitle
                    type="secondary"
                    className="title"
                    title="More amazing services and success stories awaiting you here"
                />

                <Link to="/what-we-do/" className="link">
                    <Button type="secondary" subtype="mt" desc="Discover all" icon={arrowRight}>
                        Discover all
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Features;
