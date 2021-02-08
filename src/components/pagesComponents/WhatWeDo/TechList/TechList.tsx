import React, { FC } from 'react';
import './TechList.scss';

interface ITechListProps {
    title: string;
    techList: string[];
    hide: string;
    borderType: string;
}

const TechList: FC = (props: ITechListProps) => {
    return (
        <div
            data-testid="tech-list"
            className={`tech-list__wrapper tech-list__wrapper--${props.borderType}`}
        >
            <h3 className={`tech-list__title tech-list__title--${props.hide}`}>{props.title}</h3>
            <ul className="tech-list__items">
                {props.techList.map((item, index) => (
                    <li key={index} className="tech-list__item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TechList;
