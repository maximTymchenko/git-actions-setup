import React, { useState } from 'react';
import { Link } from 'gatsby';
import './Nav.scss';

const Nav = ({ links, path, type, linkType, typeContainer, linkRef }) => {
    const [navLinks, setNavLinks] = useState(links);

    const toggleNavClass = (index: number): void => {
        setNavLinks({ ...navLinks, activeLink: navLinks.links[index] });
    };

    const toggleActiveClass = (index: number) => {
        if (navLinks.links[index] === navLinks.activeLink) {
            return 'nav__link nav__link--active';
        } else {
            return 'nav__link';
        }
    };

    return (
        <ul className={`nav nav--${type}`}>
            <div className={`nav__container nav__container--${typeContainer}`}>
                {navLinks.links.map((item, index) => (
                    <Link
                        data-testid="nav"
                        activeClassName="active__border--style"
                        to={`${item.page}`}
                        className={`link__margin  active__border nav__link ${linkType}`}
                        state={{ choice: path }}
                        ref={linkRef}
                    >
                        {/* <li
                            onClick={() => {
                                toggleNavClass(index);
                            }}
                            className={toggleActiveClass(index)}
                            key={index}
                        > */}
                        {item.title}
                        {/* </li> */}
                    </Link>
                ))}
            </div>
        </ul>
    );
};

export default Nav;
