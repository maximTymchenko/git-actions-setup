import React, { FC } from 'react';
import './aboutUs.scss';
import Layouts from '../../components/layout';
import SectionHeader from '../../components/pagesComponents/HowWeWork/SectionHeader';
import TextDescription from '../../components/common/TextDescription';
import triangleRight from '../../assets/img/triangle-right.svg';
import Button from '../../components/common/Button';
import workingPeople from '../../assets/img/aboutUs/working-people.jpg';
import office1 from '../../assets/img/aboutUs/office-1.jpeg';
import office2 from '../../assets/img/aboutUs/office-2.jpeg';
import office3 from '../../assets/img/aboutUs/office-3.jpeg';
import office4 from '../../assets/img/aboutUs/office-4.jpeg';
import illustration from '../../assets/img/aboutUs/illustration.png';
import arrRight from '../../assets/img/arr-right.svg';
import SectionTitle from '../../components/common/SectionTitle';
import TextSpan from '../../components/pagesComponents/MainPage/TextSpan';
import TextImage from '../../components/pagesComponents/WorkingTogether/TextImage';
import PhotoIcon from '../../components/pagesComponents/AboutUs/PhotoIcon';
import CEO from '../../assets/img/aboutUs/CEO.jpeg';
import SmallPhotoIcon from '../../components/pagesComponents/AboutUs/SmallPhotoIcon';

type TOurTeam = {
    id: number;
    name: string;
    position: string;
    img: any;
}[];

const aboutUs: FC = () => {
    const ourTeam: TOurTeam = [
        { id: 0, name: 'Yurii Drozd', position: 'CEO & Managing Director', img: CEO },
        { id: 1, name: 'Yurii Drozd', position: 'CEO & Managing Director', img: CEO },
        { id: 2, name: 'Yurii Drozd', position: 'CEO & Managing Director', img: CEO },
        { id: 3, name: 'Yurii Drozd', position: 'CEO & Managing Director', img: CEO },
        { id: 4, name: 'Yurii Drozd', position: 'CEO & Managing Director', img: CEO },
    ];
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
                <div className="about-us__gallery">
                    <img src={office1} alt="Office photo" className="about-us__photo" />
                    <img
                        src={office2}
                        alt="Office photo"
                        className="about-us__photo about-us__photo--big"
                    />
                    <img
                        src={office3}
                        alt="Office photo"
                        className="about-us__photo about-us__photo--big"
                    />
                    <img src={office4} alt="Office photo" className="about-us__photo " />
                </div>
                <div className="about-us__content">
                    <div className="about-us__content-wrapper">
                        <SectionTitle type="lighter" title="Superior process" />
                        <SectionTitle type="primary" title="This is how we solve" />
                        <TextDescription subtype="mb">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                            purus in nulla tincidunt facilisis. Pellentesque ut metus sit amet nibh
                            faucibus sollicitudin. Aenean auctor pulvinar lacus. Mauris at eros
                            dapibus, lacinia massa in, sagittis magna. Integer varius sit amet augue
                            at aliquam. In sed tellus sit amet diam scelerisque sollicitudin.
                        </TextDescription>
                        <div className="about-us__btn">
                            <Button icon={arrRight} type="primary" desc="Watch video">
                                See our approach
                            </Button>
                        </div>
                    </div>
                    <div className="about-us__content-img">
                        <TextImage image={illustration} />
                    </div>
                </div>
                <SectionTitle type="lighter" title="Meet our team" />
                <PhotoIcon ourTeam={ourTeam} />
                <SmallPhotoIcon />
                <SectionTitle type="primary" title="Our talented people" />

                <TextSpan title="Let’s work together">
                    Even a 5-minute intro call could potentially save you countless hours of endless
                    back-and-forth emails.
                </TextSpan>
            </div>
        </Layouts>
    );
};

export default aboutUs;
