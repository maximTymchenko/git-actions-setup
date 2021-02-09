import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import './Nav.scss'
import { INavLinks } from '../PrimaryNav'
import Button from '../Button'
import arrLeft from '../../../assets/img/arr-left.png'

const Nav = ({ links, path, type }) => {
  const [navLinks, setNavLinks] = useState<INavLinks>(links)

  const toggleNavClass = (index: number) => {
    setNavLinks({ ...navLinks, activeLink: navLinks.links[index] })
  }

  const toggleActiveClass = (index: number) => {
    if (navLinks.links[index] === navLinks.activeLink) {
      return 'nav__link nav__link--active'
    } else {
      return 'nav__link'
    }
  }

  //   const linkRef = useRef()

  //   const [linkState, setLinkState] = useState<boolean>(false)

  //   const getElemClass = () => {
  //     const linkClasses = linkRef.current
  //     // console.log();

  //     if (linkClasses.classList.contains('active__border--style')) {
  //       setLinkState(true)
  //       console.log('YES')
  //     }
  //   }

  //   console.log(linkRef)

  return (
    <ul className={`nav nav--${type}`}>
      <div className="nav__container">
        {/* <Button icon={arrLeft} type="apply">
                    Back
                </Button> */}
        {navLinks.links.map((item, index) => (
          <Link
            // ref={linkRef}
            data-testid="nav"
            activeClassName="active__border--style"
            to={`${item.page}`}
            className="link__margin  active__border nav__link"
            state={{ choice: path }}
            // onClick={getElemClass}
          >
            <li
              onClick={() => {
                toggleNavClass(index)
              }}
              className={toggleActiveClass(index)}
              key={index}
            >
              {item.title}
            </li>

            {/* {item.title} */}
          </Link>
        ))}
      </div>
    </ul>
  )
}

export default Nav
