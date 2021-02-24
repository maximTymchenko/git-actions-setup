import React, { FC } from 'react';
import { Link } from 'gatsby';
import Button from '../../components/common/Button/Button';
import Header from '../../components/common/Header/Header';
import SmallFooter from '../../components/common/SecondaryFooter/SecondaryFooter';
import './pageNotFound.scss';
import arrowRight from '../../assets/img/arr-right.svg';
import notFound from '../../assets/img/404.svg';
import SectionTitle from '../../components/common/SectionTitle';

const PageNotFound: FC = () => (
    <div className="page-not-found">
        <Header />
        <div className="page-not-found__wrapper">
            <SectionTitle subtype="margin" type={'main'} title="Lost in space?" />
            <img className="page-not-found__img" src={notFound} alt="404 Page Not Found" />
            <span className="page-not-found__info">The page you requested could not be found.</span>
            <Link className="link" to="/">
                <Button type="secondary" icon={arrowRight}>
                    Back to Home
                </Button>
            </Link>
        </div>
        <SmallFooter />
    </div>
);

export default PageNotFound;
