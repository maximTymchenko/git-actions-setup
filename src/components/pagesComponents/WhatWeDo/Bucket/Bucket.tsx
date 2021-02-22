import React, { FC } from 'react';
import './Bucket.scss';

import arrRight from '../../../../assets/img/arr-right.svg';

interface IBucketProps {
    icon?: any;
    size: string;
    displacement: string;
    bucketBG: any;
    label: string;
    hide?: string;
    marginBG?: string;
    bucketFunc: Function;
}

const Bucket: FC = (props: IBucketProps) => {
    return (
        <div
            onClick={props.bucketFunc}
            data-testid="bucket"
            className={`bucket bucket--${props.size}`}
        >
            <img
                src={props.bucketBG}
                alt="Background image"
                className={`bucket__background bucket__background--${props.marginBG}`}
            />
            <img
                src={props.icon}
                alt="Bucket icon"
                className={`bucket__icon bucket__icon--${props.hide}`}
            />
            <span className={`bucket__label bucket__label--${props.displacement}`}>
                {props.label}
                <img src={arrRight} alt="Label icon" className="bucket__label-icon" />
            </span>
        </div>
    );
};

export default Bucket;
