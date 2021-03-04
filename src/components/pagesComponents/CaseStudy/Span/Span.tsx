import React, { FC } from 'react';
import './Span.scss';

interface ISpanProps {
    type: string;
    children: string;
    subtype?: string;
}

const Span = (props: ISpanProps) => {
    return (
        <span data-testid="span" className={`span span--${props.type} span--${props.subtype}`}>
            {props.children}
        </span>
    );
};

export default Span;
