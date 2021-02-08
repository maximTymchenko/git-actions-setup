import React, { FC } from 'react';
import MainTitle from '../../../common/MainTitle';
import './ContactsTitle.scss';

interface ITitleProps {
    subtype: string;
    type: string;
    subtitle: string;
    title: string;
    titleText: string;
    subtitleText: string;
    titleType: string;
    titleSubtype: string;
}

const ContactsTitle: FC = (props: ITitleProps) => {
    return (
        <div data-testid="contacts-title" className="contact-us-page__headline">
            <div className="contact-us-page__wrapper">
                <MainTitle
                    subtype={props.titleSubtype}
                    type={props.titleType}
                    subtitleF={props.subtitleText}
                    title={props.titleText}
                />
            </div>

            <p className="contact-us-page__info">{props.text}</p>
        </div>
    );
};

export default ContactsTitle;
