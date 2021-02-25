import React, { FC, useState, useEffect } from 'react';
import SectionTitle from '../../../common/SectionTitle';
import { FiThumbsUp } from 'react-icons/fi';
import './Counter.scss';
import classNames from 'classnames';

type TCounterPoints = {
    id: number;
    title: string;
    isActive: boolean;
}[];

interface ICounter {
    leftCounter: number;
    rightCounter: number;
    increaseLeftCount: () => void;
    increaseRightCount: () => void;
    handleCheckChieldCounterElement: (event: any) => void;
    counterPoints: TCounterPoints;
}

const Counter: FC = (props: ICounter) => {
    const [iconType, setIconType] = useState<boolean>(false);

    return (
        <div data-testid="counter" className="counter">
            <div className="counter__header">
                <SectionTitle type="lighter" className="title" title="Your votes" />
            </div>
            <div className="counter__wrapper">
                <SectionTitle type="secondary" title="On-Demand Team Extension" />
                <div className="counter__body">
                    <span className="counter__number">{props.leftCounter}</span>
                    <span className="counter__number">:</span>
                    <span className="counter__number">{props.rightCounter}</span>
                </div>
                <SectionTitle type="secondary" title="Fully Managed It Services" />
            </div>
            {props.counterPoints.map((point, index) => (
                <div key={index} className="counter__points">
                    <div onClick={props.increaseLeftCount}>
                        <FiThumbsUp
                            className={classNames('counter__icon--rotated', {
                                'counter__icon--active': iconType,
                            })}
                        />
                    </div>
                    <span className="counter__title">{point.title}</span>
                    <div onClick={props.increaseRightCount}>
                        <FiThumbsUp
                            onClick={point.func}
                            className={classNames('counter__icon', {
                                'counter__icon--active': iconType,
                            })}
                            // className={toggleActivePoints(index)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Counter;
