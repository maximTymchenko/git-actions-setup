import React, { FC, useState } from 'react';
import './BlogHeader.scss';
import SectionTitle from '../../../common/SectionTitle';
import TextDescription from '../../../common/TextDescription';
import Button from '../../../common/Button';
import arrowRight from '../../../../assets/img/arr-right.svg';
import classNames from 'classnames';

interface IBlogHEaderProps {
    blogTitle: string;
    blogSubtitle: string;
}

const BlogHeader: FC = (props: IBlogHEaderProps) => {
    const [inputData, setInputData] = useState<string>('');
    const [emailType, setEmailType] = useState<boolean>(false);

    const getData = (val: object) => {
        setInputData(val.target.value);

        if (typeof inputData !== 'string') {
            setEmailType(true);
        }

        if (inputData.search(/\s/) !== -1) {
            setEmailType(true);
        }

        if (inputData.search(/[!#$%^&*()\-=_+~[\]{}'"\\|,/<>?]/) === -1) {
            setEmailType(true);
        }

        if (inputData == '') {
            setEmailType(false);
        }
    };

    return (
        <div className="blog-header">
            <div className="blog-header__wrapper">
                <SectionTitle type="section" title={props.blogTitle} />
                <div className="blog-header__subtitle">
                    <TextDescription>{props.blogSubtitle}</TextDescription>
                </div>
            </div>
            <form className="blog-header__form">
                <div className="blog-header__input-wrapper">
                    <input
                        onChange={getData}
                        className={classNames('blog-header__input', {
                            'blog-header__input--error': emailType,
                        })}
                        type="email"
                        name="email"
                        placeholder="Your email"
                    />
                    <span
                        className={classNames('blog-header__error', {
                            'blog-header__error--show': emailType,
                        })}
                    >
                        Check email
                    </span>
                </div>

                <Button icon={arrowRight} type="secondary">
                    Subscribe
                </Button>
            </form>
        </div>
    );
};

export default BlogHeader;
