import React, { FC } from 'react';
import './Quote.scss';

interface IQuoteProps {
    children: string;
}

const Quote: FC = (props: IQuoteProps) => {
    return (
        <div data-testid="quote" className="quote">
            <p className="quote__text">{props.children}</p>
        </div>
    );
};

export default Quote;
