import React, { FC, useState } from 'react';
import './PrimaryNav.scss';
import Button from '../Button';
import Nav from '../Nav';
import arrLeft from '../../../assets/img/arr-left.png';

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
    const [navLinks, setNavLinks] = useState<any>(props.navLinks);

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

    return (
        <div className="primary-nav__section">
            <div data-testid="primary-nav" className={`primary-nav primary-nav--${props.type}`}>
                <ul className="primary-nav__wrapper">
                    <div className="primary-nav__body">
                        <div className={`primary-nav__items primary-nav__items--${props.border}`}>
                            <li
                            // onClick={(i) => {
                            //     toggleNavClass(i);
                            // }}
                            // className={toggleActiveClass(index)}
                            >
                                {props.navTitle}
                            </li>
                        </div>
                        <div className="primary-nav__subcategories">
                            {/* <div className="primary-nav__btn--back">
                                <Button icon={arrLeft} type="apply--reverse">
                                    Back
                                </Button>
                            </div> */}

                            {props.navLinksArray.links.map((array, index, page) => (
                                <div key={index} className={toggleActiveClassArr(index)}>
                                    <Nav
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
