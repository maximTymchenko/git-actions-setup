import React from 'react';
import ListItem from '../ListItem';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders elem correctly', () => {
    const { getByTestId } = render(
        <ListItem margin="mt">
            In the early beginning of our cooperation with the client, Blackbird worked on multiple
            microservices where we used Docker and Kubernetees for deployment. The communication
            between the microservices was done via RabbitMQ.
        </ListItem>,
    );
    expect(getByTestId('list-item')).toBeTruthy();
});

it('renders without unexpected changes', () => {
    const tree = renderer
        .create(
            <ListItem margin="mt">
                In the early beginning of our cooperation with the client, Blackbird worked on
                multiple microservices where we used Docker and Kubernetees for deployment. The
                communication between the microservices was done via RabbitMQ.
            </ListItem>,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
