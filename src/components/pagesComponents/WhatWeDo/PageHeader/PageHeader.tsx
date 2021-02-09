import React, { FC } from 'react'
import './PageHeader.scss'
import Filter from '../../../common/Filter'
import Button from '../../../common/Button'
import { Link } from 'react-scroll'
import arrowDown from '../../../../assets/img/arr-down.png'
import wwdDots from '../../../../assets/img/common/wwd-dots.svg'
import dotsL from '../../../../assets/img/dots-large.svg'

interface IPageHeader {
  title: string
  subtitle: string
  id: string
  bgType: string
  offset: string
}

const PageHeader: FC = (props: IPageHeader) => {
  return (
    <div data-testid="page-header" className="page-header">
      {/* <Filter /> */}
      <div
        className={`page-header__wrapper page-header__wrapper--${props.bgType}`}
      >
        <div className="page-header__container">
          <div className="page-header__img-left" />
          <div className="page-header__title">
            <h2 className="title title--small">{props.subtitle}</h2>
            <h1 className="title title--section title--brackets">
              {props.title}
            </h1>
          </div>
          <div className="page-header__img-right" />
        </div>
        <div className="page-header__button-wrapper">
          <Link to={props.id} smooth={true} offset={props.offset}>
            <Button icon={arrowDown} type="primary" desc="Show how">
              Show how
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
