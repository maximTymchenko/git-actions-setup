import React, { FC, useState } from 'react';
import './BlogFilter.scss';
import FilterList from '../../../common/FilterList';

const BlogFilter: FC = () => {
    const [servicesList, setServicesList] = useState([
        { id: 1, value: 'Web development', isChecked: false },
        { id: 2, value: 'Cloud services', isChecked: false },
        { id: 3, value: 'Research', isChecked: false },
        { id: 4, value: 'Analytics', isChecked: false },
        { id: 5, value: 'Quality control', isChecked: false },
        { id: 6, value: 'Mobile development', isChecked: false },
    ]);

    const handleCheckChieldServicesElement = (event: any): void => {
        const listCopy = servicesList.slice();
        listCopy.forEach((services) => {
            if (services.value === event.target.value) {
                services.isChecked = event.target.checked;
            }
        });
        setServicesList(listCopy);
    };

    const [industriesList, setIndustriesList] = useState([
        { id: 1, value: 'Retail & E-commerce', isChecked: false },
        { id: 2, value: 'Construction', isChecked: false },
        { id: 3, value: 'Finance', isChecked: false },
        { id: 4, value: 'Media', isChecked: false },
        { id: 5, value: 'Other', isChecked: false },
    ]);

    const handleCheckChieldIndustriesElement = (event: any): void => {
        const listCopy = industriesList.slice();
        listCopy.forEach((industries) => {
            if (industries.value === event.target.value) {
                industries.isChecked = event.target.checked;
            }
        });
        setIndustriesList(listCopy);
    };

    const [expertiseList, setExpertiseList] = useState([
        { id: 1, value: 'SaaS product', isChecked: false },
        { id: 2, value: 'Chatbots', isChecked: false },
        { id: 3, value: 'AR & VR', isChecked: false },
        { id: 4, value: 'Blockchain', isChecked: false },
        { id: 5, value: 'Digital enterprise ', isChecked: false },
        { id: 6, value: 'Drone', isChecked: false },
        { id: 7, value: 'R&D', isChecked: false },
    ]);

    const handleCheckChieldExpertiseElement = (event: any): void => {
        const listCopy = expertiseList.slice();
        listCopy.forEach((expertise) => {
            if (expertise.value === event.target.value) {
                expertise.isChecked = event.target.checked;
            }
        });
        setExpertiseList(listCopy);
    };

    return (
        <div className="blog-filter" data-testid="blog-filter">
            <span className="blog-filter__span">Choose a topic you’re interested the most</span>
            <div className="blog-filter__wrapper">
                <div className="blog-filter__list">
                    <span className="blog-filter__list-title">Services</span>
                    {servicesList.map((services) => {
                        return (
                            <FilterList
                                handleCheckChieldElement={handleCheckChieldServicesElement}
                                filterListTitle="Services"
                                {...services}
                            />
                        );
                    })}
                </div>
                <div className="blog-filter__list">
                    <span className="blog-filter__list-title">Industries</span>
                    {industriesList.map((industries) => {
                        return (
                            <FilterList
                                filterListTitle="Industries"
                                {...industries}
                                handleCheckChieldElement={handleCheckChieldIndustriesElement}
                            />
                        );
                    })}
                </div>
                <div className="blog-filter__list">
                    <span className="blog-filter__list-title">Expertise</span>
                    {expertiseList.map((expertise) => {
                        return (
                            <FilterList
                                filterListTitle="Expertise"
                                {...expertise}
                                handleCheckChieldElement={handleCheckChieldExpertiseElement}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogFilter;
