import React, { FC } from 'react';
import './SectionName.scss';
import SectionTitle from '../../../common/SectionTitle';
import TextDescription from '../../../common/TextDescription';
import TextImage from '../../../pagesComponents/WorkingTogether/TextImage';

interface ISectionNameProps {
    mainTitle: string;
    imageID: string;
    textDescFirst: string;
    textDescSecond: string;
    textDescThird: string;
    textDescFours: string;
    image: any;
}

const SectionName: FC = (props: ISectionNameProps) => {
    return (
        <div data-testid="section-name" className="working-together__body">
            <div className="working-together__body-wrapper">
                <SectionTitle type="lighter" title={props.mainTitle} />
                <SectionTitle type="primary" title="Blackbird guarantees" />
                <TextDescription subtype="mb">{props.textDescFirst}</TextDescription>
                <TextDescription subtype="mb">{props.textDescSecond}</TextDescription>
                <TextDescription subtype="mb">{props.textDescThird}</TextDescription>
                <TextDescription subtype="mb">{props.textDescFours}</TextDescription>
            </div>
            <TextImage
                id={props.imageID}
                large="large"
                image={props.image}
                relative="relative"
                typeValue="lighter"
            />
        </div>
    );
};

export default SectionName;
