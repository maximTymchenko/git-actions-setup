import React, { FC, useState, useEffect } from 'react';
import moment from 'moment';
import momentTZ from 'moment-timezone';

import './Clock.scss';

interface IClock {
    timezone: any;
}

const Clock: FC = (props: IClock) => {
    const timeZone = momentTZ.tz(`${props.timezone}`).format('hh:mm A');

    const [currentTime, setCurrentTime] = useState(timeZone);

    const updateTime = () => {
        const timeZone = momentTZ.tz(`${props.timezone}`).format('hh:mm A');

        setCurrentTime(timeZone);
    };

    setInterval(updateTime, 1000);

    return (
        <span data-testid="clock" className="clock">
            {currentTime}
        </span>
    );
};

export default Clock;
