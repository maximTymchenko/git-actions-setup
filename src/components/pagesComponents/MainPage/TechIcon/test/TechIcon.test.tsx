import React from 'react';
import TechIcon from '../TechIcon';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import {
    FaReact,
    FaNode,
    FaJava,
    FaHtml5,
    FaGoogle,
    FaGooglePlay,
    FaBimobject,
} from 'react-icons/fa';
import {
    SiRails,
    SiAngular,
    SiPhp,
    SiPython,
    SiCsharp,
    SiIos,
    SiSwift,
    SiAmazon,
} from 'react-icons/si';
import { DiJavascript1, DiAndroid } from 'react-icons/di';

const techIcons = [
    <FaJava />,
    <DiJavascript1 />,
    <FaReact />,
    <SiAngular />,
    <FaNode />,
    <SiPhp />,
    <SiRails />,
    <FaHtml5 />,
    <SiPython />,
    <SiCsharp />,
    <SiIos />,
    <DiAndroid />,
    <SiSwift />,
    <FaBimobject />,
    <SiAmazon />,
    <FaGoogle />,
    <FaGooglePlay />,
];

it('renders elem correctly', () => {
    const { getByTestId } = render(<TechIcon iconsArray={techIcons} large="large" />);
    expect(getByTestId('tech-icon')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer.create(<TechIcon iconsArray={techIcons} large="large" />).toJSON();
    expect(tree).toMatchSnapshot();
});
