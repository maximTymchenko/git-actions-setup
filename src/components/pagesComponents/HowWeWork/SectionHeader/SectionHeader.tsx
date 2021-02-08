import React, { FC } from 'react';
import TextDescription from '../../../common/TextDescription';
import MainTitle from '../../../common/MainTitle';
import SectionTitle from '../../../common/SectionTitle';
import './SectionHeader.scss';

interface ISectionHeader {
    subtitleTextF: string;
    subtitleTextB: string;
    subtitleTextS: string;
    secondaryTitleText: string;
    titleText: string;
    large: string;
    description: string;
    descriptionMain: string;
    descriptionPrimary: string;
    descriptionSecondary: string;
    typeValue: string;
    subtype: string;
    size: string;
}
const SectionHeader: FC = (props: ISectionHeader) => {
    return (
        <div data-testid="section-header" className="section-header__wrapper">
            <MainTitle
                subtypeB="bold"
                subtype="small"
                type={props.typeValue}
                subtitleF={props.subtitleTextF}
                subtitleS={props.subtitleTextS}
                subtitleB={props.subtitleTextB}
                title={props.titleText}
            />
            <SectionTitle type="primary" className="title" title={props.secondaryTitleText} />
        </div>
    );
};

export default SectionHeader;
