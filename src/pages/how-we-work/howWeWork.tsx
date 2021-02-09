import React, { FC } from 'react'
import VideoItem from '../../components/pagesComponents/HowWeWork/VideoItem'
import SectionHeader from '../../components/pagesComponents/HowWeWork/SectionHeader'
import Layouts from '../../components/layout'
import triangleRight from '../../assets/img/triangle-right.svg'
import bike from '../../assets/img/howWeWork/bike.svg'
import protection from '../../assets/img/howWeWork/protection.svg'
import './howWeWork.scss'
import TextItem from '../../components/pagesComponents/HowWeWork/TextItem'
import TextDescription from '../../components/common/TextDescription'

const howWeWork: FC = () => {
  return (
    <Layouts>
      <section className="how-we-work">
        <SectionHeader
          subtitleTextF="Create."
          subtitleTextB="Protect."
          subtitleTextS="Deliver."
          titleText="How We Work"
          large="large"
          typeValue="section"
        />
        <TextDescription>
          We adore our clients. We want our cooperation to be smooth, seamless
          and their intellectual property rigorously protected from day one.
          There are two client-approved cooperation models and our
          federal-tested intellectual property protection system to meet that.
          Your much-needed peace of mind is the foundation of our cooperation.
        </TextDescription>
        <div className="how-we-work__overflow">
          <div className="how-we-work__video">
            <div className="how-we-work__video-wrapper">
              <VideoItem
                buttonType="circle"
                buttonName="Watch now"
                buttonDesc="Watch now"
                buttonIcon={triangleRight}
                num="1"
                label="Good talk first"
                size="medium"
                labelType="medium"
                position="center"
              />
              <VideoItem
                buttonType="circle"
                buttonName="Watch now"
                buttonDesc="Watch now"
                buttonIcon={triangleRight}
                num="2"
                label="Thorough choice"
                size="medium"
                labelType="medium"
                position="center"
              />
              <VideoItem
                buttonType="circle"
                buttonName="Watch now"
                buttonDesc="Watch now"
                buttonIcon={triangleRight}
                num="3"
                label="Careful implementation"
                size="medium"
                labelType="medium"
                position="center"
              />
            </div>
          </div>
        </div>
        <TextItem
          image={bike}
          itemDesc={
            'You may choose between two engagement models: on-demand team extension or fully managed IT services. Both of them are coming with guaranteed premium perks from Blackbird. Find out which one works for you with our interactive guide.'
          }
          itemTitle="Choose a cooperation model that suits you"
          link="/how-we-work/working-together/"
          size="small"
        />
        <TextItem
          image={protection}
          itemDesc={
            'Being your off-site team means more attention to intellectual property and overall information security. That is why we crafted our own multi-layered intellectual property protection system out of proven industry standards, approaches, government IP policies  and own experience.'
          }
          itemTitle="Enjoy federal-graded intellectual property protection"
          link="/how-we-work/intellectual-property/"
          size="small"
        />
      </section>
    </Layouts>
  )
}

export default howWeWork
