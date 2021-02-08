import React, { FC } from 'react';
import SectionTitle from '../../../common/SectionTitle';
import Button from '../../../common/Button';
import arrowRight from '../../../../assets/img/arr-right.svg';
import './TextItem.scss';
import { Link } from 'gatsby';

interface ITextItem {
    itemTitle: string;
    itemDesc: string;
    image: any;
    link: string;
    page: string;
    size: string;
}

const TextItem: FC = (props: ITextItem) => {
    return (
        <div data-testid="text-item" className="text-item__wrapper">
            <div className="text-item__body">
                <SectionTitle type={'primary'} title={props.itemTitle} />
                <p className="text-item__desc">{props.itemDesc}</p>
                <Link
                    className="link"
                    to={props.link}
                    activeClassName="header__nav-text header__nav-text--active"
                    state={{ choice: props.page }}
                >
                    <Button
                        icon={arrowRight}
                        type={'primary'}
                        className="button"
                        desc={'Learn more'}
                    >
                        Learn more
                    </Button>
                </Link>
            </div>
            <img
                src={props.image}
                alt=""
                className={`text-item__img text-item__img--${props.size}`}
            />
        </div>
    );
};

export default TextItem;
