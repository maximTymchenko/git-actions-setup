import React, { FC, Fragment } from 'react';
import './StatfloCaseStudy.scss';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import LargeSectionTitle from '../../components/pagesComponents/CaseStudy/LargeSectionTitle';
import SectionTitle from '../../components/common/SectionTitle';
import TextDescription from '../../components/common/TextDescription';
import Quote from '../../components/pagesComponents/CaseStudy/Quote';
import { AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import Span from '../../components/pagesComponents/CaseStudy/Span';
import SmallPhotoIcon from '../../components/pagesComponents/AboutUs/SmallPhotoIcon';
import YuriiDrozd from '../../assets/img/aboutUs/staff/Yurii_Drozd.jpeg';
import Button from '../../components/common/Button';
import arrRight from '../../assets/img/arr-right.svg';
import Features from '../../components/pagesComponents/MainPage/Features';

type TOurTeam = {
    id: number;
    name: string;
    position: string;
    img: any;
}[];

const StatfloCaseStudy: FC = () => {
    const ourTalanted: TOurTeam = [
        { id: 0, name: 'Yurii D.', position: 'CEO', img: YuriiDrozd },
        {
            id: 1,
            name: 'Yurii D.',
            position: 'Talent Acquisition',
            img: YuriiDrozd,
        },
        { id: 2, name: 'Yurii D.', position: 'Technical PM', img: YuriiDrozd },
        {
            id: 3,
            name: 'Yurii D.',
            position: 'Lead Engineer',
            img: YuriiDrozd,
        },
    ];

    return (
        <Fragment>
            <Header path2="Statflo Case Study" />
            <div className="statflo-case-study">
                <LargeSectionTitle
                    sectionTitle="Entirely Rebuilt 1:1 SMS Outreach SaaS Product for Extra Profitable Retail Platform"
                    sectionDescription="Blackbird became a natural team extension of Statflo inc. Together we scaled the
                    product team from two to eight people and rebuilt successful 1:1 Retail
                    Conversations™ product from the ground up to meet the growing client base
                    demands."
                />
                <div className="statflo-case-study__text">
                    <SectionTitle type="primary" title="The beginning " />
                    <TextDescription subtype="mb">
                        Everything started at first as a small remote engagement for a few Blackbird
                        team members and turned into fulfilling partnerships and perfect merge of
                        the on-site team and off-site one.
                    </TextDescription>
                    <TextDescription subtype="mb">
                        Yurii Drozd, Blackbird CEO, System Architect, also traveled to Toronto,
                        Ontario to meet Statflo team, and to discuss all the important project
                        details alongside learning more about company business and overall product
                        growing vision.
                    </TextDescription>
                    <TextDescription subtype="mb">
                        Since the project was already ongoing, and that initial version of 1:1
                        Retail Conversations™ had been in the use of Statflo customers for a while.
                        Lots of challenges and restrictions of microservice-based application
                        architecture had been already clear. Nevertheless, some other things
                        popped-up later.
                    </TextDescription>
                    <TextDescription subtype="mb">
                        The big thumb up for the titanic effort of ex-Statflo CTO who designed that
                        architecture and mostly on his own developed the MVP that eventually became
                        the first version of the product. However, he noticed that overall
                        application performance wasn't in the sweet spot back then.
                    </TextDescription>
                    <Quote>
                        Things like micro-delays while requests were traveling between one
                        microservice to another sometimes disguised lightness and overall beauty of
                        having a real-time 1:1 conversation with a business you are chatting with.
                    </Quote>
                    <TextDescription subtype="mb">
                        In addition to that, the new, extended Statflo product team observed that
                        some of the features have to be improved from both UX and optimization
                        sides. Things like micro-delays while requests were traveling between one
                        microservice to another sometimes killed the momentum disguised lightness
                        and overall beauty of having a real-time 1:1 conversation with a business
                        you are chatting with. The ability to quickly and easily react and reach a
                        business via one-to-one texting is the core of 1:1 Retail Conversations™
                        product.
                    </TextDescription>
                    <TextDescription subtype="mb">
                        All of the above plus some predictable product updates and scaling could
                        bring even more complexity to the highly-demanded retail SaaS product, and
                        inconveniences to Statflo customers. They love and value their customers so
                        much, so they even generated an extra $28M of profit for them in 2019.
                        Statflo aims to even larger figures, and the decision had been made, and the
                        work on entirely rethought 1:1 SMS outreach SaaS product was started.
                    </TextDescription>
                    <SectionTitle type="primary" title="The grand rebuild" />
                    <TextDescription subtype="mb">
                        The product team split was a smart and necessary move. Utilizing Squads and
                        Tribes models from Agile management approach we organized our work they way
                        existing product maintains its high reliability for Statflo customers, and
                        the works on the new one wouldn’t interrupt that.
                    </TextDescription>
                    <TextDescription subtype="mb">
                        Former VP of Engineering, on-site designer, and off-site extension team
                        members from Blackbird took care of it. Lots of good things were tried and
                        learned at the beginning of the product rebuilding.
                    </TextDescription>
                    <TextDescription subtype="mb">
                        During the first months of working on the new 1:1 Retail Conversations™ we
                        were operating in quick iterative “Research & Development” mode trying out
                        various approaches. Some of the build within this stage solutions like
                        customer and partner registration based on event sourcing architecture
                        remained in the final version of the product without any further changes.
                    </TextDescription>
                    <TextDescription subtype="mb">
                        Of course, we said “goodbye” to the pure microservice architecture and
                        reasonably selected the CQRS architecture pattern with event sourcing for
                        the vast of product features. However, we haven’t applied it absolutely for
                        every existing and new feature out there since it can be an overkill in such
                        a case.
                    </TextDescription>
                    <TextDescription subtype="mb">
                        RabbitMQ did a good job previously for building communication between
                        microservices deployed on Kubernetes (K8s). However, it was bringing some
                        delay while all this communication between microservices was happening.
                    </TextDescription>
                    <Quote>
                        Of course, we said “goodbye” to the pure microservice architecture and
                        reasonably selected the CQRS architecture pattern with event sourcing for
                        the vast of product features.
                    </Quote>
                    <TextDescription subtype="mb">
                        Generally, it could be optimized and this delay would be almost
                        unnoticeable. However, not only that was holding the team from keeping and
                        optimizing existing product architecture but the upcoming hot features
                        requested by large retail chains and Tier 1 national carriers triggered that
                        shift.
                    </TextDescription>
                    <TextDescription subtype="mb">
                        The new SaaS product architecture promised not only easiness of adding them
                        but removed some serious limitations of the first version of 1:1 Retail
                        Conversations™. Among those limitations were such things like 1000
                        conversations per 1 account, and storing all conversation threads on Statflo
                        side (now it’s stored and pulled from Twilio via API).
                    </TextDescription>
                    <TextDescription subtype="mb">
                        COVID-19 pandemic changed how teams work around not just in our case but
                        globally. We all ended up working remotely. This particular case even more
                        diminished the distance between all members of both teams. Off-site team
                        members are now felt like on-site employees.
                    </TextDescription>
                    <SectionTitle type="primary" title="The outcomes" />
                    <TextDescription subtype="mb">
                        The job was successfully done. The shiny new 1:1 Retail Conversations™
                        became a standalone SaaS product with the unseen easiness of customization
                        to different industries specifics and white-labeling capabilities. It can
                        now provide its users with such features as profanity check, improved
                        better-than-industry-leading compliance, blazing-fast Auto DNC handling, and
                        more.
                    </TextDescription>
                    <TextDescription subtype="mb">
                        If 1:1 Retail Conversations™ is not live at the moment you read this, wait
                        for it. If it is already publicly available, definitely give it a good try.
                    </TextDescription>
                    <div className="statflo-case-study__links">
                        <Span type="share">Share it</Span>
                        <AiOutlineTwitter className="statflo-case-study__link" />
                        <AiFillFacebook className="statflo-case-study__link" />
                        <FaLinkedin className="statflo-case-study__link" />
                    </div>
                    <div className="statflo-case-study__icons">
                        <Span type="peoples" subtype="mt">
                            People who made it a reality
                        </Span>
                        <SmallPhotoIcon ourTalanted={ourTalanted} margin="mb" />

                        <div className="statflo-case-study__btn">
                            <Button type="watch" desc="See full credits" icon={arrRight}>
                                See full credits
                            </Button>
                        </div>
                    </div>
                </div>
                <Features
                    showBG="no-bg"
                    title="Have a similar project or feel like we have what it takes to help you out?"
                />
            </div>
            <Footer />
        </Fragment>
    );
};

export default StatfloCaseStudy;
