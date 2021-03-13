import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InvoiceView from './Component/InvoiceView'
import InvoiceFormView from './Component/InvoiceFormView'
import { Container, Segment } from 'semantic-ui-react';
export default function Router () {
    return (
          <Container Style={"Padding:0 25px"}>
              <Segment basic padded='very'>
          <Switch>
            <Route strict path="/Register" component={InvoiceFormView}></Route>
            <Route component={InvoiceView}></Route>
          </Switch>
          </Segment>
          </Container>
          
    );
  }