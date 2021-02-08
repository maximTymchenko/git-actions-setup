import React, { FC } from 'react';
import SectionTitle from '../../../common/SectionTitle';
import Clock from '../../../common/Clock';
import './OurOffices.scss';

const OurOffices: FC = () => {
    return (
        <div data-testid="our-offices" className="our-offices__wrapper">
            <SectionTitle type="main" title="Our offices" />
            <div className="our-offices__cities">
                <div className="our-office__city">
                    <SectionTitle className="title" type={'city'} title={'Ukraine HQ'} />
                    <span className="our-offices__timezone">+2 UTC/EET</span>
                    <Clock timezone={'Europe/Kiev'} />
                    <a href="tel:+380931042757" className="contacts__phone">
                        +380–93–104–27–57
                    </a>
                    <a href="mailto:info@blackbird-lab.com" className="contacts__email">
                        info@blackbird-lab.com
                    </a>
                    <span className="contacts__phone">16 Shota Rustaveli St Kyiv,</span>
                    <span className="contacts__phone">02000 Ukraine</span>
                </div>
                <div className="our-office__city">
                    <SectionTitle className="title" type={'city'} title={'Minneapolis'} />
                    <span className="our-offices__timezone">-6 CST</span>
                    <Clock timezone={'America/Belize'} />
                    <a href="tel:+13217541350" className="contacts__phone">
                        +1–321–754–1350
                    </a>
                    <a href="mailto:SF_sales@blackbird-lab.com" className="contacts__email">
                        SF_sales@blackbird-lab.com
                    </a>
                </div>
                <div className="our-office__city">
                    <SectionTitle className="title" type={'city'} title={'Toronto'} />
                    <span className="our-offices__timezone">GMT -5</span>
                    <Clock timezone={'America/Toronto'} />
                    <a href="tel:+353871170708" className="contacts__phone">
                        +353–87–117–0708
                    </a>
                    <a href="mailto:SF_sales@blackbird-lab.com" className="contacts__email">
                        dublin_prod@blackbird-lab.com
                    </a>
                </div>
                <div className="our-office__city">
                    <SectionTitle className="title" type={'city'} title={'Los Angeles'} />
                    <span className="our-offices__timezone">GMT -8</span>
                    <Clock timezone={'America/Los_Angeles'} />
                    <a href="tel:+61391310770" className="contacts__phone">
                        +61–391–31–0770
                    </a>
                    <a href="mailto:SF_sales@blackbird-lab.com" className="contacts__email">
                        AU@blackbird-lab.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OurOffices;
