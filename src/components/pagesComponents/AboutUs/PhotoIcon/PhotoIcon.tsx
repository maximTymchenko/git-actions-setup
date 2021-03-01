import React, { FC } from 'react';
import './PhotoIcon.scss';

const PhotoIcon: FC = (props) => {
    return (
        <div data-testid="photo-icon" className="photo-icon__container">
            {props.ourTeam.map((team) => (
                <div key={team.id} className="photo-icon">
                    <div className="photo-icon__wrapper">
                        <img className="photo-icon__img" src={team.img} alt="CEO" />
                    </div>
                    <span className="photo-icon__name">{team.name}</span>
                    <span className="photo-icon__position">{team.position}</span>
                </div>
            ))}
        </div>
    );
};

export default PhotoIcon;
