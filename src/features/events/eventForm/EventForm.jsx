import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import cuid from 'cuid';

const EventForm = ({ setFormOpen, setEvents, createEvent, selectedEvent, updateEvent }) => {
    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }

    const [values, setValues] = useState(initialValues);

    const handleFormSubmit = () => {
        selectedEvent ? updateEvent({ ...selectedEvent, ...values })
            : createEvent({
                ...values,
                id: cuid(),
                hostedBy: 'Bob',
                attendees: [],
                hostPhotoURL: '/assets/user.png'
            });
        setFormOpen(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    return (
        <Segment clearing>
            <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input
                        name='title'
                        value={values.title}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        placeholder='Event title'
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        name='category'
                        value={values.category}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        placeholder='Category'
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        name='description'
                        value={values.description}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        placeholder='Description'
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        name='city'
                        value={values.city}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        placeholder='City'
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        name='venue'
                        value={values.venue}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        placeholder='Venue'
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        name='date'
                        value={values.date}
                        onChange={(e) => handleInputChange(e)}
                        type="date"
                        placeholder='Date'
                    />
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button
                    onClick={() => setFormOpen(false)}
                    type='submit'
                    floated='right'
                    content='Cancel'
                />
            </Form>
        </Segment>

    )
}

export default EventForm;