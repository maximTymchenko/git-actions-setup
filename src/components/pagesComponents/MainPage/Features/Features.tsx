import React, { FC } from 'react';
import './Features.scss';
import arrowRight from '../../../../assets/img/arr-right.svg';
import SectionTitle from '../../../common/SectionTitle';
import Button from '../../../common/Button';
import { Link } from 'gatsby';

interface IFeaturesProps {
    title: string;
    showBG?: string;
}

const Features: FC = (props: IFeaturesProps) => {
    return (
        <div
            data-testid="features"
            className={`features__wrapper features__wrapper--${props.showBG}`}
        >
            <div className="features__container">
                <SectionTitle type="secondary" title={props.title} />

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
