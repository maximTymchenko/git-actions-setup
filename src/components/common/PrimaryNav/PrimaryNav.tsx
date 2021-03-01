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
}

const TestNav = (props: INavProps) => {
    const [titleState, setTitlestate] = useState<boolean>(false);
    return (
        <div data-testid="primary-nav" className="test-nav__wrapper">
            <span
                onClick={() => setTitlestate(!titleState)}
                className={classNames('test-nav__title', {
                    'test-nav__title--active': titleState,
                })}
            >
                {props.navTitle}
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
