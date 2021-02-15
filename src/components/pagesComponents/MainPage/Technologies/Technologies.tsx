import React from 'react';
import { Link } from 'gatsby';
import './Technologies.scss';
import Button from '../../../common/Button';
import SectionTitle from '../../../common/SectionTitle';
import arrowRight from '../../../../assets/img/arr-right.svg';
import TechIcon from '../TechIcon/TechIcon';
import { FaReact, FaNode, FaJava, FaHtml5 } from 'react-icons/fa';
import { SiRails } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

const Technologies: React.FC = () => {
    const techIcons = [
        <FaHtml5 />,
        <FaNode />,
        <SiRails />,
        <FaJava />,
        <DiJavascript1 />,
        <FaReact />,
    ];

    return (
        <div data-testid="technologies" className="tech">
            <div className="tech__info">
                <SectionTitle
                    type="relevant"
                    title="Cannot find relevant technology stack or similar project from your industry?"
                />
                <p className="tech__desc">
                    It must be our rigorous
                    <span className="tech__protection">
                        intellectual property protection effort.
                    </span>
                    Just tell us what you need and get that information in less than 24 hours.
                </p>
                <Link className="link" to="/contact-us">
                    <Button icon={arrowRight} type="primary" Tell us desc="Tell us">
                        Tell us
                    </Button>
                </Link>
            </div>
            <div className="tech__images">
                <div className="tech__images-wrapper">
                    <TechIcon iconsArray={techIcons} type="main" />
                </div>
            </div>
        </div>
    );
};

export default Technologies;
