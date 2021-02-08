import React, { FC, useState, useEffect } from 'react';
import Button from '../../../common/Button';
import leftHand from '../../../../assets/img/counter/left-hand.svg';
import rightHand from '../../../../assets/img/counter/right-hand.svg';
import { FaRedoAlt } from 'react-icons/fa';
import './FixedCounter.scss';
import { Scroll, withScroll } from 'react-fns';
import arrUpLeft from '../../../../assets/img/counter/arr-up-left.svg';
import arrUpRight from '../../../../assets/img/counter/arr-up-rigtht.svg';

interface IFixedCounter {
    leftCounter: number;
    rightCounter: number;
    increaseLeftCount: any;
    increaseRightCount: any;
    resetCounter: any;
    y: number;
}

const FixedCounter: FC = (props: IFixedCounter) => {
    let getYScroll = props.y;

    const [counterVisible, setCounterVisible] = useState<boolean>(true);

    useEffect(() => {
        if (getYScroll > 1200) {
            setCounterVisible(true);
        } else {
            setCounterVisible(false);
        }
    }, [getYScroll]);

    useEffect(() => {
        if (getYScroll >= 10900) {
            setCounterVisible(false);
        }
    }, [getYScroll]);

    // Outcome responsibility
    useEffect(() => {
        if (getYScroll >= 1550) {
            setCounterVisible(false);
        }
    }, [getYScroll]);

    useEffect(() => {
        if (getYScroll >= 1700) {
            setCounterVisible(false);
        }
    }, [getYScroll]);

    // Project kickoff
    useEffect(() => {
        if (getYScroll >= 2240) {
            setCounterVisible(true);
        }
    }, [getYScroll]);

    useEffect(() => {
        if (getYScroll >= 2640) {
            setCounterVisible(false);
        }
    }, [getYScroll]);

    // Onboarding approach

    useEffect(() => {
        if (getYScroll >= 3350) {
            setCounterVisible(true);
        }
    }, [getYScroll]);

    useEffect(() => {
        if (getYScroll >= 3800) {
            setCounterVisible(false);
        }
    }, [getYScroll]);

    // Recruitment & screening

    useEffect(() => {
        if (getYScroll >= 4600) {
            setCounterVisible(true);
        }
    }, [getYScroll]);

    useEffect(() => {
        if (getYScroll >= 4800) {
            setCounterVisible(false);
        }
    }, [getYScroll]);

    // Remote management

    useEffect(() => {
        if (getYScroll >= 6000) {
            setCounterVisible(true);
        }
    }, [getYScroll]);

    useEffect(() => {
        if (getYScroll >= 6500) {
            setCounterVisible(false);
        }
    }, [getYScroll]);

    // Communication standard

    useEffect(() => {
        if (getYScroll >= 7100) {
            setCounterVisible(true);
        }
    }, [getYScroll]);

    useEffect(() => {
        if (getYScroll >= 7550) {
            setCounterVisible(false);
        }
    }, [getYScroll]);

    // Intellectual property

    useEffect(() => {
        if (getYScroll >= 8200) {
            setCounterVisible(true);
        }
    }, [getYScroll]);

    useEffect(() => {
        if (getYScroll >= 8750) {
            setCounterVisible(false);
        }
    }, [getYScroll]);

    // Pricing & predictability

    useEffect(() => {
        if (getYScroll >= 9400) {
            setCounterVisible(true);
        }
    }, [getYScroll]);

    useEffect(() => {
        if (getYScroll >= 10000) {
            setCounterVisible(false);
        }
    }, [getYScroll]);

    return (
        <div data-testid="fixed-counter">
            {counterVisible && (
                <div className="fixed-counter">
                    <div className="fixed-counter__title">Which one works for you?</div>
                    <div className="fixed-counter__wrapper">
                        <div className="fixed-counter__num">{props.leftCounter}</div>
                        <div className="fixed-counter__num">:</div>
                        <div className="fixed-counter__num">{props.rightCounter}</div>
                    </div>
                    <FaRedoAlt onClick={props.resetCounter} className="fixed-counter__reset" />
                    <div className="fixed-counter__buttons">
                        <div
                            className="fixed-counter__buttons-wrapper"
                            onClick={props.increaseLeftCount}
                        >
                            <Button
                                iconType="secondary"
                                icon={rightHand}
                                type="reverse"
                                desc="This one"
                            >
                                This one
                                <img
                                    className="fixed-counter__buttons-arrow-l"
                                    src={arrUpLeft}
                                    alt=""
                                />
                            </Button>
                        </div>
                        <div
                            className="fixed-counter__buttons-wrapper"
                            onClick={props.increaseRightCount}
                        >
                            <Button
                                iconType="secondary"
                                icon={leftHand}
                                type="primary"
                                desc="That one"
                            >
                                <img
                                    className="fixed-counter__buttons-arrow-r"
                                    src={arrUpRight}
                                    alt=""
                                />
                                That one
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default withScroll(FixedCounter);
