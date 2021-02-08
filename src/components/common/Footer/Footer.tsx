import React, { FC, useState } from 'react';
import { Link } from 'gatsby';
import Button from '../Button';
import Clock from '../Clock';
import SmallFooter from '../SecondaryFooter';
import './Footer.scss';
import blackBird from '../../../assets/img/bird-logo.svg';
import arrowRight from '../../../assets/img/arr-right.svg';

const Footer: FC = () => {
    const [findServices, setFindServices] = useState({
        activeServiece: null,
        services: [
            { id: 1, title: 'Find a Service' },
            { id: 2, title: 'Web Development' },
            { id: 3, title: 'Quality Control' },
            { id: 4, title: 'Research' },
            { id: 5, title: 'Analytics' },
            { id: 6, title: 'Cloud Services' },
            { id: 7, title: 'Mobile Development' },
        ],
    });

    const [pickAnExpertise, setPickAnExpertise] = useState({
        activeExpertise: null,
        expertises: [
            { id: 1, title: 'Pick an Expertise' },
            { id: 2, title: 'Retail and E-commerce' },
            { id: 3, title: 'Construction' },
            { id: 4, title: 'Finance and ERP' },
            { id: 5, title: 'Media' },
            { id: 6, title: 'AR & VR' },
        ],
    });

    const [company, setCompany] = useState({
        activeCompany: null,
        companies: [
            { id: 1, title: 'Company' },
            { id: 2, title: 'About Us' },
            { id: 3, title: 'Blog and Resources' },
            { id: 4, title: 'Careers' },
            { id: 5, title: 'Media' },
            { id: 6, title: 'Contact Blackbird' },
        ],
    });

    return (
        <footer data-testid="footer" className="footer">
            <div className="footer__wrapper">
                <div className="footer__info">
                    <div className="footer__location">
                        <span className="footer__country">Ukraine HQ</span>
                        <span className="footer__timezone">+2 UTC/EET</span>
                        <Clock timezone={'Europe/Kiev'} />
                        <a href="tel:+380–93–104–27–57" className="footer__phone">
                            +380–93–104–27–57
                        </a>
                        <span className="footer__adress"> 16 Shota Rustaveli St Kyiv,</span>
                        <span className="footer__index">02000</span>
                        <Link className="link" to="/contact-us">
                            <Button
                                icon={arrowRight}
                                type={'primary'}
                                className="button"
                                children={'Get in touch'}
                                desc={'Get in touch'}
                            />
                        </Link>
                    </div>
                    <div className="footer__links">
                        <Link to="/" className="link">
                            <img src={blackBird} alt="" className="footer__logo" />
                        </Link>
                        <div className="footer__social-wrapper">
                            <a
                                target="_blank"
                                href="https://ua.linkedin.com/company/blackbird-lab"
                                className="footer__social"
                            >
                                in
                            </a>
                            <div className="footer__bar"></div>
                            <a
                                target="_blank"
                                href="https://jobs.dou.ua/companies/blackbird-lab/"
                                className="footer__social"
                            >
                                DOU
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__functions">
                    <ul className="footer__lists">
                        {findServices.services.map((service, index) => (
                            <li key={index} className="footer__link">
                                {service.title}
                            </li>
                        ))}
                    </ul>
                    <ul className="footer__lists">
                        {pickAnExpertise.expertises.map((expertise, index) => (
                            <li key={index} className="footer__link">
                                {expertise.title}
                            </li>
                        ))}
                    </ul>
                    <ul className="footer__lists">
                        {company.companies.map((company, index) => (
                            <li key={index} className="footer__link">
                                {company.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <SmallFooter />
        </footer>
    );
};

export default Footer;
