import React, { FC } from 'react';
import SectionTitle from '../../../common/SectionTitle';
import './LargeSectionTitle.scss';
import TextDescription from '../../../common/TextDescription';
import Button from '../../../common/Button';
import TitleAndDesc from '../../../pagesComponents/CaseStudy/TitleAndDesc';
import triangleRight from '../../../../assets/img/triangle-right.svg';
import statflo from '../../../../assets/img/companies/statflo-black.svg';
import Nav from '../../../common/Nav';

interface ILargeSectionTitleProps {
    sectionTitle: string;
    sectionDescription: string;
}

type TMenuLinks = {
    activeLink: null;
    links: {
        id: number;
        title: string;
        page: string;
    }[];
};

const LargeSectionTitle: FC = (props: ILargeSectionTitleProps) => {
    const menuLinks: TMenuLinks = {
        activeLink: null,
        links: [
            { id: 1, title: 'The story', page: '/statflo-case-study/' },
            { id: 2, title: 'Technical summary', page: '/blog/editorial' },
            { id: 3, title: 'Scope of project', page: '/blog/whitepapers' },
            { id: 4, title: 'Full credits', page: '/blog/videos' },
            { id: 5, title: 'Project gallery', page: '/blog/resources' },
            {
                id: 6,
                title: 'Other industries relevance',
                page: '/blog/press-center',
            },
        ],
    };

    return (
        <div data-testid="large-section-title" className="large-section-title">
            <div className="large-section-title__bg">
                <div className="large-section-title__text">
                    <SectionTitle type="main" title={props.sectionTitle} />
                </div>
            </div>

            <div className="large-section-title__border"></div>
            <div className="large-section-title__wrapper">
                <TextDescription>{props.sectionDescription}</TextDescription>
                <div className="large-section-title__description">
                    <TitleAndDesc
                        title="The Challenge"
                        desc="Firstly created 1:1 Retail Conversations™ product turned out to be a huge success in
                the retail industry. However, the initial microservice-based application
                architecture wasn’t fully ready for that."
                    />
                    <TitleAndDesc
                        title="Outcomes"
                        desc="Together we built absolutely reimagined 1:1 Retail Conversations™ that is now packed with lots of new yet important features like profanity check and more. CQRS with event sourcing replaced previous architecture."
                    />
                    <TitleAndDesc
                        title="Impact"
                        desc="The shiny new 1:1 Retail Conversations™ is going through final tests and about ready for the mid-2020 launch. Moreover, some of the current clients — national chains and Tier 1 national carriers already gave it a high score."
                    />
                </div>
                <div className="large-section-title__about">
                    <div className="large-section-title__slogan">
                        <TextDescription type="italic">
                            “Fantastic, I'm totally blown away by Blackbird services, tech
                            expertise, and each team member individually. Sometimes, I even forget
                            where our staff is and where Blackbirders are. ”
                        </TextDescription>
                        <span className="large-section-title__founder">
                            Ian Gervais, VP of Product
                        </span>
                        <Button icon={triangleRight} type="primary" desc="Watch video">
                            Watch video
                        </Button>
                    </div>
                    <div className="large-section-title__client">
                        <span className="large-section-title__headline">About the client</span>
                        <img src={statflo} alt="" className="large-section-title__img" />
                        <span className="large-section-title__span">51-200 employees</span>
                        <span className="large-section-title__span large-section-title__span--mb">
                            HQ Toronto, Canada
                        </span>
                        <span className="large-section-title__year">
                            Client since 2018 | Retail Tech
                        </span>
                        <span className="large-section-title__startup">
                            Funded Startup previously, SMBs currently
                        </span>
                    </div>
                    <div className="large-section-title__industry">
                        <span className="large-section-title__headline large-section-title__headline--mb">
                            Industry and verticals
                        </span>
                        <span className="large-section-title__span large-section-title__span--mb">
                            Retail & E-commerce
                        </span>
                        <span className="large-section-title__span">Wireless dealers</span>
                        <span className="large-section-title__span">CSPs (telecom carriers)</span>
                        <span className="large-section-title__span">System integrators</span>
                        <span className="large-section-title__span">Technology brands</span>
                        <span className="large-section-title__span">Multi-carrier retailers</span>
                    </div>
                </div>
                <div className="large-section-title__nav">
                    <Nav type="blog" links={menuLinks} linkType="link__blog" />
                </div>
            </div>
        </div>
    );
};

export default LargeSectionTitle;
