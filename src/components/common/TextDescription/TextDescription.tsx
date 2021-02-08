import React, { Children, FC } from 'react';
import './TextDescription.scss';

interface ITextDescription {
    description: string;
    type: string;
    children: string;
}

const TextDescription: FC = (props: ITextDescription) => {
    return (
        <p
            data-testid="text-description"
            className={`text-description text-description--${props.type}`}
        >
            {props.children}
        </p>
    );
};

export default TextDescription;
