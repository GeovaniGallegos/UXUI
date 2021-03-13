import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react'
import InvoceStatus from '../InvoiceStatus';

export default function InvoiceItem(properties)
{   
    const {id, name, mount, status, date}= properties;
    return(
    <Segment.Group>
        <Segment   size='large' padded >
        <div size="mini" basic><span Style="font-size:12px; color:blue">{id}</span></div>
            <Grid verticalAlign='top'>
                <Grid.Column width="2">
                
                </Grid.Column>
                <Grid.Column width="7" >
                    {name}
                </Grid.Column>
                <Grid.Column width="2">
                   $ {mount}
                </Grid.Column>
                <Grid.Column width="3">
                   <InvoceStatus status={status} date={date}/>
                </Grid.Column>
                <Grid.Column width="2">
                    <Icon name="bars" color="grey"></Icon>
                    <div></div>
                </Grid.Column>
            </Grid>
        </Segment>
        </Segment.Group>
        );
        
}