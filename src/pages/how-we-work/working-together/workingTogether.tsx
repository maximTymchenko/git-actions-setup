import React, { FC, Fragment, useState } from 'react';
import TextImage from '../../../components/pagesComponents/WorkingTogether/TextImage';
import VideoItem from '../../../components/pagesComponents/HowWeWork/VideoItem';
import arrDown from '../../../assets/img/arr-down.png';
import Mountains from '../../../assets/img/workingTogether/mountains.svg';
import Men from '../../../assets/img/workingTogether/men.svg';
import Window from '../../../assets/img/workingTogether/window.svg';
import Women from '../../../assets/img/workingTogether/women.svg';
import Monitor from '../../../assets/img/workingTogether/monitor.svg';
import Tab from '../../../assets/img/workingTogether/tab.svg';
import Contract from '../../../assets/img/workingTogether/contract.svg';
import Rocket from '../../../assets/img/workingTogether/rocket.svg';
import SectionTitle from '../../../components/common/SectionTitle';
import TextDescription from '../../../components/common/TextDescription';
import RecomendedText from '../../../components/pagesComponents/WorkingTogether/RecomendedText';
import DropDownText from '../../../components/pagesComponents/WorkingTogether/TextImage/DropDownText';
import Counter from '../../../components/pagesComponents/WorkingTogether/Counter';
import FixedCounter from '../../../components/pagesComponents/WorkingTogether/FixedCounter';
import TextSpan from '../../../components/pagesComponents/MainPage/TextSpan';
import { Link } from 'react-scroll';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import SectionHeader from '../../../components/pagesComponents/HowWeWork/SectionHeader';
import People from '../../../assets/img/workingTogether/people.svg';

import SectionName from '../../../components/pagesComponents/WorkingTogether/SectionName';

import './workingTogether.scss';

type TCounterPoints = {
    id: number;
    title: string;
    isActive: boolean;
}[];

const workingTogether: FC = () => {
    const [rightCount, setRightCount] = useState<number>(0);
    const [leftCount, setLeftCount] = useState<number>(0);

    const increaseLeftCount = (): void => {
        setLeftCount(leftCount + 1);
    };

    const increaseRightCount = (): void => {
        setRightCount(rightCount + 1);
    };

    const resetCounter = (): void => {
        setLeftCount(0);
        setRightCount(0);
    };

    const [counterPoints, setCounterPoints] = useState<TCounterPoints>([
        {
            id: 0,
            title: 'Outcome responsibility',
            isActive: false,
        },
        {
            id: 1,
            title: 'Project kickoff',
            isActive: false,
        },
        {
            id: 2,
            title: 'Onboarding approach',
            isActive: false,
        },
        {
            id: 3,
            title: 'Recruitment & screening',
            isActive: false,
        },
        {
            id: 4,
            title: 'Remote management',
            isActive: false,
        },
        {
            id: 5,
            title: 'Communication standards',
            isActive: false,
        },
        {
            id: 6,
            title: 'Intellectual property',
            isActive: false,
        },
        {
            id: 7,
            title: 'Pricing & predictability',
            isActive: false,
        },
    ]);

    const handleCheckChieldCounterElement = (event: any): void => {
        const listCopy = counterPoints.slice();
        listCopy.forEach((services) => {
            if (services.title === event.target.value) {
                services.isActive = event.target.checked;
                console.log(listCopy);
            }
        });
        setCounterPoints(listCopy);
    };

    return (
        <Fragment>
            <Header path="Engagement Models" />
            <div className="overflow">
                <section className="working-together">
                    <div className="working-together__body">
                        <div className="working-together__body-wrapper">
                            <SectionHeader
                                typeValue="section"
                                subtitleTextF="Two Ways of"
                                titleText="Working Together"
                                large="large"
                            />
                            <TextDescription subtype="mb">
                                We empirically figured out that only two engagement models work
                                smoothly for our clients: On-demand Team Extension and Fully Managed
                                IT Services. Let us address the most popular misconceptions about
                                applying two of those, and explain how we at Blackbird exactly
                                utilizing them.
                            </TextDescription>
                        </div>
                        <TextImage large="large" image={People} typeValue="lighter" />
                    </div>
                    <span className="working-together__text">
                        The comparison is broken down into these important topics for your comfort:
                    </span>
                    <div className="how-we-work__overflow">
                        <div className="how-we-work__video">
                            <div className="how-we-work__video-wrapper how-we-work__video-wrapper--mb">
                                <Link to="responsibility" smooth={true} offset={-30}>
                                    <VideoItem
                                        size="small"
                                        buttonType="small-circle"
                                        buttonName="Scroll"
                                        buttonDesc="Scroll"
                                        buttonIcon={arrDown}
                                        num="1"
                                        label="Outcome Responsibility"
                                        labelType="small"
                                        numberType="small"
                                        position="relative"
                                    />
                                </Link>
                                <Link to="kickoff" smooth={true} offset={-30}>
                                    <VideoItem
                                        size="small"
                                        buttonType="small-circle"
                                        buttonName="Scroll"
                                        buttonDesc="Scroll"
                                        buttonIcon={arrDown}
                                        num="2"
                                        label="Project Kickoff"
                                        labelType="small"
                                        numberType="small"
                                        position="relative"
                                    />
                                </Link>
                                <Link to="approach" smooth={true} offset={-30}>
                                    <VideoItem
                                        size="small"
                                        buttonType="small-circle"
                                        buttonName="Scroll"
                                        buttonDesc="Scroll"
                                        buttonIcon={arrDown}
                                        num="3"
                                        label="Onboarding Approach"
                                        labelType="small"
                                        numberType="small"
                                        position="relative"
                                    />
                                </Link>
                                <Link to="recruitment" smooth={true} offset={-30}>
                                    <VideoItem
                                        size="small"
                                        buttonType="small-circle"
                                        buttonName="Scroll"
                                        buttonDesc="Scroll"
                                        buttonIcon={arrDown}
                                        num="4"
                                        label="Recruitment & Screening"
                                        labelType="small"
                                        numberType="small"
                                        position="relative"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="how-we-work__overflow">
                        <div className="how-we-work__video">
                            <div className="how-we-work__video-wrapper">
                                <Link to="management" smooth={true} offset={-30}>
                                    <VideoItem
                                        size="small"
                                        buttonType="small-circle"
                                        buttonName="Scroll"
                                        buttonDesc="Scroll"
                                        buttonIcon={arrDown}
                                        num="5"
                                        label="Remote management"
                                        labelType="small"
                                        numberType="small"
                                        position="relative"
                                    />
                                </Link>
                                <Link to="communication" smooth={true} offset={-30}>
                                    <VideoItem
                                        size="small"
                                        buttonType="small-circle"
                                        buttonName="Scroll"
                                        buttonDesc="Scroll"
                                        buttonIcon={arrDown}
                                        num="6"
                                        label="Communication Standards"
                                        labelType="small"
                                        numberType="small"
                                        position="relative"
                                    />
                                </Link>
                                <Link to="intellectual" smooth={true} offset={-30}>
                                    <VideoItem
                                        size="small"
                                        buttonType="small-circle"
                                        buttonName="Scroll"
                                        buttonDesc="Scroll"
                                        buttonIcon={arrDown}
                                        num="7"
                                        label="Intellectual Property"
                                        labelType="small"
                                        numberType="small"
                                        position="relative"
                                    />
                                </Link>
                                <Link to="pricing" smooth={true} offset={-30}>
                                    <VideoItem
                                        size="small"
                                        buttonType="small-circle"
                                        buttonName="Scroll"
                                        buttonDesc="Scroll"
                                        buttonIcon={arrDown}
                                        num="8"
                                        label="Pricing & Predictability"
                                        labelType="small"
                                        numberType="small"
                                        position="relative"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="working-together__body working-together__body--modify">
                    <div className="working-together__body-wrapper">
                        <SectionTitle type="lighter" title="Outcome responsibility" />
                        <SectionTitle type="primary" title="Blackbird guarantees" />
                        <TextDescription subtype="mb">
                            You get a wealth of our experience from actively working on
                            miscellaneous client projects that your in-house teams would not
                            probably collectively have.
                        </TextDescription>
                        <TextDescription subtype="mb">
                            Regardless, of the hiring model you choose, we will always make sure you
                            are aware of all possibilities and potential pitfalls in advance of
                            making your final decision.
                        </TextDescription>
                    </div>
                    <div className="working-together__img-type">
                        <TextImage
                            id="responsibility"
                            large="large"
                            image={Mountains}
                            relative="dislocation"
                            typeValue="lighter"
                            relative="moved"
                        />
                    </div>
                    <div className="working-together__img"></div>
                </div>

                <div className="working-together__text-container">
                    <div className="working-together__text-body">
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="On-demand team extension" />
                            <TextDescription type="dark" subtype="mb">
                                While you are provided with a professional team that does both meet
                                all of your hard/soft skill requirements, you will also get the
                                allies that treat your product and company as their own. However,
                                you have all the controls on you, so the team recommends alternative
                                but, eventually, does what you tell.
                            </TextDescription>
                        </div>
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="Fully managed IT services" />
                            <TextDescription type="dark" subtype="mb">
                                You are in charge of the direction and clear goal management. We
                                handle absolutely everything else as a turnkey service.Just grow
                                your product or business with zero worries about day-to-day IT
                                issues or emergencies. Any goal you set or an outcome you seek will
                                be accomplished. Period.
                            </TextDescription>
                        </div>
                    </div>
                </div>

                <SectionName
                    mainTitle="Project kickoff"
                    textDescFirst="You may want to start a project as soon as possible, and, well, nail the
                            competition behind. We share the same aspirations."
                    textDescSecond="To put those aspirations into action, we carefully rethought every step
                            of our market-fastest onboarding approach and created our own framework
                            out of it. We also built our recruitment & screening process to surround
                            our clients with people not only technically skilled but also mentally
                            interested in their product success."
                    textDescThird="So the time it really takes from a kickoff meeting to a completed
                            onboarding and actual project start is cut in half to what both global
                            and Western European outsourcing market could offer you."
                    imageID="kickoff"
                    image={Men}
                ></SectionName>

                <div className="working-together__text-container">
                    <div className="working-together__text-body">
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="On-demand team extension" />
                            <TextDescription type="dark" subtype="mb">
                                If the talents you need are on a bench, you may start an engagement
                                (namely interviewing candidates) in less than 3 days. However, if
                                there is a lack of some talents we will still start with people we
                                have and add the requested talents in less than 3–4 weeks. No delays
                                ever
                            </TextDescription>
                            <RecomendedText
                                title="On You"
                                textPoints={[
                                    '• Following our recommended Onboarding Framework',
                                    '• Following our Recruitment & Screening recommendations',
                                ]}
                            />
                            <RecomendedText
                                title="On Us"
                                textPoints={[
                                    '• 24×7×365 support and personal manager to assist in any situations',
                                    '• Making sure that you quickly move towards project start',
                                ]}
                            />
                        </div>
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="Fully managed IT services" />
                            <TextDescription type="dark" subtype="mb">
                                There is almost no Recruitment & Screening lag, so it’s quite
                                instant jump to the onboarding stage and actual project work shortly
                                after it. Once we agree on terms, it takes less than 5–7 days to
                                kickoff.
                            </TextDescription>
                        </div>
                    </div>
                </div>

                <SectionName
                    mainTitle="Onboarding approach"
                    textDescFirst="Onboarding is probably one of the biggest and toughest challenges that
                            new partners usually experience in the beginning."
                    textDescSecond="We designed our own onboarding frameworks for both of the engagement
                            options. It doesn’t matter what project management stack of tools you
                            use, we cover them all with our stellar process."
                    imageID="approach"
                    image={Window}
                ></SectionName>

                <div className="working-together__text-container">
                    <div className="working-together__text-body">
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="On-demand team extension" />
                            <TextDescription type="dark" subtype="mb">
                                Either it’s an Employee Handbook or other new employee onboarding
                                material hosted inside an HR tool of your choice, we make sure that
                                remote onboarding goes smoothly. We also care about security and
                                your intellectual property. For instance, as one of the steps of our
                                onboarding framework, we make sure that all the sensual information
                                handoff is conducted via both your and our security policies. More
                                info on intellectual property protection is down the page.
                            </TextDescription>
                        </div>
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="Fully managed IT services" />
                            <TextDescription type="dark" subtype="mb">
                                Sometimes, it may take months while your on-site team finishes code
                                splitting and other important project info like a Confluence space
                                will be also ready for a safe hand-off. This is when you will
                                definitely enjoy our full service. Not only we assist your in-house
                                team in the process of hand-off, but we also provide them with
                                well-outlined doable tasks to relieve stress and to bring clarity.
                                As well as to cut transferred project assets into actionable
                                work-ready pieces. Even if months of in-house work is required to do
                                a complete handoff, we are always able to move your project forward
                                with a small stack of starter assets.
                            </TextDescription>
                        </div>
                    </div>
                </div>

                <SectionName
                    mainTitle="Recruitment & screening"
                    textDescFirst="You probably already confused by trying to compare all the recruitment
                    processes of all potential outsourcing partners. From a freelance
                    recruiter to a large outsourcer, they all claim that their recruitment
                    process is the most unique."
                    textDescSecond="Meanwhile, it's fair to say that the majority of market players have a
                    decent screening process for hard skills. However, they actually fail at
                    developing a business founder or an ownership mentality in their
                    employees’ heads."
                    textDescThird="The founding team of Blackbird came from classical outsourcing with all
                    its cons and built our company around principles of an ownership
                    mentality instead. We are engineers and technicians who do not
                    appreciate stretching a project for longer than it really needs to be
                    successfully done."
                    image={Contract}
                    imageID="recruitment"
                ></SectionName>

                <div className="working-together__text-container">
                    <div className="working-together__text-body">
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="On-demand team extension" />
                            <TextDescription type="dark" subtype="mb">
                                If it’s people on a bench, you’ll be able to interview them in less
                                than 1–3 days. In other cases, it takes from 2 – 4 weeks depends on
                                the skillset you need and the readiness of a candidate to adopt the
                                ownership mentality. Regardless of the above scenarios, you’ll have
                                a great talent pool to ramp-up human resources quickly.
                            </TextDescription>
                            <RecomendedText
                                title="On You"
                                textPoints={[
                                    '• Providing a clear candidate requirements',
                                    '• Promptly scheduling and interviewing them',
                                    '• Making a hiring decision',
                                ]}
                            />
                            <RecomendedText
                                title="On Us"
                                textPoints={[
                                    '• 24×7×365 support and personal manager to assist in any situations',
                                    '• Tracking your offshore employee moods and motivation to keep the retention',
                                    '• Handling all the paperwork and local accounting',
                                    '• Taking care of perks, insurance, and other bonuses',
                                    '• Providing candidates with all hardware and software essentials',
                                ]}
                            />
                        </div>
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="Fully managed IT services" />
                            <TextDescription type="dark" subtype="mb">
                                If you like to set big outcomes and watch them achieved without
                                thinking about whom to hire for a job, you will enjoy this
                                cooperation model. You will never have to think about day-to-day IT
                                problems, product development, and support. HR duties, any
                                operational, and managerial risks are also not your problems
                                anymore. You are fully covered.
                            </TextDescription>
                            <RecomendedText
                                title="On You"
                                textPoints={[
                                    '• Setting clear outcomes and goals',
                                    '• Handing off a product and its assets',
                                    '• Reviewing and approving achieved results, sometimes checking interim tasks',
                                ]}
                            />
                            <RecomendedText
                                title="On Us"
                                textPoints={[
                                    '• 24×7×365 support and personal manager to assist in any situations',
                                    '• Project manager that is also always available',
                                    '• Delivering Results Diligently and on time',
                                ]}
                            />
                        </div>
                    </div>
                </div>

                <SectionName
                    mainTitle="Remote management"
                    textDescFirst=" 24×7×365 support and personal manager to assist makes it easier to
                    foresight and solve any situations as they may happen along the way.
                    This manager is an independent professional that oversees your off-site
                    employees or a dedicated team with a project manager(-s). He’s usually
                    invisible one but always makes sure that Blackbird executives are aware
                    of how things are going."
                    textDescSecond="We are not monstrous enterprise, and we are always picky about choosing
                    a client we work with. Once we become partners we want our partnerships
                    to be fulfilling and profitable for both sides."
                    image={Women}
                    imageID="management"
                ></SectionName>

                <div className="working-together__text-container">
                    <div className="working-together__text-body">
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="On-demand team extension" />
                            <RecomendedText
                                title="On You"
                                textPoints={['• Direct team management']}
                            />
                            <RecomendedText
                                title="On Us"
                                textPoints={[
                                    '• 24×7×365 support and personal manager to assist in any situations',
                                ]}
                            />
                        </div>
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="Fully managed IT services" />
                            <RecomendedText
                                title="On You"
                                textPoints={[
                                    '• Setting clear outcomes and goals',
                                    '• Reviewing milestones, sometimes checking interim tasks and approving finals',
                                ]}
                            />
                            <RecomendedText
                                title="On Us"
                                textPoints={[
                                    '• 24×7×365 support and personal manager to assist in any situations',
                                    '• Project manager for taking care of all internal team operations and management mechanics',
                                ]}
                            />
                        </div>
                    </div>
                </div>

                <SectionName
                    mainTitle="Communication standard"
                    textDescFirst="Different timezones are solved by mandatory 3–hour overlap with your and
                    your team timezones. 3 hours is the minimum availability threshold for
                    all Blackbird employees."
                    textDescSecond="We also make sure that you understand every Blackbirder you work with.
                    All of our employees are obligated to have a minimum of 3 individual
                    business English lessons per week. We fully cover the tuition."
                    image={Monitor}
                    imageID="communication"
                ></SectionName>

                <div className="working-together__text-container">
                    <div className="working-together__text-body">
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="On-demand team extension" />
                            <RecomendedText
                                title="On You"
                                textPoints={[
                                    '• Defining all the communication principles',
                                    '• Setting an overlap for an engaged off-site employee',
                                    '• Covering the communication costs (for instance, calling on your local cell or landlines)',
                                ]}
                            />
                            <RecomendedText
                                title="On Us"
                                textPoints={[
                                    '• 24×7×365 support and personal manager to assist in any situations',
                                ]}
                            />
                        </div>
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="Fully managed IT services" />
                            <RecomendedText
                                title="On You"
                                textPoints={['• Defining all the communication preferences']}
                            />
                            <RecomendedText
                                title="On Us"
                                textPoints={[
                                    '• 24×7×365 support and personal manager to assist in any situations',
                                    '• Following your communication preferences',
                                ]}
                            />
                        </div>
                    </div>
                </div>

                <SectionName
                    mainTitle="Intellectual property"
                    textDescFirst="DYour NDA is backed-up with our localized NDA version that is tailored
                    to local laws of involved parties."
                    textDescSecond="We have complete control over things people install on their corporate
                    devices. Blackbird maintains an accurate and up-to-date inventory of all
                    its networks, services, servers, and employee devices."
                    textDescThird="All new hires are required to attend the security awareness training as
                    part of their onboarding. And all employees are required to attend the
                    annual security awareness training. Blackbird engineers are required to
                    attend an annual security training designed specifically for engineers.
                    Read more on our intellectual property protection effort."
                    image={Rocket}
                    imageID="intellectual"
                ></SectionName>

                <div className="working-together__text-container">
                    <div className="working-together__text-body">
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="On-demand team extension" />
                            <TextDescription type="dark" subtype="mb">
                                Everyone from your extension team members signs it before he starts
                                working with any sensitive information you share. You will receive
                                localized NDA and its notarized translation shipped right to your
                                post box.
                            </TextDescription>
                        </div>
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="Fully managed IT services" />
                            <TextDescription type="dark" subtype="mb">
                                The same level of security is applied to this particular cooperation
                                model too.
                            </TextDescription>
                        </div>
                    </div>
                </div>

                <SectionName
                    mainTitle="Pricing & predictability"
                    textDescFirst="As our favorite client, you will be able to forecast your monthly,
                    quarterly, and yearly expenditure on IT services regardless of a
                    cooperation model you choose."
                    textDescSecond="Even planning your annual budget around outcomes will get easier with
                    Blackbird since IT risks are on us. You will also save a lot of that
                    budget via passing your IT duties to us in comparison to creating a
                    comparable team in-house."
                    textDescThird="One thing is for sure: if IT is not your primary money-making product
                    then your in-house team will always be behind people who have to
                    regularly deal with challenges and emergencies of multiple clients’
                    products, services. All such a wealth of experience will be always
                    available for you whenever you need it."
                    textDescFours="Plus, you will be able to focus your people's energy and resources on
                    things that matter the most for your company growth."
                    image={Tab}
                    imageID="pricing"
                ></SectionName>

                <div className="working-together__text-container">
                    <div className="working-together__text-body">
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="On-demand team extension" />
                            <TextDescription type="dark" subtype="mb">
                                Our fee is Developer Salary + 25% of salary (similar to UpWork's fee
                                structure).
                            </TextDescription>
                            <DropDownText />
                            <TextDescription type="dark" subtype="mb">
                                We also have trial periods, so you could try out an individually
                                gathered team of specialists and see what they are able to do for
                                you. If you are not satisfied with the whole or certain team
                                members, we will replace them at no extras until you are 100% happy.
                            </TextDescription>
                        </div>
                        <div className="working-together__text-wrapper">
                            <SectionTitle type="secondary" title="Fully managed IT services" />
                            <TextDescription type="dark" subtype="mb">
                                Our fee is $75/hour. The number of hours is estimated based on
                                certain parameters and project goals and resources that are required
                                to achieve them
                            </TextDescription>
                            <TextDescription type="dark" subtype="mb">
                                Resources that will remain a part of your deliverables are on you.
                                For instance, it is such things as hosting, monthly subscriptions
                                for 3rd party services that are required to build and maintain your
                                product, etc. All the essentials like code environments, essential
                                software, and hardware are on us.
                            </TextDescription>
                        </div>
                    </div>
                </div>
                <FixedCounter
                    leftCounter={leftCount}
                    rightCounter={rightCount}
                    increaseLeftCount={increaseLeftCount}
                    increaseRightCount={increaseRightCount}
                    resetCounter={resetCounter}
                />
                <Counter
                    increaseLeftCount={increaseLeftCount}
                    increaseRightCount={increaseRightCount}
                    leftCounter={leftCount}
                    rightCounter={rightCount}
                    counterPoints={counterPoints}
                    handleCheckChieldCounterElement={handleCheckChieldCounterElement}
                />
                <div className="working-together__span">
                    <TextSpan
                        title="Already decided?"
                        text="Either you have already decided on the best hiring model or still have some questions left, let’s discuss it."
                    />
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default workingTogether;
