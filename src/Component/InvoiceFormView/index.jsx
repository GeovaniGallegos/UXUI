import React from 'react';
import { Button, Container, Grid , Message, Segment, Table,Header} from 'semantic-ui-react';
import InvoiceForm from '../InvoiceForm';

export default function InvoiceFormView() {
    return(
    <Container>
      <Segment basic >  <Header size='large'>Register</Header></Segment>
        <Grid  verticalAlign ="top">
            <Grid.Row stretched>
            <Grid.Column  width="11">
                <InvoiceForm></InvoiceForm>
            </Grid.Column>
            <Grid.Column  textAlign="center" width="5">
               <Segment   textAlign='center' basic  > 
               <Message size="massive" success Style={"margin-top:20px"}>
                   <Message.Header>Total</Message.Header>
                   <Message.Content>9990 $us</Message.Content>
                </Message>
               </Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Table padded='very' textAlign='center'>
        <Table.Header >
            <Table.Row >
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Unit Price ($)</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Total ($)</Table.HeaderCell>
            </Table.Row>
       </Table.Header>
       <Table.Body >
            <Table.Row>
                <Table.Cell>FAKE Product 1 </Table.Cell><Table.Cell>100</Table.Cell><Table.Cell>2</Table.Cell><Table.Cell>200</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>FAKE Product 2 </Table.Cell><Table.Cell>500</Table.Cell><Table.Cell>1</Table.Cell><Table.Cell>500</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>FAKE Product 3 </Table.Cell><Table.Cell>50</Table.Cell><Table.Cell>1</Table.Cell><Table.Cell>50</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>FAKE Product 4 </Table.Cell><Table.Cell>800</Table.Cell><Table.Cell>3</Table.Cell><Table.Cell>2400</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>FAKE Product 5 </Table.Cell><Table.Cell>1250</Table.Cell><Table.Cell>4</Table.Cell><Table.Cell>5000</Table.Cell>
            </Table.Row>
       </Table.Body>
       <Table.Footer >
       <Table.Row positive >
           <Table.Cell></Table.Cell>
           <Table.Cell></Table.Cell>
           <Table.Cell >Sub total</Table.Cell>
           <Table.Cell><Header size="small">8150</Header></Table.Cell>
       </Table.Row>
       <Table.Row negative >
           <Table.Cell></Table.Cell>
           <Table.Cell></Table.Cell>
           <Table.Cell >Tax</Table.Cell>
           <Table.Cell><Header size="small">750</Header></Table.Cell>
       </Table.Row>
       
       <Table.Row>

            <Table.HeaderCell  ></Table.HeaderCell>
            <Table.HeaderCell ></Table.HeaderCell>
            <Table.HeaderCell ></Table.HeaderCell>
            <Table.HeaderCell><Button primary>Add Item</Button></Table.HeaderCell>
      </Table.Row>
       </Table.Footer>
        </Table>
    </Container>);
}