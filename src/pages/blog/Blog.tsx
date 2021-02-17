import React, { FC } from 'react';
import './Blog.scss';
import Header from '../../components/common/Header';
import Layout from '../../components/layout';
import BlogHeader from '../../components/pagesComponents/Blog/BlogHeader';

const Blog: FC = () => {
    return (
        <Layout>
            <section className="blog">
                <BlogHeader
                    blogTitle="Blog"
                    blogSubtitle=" Articles, stories, case studies technical guides, best practices, tech videos,
                    and lots of resources to help you build, grow, and skyrocket your product or
                    digital side of your business."
                />
            </section>
        </Layout>
    );
};

export default Blog;
