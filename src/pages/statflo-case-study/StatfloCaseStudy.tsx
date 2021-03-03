import React, { FC, Fragment } from 'react';
import './StatfloCaseStudy.scss';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import LargeSectionTitle from '../../components/pagesComponents/CaseStudy/LargeSectionTitle';

const StatfloCaseStudy: FC = () => {
    return (
        <Fragment>
            <Header path2="Statflo Case Study" />
            <div className="statflo-case-study">
                <LargeSectionTitle
                    sectionTitle="Entirely Rebuilt 1:1 SMS Outreach SaaS Product for Extra Profitable Retail Platform"
                    sectionDescription="Blackbird became a natural team extension of Statflo inc. Together we scaled the
                    product team from two to eight people and rebuilt successful 1:1 Retail
                    Conversations™ product from the ground up to meet the growing client base
                    demands."
                />
            </div>
            <Footer />
        </Fragment>
    );
};

export default StatfloCaseStudy;
