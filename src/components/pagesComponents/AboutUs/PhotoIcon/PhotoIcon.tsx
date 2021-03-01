import React, { FC } from 'react';
import './PhotoIcon.scss';
// import Slider from 'react-slick';

const PhotoIcon: FC = (props) => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };

    return (
        <div data-testid="photo-icon" className="photo-icon__container">
            {/* <Slider {...settings}> */}
            {props.ourTeam.map((team) => (
                <div className="photo-icon">
                    <div className="photo-icon__wrapper">
                        <img className="photo-icon__img" src={team.img} alt="CEO" />
                    </div>
                    <span className="photo-icon__name">{team.name}</span>
                    <span className="photo-icon__position">{team.position}</span>
                </div>
            ))}
            {/* </Slider> */}
        </div>
    );
};

export default PhotoIcon;
