import React, { FC } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'gatsby';
import './SecondaryFooter.scss';

const SmallFooter: FC = () => {
    return (
        <div data-testid="secondary-footer" className="small-footer">
            <div className="small-footer__wrapper">
                <p className="small-footer__rights">
                    © Blackbird Lab. 2017-2020. All rights reserved.
                </p>
                <div className="small-footer__links">
                    <Link className="link" to="/acknowledgement-and-acceptance">
                        <span className="small-footer__privacy">Privacy Policy</span>
                    </Link>

                    <a
                        target="_blank"
                        href="https://ua.linkedin.com/company/blackbird-lab"
                        className="small-footer__link"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        className="small-footer__link"
                        target="_blank"
                        href="https://jobs.dou.ua/companies/blackbird-lab/"
                    >
                        DOU
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SmallFooter;
