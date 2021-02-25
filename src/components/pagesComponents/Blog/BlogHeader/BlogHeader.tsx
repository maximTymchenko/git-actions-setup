import React, { FC, useState } from 'react';
import './BlogHeader.scss';
import SectionTitle from '../../../common/SectionTitle';
import TextDescription from '../../../common/TextDescription';
import Nav from '../../../common/Nav';
import BlogForm from '../BlogForm';

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
            { id: 3, title: 'Whitepapers', page: '/blog/whitepapers' },
            { id: 4, title: 'Videos', page: '/blog/videos' },
            { id: 5, title: 'Resources', page: '/blog/resources' },
            {
                id: 6,
                title: 'Press center',
                page: '/blog/press-center',
            },
        ],
    };

    return (
        <div data-testid="blog-header" className="blog-header">
            <div className="blog-header__nav">
                <Nav type="blog" links={menuLinks} linkType="link__blog" linkType="link__blog" />
            </div>
            <div className="blog-header__wrapper">
                <SectionTitle type="section" title={props.blogTitle} />
                <div className="blog-header__subtitle">
                    <TextDescription>{props.blogSubtitle}</TextDescription>
                </div>
                <BlogForm />
            </div>
        </div>
    );
};

export default BlogHeader;
