import React, { FC, useState } from 'react';
import './FilterList.scss';

interface IFilterProps {
    filterListTitle: string;
    filterLists: {
        lists: {
            id: number;
            title: string;
        }[];
    };
    listTitle: string;
    lists: any;
}

const FilterList: FC = (props: IFilterProps) => {
    return (
        <div data-testid="filter-list" className="filter-list">
            <div className="filter-list__body">
                <span className="filter-list__title">{props.filterListTitle}</span>
                {props.filterLists.lists.map((list, index) => (
                    <div key={index} className="filter-list__wrapper">
                        <div className="filter-list__chose">
                            <input
                                className="filter-list__check"
                                type="checkbox"
                                name=""
                                id={list.id}
                            />
                            <label className="filter-list__label" htmlFor={list.id}>
                                {list.title}
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default FilterList;
