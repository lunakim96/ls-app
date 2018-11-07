import React from 'react';
import {Menu, Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';
import { Z_FIXED } from 'zlib';

const Login = (props) => {
   return(
    <div>
        <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
            height: 100%;
        }`}
        </style>

        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450, minHeight: 1024 }}>
                <Grid.Row style={{minHeight:341}}> 
                </Grid.Row>
                <Grid.Row style={{minHeight:341}}>
                <Button circular color='facebook' size="massive" icon='google' href='/auth/google' onClick={props.signIn}>                  
                    </Button>
                    <Header as='h2' color='blue' textAlign='center'>
                        LJCDS Staff Sign in
                    </Header>
                </Grid.Row>
                <Grid.Row>
                    <Image size='medium' style={{marginLeft: 'auto', marginRight: 'auto'}}src="https://bbk12e1-cdn.myschoolcdn.com/ftpimages/737/logo/LJCDS_Web_500_x2.png"/>
                </Grid.Row>
            </Grid.Column>
            
        </Grid> 
    </div>

   )
   
}

export default Login

  
