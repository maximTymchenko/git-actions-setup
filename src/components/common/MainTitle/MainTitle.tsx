import React, { FC } from 'react';
import SectionTitle from '../SectionTitle';

interface IMainTitle {
    className?: string;
    title: string;
    subtitleF: string;
    subtitleS: string;
    subtitleB: string;
    subtypeB: string;
    type: any;
    subtype: any;
}

const MainTitle: FC = (props: IMainTitle) => {
    return (
        <div>
            <div className="title__wrapper">
                <SectionTitle type="small" title={props.subtitleF} />
                <SectionTitle type="bold" title={props.subtitleB} />
                <SectionTitle type="small" title={props.subtitleS} />
            </div>
            <h1 data-testid="main-title" className={`title title--${props.type}`}>
                {/* <div className="title__wrapper">
                <span className={`title title--${props.subtype}`}>{props.subtitleF}</span>
                <span className={`title title--${props.subtypeB}`}>{props.subtitleB}</span>
                <span className={`title title--${props.subtype}`}>{props.subtitleS}</span>
            </div> */}

                {props.title}
            </h1>
        </div>
    );
};

export default MainTitle;
