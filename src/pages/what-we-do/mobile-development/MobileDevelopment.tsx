import React, { FC } from 'react'
import './MobileDevelopment.scss'
import Layouts from '../../../components/layout'
import PageHeader from '../../../components/pagesComponents/WhatWeDo/PageHeader'
import TechList from '../../../components/pagesComponents/WhatWeDo/TechList'
import SectionTitle from '../../../components/common/SectionTitle'
import TechIcon from '../../../components/pagesComponents/MainPage/TechIcon'
import { FaAppStoreIos, FaGooglePlay, FaApple } from 'react-icons/fa'
import { SiKotlin, SiAmazon, SiSwift, SiIntellijidea } from 'react-icons/si'
import { DiAndroid } from 'react-icons/di'
import LargeCompanyContainer from '../../../components/pagesComponents/MainPage/LargeCompanyContainer'
import spectar from '../../../assets/img/companies/spectar.svg'
import walmart from '../../../assets/img/companies/walmart.svg'
import TextSpan from '../../../components/pagesComponents/MainPage/TextSpan'
import Button from '../../../components/common/Button'
import arrowRight from '../../../assets/img/arr-right.svg'
import number from '../../../assets/img/common/number.svg'
import Filter from '../../../components/common/Filter'

const MobileDevelopment: FC = () => {
  const webDevelopmenList = [
    'Business analysis',
    'App development',
    'App Store submission',
    'Google Store submission',
    'Application support',
  ]

  const techIcons = [
    <FaApple />,
    <DiAndroid />,
    <SiSwift />,
    <SiKotlin />,
    <FaAppStoreIos />,
    <FaGooglePlay />,
    <SiIntellijidea />,
    <SiAmazon />,
  ]

  return (
    <Layouts>
      <PageHeader
        offset={-100}
        id="services"
        title="Mobile development"
        subtitle="Discover"
        bgType="dots"
      />
      <section className="what-we-do">
        <Filter />
        <div className="web-development__wrapper">
          <div id="services" className="web-development__body">
            <SectionTitle title="Services" type="main" />
            <TechList
              techList={webDevelopmenList}
              hide="hide"
              borderType="right"
            />
          </div>
          <div className="web-development__technologies">
            <TechIcon iconsArray={techIcons} type="primary" />
          </div>
        </div>
        <SectionTitle title="Relevant projects" type="main" />
        <div className="what-we-do__companies">
          <div className="what-we-do__company">
            <img src={number} alt="" />
          </div>
          <div className="what-we-do__company">
            <div className="tech__info">
              <SectionTitle
                type={'relevant'}
                className="title"
                title={
                  'Cannot find relevant technology stack or similar project from your industry?'
                }
              />
              <p className="tech__desc">
                It must be our rigorous
                <span className="tech__protection">
                  intellectual property protection effort.
                </span>
                Just tell us what you need and get that information in less than
                24 hours.
              </p>
              <Button icon={arrowRight} type={'primary'} desc={'Tell us'}>
                Tell us
              </Button>
            </div>
          </div>
        </div>
        <SectionTitle title="Resources" type="main" />
        <div className="what-we-do__companies-wrapper">
          <div className="what-we-do__companies">
            <div className="what-we-do__company">
              <LargeCompanyContainer
                typeBG="bg-servers"
                img={spectar}
                description="Building a pioneering AR product for construction"
                label="CASE STUDY"
                hashtags="Microservice architecture, Microsoft HoloLens 2, REST API, Web development, +13 more"
              />
            </div>
            <div className="what-we-do__company">
              <LargeCompanyContainer
                typeBG="bg-rooms"
                img={walmart}
                description="Increasing Walmart weekly ads conversion with a custom web app for Ad Tech company"
                label="CASE STUDY"
                hashtags="Amazon, Retail & E-commerce, React, Web development, +13 more"
                logoPos="mb-more"
              />
            </div>
          </div>
          <Button
            subtype="web-dev"
            icon={arrowRight}
            type="primary"
            desc="Read more on the blog"
            subtype="large"
          >
            Read more on the blog
          </Button>
        </div>
        <TextSpan type="large-screen" title="Shall we chat quickly?">
          Even a 5-minute intro call could potentially save you countless hours
          of endless back-and-forth emails.
        </TextSpan>
      </section>
    </Layouts>
  )
}

export default MobileDevelopment
