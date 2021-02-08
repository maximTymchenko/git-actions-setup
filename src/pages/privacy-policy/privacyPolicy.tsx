import React from 'react';
import { Link } from 'gatsby';
import PrivacyTitle from '../../components/common/SectionTitle';
import { FaTimes } from 'react-icons/fa';
import './privacyPolicy.scss';

const privacy: React.FunctionComponent = () => {
    return (
        <>
            <div className="privacy__header">
                <Link to="/">
                    <button className="privacy__btn">
                        <FaTimes className="privacy__img" />
                    </button>
                </Link>
            </div>
            <div className="privacy__wrapper">
                <PrivacyTitle className={'primary'} title={'Acknowledgement and Acceptance'} />
                <p className="privacy__info">
                    Blackbird Lab has created this Privacy Policy in line with our commitment to
                    your privacy on Blackbird Lab website and connected resources. The following
                    discloses our information gathering, dissemination and protection practices.
                </p>
                <p className="privacy__info">
                    Blackbird Lab is committed to protect your privacy. This Privacy Policy is
                    intended to describe how personal information is used and processed. Blackbird
                    Lab guarantees that our activities are kept within the confines of this Policy.
                    Please read the complete Privacy Policy Statement carefully.
                </p>
                <p className="privacy__info">
                    By visiting https://blackbird-lab.com you accept the terms described below.
                    Blackbird Lab reserves the right to modify this statement and terms of use in
                    the whole or in part at any time.
                </p>
            </div>
        </>
    );
};

export default privacy;
