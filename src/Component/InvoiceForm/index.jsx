import React from 'react';
import { useHistory } from 'react-router';
import { Select, Form, Segment ,Input, Button} from 'semantic-ui-react';

export default function InvoiceForm() {
    const history = useHistory();
    const options=[
        {key:1, text:"Pending", value:"Pending"},
        {key:2, text:"Paid", value:"Paid"},
        {key:3, text:"Overdue", value:"Overdue"},
        {key:3, text:"Canceled", value:"Canceled"}
    ]
    return(
    <Segment basic>
        <Form size="small">
        <Form.Field label='Client:' control={Input} placeholder="Full Name"/>
        <Form.Group widths="2" >
            <Form.Field >
                <label>Status:</label>
                <Select options={options} defaultValue="Pending"></Select>
            </Form.Field>
            <Form.Field >
                <label>Due:</label>
                <Input type="date" placeholder="Due date"></Input>
            </Form.Field>
        </Form.Group>
        <Button primary>Save</Button>
        <Button onClick={()=>{history.goBack()}} >Cancel</Button>
        </Form>
    </Segment>);
}