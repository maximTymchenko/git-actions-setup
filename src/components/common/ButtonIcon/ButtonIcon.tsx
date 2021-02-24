import React, { FC } from 'react';
import './ButtonIcon.scss';

interface IButtonIconProps {
    icon?: any;
    desc?: string;
    type: string;
}

const ButtonIcon: FC = (props: IButtonIconProps) => {
    return (
        <img
            data-testid="button__icon"
            src={props.icon}
            className={`button__icon button__icon--${props.type}`}
            alt={props.desc}
        />
    );
};

export default ButtonIcon;
