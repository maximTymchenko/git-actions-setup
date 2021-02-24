import React, { useState } from 'react';
import { Link } from 'gatsby';
import './Cookies.scss';

const Cookies: React.FunctionComponent = () => {
    const getItem = (name: string) => {
        if (typeof document !== `undefined`) {
            const cookies: any = document.cookie
                .split(';')
                .map((cookie: string) => cookie.split('='))
                .reduce((acc, [key, value]) => ({ ...acc, [`${key.trim()}`]: value }), {});
            return cookies[name];
        }
    };

    const setItem = (key: string, value: string): void => {
        // set cookies expired time
        const cookiesExpire = `${key}=${value} ;max-age =` + 60 * 60 * 24 * 90;
        document.cookie = cookiesExpire;
    };

    const acceptCookiesKey: string = 'accept_cookies';

    //manage cookies state
    const [showCookies, setShowCookies] = useState<boolean>(getItem(acceptCookiesKey) != 'true');

    const acceptFn = (): void => {
        setItem(acceptCookiesKey, 'true');
        setShowCookies(false);
    };

    return (
        <div data-testid="cookies" className="cookies">
            {showCookies && (
                <div className="coockies__wrapper">
                    <p className="coockies__info">
                        We use cookies to ensure your best experience. Through your continued use of
                        this site you accept this use. Please see our
                        <Link className="coockies__link" to="/privacy-policy">
                            <span className="coockies__privacy"> privacy policy</span>
                        </Link>
                    </p>
                    <button onClick={() => acceptFn()} className="coockies__btn">
                        Accept
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cookies;
