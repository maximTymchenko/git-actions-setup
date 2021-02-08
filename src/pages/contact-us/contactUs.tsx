import React, { FC } from 'react';
import Layouts from '../../components/layout';
import OurContacts from '../../components/pagesComponents/ContactUs/OurContacts';
import OurOffices from '../../components/pagesComponents/ContactUs/OurOffices';
import TypeForm from '../../components/pagesComponents/ContactUs/TypeForm';
import ContactsTitle from '../../components/pagesComponents/ContactUs/ContactsTitle';

import './contactUs.scss';

const ContactUsPage: FC = () => {
    return (
        <Layouts>
            <section className="contact-us">
                <div className="contact-us__wrapper">
                    <div className="contact-us__boby">
                        <ContactsTitle
                            subtitleText="Contact Us"
                            titleText="Let’s Talk"
                            titleSubtype="small"
                            titleType="section"
                            text={
                                'Please, carefully answer the questions below. Your answers will help us to understand your goals, problems and tastes. We will come up with more accurate solutions thanks to your detailed answers. Thank you.'
                            }
                        />
                        <TypeForm />
                    </div>
                    <OurContacts />
                </div>
                <OurOffices />
            </section>
        </Layouts>
    );
};

export default ContactUsPage;
