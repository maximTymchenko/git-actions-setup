import React, { FC } from 'react';
import SectionTitle from '../../../common/SectionTitle';
import TextDescription from '../../../common/TextDescription';
import './SubsectionWithDescription.scss';

interface ISubsectionWithDescription {
    title: string;
    description: string;
}

const SubsectionWithDescription: FC = (props: ISubsectionWithDescription) => {
    return (
        <div data-testid="subsection-with-description" className="subsection-with-description">
            <SectionTitle type="primary" title={props.title} />
            <TextDescription description={props.description} />
        </div>
    );
};

export default SubsectionWithDescription;
