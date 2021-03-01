import React, { FC } from 'react';
import './aboutUs.scss';
import Layouts from '../../components/layout';
import SectionHeader from '../../components/pagesComponents/HowWeWork/SectionHeader';
import TextDescription from '../../components/common/TextDescription';
import triangleRight from '../../assets/img/triangle-right.svg';
import Button from '../../components/common/Button';
import workingPeople from '../../assets/img/aboutUs/working-people.jpg';
import illustration from '../../assets/img/aboutUs/illustration.png';
import arrRight from '../../assets/img/arr-right.svg';
import SectionTitle from '../../components/common/SectionTitle';
import TextSpan from '../../components/pagesComponents/MainPage/TextSpan';
import TextImage from '../../components/pagesComponents/WorkingTogether/TextImage';
import PhotoIcon from '../../components/pagesComponents/AboutUs/PhotoIcon';
import CEO from '../../assets/img/aboutUs/CEO.jpeg';
import SmallPhotoIcon from '../../components/pagesComponents/AboutUs/SmallPhotoIcon';
import YuriiDrozd from '../../assets/img/aboutUs/staff/Yurii_Drozd.jpeg';
import AnastasiiaIvanova from '../../assets/img/aboutUs/staff/Anastasiia_Ivanova.jpeg';
import DmytriiS from '../../assets/img/aboutUs/staff/Dmytrii_S.jpeg';
import AnastasiaIlina from '../../assets/img/aboutUs/staff/Anastasia_Ilina.jpeg';
import AnastasiiaShyshak from '../../assets/img/aboutUs/staff/Anastasiia_Shyshak.jpeg';
import AnnaTrofimova from '../../assets/img/aboutUs/staff/Anna_Trofimova.jpeg';
import AntonShloma from '../../assets/img/aboutUs/staff/Anton_Shloma.jpeg';
import DmitryBogdan from '../../assets/img/aboutUs/staff/Dmitry_Bogdan.jpeg';
import ElenaZolotoverkh from '../../assets/img/aboutUs/staff/Elena_Zolotoverkh.jpeg';
import KarinaDubok from '../../assets/img/aboutUs/staff/Karina_Dubok.jpeg';
import MaksimSobolev from '../../assets/img/aboutUs/staff/Maksim_Sobolev.jpeg';
import MaxGrytsuk from '../../assets/img/aboutUs/staff/Max_Grytsuk.jpeg';
import MykytaDidenko from '../../assets/img/aboutUs/staff/Mykyta_Didenko.jpeg';
import OleksandrGribov from '../../assets/img/aboutUs/staff/Oleksandr_Gribov.jpeg';
import OleksandrLomakovskyi from '../../assets/img/aboutUs/staff/Oleksandr_Lomakovskyi.jpeg';
import OlenaPortnova from '../../assets/img/aboutUs/staff/Olena_Portnova.jpeg';
import PetroRudenko from '../../assets/img/aboutUs/staff/Petro_Rudenko.jpeg';
import PolinaSobolevskaya from '../../assets/img/aboutUs/staff/Polina_Sobolevskaya.jpeg';
import SergeyGorbachev from '../../assets/img/aboutUs/staff/Sergey_Gorbachev.jpeg';
import SergeyKlymenko from '../../assets/img/aboutUs/staff/Sergey_Klymenko.jpeg';
import SergeyTovstonog from '../../assets/img/aboutUs/staff/Sergey_Tovstonog.jpeg';
import SerhiiZiniuk from '../../assets/img/aboutUs/staff/Serhii_Ziniuk.jpeg';
import StanislavNosovskiy from '../../assets/img/aboutUs/staff/Stanislav_Nosovskiy.jpeg';
import TaniaKlimets from '../../assets/img/aboutUs/staff/Tania_Klimets.jpeg';
import ViacheslavBychkovskyi from '../../assets/img/aboutUs/staff/Viacheslav_Bychkovskyi.jpeg';
import ZhenyaRyzhov from '../../assets/img/aboutUs/staff/Zhenya_Ryzhov.jpeg';
import GlebG from '../../assets/img/aboutUs/staff/Gleb_G.jpeg';
import AndriiT from '../../assets/img/aboutUs/staff/Andrii_T.jpg';
// import office1 from '../../assets/img/aboutUs/office-1.jpeg';
// import office2 from '../../assets/img/aboutUs/office-2.jpeg';
// import office3 from '../../assets/img/aboutUs/office-3.jpeg';
// import office4 from '../../assets/img/aboutUs/office-4.jpeg';

import office1 from '../../assets/img/aboutUs/office_1.jpg';
import office2 from '../../assets/img/aboutUs/office_2.jpg';
import office3 from '../../assets/img/aboutUs/office_3.jpg';
import office4 from '../../assets/img/aboutUs/office_4.jpg';

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
        { id: 5, name: 'Yurii Drozd', position: 'CEO & Managing Director', img: CEO },
        { id: 6, name: 'Yurii Drozd', position: 'CEO & Managing Director', img: CEO },
        { id: 7, name: 'Yurii Drozd', position: 'CEO & Managing Director', img: CEO },
    ];

    const ourTalanted: TOurTeam = [
        { id: 0, name: 'Yurii D.', position: 'CEO', img: YuriiDrozd },
        {
            id: 1,
            name: 'Anastasiia I.',
            position: 'Talent Acquisition',
            img: AnastasiiaIvanova,
        },
        { id: 2, name: 'Dmytrii S', position: 'Technical PM', img: DmytriiS },
        {
            id: 3,
            name: 'Viacheslav B.',
            position: 'Lead Engineer',
            img: ViacheslavBychkovskyi,
        },
        { id: 4, name: 'Olena P.', position: 'Technical PM', img: OlenaPortnova },
        { id: 5, name: 'Anton S.', position: 'Senior Developer', img: AntonShloma },
        { id: 6, name: 'Maksym S.', position: 'Frontend Developer', img: MaksimSobolev },
        { id: 7, name: 'Anastasiia S.', position: 'QA', img: AnastasiiaShyshak },
        { id: 8, name: 'Polina S.', position: 'QA', img: PolinaSobolevskaya },
        { id: 9, name: 'Petro R.', position: 'Senior Frontend Developer', img: PetroRudenko },
        {
            id: 10,
            name: 'Stanislav N.',
            position: 'Ruby Developer',
            img: StanislavNosovskiy,
        },
        { id: 11, name: 'Gleb G.', position: 'Software Developer', img: GlebG },
        { id: 12, name: 'Maksym G.', position: 'Web developer', img: MaxGrytsuk },
        {
            id: 13,
            name: 'Oleksandr L.',
            position: 'Full Stack Developer',
            img: OleksandrLomakovskyi,
        },
        { id: 14, name: 'Dmitry B.', position: 'Java Engineer', img: DmitryBogdan },
        { id: 15, name: 'Tania K.', position: 'Frontend Developer', img: TaniaKlimets },
        { id: 16, name: 'Andrii T.', position: 'QA', img: AndriiT },
        {
            id: 17,
            name: 'Anastasia I.',
            position: 'Java Engineer',
            img: AnastasiaIlina,
        },
        { id: 18, name: 'Elena Z.', position: 'QA', img: ElenaZolotoverkh },
        { id: 19, name: 'Karina D.', position: 'Office Administrator', img: KarinaDubok },
        { id: 20, name: 'Serhii Z.', position: 'Solution Architect', img: SerhiiZiniuk },
        { id: 21, name: 'Oleksandr G.', position: 'iOS Engineer', img: OleksandrGribov },
        { id: 22, name: 'Anna T', position: 'Software Engineer', img: AnnaTrofimova },
        {
            id: 23,
            name: 'Sergey T.',
            position: 'Websphere Admin',
            img: SergeyTovstonog,
        },
        { id: 24, name: 'Sergey G.', position: 'QA', img: SergeyGorbachev },
        { id: 25, name: 'Mykyta D.', position: 'RoR Developer', img: MykytaDidenko },
        { id: 26, name: 'Sergey K.', position: 'Android Developer', img: SergeyKlymenko },
        { id: 27, name: 'Zhenya R.', position: 'Senior Developer', img: ZhenyaRyzhov },
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
                        src={office4}
                        alt="Office photo"
                        className="about-us__photo about-us__photo--big"
                    />
                    <img src={office3} alt="Office photo" className="about-us__photo" />
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
                <SectionTitle type="primary" title="Our talented people" />
                <SmallPhotoIcon ourTalanted={ourTalanted} />
                <TextSpan title="Let’s work together">
                    Even a 5-minute intro call could potentially save you countless hours of endless
                    back-and-forth emails.
                </TextSpan>
            </div>
        </Layouts>
    );
};

export default aboutUs;
