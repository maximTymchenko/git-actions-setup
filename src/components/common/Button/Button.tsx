import React, { FC } from 'react';
import './Button.scss';
import ButtonIcon from '../ButtonIcon';

interface IButtonProps {
    children: string;
    icon: any;
    type: string;
    desc?: string;
    mobile?: string;
    function?: () => void;
    subtype?: string;
    iconType?: string;
}

const Button: FC = (props: IButtonProps) => {
    return (
        <button
            data-testid="button"
            className={`button button--${props.type} button--${props.mobile} button--${props.subtype}`}
        >
            {props.children}
            <ButtonIcon type={props.iconType} icon={props.icon} desc={props.desc} />
        </button>
    );
};

export default Button;
