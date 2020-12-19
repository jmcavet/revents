import React from 'react';
import EventDashboard from './EventDashboard';
import EventListItem from './EventListItem';

const EventList = ({ events }) => {
    return (
        <>
            {events.map(event => (
                <EventListItem key={event.id} event={event} />
            ))}
        </>
    )
};

export default EventList;