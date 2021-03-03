import React, { useState, useRef, useEffect, MutableRefObject } from 'react';
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
    const [toggleSubnavVisibility, setToggleSubnavVisibility] = useState<boolean>(false);

    const linkRef = useRef<HTMLDivElement>(null);

    const getRef = (): void => {
        if (linkRef.current.classList.contains('active__border--style')) {
            setTitlestate(true);
        }
    };

    useEffect(() => {
        setInterval(() => {
            if (linkRef.current !== null) {
                getRef();
            }
        }, 1000);
    }, [linkRef]);

    console.log(linkRef.current);

    return (
        <div data-testid="primary-nav" className="test-nav__wrapper">
            <span
                onMouseOver={() => {
                    setToggleSubnavVisibility(true);
                }}
                onMouseLeave={() => {
                    setToggleSubnavVisibility(false);
                }}
                onClick={() => {
                    setTitlestate(!titleState);
                    setToggleLableVisibility(!toggleLableVisibility);
                    if (!titleState) {
                        setToggleSubnavVisibility(false);
                    }
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
                    'test-nav__border--active': titleState || toggleSubnavVisibility,
                })}
            >
                <Nav linkRef={linkRef} type="primary" links={props.navArray} />
            </div>
        </div>
    );
};

export default TestNav;
