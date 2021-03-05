import React, { FC } from 'react';
import './TechnicalSummary.scss';
import LargeSectionTitle from '../../../components/pagesComponents/CaseStudy/LargeSectionTitle';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import SectionTitle from '../../../components/common/SectionTitle';
import ListItem from '../../../components/pagesComponents/CaseStudy/ListItem';
import Span from '../../../components/pagesComponents/CaseStudy/Span';
import { AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import Features from '../../../components/pagesComponents/MainPage/Features';
import calendar from '../../../assets/img/calendar.svg';
import spectar from '../../../assets/img/companies/spectar.svg';
import walmart from '../../../assets/img/companies/walmart.svg';
import LargeCompanyContainer from '../../../components/pagesComponents/MainPage/LargeCompanyContainer';

const TechnicalSummary: FC = () => {
    return (
        <>
            <Header path2="Statflo Case Study" />
            <div className="technical-summary">
                <LargeSectionTitle
                    sectionTitle="Entirely Rebuilt 1:1 SMS Outreach SaaS Product for Extra Profitable Retail Platform"
                    sectionDescription="Blackbird became a natural team extension of Statflo inc. Together we scaled the
                    product team from two to eight people and rebuilt successful 1:1 Retail
                    Conversations™ product from the ground up to meet the growing client base
                    demands."
                />
                <div className="statflo-case-study__text statflo-case-study__text--large">
                    <SectionTitle type="primary" title="Technical summary" />
                    <ListItem margin="mt">
                        In the early beginning of our cooperation with the client, Blackbird worked
                        on multiple microservices where we used Docker and Kubernetees for
                        deployment. The communication between the microservices was done via
                        RabbitMQ.
                    </ListItem>
                    <ListItem>
                        Built the first version of the new 1:1 Retail Conversations™ utilizing AWS
                        Amplify framework. (as a part of the<Span type="bold">Research</Span>and
                        <Span type="bold">Analytics</Span>services used).
                    </ListItem>
                    <ListItem>
                        Migrated architecture from entirely microservice-based application
                        architecture to CQRS with event sourcing. Utilized
                        <Span type="bold">Axon</Span>Framework to support the new application
                        infrastructure.
                    </ListItem>
                    <ListItem>
                        Senior developers mastered and successfully applied Command Query
                        Responsibility Segregation (CQRS) architectural pattern with event sourcing
                        within two calendar months.
                    </ListItem>
                    <ListItem>
                        Overcame<Span type="bold">Twilio API</Span>limitations of 1000 threads per
                        account alongside learned how to reassigning each of threads to sales reps
                        under multiple accounts.
                    </ListItem>
                    <ListItem>Improved DNC handling both auto and manual ones.</ListItem>
                    <ListItem>
                        Developed the new brand, legal and privacy Compliance API for all of Statflo
                        products.
                    </ListItem>
                    <ListItem>
                        Moved from own SSO authentication solution to
                        <Span type="bold">Auth0 API.</Span>
                    </ListItem>
                    <ListItem>
                        Implemented the new responsive UI design on the front end with
                        <Span type="bold">React</Span>,<Span type="bold">Typescript</Span>,
                        <Span type="bold">Redux Thunk</Span>,<Span type="bold">Redux Toolkit</Span>.
                        Apollo Client was used since all communication is powered by the
                        <Span type="bold">Apollo Graphql.</Span>
                    </ListItem>
                    <ListItem>
                        <Span type="bold">Quality control:</Span>
                        all endpoints are covered with end-to-end automation tests in Postman
                    </ListItem>
                    <ListItem>
                        Deployed and operated DevOps infrastructure for the product to run a closed
                        beta with the most interested in product clients.
                    </ListItem>
                    <div className="statflo-case-study__links">
                        <Span type="share">Share it</Span>
                        <AiOutlineTwitter className="statflo-case-study__link" />
                        <AiFillFacebook className="statflo-case-study__link" />
                        <FaLinkedin className="statflo-case-study__link" />
                    </div>
                    <div className="statflo-case-study__border-bottom"></div>
                    <Features
                        buttonIcon={calendar}
                        buttonText="Book a meeting"
                        showBG="no-bg"
                        title="Have a similar project or feel like we have what it takes to help you out?"
                    />
                </div>
                <div className="statflo-case-study__border">
                    <SectionTitle type="primary" title="Other successes" />
                    <div className="what-we-do__companies what-we-do__companies--mt">
                        <div className="what-we-do__company">
                            <LargeCompanyContainer
                                typeBG="bg-main"
                                img={spectar}
                                description="Building a pioneering AR product for construction"
                                label="CASE STUDY"
                                hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
                            />
                        </div>
                        <div className="what-we-do__company">
                            <LargeCompanyContainer
                                typeBG="bg-secondary"
                                img={walmart}
                                description="Increasing Walmart weekly ads conversion with a custom web app for Ad Tech company"
                                label="CASE STUDY"
                                hashtags="Amazon, Retail & E-commerce, React, Web development, +13 more"
                                logoPos="mb"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TechnicalSummary;
