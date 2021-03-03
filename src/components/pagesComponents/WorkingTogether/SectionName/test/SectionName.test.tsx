import React from 'react';
import SectionName from '../SectionName';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Contract from '.../../../../../assets/img/workingTogether/contract.svg';

it('renders elem correctly', () => {
    const { getByTestId } = render(
        <SectionName
            mainTitle="Recruitment & screening"
            textDescFirst="You probably already confused by trying to compare all the recruitment
      processes of all potential outsourcing partners. From a freelance
      recruiter to a large outsourcer, they all claim that their recruitment
      process is the most unique."
            textDescSecond="Meanwhile, it's fair to say that the majority of market players have a
      decent screening process for hard skills. However, they actually fail at
      developing a business founder or an ownership mentality in their
      employees’ heads."
            textDescThird="The founding team of Blackbird came from classical outsourcing with all
      its cons and built our company around principles of an ownership
      mentality instead. We are engineers and technicians who do not
      appreciate stretching a project for longer than it really needs to be
      successfully done."
            image={Contract}
            imageID="recruitment"
        ></SectionName>,
    );
    expect(getByTestId('section-name')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(
            <SectionName
                mainTitle="Recruitment & screening"
                textDescFirst="You probably already confused by trying to compare all the recruitment
          processes of all potential outsourcing partners. From a freelance
          recruiter to a large outsourcer, they all claim that their recruitment
          process is the most unique."
                textDescSecond="Meanwhile, it's fair to say that the majority of market players have a
          decent screening process for hard skills. However, they actually fail at
          developing a business founder or an ownership mentality in their
          employees’ heads."
                textDescThird="The founding team of Blackbird came from classical outsourcing with all
          its cons and built our company around principles of an ownership
          mentality instead. We are engineers and technicians who do not
          appreciate stretching a project for longer than it really needs to be
          successfully done."
                image={Contract}
                imageID="recruitment"
            ></SectionName>,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
