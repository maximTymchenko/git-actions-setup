import React, { FC } from 'react';
import './TextSpan.scss';
import SectionTitle from '../../../common/SectionTitle';
import Button from '../../../common/Button';
import Calendar from '../../../../assets/img/calendar.svg';

interface ITextSpan {
    title: string;
    children: string;
    type: string;
}

const TextSpan: FC = (props: ITextSpan) => {
    return (
        <section data-testid="text-span" className={`text-span text-span--${props.type}`}>
            <div className="text-span__wrapper">
                <SectionTitle type={'secondary'} className="title" title={props.title} />
                <p className="text-span__info">{props.children}</p>
                <Button type="secondary" desc="Discover all" icon={Calendar}>
                    <a target="_blank" href="https://calendly.com/yuriidrozd">
                        Book a meeting
                    </a>
                </Button>
            </div>
        </section>
    );
};

export default TextSpan;
