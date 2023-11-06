import React, {FC, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";

const Event:FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <EventCalendar events={[]} />
            <Row justify="center">
                <Button onClick={() => setIsModalOpen(true)}>Add Event</Button>
            </Row>
            <Modal
                title="Basic Modal"
                footer={null}
                open={isModalOpen}
                onCancel={handleCancel}>
                    <EventForm />

            </Modal>
        </div>
    );
};

export default Event;
