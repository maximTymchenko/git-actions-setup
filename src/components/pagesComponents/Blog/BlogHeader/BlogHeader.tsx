import React, { FC, useState } from 'react';
import './BlogHeader.scss';
import SectionTitle from '../../../common/SectionTitle';
import TextDescription from '../../../common/TextDescription';
import Button from '../../../common/Button';
import arrowRight from '../../../../assets/img/arr-right.svg';
import classNames from 'classnames';
import Nav from '../../../common/Nav';

interface IBlogHEaderProps {
    blogTitle: string;
    blogSubtitle: string;
}

const BlogHeader: FC = (props: IBlogHEaderProps) => {
    const menuLinks = {
        activeLink: null,
        links: [
            { id: 1, title: 'Latest', page: '/blog/' },
            { id: 2, title: 'Editorial', page: '/blog/editorial' },
            { id: 3, title: 'Whitepapers', page: '//' },
            { id: 4, title: 'Videos', page: '//' },
            { id: 5, title: 'Resources', page: '//' },
            {
                id: 6,
                title: 'Press center',
                page: '//',
            },
        ],
    };

    const [inputData, setInputData] = useState<string>('');
    const [emailType, setEmailType] = useState<boolean>(false);

    const getData = (val: EventTarget | null) => {
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
        <div data-testid="blog-header" className="blog-header">
            <div className="blog-header__nav">
                <Nav links={menuLinks} linkType="link__blog" />
            </div>
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
                <div className="blog-header__button">
                    <Button icon={arrowRight} type="secondary">
                        Subscribe
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default BlogHeader;
