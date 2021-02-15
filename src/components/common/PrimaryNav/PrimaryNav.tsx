import React, { FC, useState, useEffect, useRef } from 'react';
import './PrimaryNav.scss';
import { Link } from 'gatsby';
import Nav from '../Nav';

export interface INavLinks {
    activeLink: null | any;
    links: [
        {
            id: number;
            title: string;
            page?: string | undefined;
        },
    ];
}

interface IPropsPrimaryNav {
    type: string;
    toggleActiveClassArr: any;
    navLinksArray: any;
    toggleNavClass: any;
    toggleActiveClass: any;
    border: string;
    language: string[];
    navLinks: any;
}

const PrimaryNav: FC = (props: IPropsPrimaryNav) => {
    const [navLinks, setNavLinks] = useState<INavLinks>(props.navLinks);

    const [navLinksArray, setNavLinksArray] = useState(props.navLinksArray);

    const toggleNavClassArr = (index: number) => {
        setNavLinksArray({ ...navLinksArray, activeLink: navLinksArray.links[index] });
    };

    const toggleActiveClassArr = (index: number) => {
        if (navLinksArray.links[index] === navLinksArray.activeLink) {
            return 'primary-nav__container primary-nav__container--show';
        } else {
            return 'primary-nav__container';
        }
    };

    const toggleNavClass = (index: number) => {
        setNavLinks({ ...navLinks, activeLink: navLinks.links[index] });
        toggleNavClassArr(index);
    };

    const toggleActiveClass = (index: number) => {
        if (navLinks.links[index] === navLinks.activeLink) {
            return 'primary-nav__categories primary-nav__categories--active';
        } else {
            return 'primary-nav__categories';
        }
    };

    const linkRef = useRef();
    // const [linkState, setLinkState] = useState<boolean>(false);

    // const getElemClass = () => {
    //     const linkClasses = linkRef.current;
    //     // console.log();

    //     if (linkClasses.classList.contains('active__border--style')) {
    //         setLinkState(true);
    //         console.log(linkState);
    //         console.log('YES');
    //     }
    // };

    // console.log(linkRef.current);

    return (
        <div className="primary-nav__section">
            <div data-testid="primary-nav" className={`primary-nav primary-nav--${props.type}`}>
                <ul className="primary-nav__wrapper">
                    <div className="primary-nav__body">
                        <div className={`primary-nav__items primary-nav__items--${props.border}`}>
                            {props.navLinks.links.map((item, index) => (
                                <li
                                    onClick={() => {
                                        toggleNavClass(index);
                                    }}
                                    className={toggleActiveClass(index)}
                                    key={index}
                                >
                                    {item.title}
                                </li>
                            ))}
                        </div>
                        <div className="primary-nav__subcategories">
                            {props.navLinksArray.links.map((array, index, page) => (
                                <div key={index} className={toggleActiveClassArr(index)}>
                                    <Nav
                                        // getElemClass={getElemClass}
                                        // linkRef={linkRef}
                                        typeContainer="primary"
                                        keyValue={array.id}
                                        links={array.array}
                                        page={array.page}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="primary-nav__language">
                        <Nav links={props.language} />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default PrimaryNav;
