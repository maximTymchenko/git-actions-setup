import React, { FC } from 'react';
import './TitleAndDesc.scss';
import SectionTitle from '../../../common/SectionTitle';
import TextDescription from '../../../common/TextDescription';

interface ITitleAndDescProps {
    title: string;
    desc: string;
}

const TitleAndDesc: FC = (props: ITitleAndDescProps) => {
    return (
        <div className="title-and-desc" data-testid="title-and-desc">
            <SectionTitle type="secondary" title={props.title} />
            <TextDescription type="small">{props.desc}</TextDescription>
        </div>
    );
};

export default TitleAndDesc;
