import React, { FC, useState } from 'react';
import './BlogForm.scss';
import classNames from 'classnames';
import Button from '../../../common/Button';
import arrowRight from '../../../../assets/img/arr-right.svg';
import * as EmailValidator from 'email-validator';
import validator from 'validator';

const BlogForm: FC = () => {
    const [emailClass, setEmailClass] = useState<boolean>(false);

    const [emailError, setEmailError] = useState('');
    const validateEmail = (e) => {
        var email = e.target.value;

        if (validator.isEmail(email)) {
            setEmailError('Valid Email :)');
            setEmailClass(false);
        } else {
            setEmailError('Enter valid Email!');
            setEmailClass(true);
        }
    };

    const removeReloadPageWithClick = (e) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={removeReloadPageWithClick} className="blog-header__form">
            <div className="blog-header__input-wrapper">
                <input
                    onChange={(e) => validateEmail(e)}
                    className={classNames('blog-header__input', {
                        'blog-header__input--error': emailClass,
                    })}
                    type="text"
                    name="email"
                    placeholder="Your email"
                />
                <span
                    className={classNames('blog-header__error', {
                        'blog-header__error--show': emailClass,
                    })}
                >
                    Check email
                </span>
            </div>
            <div className="blog-header__button">
                <Button icon={arrowRight} type="secondary">
                    Subscribe
                </Button>
            </div>
            {/* {emailError} */}
        </form>
    );
};

export default BlogForm;
