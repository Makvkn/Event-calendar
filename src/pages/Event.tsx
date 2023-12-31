import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Layout, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

const Event: FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const {fetchGuests, createEvent, fetchEvents} = useActions()
    const {guests, events} = useTypedSelector(state => state.event);
    const {user} = useTypedSelector(state => state.auth);

    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, []);

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const addNewEvent = (event: IEvent) => {
        setIsModalOpen(false);
        createEvent(event);
    }

    return (
        <Layout>
            <EventCalendar events={events}/>
            <Row justify="center">
                <Button onClick={() => setIsModalOpen(true)}>Add Event</Button>
            </Row>
            <Modal
                title="Basic Modal"
                footer={null}
                open={isModalOpen}
                onCancel={handleCancel}>
                <EventForm
                    guests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};

export default Event;
