import React, { useState, FC } from 'react';
import { Link } from 'gatsby';
import { FaTimes } from 'react-icons/fa';
import { FiChevronLeft } from 'react-icons/fi';
import './Header.scss';
import Button from '../Button';
import logo from '../../../assets/img/logo.svg';
import arrowRight from '../../../assets/img/arr-right.svg';
import classNames from 'classnames';
import PrimaryNav from '../PrimaryNav';
import Nav from '../Nav';

type THeaderArrays = {
    activeLink: null;
    links: {
        id: number;
        title: string;
        page: string;
    }[];
};

type THeaderArraysOfObjects = {
    activeLink: null;
    links: {
        id: number;
        array: THeaderArrays;
    }[];
};

const Header: FC = (props: any) => {
    const [buttonIcon, setButtonIcon] = useState<boolean>(true);
    const [buttonIconTimes, setButtonIconTimes] = useState<boolean>(false);
    const [showMainNav, setShowMainNav] = useState<boolean>(false);

    const changeNavVisible = (): void => {
        setShowMainNav(!showMainNav);
    };

    const changeButtonIcon = (): void => {
        setButtonIcon(!buttonIcon);
        setButtonIconTimes(!buttonIconTimes);
        changeNavVisible();
    };

    const language = {
        activeLink: null,
        links: [
            { id: 1, title: 'EN' },
            { id: 2, title: 'UA' },
        ],
    };

    const [navLinks, setNavLinks] = useState<THeaderArrays>({
        activeLink: null,
        links: [
            { id: 1, title: 'Home' },
            { id: 2, title: 'How We Work' },
            { id: 3, title: 'What We Do' },
            { id: 4, title: 'About Us' },
            { id: 5, title: 'Contact Blackbird' },
            { id: 6, title: 'Careers' },
            { id: 7, title: 'Blog' },
        ],
    });

    const menuLinksHome: THeaderArrays = {
        activeLink: null,
        links: [{ id: 1, title: 'Home', page: '/' }],
    };

    const menuLinksHowWeWork: THeaderArrays = {
        activeLink: null,
        links: [
            { id: 1, title: 'Engagement Models', page: '/how-we-work/working-together/' },
            { id: 2, title: 'Your IP Protection', page: '/how-we-work/intellectual-property/' },
        ],
    };

    const menuLinksWhatWeDo: THeaderArrays = {
        activeLink: null,
        links: [
            { id: 1, title: 'All', page: '/what-we-do/' },
            { id: 2, title: 'Web development', page: '/what-we-do/web-development/' },
            { id: 3, title: 'Cloud services', page: '/what-we-do/cloud-services/' },
            { id: 4, title: 'Team extension', page: '/what-we-do/team-extension/' },
            { id: 5, title: 'AR & VR', page: '/what-we-do/ar-&-vr/' },
            { id: 6, title: 'Retail & E-commerce', page: '/what-we-do/retail-and-e-commerce/' },
            { id: 7, title: 'Mobile development', page: '/what-we-do/mobile-development/' },
        ],
    };

    const menuLinksAboutUs: THeaderArrays = {
        activeLink: null,
        links: [
            { id: 1, title: 'Retail & E-commerce' },
            { id: 2, title: 'Construction' },
            { id: 3, title: 'Finance' },
            { id: 4, title: 'Media' },
        ],
    };

    const menuLinksContact: THeaderArrays = {
        activeLink: null,
        links: [
            { id: 1, title: 'SaaS product' },
            { id: 2, title: 'Chatbots' },
            { id: 3, title: 'AR & VR' },
            { id: 4, title: 'Blockchain' },
            { id: 5, title: 'Digital enterprise ' },
            { id: 6, title: 'Drone' },
            { id: 7, title: 'R&D' },
        ],
    };

    const menuLinksCareers: THeaderArrays = {
        activeLink: null,
        links: [
            { id: 1, title: 'On-demand team extension' },
            { id: 2, title: 'Fully managed IT services' },
        ],
    };

    const menuLinksBlog: THeaderArrays = {
        activeLink: null,
        links: [
            { id: 1, title: 'Latest', page: '/blog/' },
            { id: 2, title: 'Editorial', page: '/blog/editorial' },
            { id: 3, title: 'Whitepapers', page: '/blog/whitepapers' },
            { id: 4, title: 'Videos', page: '/blog/videos' },
            { id: 5, title: 'Resources', page: '/blog/resources' },
            {
                id: 6,
                title: 'Press center',
                page: '/blog/press-center',
            },
            ,
        ],
    };

    //! show subnav with button click on main nav

    const [navLinksArray, setNavLinksArray] = useState<THeaderArraysOfObjects>({
        activeLink: null,
        links: [
            { id: 0, array: menuLinksHome },
            { id: 1, array: menuLinksHowWeWork },
            { id: 2, array: menuLinksWhatWeDo },
            { id: 3, array: menuLinksAboutUs },
            { id: 4, array: menuLinksContact },
            { id: 5, array: menuLinksCareers },
            { id: 6, array: menuLinksBlog },
        ],
    });

    return (
        <header data-testid="header" className="header">
            <div className="header__wrapper">
                <Link to="/" className="header__logo--link">
                    <img className="header__logo" src={logo} alt="BlackBird" />
                </Link>
                <div className="header__nav">
                    <div className="header__nav-wrapper header__nav-wrapper--end">
                        <Link
                            className="link"
                            // to="/working-together/"
                            activeClassName="active__border active__border--style"
                        >
                            <span
                                className={classNames('header__nav-text', {
                                    'active__border--style': props.path,
                                })}
                            >
                                {props.path}
                            </span>
                        </Link>

                        {props.path && <FiChevronLeft className="chevron__icon" />}
                        <Link
                            className="link"
                            to="/how-we-work/"
                            activeClassName="active__border active__border--style"
                        >
                            <span
                                className={classNames('header__nav-text', {
                                    'header__nav-text--secondary': props.path,
                                })}
                            >
                                How We Work
                            </span>
                        </Link>
                    </div>

                    <div className="header__nav-wrapper">
                        <button onClick={() => changeButtonIcon()} className="header__nav-menu">
                            {buttonIcon && (
                                <>
                                    <div className="header__nav-bars" />
                                    <div className="header__nav-bars" />
                                    <div className="header__nav-bars" />
                                </>
                            )}
                            {buttonIconTimes && <FaTimes className="header__nav-times" />}
                        </button>
                        {buttonIconTimes && (
                            <div className="primary-nav__section">
                                <div className="primary-nav">
                                    <ul className="primary-nav__wrapper">
                                        <PrimaryNav navTitle="Home" navArray={menuLinksHome} />
                                        <PrimaryNav
                                            navTitle="How We Work"
                                            navArray={menuLinksHowWeWork}
                                        />
                                        <PrimaryNav
                                            navTitle="What We Do"
                                            navArray={menuLinksWhatWeDo}
                                        />
                                        <PrimaryNav
                                            navTitle="About Us"
                                            navArray={menuLinksAboutUs}
                                        />
                                        <PrimaryNav
                                            navTitle="Contact Blackbird"
                                            navArray={menuLinksContact}
                                        />
                                        <PrimaryNav
                                            navTitle="Careers"
                                            navArray={menuLinksCareers}
                                        />
                                        <PrimaryNav navTitle="Blog" navArray={menuLinksBlog} />
                                    </ul>
                                    <div className="primary-nav__language">
                                        <Nav type="" links={language} />
                                    </div>
                                </div>
                            </div>
                        )}
                        <Link
                            className="link"
                            partiallyActive={true}
                            activeClassName="active__border active__border--style"
                            to="/what-we-do/"
                        >
                            <span className="header__nav-text">What We Do</span>
                        </Link>
                    </div>
                </div>
                <div className="header__options">
                    <div className="header__button">
                        <Link className="link" to="/contact-us">
                            <Button
                                icon={arrowRight}
                                type="secondary"
                                className="button"
                                desc="Contact us"
                                mobile="mobile"
                            >
                                Contact us
                            </Button>
                        </Link>
                    </div>
                    <select className="header__options-list" id="languages">
                        <option defaultValue="en">EN</option>
                        <option value="ukr">UKR</option>
                        <option value="rus">RUS</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;
