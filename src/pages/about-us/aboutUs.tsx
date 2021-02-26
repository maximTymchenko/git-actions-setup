import React, { FC } from 'react';
import './aboutUs.scss';
import Layouts from '../../components/layout';
import SectionHeader from '../../components/pagesComponents/HowWeWork/SectionHeader';
import TextDescription from '../../components/common/TextDescription';
import triangleRight from '../../assets/img/triangle-right.svg';
import Button from '../../components/common/Button';
import workingPeople from '../../assets/img/aboutUs/working-people.jpg';

const aboutUs: FC = () => {
    return (
        <Layouts>
            <div className="about-us">
                <div className="about-us__header">
                    <div className="about-us__text">
                        <SectionHeader
                            subtitleTextF="Developers,"
                            subtitleTextB="Designers,"
                            subtitleTextS="Problem solvers."
                            titleText="We Are Blackbird"
                            large="large"
                            typeValue="section"
                        />
                        <TextDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                            purus in nulla tincidunt facilisis. Pellentesque ut metus sit amet nibh
                            faucibus sollicitudin. Aenean auctor pulvinar lacus. Mauris at eros
                            dapibus, lacinia massa in, sagittis magna. Integer varius sit amet augue
                            at aliquam. In sed tellus sit amet diam scelerisque sollicitudin.
                        </TextDescription>
                        <div className="about-us__btn">
                            <Button icon={triangleRight} type="primary" desc="Watch video">
                                Watch video
                            </Button>
                        </div>
                    </div>
                    <div className="about-us__img">
                        <img src={workingPeople} alt="Working people" />
                    </div>
                </div>
            </div>
        </Layouts>
    );
};

export default aboutUs;
