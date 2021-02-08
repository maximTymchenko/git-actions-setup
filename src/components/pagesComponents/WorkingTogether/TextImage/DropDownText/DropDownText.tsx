import React, { FC, useState } from 'react';
import showIcon from '../../../../../assets/img/workingTogether/show-icon.svg';
import './DropDownText.scss';

const DropDownText: FC = () => {
    const toggleActiveIcon = (index: number) => {
        if (positionsArray.positions[index] === positionsArray.activePosition) {
            return 'drop-down-text__icon drop-down-text__icon--close';
        } else {
            return 'drop-down-text__icon';
        }
    };

    const [positionsArray, setPositionsArray] = useState({
        activePosition: null,
        positions: [
            { id: 0, title: 'Developer' },
            { id: 1, title: 'QA Engineer' },
            { id: 2, title: 'DevOps' },
            { id: 3, title: 'Project Manager' },
        ],
    });

    const toggleShowRate = (index: number) => {
        setPositionsArray({ ...positionsArray, activePosition: positionsArray.positions[index] });
    };

    const toggleActiveClassRate = (index: number) => {
        if (positionsArray.positions[index] === positionsArray.activePosition) {
            return 'drop-down-text__body drop-down-text__body--show';
        } else {
            return 'drop-down-text__body';
        }
    };

    return (
        <div data-testid="drop-down-text" className="drop-down-text">
            {positionsArray.positions.map((pos, index) => (
                <div key={index} className="drop-down-text__wrapper">
                    <div className="drop-down-text__header">
                        <span className="drop-down-text__title">{pos.title}</span>
                        <img
                            onClick={() => toggleShowRate(index)}
                            className={toggleActiveIcon(index)}
                            src={showIcon}
                            alt="Show"
                        />
                    </div>
                    <div className={toggleActiveClassRate(index)}>
                        <div className="drop-down-text__salary">
                            <span className="drop-down-text__time">Hourly</span>
                            <span className="drop-down-text__rate">$60-$150+/hour</span>
                        </div>
                        <div className="drop-down-text__salary">
                            <span className="drop-down-text__time">Part-time</span>
                            <span className="drop-down-text__rate">$1,000-$2,400+/week</span>
                        </div>
                        <div className="drop-down-text__salary">
                            <span className="drop-down-text__time">Full-time</span>
                            <span className="drop-down-text__rate">$2,000-$4,800+/week</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DropDownText;
