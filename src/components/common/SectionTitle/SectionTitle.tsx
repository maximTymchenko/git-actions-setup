import React, { FC } from 'react';
import './SectionTitle.scss';

interface ITitleProps {
    className?: string;
    title: string;
    type: any;
}

const SectionTitle: FC = (props: ITitleProps) => {
    return (
        <h2 data-testid="section-title" className={`title title--${props.type}`}>
            {props.title}
        </h2>
    );
};

export default SectionTitle;
