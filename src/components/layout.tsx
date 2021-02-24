import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './common/Header';
import Footer from './common/Footer';

type TLayout = {
    ({ children, page }: { children: any; page: any }): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<
            string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray
        >;
    };
};

const Layout: TLayout = ({ children, page }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
