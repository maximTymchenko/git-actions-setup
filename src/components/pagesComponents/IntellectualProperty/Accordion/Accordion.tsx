import React, { FC, useState } from 'react';
import showIcon from '../../../../assets/img/workingTogether/show-icon.svg';
import './Accordion.scss';

const Accordion: FC = () => {
    const toggleActiveIcon = (index: number) => {
        if (positionsArray.positions[index] === positionsArray.activePosition) {
            return 'accordion__icon accordion__icon--close';
        } else {
            return 'accordion__icon';
        }
    };

    const [positionsArray, setPositionsArray] = useState({
        activePosition: null,
        positions: [
            { id: 0, title: 'CCPA' },
            { id: 1, title: 'GDPR' },
            { id: 2, title: 'ISO 27001' },
        ],
    });

    const toggleShowRate = (index: number) => {
        setPositionsArray({ ...positionsArray, activePosition: positionsArray.positions[index] });
    };

    const toggleActiveClassRate = (index: number) => {
        if (positionsArray.positions[index] === positionsArray.activePosition) {
            return 'accordion__text-wrapper accordion__text-wrapper--show';
        } else {
            return 'accordion__text-wrapper';
        }
    };

    return (
        <div data-testid="accordion" className="accordion">
            {positionsArray.positions.map((pos, index) => (
                <div className="accordion__wrapper">
                    <div className="accordion__head">
                        <h3 className="accordion__title">{pos.title}</h3>
                        <img
                            onClick={() => toggleShowRate(index)}
                            className={toggleActiveIcon(index)}
                            src={showIcon}
                            alt="Plus"
                        />
                    </div>
                    <div className={toggleActiveClassRate(index)}>
                        <p className="accordion__text">
                            The California Consumer Privacy Act of 2018 (CCPA) gives Californian
                            residents almost ultimate control over their personal information that
                            you collect about them. Even a single newsletter opt-in form could
                            become a nightmare with lots of devastating lawsuits.
                        </p>
                        <p className="accordion__text">
                            We at Blackbird designed and developed a special solution that embeds to
                            the back end of your product. It is going to be a one-click-job to
                            collect and export collected user’s personal information in a neat PDF
                            file or delete it all upon request.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
