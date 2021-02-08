import React, { FC } from 'react';
import SectionTitle from '../../../common/SectionTitle';
import './RecomendedText.scss';

interface IRecomendedText {
    title: string;
    textPoints: string;
}

const RecomendedText: FC = (props: IRecomendedText) => {
    const textPoints = props.textPoints;

    return (
        <div data-testid="recomended-text" className="recomended-text__wrapper">
            <span className="recomended-text__title">{props.title}</span>;
            <ul className="recomended-text__list">
                {textPoints.map((point, index) => (
                    <li key={index} className="recomended-text__points">
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecomendedText;
