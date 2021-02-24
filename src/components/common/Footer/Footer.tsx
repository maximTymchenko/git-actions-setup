import React, { FC, useState } from 'react';
import { Link } from 'gatsby';
import Button from '../Button';
import Clock from '../Clock';
import SmallFooter from '../SecondaryFooter';
import './Footer.scss';
import blackBird from '../../../assets/img/bird-logo.svg';
import arrowRight from '../../../assets/img/arr-right.svg';

type TFooterServices = {
    activeServiece: null | any;
    services: {
        id: number;
        title: string;
        page: string;
    }[];
};

const Footer: FC = () => {
    const [findServices, setFindServices] = useState<TFooterServices>({
        activeServiece: null,
        services: [
            { id: 1, title: 'Web development', page: '/what-we-do/web-development/' },
            { id: 2, title: 'Quality Control' },
            { id: 3, title: 'Research' },
            { id: 4, title: 'Analytics' },
            { id: 5, title: 'Cloud Services', page: '/what-we-do/cloud-services/' },
            { id: 6, title: 'Mobile development', page: '/what-we-do/mobile-development/' },
        ],
    });

    const [pickAnExpertise, setPickAnExpertise] = useState<TFooterServices>({
        activeExpertise: null,
        expertises: [
            { id: 1, title: 'Retail and E-commerce', page: '/what-we-do/retail-and-e-commerce/' },
            { id: 2, title: 'Construction' },
            { id: 3, title: 'Finance and ERP' },
            { id: 4, title: 'Media' },
            { id: 5, title: 'AR & VR', page: '/what-we-do/ar-&-vr/' },
        ],
    });

    const [company, setCompany] = useState<TFooterServices>({
        activeCompany: null,
        companies: [
            { id: 1, title: 'About Us' },
            { id: 2, title: 'Blog and Resources', page: '/blog/' },
            { id: 3, title: 'Careers', label: 'Hiring', isLabled: true },
            { id: 4, title: 'Contact Blackbird', page: '/contact-us/' },
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
                        <span className="footer__small-title">Find a Service</span>
                        {findServices.services.map((service, index) => (
                            <Link to={service.page}>
                                <li key={index} className="footer__link">
                                    {service.title}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <ul className="footer__lists">
                        <span className="footer__small-title">Pick an Expertise</span>
                        {pickAnExpertise.expertises.map((expertise, index) => (
                            <Link to={expertise.page}>
                                <li key={index} className="footer__link">
                                    {expertise.title}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <ul className="footer__lists">
                        <span className="footer__small-title">Company</span>
                        {company.companies.map((company, index) => (
                            <Link to={company.page}>
                                <li key={index} className="footer__link">
                                    {company.title}
                                    {company.isLabled && (
                                        <span className="footer__label">{company.label}</span>
                                    )}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <SmallFooter />
        </footer>
    );
};

export default Footer;
