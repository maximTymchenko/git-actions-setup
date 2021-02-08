import React, { FC, useState, useEffect } from 'react';
import SectionTitle from '../../../common/SectionTitle';
import { FiThumbsUp } from 'react-icons/fi';
import './Counter.scss';
import classNames from 'classnames';

interface ICounter {
    leftCounter: number;
    rightCounter: number;
    increaseLeftCount: any;
    increaseRightCount: any;
}
interface ICounterPoints {
    activePoint: null | any;
    points: [
        {
            id: number;
            title: string;
            active: boolean;
        },
    ];
}

const Counter: FC = (props: ICounter) => {
    // const [counterPoints, setCounterPoints] = useState(props.counterPoints);

    const [iconType, setIconType] = useState<boolean>(false);
    const [iconType2, setIconType2] = useState<boolean>(false);

    // //! render counter title and add active class with click
    const [counterPoints, setCounterPoints] = useState<ICounterPoints>({
        activePoint: null,
        points: [
            {
                id: 0,
                title: 'Outcome responsibility',
                active: false,
            },
            {
                id: 1,
                title: 'Project kickoff',
                active: false,
            },
            {
                id: 2,
                title: 'Onboarding approach',
                active: false,
            },
            {
                id: 3,
                title: 'Recruitment & screening',
                active: false,
            },
            {
                id: 4,
                title: 'Remote management',
                active: false,
            },
            {
                id: 5,
                title: 'Communication standards',
                active: false,
            },
            {
                id: 6,
                title: 'Intellectual property',
                active: false,
            },
            {
                id: 7,
                title: 'Pricing & predictability',
                active: false,
            },
        ],
    });

    const togglePointsClass = (index: number) => {
        setCounterPoints({ ...counterPoints, activePoint: counterPoints.points[index] });
    };

    const toggleActivePoints = (index: number) => {
        if (counterPoints.points[index] === counterPoints.activePoint) {
            return 'counter__icon counter__icon--active';
        } else {
            return 'counter__icon';
        }
    };

    const toggleActiveRotatedPoints = (index: number) => {
        if (counterPoints.points[index] === counterPoints.activePoint) {
            return 'counter__icon--rotated counter__icon--active';
        } else {
            return 'counter__icon--rotated';
        }
    };

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
            {counterPoints.points.map((point, index) => (
                <div key={index} className="counter__points">
                    <div onClick={props.increaseLeftCount}>
                        <FiThumbsUp
                            // onClick={() => {
                            //     togglePointsClass(index);
                            //     updateStateByIndex();
                            // }}
                            onClick={point.func}
                            // className={toggleActiveRotatedPoints(index)}
                            className={classNames('counter__icon--rotated', {
                                'counter__icon--active': iconType,
                            })}
                        />
                    </div>
                    <span className="counter__title">{point.title}</span>
                    <div onClick={props.increaseRightCount}>
                        <FiThumbsUp
                            // onClick={() => {
                            //     togglePointsClass(index);
                            //     // updateStateByIndex();
                            // }}
                            onClick={point.func}
                            className={classNames('counter__icon--rotated', {
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
