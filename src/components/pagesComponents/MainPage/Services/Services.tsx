import React, { useState, FC } from 'react'
import './Services.scss'
import Nav from '../../../common/Nav'
import Button from '../../../common/Button'
import SectionTitle from '../../../common/SectionTitle'
import spectar from '../../../../assets/img/companies/spectar.svg'
import arrowRight from '../../../../assets/img/arr-right.svg'
import walmart from '../../../../assets/img/companies/walmart.svg'
import SmallCompanyContainer from '../SmallCompanyContainer'
import LargeCompanyContainer from '../LargeCompanyContainer'
import { Link } from 'gatsby'

const Services: FC = () => {
  const menuLinks = {
    activeLink: null,
    links: [
      { id: 1, title: 'All', page: '/what-we-do/' },
      { id: 2, title: 'Web development', page: '/what-we-do/web-development/' },
      { id: 3, title: 'Cloud services', page: '/what-we-do/cloud-services/' },
      { id: 4, title: 'Team extension', page: '/what-we-do/team-extension/' },
      { id: 5, title: 'AR & VR', page: '/what-we-do/ar-&-vr/' },
      {
        id: 6,
        title: 'Retail & E-commerce',
        page: '/what-we-do/retail-and-e-commerce/',
      },
      // {
      //   id: 7,
      //   title: 'Mobile development',
      //   page: '/what-we-do/mobile-development/',
      // },
    ],
  }

  return (
    <div data-testid="services" className="services">
      <div className="services__wrapp">
        <SectionTitle type="main" title="Services and expertise" />
      </div>
      <div className="services__nav">
        <Nav type="main" links={menuLinks} linkType="link__large" />
        <div className="services__nav-btn">
          <Link to="/what-we-do/" className="link">
            <Button
              icon={arrowRight}
              type={'primary'}
              className="button"
              desc={'Discover more'}
            >
              Discover more
            </Button>
          </Link>
        </div>
      </div>
      <div className="services__company">
        <LargeCompanyContainer
          typeBG="bg-main"
          img={spectar}
          description="Building a pioneering AR product for construction"
          label="CASE STUDY"
          hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
        />
        <div className="services__company-wrapper">
          <SmallCompanyContainer
            img={walmart}
            description="Increasing Walmart weekly ads conversion with a custom web app for Ad Tech
                    company"
            label="CASE STUDY"
            hashtags="Amazon, Retail & E-commerce, React, Web development, +13 more"
          />
        </div>
      </div>
    </div>
  )
}

export default Services
