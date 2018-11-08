import React from 'react';
import {Menu, Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';
import { Z_FIXED } from 'zlib';

const Login = (props) => {
   return(
    <div className="login">
        <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
            height: 100%;
        }`}
        </style>

        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450, minHeight: 1100 }}>
                <Grid.Row style={{minHeight:341}}> 
                </Grid.Row>
                <Grid.Row style={{minHeight:341}}>
                    <Image 
                        src='https://image.flaticon.com/icons/svg/270/270014.svg'
                        as='a' 
                        size='medium' 
                        href='/auth/google' 
                        onClick={props.signIn} circular>
                    </Image>
                    <Header as='h2' color='white' textAlign='center'>
                        LJCDS Staff Sign in
                    </Header>
                </Grid.Row>
                <Grid.Row>
                </Grid.Row>
            </Grid.Column>
            
        </Grid> 
    </div>

   )
   
}

export default Login

  
