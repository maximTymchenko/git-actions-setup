import React, { FC } from 'react';
import './Features.scss';
import SectionTitle from '../../../common/SectionTitle';
import Button from '../../../common/Button';
import { Link } from 'gatsby';

interface IFeaturesProps {
    title: string;
    showBG?: string;
    buttonText: string;
    buttonIcon: any;
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
                    <Button
                        type="secondary"
                        subtype="mt"
                        desc="Discover all"
                        icon={props.buttonIcon}
                    >
                        {props.buttonText}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Features;
