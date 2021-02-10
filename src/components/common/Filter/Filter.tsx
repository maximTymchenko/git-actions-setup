import React, { FC, useState, Fragment } from 'react'
import { BsFilter } from 'react-icons/bs'
import FilterList from '../FilterList'
import classNames from 'classnames'
import Nav from '../Nav'
import './Filter.scss'
import Button from '../Button'
import reset from '../../../assets/img/common/reset.svg'
import arrRight from '../../../assets/img/arr-right.svg'
import PrimaryNav from '../PrimaryNav'

const Filter: FC = () => {
  interface IList {
    lists: [
      {
        id: number
        title: string
      }
    ]
  }

  const platformsList: IList = {
    lists: [
      { id: 1, title: 'Web' },
      { id: 2, title: 'Ios' },
      { id: 3, title: 'Android' },
      { id: 4, title: 'Analytics' },
      { id: 5, title: 'Quality control' },
      { id: 6, title: 'Mobile development' },
    ],
  }

  const cloudList: IList = {
    lists: [
      { id: 1, title: 'Amazon AWS' },
      { id: 2, title: 'Google' },
      { id: 3, title: 'Azure' },
      { id: 4, title: 'Akamai' },
    ],
  }

  const databaseList: IList = {
    lists: [
      { id: 1, title: 'PostgreSQL' },
      { id: 2, title: 'NoSQL' },
      { id: 3, title: 'DynamoDb' },
    ],
  }

  const frameworksList: IList = {
    lists: [
      { id: 1, title: 'Axon' },
      { id: 2, title: 'Kotlin' },
      { id: 3, title: 'Objective-C' },
      { id: 4, title: 'Swift' },
      { id: 5, title: 'PHP' },
      { id: 6, title: 'C#' },
      { id: 7, title: 'C' },
      { id: 8, title: 'Python' },
      { id: 9, title: 'HTML5' },
      { id: 10, title: 'Ruby on Rails' },
      { id: 11, title: 'Angular' },
      { id: 12, title: 'Node.js' },
      { id: 13, title: 'React' },
      { id: 14, title: 'JavaScript' },
      { id: 15, title: 'Java' },
      { id: 16, title: 'Java11' },
      { id: 17, title: 'Typescript' },
      { id: 18, title: 'SpringBoot' },
    ],
  }

  const solutionsList: IList = {
    lists: [
      { id: 1, title: 'Redux Thunk' },
      { id: 2, title: 'Redux Toolkit' },
      { id: 3, title: 'Apollo Graphql' },
      { id: 4, title: 'Hibernate' },
      { id: 5, title: 'Twilio API' },
      { id: 6, title: 'Auth0 API' },
    ],
  }

  // toggle filter list
  const [showFilter, setShowFilter] = useState<boolean>(false)
  const toogleFilter = () => {
    setShowFilter(!showFilter)
    setDotsType(false)
  }
  const [dotsType, setDotsType] = useState<boolean>(false)

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
      {
        id: 7,
        title: 'Mobile development',
        page: '/what-we-do/mobile-development/',
      },
    ],
  }

  //! primary nav setup

  interface INavLinks {
    activeLink: null | any
    links: [
      {
        id: number
        title: string
        page?: string | undefined
      }
    ]
  }

  interface INavArr {
    activeLink?: null
    links: {
      id: number
      array: INavLinks
    }[]
  }

  interface ILanguage {
    activeLink: null
    links: {
      id: number
      title: string
    }[]
  }

  const language: ILanguage = {
    activeLink: null,
    links: [
      { id: 1, title: '' },
      { id: 2, title: '' },
    ],
  }

  const [navLinks, setNavLinks] = useState<INavLinks>({
    activeLink: null,
    links: [
      { id: 1, title: 'Services' },
      { id: 2, title: 'Industries' },
      { id: 3, title: 'Expertise' },
      { id: 4, title: 'Engagement' },
    ],
  })

  const menuLinksServices: INavLinks = {
    activeLink: null,
    links: [
      { id: 1, title: 'Web development' },
      { id: 2, title: 'Cloud services' },
      { id: 3, title: 'Research' },
      { id: 4, title: 'Analytics' },
      { id: 5, title: 'Quality control' },
      { id: 6, title: 'Mobile development' },
    ],
  }

  const menuLinksIndustries: INavLinks = {
    activeLink: null,
    links: [
      { id: 1, title: 'Retail & E-commerce' },
      { id: 2, title: 'Construction' },
      { id: 3, title: 'Finance' },
      { id: 4, title: 'Media' },
    ],
  }

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
  }

  const menuLinksEngagement: INavLinks = {
    activeLink: null,
    links: [
      { id: 1, title: 'On-demand team extension' },
      { id: 2, title: 'Fully managed IT services' },
    ],
  }

  const [navLinksArray, setNavLinksArray] = useState<INavArr>({
    activeLink: null,
    links: [
      { id: 0, array: menuLinksServices },
      { id: 1, array: menuLinksIndustries },
      { id: 2, array: menuLinksExpertise },
      { id: 3, array: menuLinksEngagement },
    ],
  })

  return (
    <Fragment>
      <div data-testid="filter" className="filter">
        <div className="filter__wrapper">
          <Nav type="filter" links={menuLinks} linkType="link__large" />
          <div className="filter__shell">
            <span
              onClick={() => {
                setDotsType(!dotsType)
                setShowFilter(false)
              }}
              className={classNames('filter__dots', {
                'filter__dots--show': dotsType,
              })}
            >
              ...
            </span>
            <span className="filter__line"></span>
            <div className="filter__body" onClick={() => toogleFilter()}>
              <BsFilter
                className={classNames('filter__icon', {
                  'filter__icon--show': showFilter,
                })}
              />
              <div
                className={classNames('filter__label', {
                  'filter__label--show': showFilter,
                })}
              >
                Filters
              </div>
            </div>
            <div
              className={classNames('filter__triangle', {
                'filter__triangle--rotated': showFilter,
              })}
            ></div>
          </div>
        </div>
      </div>
      {dotsType && (
        <PrimaryNav
          navLinks={navLinks}
          navLinksArray={navLinksArray}
          language={language}
          type="filter"
        />
      )}
      {showFilter && (
        <div className="filter__lists">
          <div className="filter__container">
            <FilterList
              filterLists={platformsList}
              filterListTitle="Platforms"
            />
            <FilterList
              filterLists={cloudList}
              filterListTitle="Cloud services"
            />
            <FilterList
              filterLists={databaseList}
              filterListTitle="Database management"
            />
            <FilterList
              filterLists={frameworksList}
              filterListTitle="Frameworks & languages"
            />
            <FilterList
              filterLists={solutionsList}
              filterListTitle="Third Party Solution"
            />
          </div>
          <div className="filter__buttons">
            <Button icon={reset} type="clear">
              Clear all
            </Button>
            <div
              onClick={() => {
                toogleFilter()
              }}
            >
              <Button icon={arrRight} type="apply">
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Filter
