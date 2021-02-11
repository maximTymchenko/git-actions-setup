import React, { Component } from 'react'
import FilterList from '../FilterList'
import Button from '../Button'
import reset from '../../../assets/img/common/reset.svg'
import arrRight from '../../../assets/img/arr-right.svg'
import classNames from 'classnames'
import { BsFilter } from 'react-icons/bs'
import Nav from '../Nav'
import './Filter.scss'

import FilterNav from '../FilterNav'

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

class NewFilter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showFilter: false,
      dotsType: false,
      platformsList: [
        { id: 1, value: 'Web', isChecked: false },
        { id: 2, value: 'Ios', isChecked: false },
        { id: 3, value: 'Android', isChecked: false },
        { id: 4, value: 'Analytics', isChecked: false },
        { id: 5, value: 'Quality control', isChecked: false },
        { id: 6, value: 'Mobile development', isChecked: false },
      ],
      cloudList: [
        { id: 1, value: 'Amazon AWS', isChecked: false },
        { id: 2, value: 'Google', isChecked: false },
        { id: 3, value: 'Azure', isChecked: false },
        { id: 4, value: 'Akamai', isChecked: false },
      ],
      databaseList: [
        { id: 1, value: 'PostgreSQL', isChecked: false },
        { id: 2, value: 'NoSQL', isChecked: false },
        { id: 3, value: 'DynamoDb', isChecked: false },
      ],
      frameworksList: [
        { id: 1, value: 'Axon', isChecked: false },
        { id: 2, value: 'Kotlin', isChecked: false },
        { id: 3, value: 'Objective-C', isChecked: false },
        { id: 4, value: 'Swift', isChecked: false },
        { id: 5, value: 'PHP', isChecked: false },
        { id: 6, value: 'C#', isChecked: false },
        { id: 7, value: 'C', isChecked: false },
        { id: 8, value: 'Python', isChecked: false },
        { id: 9, value: 'HTML5', isChecked: false },
        { id: 10, value: 'Ruby on Rails', isChecked: false },
        { id: 11, value: 'Angular', isChecked: false },
        { id: 12, value: 'Node.js', isChecked: false },
        { id: 13, value: 'React', isChecked: false },
        { id: 14, value: 'JavaScript', isChecked: false },
        { id: 15, value: 'Java', isChecked: false },
        { id: 16, value: 'Java11', isChecked: false },
        { id: 17, value: 'Typescript', isChecked: false },
        { id: 18, value: 'SpringBoot', isChecked: false },
      ],
      solutionsList: [
        { id: 1, value: 'Redux Thunk', isChecked: false },
        { id: 2, value: 'Redux Toolkit', isChecked: false },
        { id: 3, value: 'Apollo Graphql', isChecked: false },
        { id: 4, value: 'Hibernate', isChecked: false },
        { id: 5, value: 'Twilio API', isChecked: false },
        { id: 6, value: 'Auth0 API', isChecked: false },
      ],
    }
  }

  handleCheckChieldOPlatformElement = (event) => {
    let platformsList = this.state.platformsList
    platformsList.forEach((platforms) => {
      if (platforms.value === event.target.value)
        platforms.isChecked = event.target.checked
    })
    this.setState({ platformsList: platformsList })
  }

  handleCheckChieldCloundElement = (event) => {
    let cloudList = this.state.cloudList
    cloudList.forEach((clouds) => {
      if (clouds.value === event.target.value)
        clouds.isChecked = event.target.checked
    })
    this.setState({ cloudList: cloudList })
  }

  handleCheckChieldDBElement = (event) => {
    let databaseList = this.state.databaseList
    databaseList.forEach((db) => {
      if (db.value === event.target.value) db.isChecked = event.target.checked
    })
    this.setState({ databaseList: databaseList })
  }

  handleCheckChieldFrameworksElement = (event) => {
    let frameworksList = this.state.frameworksList
    frameworksList.forEach((frameworks) => {
      if (frameworks.value === event.target.value)
        frameworks.isChecked = event.target.checked
    })
    this.setState({ frameworksList: frameworksList })
  }

  handleCheckChieldSolutionsElement = (event) => {
    let solutionsList = this.state.solutionsList
    solutionsList.forEach((solution) => {
      if (solution.value === event.target.value)
        solution.isChecked = event.target.checked
    })
    this.setState({ solutionsList: solutionsList })
  }

  toogleFilter = () => {
    if (this.state.showFilter) {
      this.setState({ showFilter: false })
    } else {
      this.setState({ showFilter: true })
      this.setState({ dotsType: false })
    }
  }

  toggleDots = () => {
    if (this.state.dotsType) {
      //   this.setState({ showFilter: false })
      this.setState({ dotsType: false })
    } else {
      this.setState({ dotsType: true })
      this.setState({ showFilter: false })
    }
  }

  handlePlatformListChecked = (event: any): void => {
    let platformsList = this.state.platformsList
    platformsList.forEach(
      (platforms) => (platforms.isChecked = event.target.checked)
    )
    this.setState({ platformsList: platformsList })
  }

  handleCloudsListChecked = (event: any): void => {
    let cloudList = this.state.cloudList
    cloudList.forEach((clouds) => (clouds.isChecked = event.target.checked))
    this.setState({ cloudList: cloudList })
  }

  handleDatabaseListChecked = (event: any): void => {
    let databaseList = this.state.databaseList
    databaseList.forEach((db) => (db.isChecked = event.target.checked))
    this.setState({ databaseList: databaseList })
  }

  handleFrameworksListChecked = (event: any): void => {
    let frameworksList = this.state.frameworksList
    frameworksList.forEach((frame) => (frame.isChecked = event.target.checked))
    this.setState({ frameworksList: frameworksList })
  }

  handleSolutionsListChecked = (event: any): void => {
    let solutionsList = this.state.solutionsList
    solutionsList.forEach(
      (solution) => (solution.isChecked = event.target.checked)
    )
    this.setState({ solutionsList: solutionsList })
  }

  handleAllChecked = (event) => {
    this.handlePlatformListChecked(event)
    this.handleCloudsListChecked(event)
    this.handleDatabaseListChecked(event)
    this.handleFrameworksListChecked(event)
    this.handleSolutionsListChecked(event)
  }

  render() {
    return (
      <div>
        <div data-testid="filter" className="filter">
          <div className="filter__wrapper">
            <Nav type="filter" links={menuLinks} linkType="link__large" />
            <div className="filter__shell">
              <span
                onClick={this.toggleDots}
                className={classNames('filter__dots', {
                  'filter__dots--show': this.state.dotsType,
                })}
              >
                ...
              </span>
              <span className="filter__line"></span>
              <div className="filter__body" onClick={this.toogleFilter}>
                <BsFilter
                  className={classNames('filter__icon', {
                    'filter__icon--show': this.state.showFilter,
                  })}
                />
                <div
                  className={classNames('filter__label', {
                    'filter__label--show': this.state.showFilter,
                  })}
                >
                  Filters
                </div>
              </div>
              <div
                className={classNames('filter__triangle', {
                  'filter__triangle--rotated': this.state.showFilter,
                })}
              ></div>
            </div>
          </div>
        </div>
        {this.state.dotsType && <FilterNav />}
        {this.state.showFilter && (
          <div className="filter__lists">
            <div className="filter__container">
              <div className="filter__list">
                <span className="filter-list__title">Platforms</span>

                {this.state.platformsList.map((platforms) => {
                  return (
                    <FilterList
                      filterListTitle="Platforms"
                      handleCheckChieldElement={
                        this.handleCheckChieldOPlatformElement
                      }
                      {...platforms}
                    />
                  )
                })}
              </div>
              <div className="filter__list">
                <span className="filter-list__title">Cloud services</span>

                {this.state.cloudList.map((cloud) => {
                  return (
                    <FilterList
                      handleCheckChieldElement={
                        this.handleCheckChieldCloundElement
                      }
                      {...cloud}
                    />
                  )
                })}
              </div>
              <div className="filter__list">
                <span className="filter-list__title">Database management</span>

                {this.state.databaseList.map((database) => {
                  return (
                    <FilterList
                      handleCheckChieldElement={this.handleCheckChieldDBElement}
                      {...database}
                    />
                  )
                })}
              </div>
              <div className="filter__list">
                <span className="filter-list__title">
                  Frameworks & languages
                </span>

                {this.state.frameworksList.map((frameworks) => {
                  return (
                    <FilterList
                      handleCheckChieldElement={
                        this.handleCheckChieldFrameworksElement
                      }
                      {...frameworks}
                    />
                  )
                })}
              </div>
              <div className="filter__list">
                <span className="filter-list__title">Third Party Solution</span>

                {this.state.solutionsList.map((olutions) => {
                  return (
                    <FilterList
                      handleCheckChieldElement={
                        this.handleCheckChieldSolutionsElement
                      }
                      {...olutions}
                    />
                  )
                })}
              </div>
            </div>
            <div className="filter__buttons">
              <div onClick={this.handleAllChecked}>
                <Button icon={reset} type="clear">
                  Clear all
                </Button>
              </div>

              <div onClick={this.toogleFilter}>
                <Button icon={arrRight} type="apply">
                  Apply
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default NewFilter
