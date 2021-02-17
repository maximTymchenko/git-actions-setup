import React, { FC, useState } from 'react';
import PrimaryNav from '../PrimaryNav';

const FilterNav: FC = () => {
    interface INavLinks {
        activeLink: null | any;
        links: [
            {
                id: number;
                title: string;
                page?: string | undefined;
            },
        ];
    }

    interface INavArr {
        activeLink?: null;
        links: {
            id: number;
            array: INavLinks;
        }[];
    }

    interface ILanguage {
        activeLink: null;
        links: {
            id: number;
            title: string;
        }[];
    }

    const language: ILanguage = {
        activeLink: null,
        links: [
            { id: 1, title: '' },
            { id: 2, title: '' },
        ],
    };

    const [navLinks, setNavLinks] = useState<INavLinks>({
        activeLink: null,
        links: [
            { id: 1, title: 'Services' },
            { id: 2, title: 'Industries' },
            { id: 3, title: 'Expertise' },
            { id: 4, title: 'Engagement' },
        ],
    });

    const menuLinksServices: INavLinks = {
        activeLink: null,
        links: [
            { id: 1, title: 'Web development', page: '/what-we-do/web-development/' },
            { id: 2, title: 'Cloud services', page: '/what-we-do/cloud-services/' },
            { id: 3, title: 'Team extension', page: '/what-we-do/team-extension/' },
            { id: 4, title: 'AR & VR', page: '/what-we-do/ar-&-vr/' },
            { id: 5, title: 'Retail & E-commerce', page: '/what-we-do/retaile-and-e-commerce/' },
            { id: 6, title: 'Mobile development', page: '/what-we-do/mobile-development/' },
        ],
    };

    const menuLinksIndustries: INavLinks = {
        activeLink: null,
        links: [
            { id: 1, title: 'Retail & E-commerce' },
            { id: 2, title: 'Construction' },
            { id: 3, title: 'Finance' },
            { id: 4, title: 'Media' },
        ],
    };

    const menuLinksExpertise: INavLinks = {
        activeLink: null,
        links: [
            { id: 1, title: 'SaaS product' },
            { id: 2, title: 'Chatbots' },
            { id: 3, title: 'AR & VR' },
            { id: 4, title: 'Blockchain' },
            { id: 5, title: 'Digital enterprise ' },
            { id: 6, title: 'Drone' },
            { id: 7, title: 'R&D' },
        ],
    };

    const menuLinksEngagement: INavLinks = {
        activeLink: null,
        links: [
            { id: 1, title: 'On-demand team extension' },
            { id: 2, title: 'Fully managed IT services' },
        ],
    };

    const [navLinksArray, setNavLinksArray] = useState<INavArr>({
        activeLink: null,
        links: [
            { id: 0, array: menuLinksServices },
            { id: 1, array: menuLinksIndustries },
            { id: 2, array: menuLinksExpertise },
            { id: 3, array: menuLinksEngagement },
        ],
    });
    return (
        <div data-testid="filter-list">
            <PrimaryNav
                navLinks={navLinks}
                navLinksArray={navLinksArray}
                language={language}
                type="filter"
            />
        </div>
    );
};
export default FilterNav;
