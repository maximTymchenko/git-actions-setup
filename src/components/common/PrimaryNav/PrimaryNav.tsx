import React, { useState } from 'react';
import './PrimaryNav.scss';
import Nav from '../Nav';
import classNames from 'classnames';

type THeaderArrays = {
    activeLink: null;
    links: {
        id: number;
        title: string;
        page: string;
    }[];
};

interface INavProps {
    navTitle: string;
    navArray: THeaderArrays;
    titleState: boolean;
    navLabel?: boolean;
}

const TestNav = (props: INavProps) => {
    const [titleState, setTitlestate] = useState<boolean>(props.titleState);
    const [toggleLableVisibility, setToggleLableVisibility] = useState<boolean | undefined>(
        props.navLabel,
    );

    return (
        <div data-testid="primary-nav" className="test-nav__wrapper">
            <span
                onMouseOver={() => {
                    setTimeout(() => {
                        setTitlestate(true);
                    }, 200);
                }}
                onMouseLeave={() => {
                    setTimeout(() => {
                        setTitlestate(false);
                    }, 200);
                }}
                onClick={() => {
                    setTitlestate(!titleState);
                    setToggleLableVisibility(!toggleLableVisibility);
                }}
                className={classNames('test-nav__title', {
                    'test-nav__title--active': titleState,
                })}
            >
                {props.navTitle}
                {props.navLabel && <span className="test-nav__label">HIRING</span>}
            </span>
            <div
                className={classNames('test-nav__border', {
                    'test-nav__border--active': titleState,
                })}
            >
                <Nav type="primary" links={props.navArray} />
            </div>
        </div>
    );
};

export default TestNav;
