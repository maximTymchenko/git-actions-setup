import React, { FC } from 'react';
import './ListItem.scss';

interface IListItemProps {
    children: string;
    margin: string;
}

const ListItem: FC = (props: IListItemProps) => {
    return (
        <p data-testid="list-item" className={`list-item list-item--${props.margin}`}>
            {props.children}
        </p>
    );
};

export default ListItem;
