import React, { FC } from 'react';
import PrivacyTitle from '../../../common/SectionTitle';
import './OurContacts.scss';

const Contacts: FC = () => {
    return (
        <div data-testid="our-contacts" className="contacts__wrapper">
            <div className="contacts__container">
                <div className="contacts__links">
                    <PrivacyTitle type="primary" title="New business" />
                    <a href="tel:+380931042757" className="contacts__phone">
                        +380–93–104–27–57
                    </a>
                    <a href="mailto:newbiz@blackbird-lab.com" className="contacts__email">
                        newbiz@blackbird-lab.com
                    </a>
                </div>
                <div className="contacts__links">
                    <PrivacyTitle type="primary" title={'Headquater'} />
                    <a href="tel:+380931042757" className="contacts__phone">
                        +380–93–104–27–57
                    </a>
                    <span className="contacts__phone">16 Shota Rustaveli St Kyiv,</span>
                    <span className="contacts__phone">02000 Ukraine</span>
                    <a href="mailto:info@blackbird-lab.com" className="contacts__email">
                        info@blackbird-lab.com
                    </a>
                </div>
                <div className="contacts__links">
                    <PrivacyTitle type="primary" title={'Social'} />
                    <a
                        target="_blank"
                        href="https://ua.linkedin.com/company/blackbird-lab"
                        className="contacts__email"
                    >
                        Linkedin
                    </a>
                    <a
                        target="_blank"
                        href="https://jobs.dou.ua/companies/blackbird-lab/"
                        className="contacts__email"
                    >
                        DOU
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
