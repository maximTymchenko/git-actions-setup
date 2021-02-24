import React from 'react';
import './FilterList.scss';

export const NewList = (props) => {
    return (
        <div data-testid="filter-list" className="filter-list">
            <div className="filter-list__body">
                <div className="filter-list__chose">
                    <label className="filter-list__label">
                        <input
                            key={props.id}
                            onClick={props.handleCheckChieldElement}
                            type="checkbox"
                            checked={props.isChecked}
                            value={props.value}
                            className="filter-list__check"
                        />
                        <span class="filter-list__checkmark"></span>
                        {props.value}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NewList;
