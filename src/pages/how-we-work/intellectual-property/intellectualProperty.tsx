import React, { FC, Fragment } from 'react'
import Header from '../../../components/common/Header'
import Footer from '../../../components/common/Footer'
import Button from '../../../components/common/Button'
import SectionHeader from '../../../components/pagesComponents/HowWeWork/SectionHeader'
import arrowDown from '../../../assets/img/arr-down.png'
import TextImage from '../../../components/pagesComponents/WorkingTogether/TextImage'
import letter from '../../../assets/img/intellectualProperty/letter.svg'
import security from '../../../assets/img/intellectualProperty/security.svg'
import whiteBoard from '../../../assets/img/intellectualProperty/whitboard.png'
import fleshka from '../../../assets/img/intellectualProperty/flashdrive.png'
import { Link } from 'react-scroll'
import './intellectualProperty.scss'
import Accordion from '../../../components/pagesComponents/IntellectualProperty/Accordion'
import TextDescription from '../../../components/common/TextDescription'
import SectionTitle from '../../../components/common/SectionTitle'

const intellectualProperty: FC = () => {
  return (
    <Fragment>
      <Header path="Your IP Protection" />
      <div className="intellectual-property">
        <SectionHeader
          typeValue="section"
          subtitleTextF="Protecting Your"
          titleText="Intellectual Property"
          large="large"
        />
        <TextDescription>
          Regardless of how you manage your intellectual property (IP next), we
          will make sure that you are protected at max. As your off-site team,
          we created and validated our own security measures and also mastered
          proven industry standards. We will make sure that your lawyers have
          all the weaponry to protect you from patent trolls and competitors in
          or out of your country.
        </TextDescription>
        <div className="page-header__button-wrapper">
          <Link to="ip" smooth={true} offset={-130}>
            <Button
              icon={arrowDown}
              type="primary"
              desc="Show how"
              mobile="mobile"
            >
              Show how
            </Button>
          </Link>
        </div>
      </div>
      <div className="intellectual-property__text-wrapper">
        <div className="intellectual-property__text">
          <SectionTitle
            type="lighter"
            title="More than just local IP Due Diligence process"
          />

          <TextDescription subtype="mb">
            Your NDA is backed up by our localized NDA version that is
            specifically tailored to local laws of any involved parties and
            subcontractors from our side.
          </TextDescription>

          <TextDescription type="small" subtype="mb">
            Each of your extension team members signs it before he or she starts
            working with any sensitive information you share. You will receive
            localized NDA and its notarized translation right to your post box.
          </TextDescription>

          <TextDescription type="small">
            However, we are not stopping there. We will also provide you with a
            proper Assignment of Intellectual Property Rights agreement and
            Certificate of Originality for all the product features we work on.
            So you could be the first who files a patent application (if you
            decide to).
          </TextDescription>
        </div>
        <TextImage
          id="ip"
          large="large"
          size="small"
          image={letter}
          typeValue="lighter"
          //   relative="margin"
          position="centered"
        />
      </div>

      <div className="intellectual-property__wrapper">
        <div className="intellectual-property__text intellectual-property__text--large">
          <SectionTitle type="lighter" title="Compliance" />
          <TextDescription>
            Here we will go through both compliances we follow and ones we will
            help you to meet. As a result, you are keeping under control all
            government regulations. Plus, people who use your SaaS product or
            service are fully protected.
          </TextDescription>
        </div>
      </div>
      <Accordion />
      <div className="intellectual-property__body">
        <div className="intellectual-property__text-wrapper">
          <div className="intellectual-property__text">
            <SectionTitle type="lighter" title="Organization security" />
            <TextDescription>
              We assertively follow all the above compliances and standards.
              Nevertheless, security is not a one time job, it’s a continuous
              effort to regularly skill up employees, carefully manage IT
              assets, and to contain top operational security years around.
            </TextDescription>
          </div>
          <TextImage
            large="large"
            typeValue="lighter"
            image={security}
            position="centered"
          />
        </div>

        <div className="intellectual-property__text-wrapper">
          <TextImage
            large="large"
            size="small"
            typeValue="lighter"
            image={whiteBoard}
            position="centered"
            shadow="shadow"
          />
          <div className="intellectual-property__text">
            <SectionTitle type="primary" title="Continuous security training" />
            <TextDescription type="small" subtype="mb">
              We believe that information security begins with educated and
              well-trained people. None of the information security policies
              will ever properly work without them.
            </TextDescription>
            <TextDescription type="small">
              It is required to attend monthly security meetups and annual
              security training for all of our current and new employees.
              However, our developers have to take even more of such training
              programs. We involve **ORGANIZATION X** to regularly skill them
              up. People who work with your intellectual property must know how
              to protect it.
            </TextDescription>
          </div>
        </div>

        <div className="intellectual-property__text-wrapper">
          <div className="intellectual-property__text intellectual-property__text--margin">
            <SectionTitle
              type="primary"
              title="IT asset management and operational security"
            />
            <TextDescription type="small" subtype="mb">
              Blackbird is focused on keeping control of its IT inventory. We
              established and automatically up-to-date list of our hardware,
              software, produced and provided data, and other assets like our
              networks, employee devices, and more. Even such details as
              connected removable media, USB port activities can be tracked on
              demand.
            </TextDescription>
            <TextDescription type="small">
              For instance, according to one of our information security
              policies (10 policies in total) all our employees and
              subcontractors are obligated to use full-disk encryption
              solutions. The vast majority of our employees are using OS native
              solutions as Microsoft BitLocker and Apple FileVault. All the
              Recovery keys and passwords are under the control of our internal
              security team. Plus, a centralized device management solution
              allows us remotely delete any information on a employees laptops.
              As a result, a lost laptop will never be a threat to your
              intellectual property.
            </TextDescription>
          </div>
          <TextImage
            large="large"
            size="small"
            typeValue="lighter"
            image={fleshka}
            position="centered"
            shadow="shadow"
          />
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default intellectualProperty
