import React, {FC} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";

const EventForm: FC = () => {
    return (
        <Form>
            <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required('Please input your event')]}
            >
                <Input/>
            </Form.Item>
            <Form.Item label="Event Date"
                       name="date"
                       rules={[rules.required('Please input date')]}
            >
                <DatePicker/>
            </Form.Item>
            <Form.Item>
                <Select
                    options={[
                        {value: 'jack', label: 'Jack'},
                        {value: 'lucy', label: 'Lucy'},
                        {value: 'Yiminghe', label: 'yiminghe'},
                        {value: 'disabled', label: 'Disabled', disabled: true},
                    ]}
                />
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;
