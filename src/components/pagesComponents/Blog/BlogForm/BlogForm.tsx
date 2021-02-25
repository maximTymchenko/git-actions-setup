import React, { FC, useState } from 'react';
import './BlogForm.scss';
import classNames from 'classnames';
import Button from '../../../common/Button';
import arrowRight from '../../../../assets/img/arr-right.svg';
import validator from 'validator';
import * as yup from 'yup';

const BlogForm: FC = () => {
    const userScheme = yup.object().shape({
        email: yup.string().email().required(),
    });

    const [emailClass, setEmailClass] = useState<boolean>(false);

    const [emailError, setEmailError] = useState<string | null>('');

    const checkEmailValidation = async (e: any): Promise<void> => {
        e.preventDefault();
        let formData = {
            email: e.target[0].value,
        };

        const isValid = await userScheme.isValid(formData);

        if (isValid == false) {
            setEmailClass(true);
        }
    };

    // const validateEmail = (e: any) => {
    //     if (validator.isEmail(e.target.value)) {
    //         setEmailError('Valid Email :)');
    //         setEmailClass(false);
    //     } else {
    //         setEmailError('Enter valid Email!');
    //         setEmailClass(true);
    //     }
    // };

    return (
        <form data-testid="blog-form" onSubmit={checkEmailValidation} className="blog-header__form">
            <div className="blog-header__input-wrapper">
                <input
                    // onChange={(e) => validateEmail(e)}
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
        </form>
    );
};

export default BlogForm;
