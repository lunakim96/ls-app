import React from 'react';
import Login from './Login.jsx';
import QPScan from './QPScan.jsx';
import axios from 'axios';
import {Button, Menu} from 'semantic-ui-react';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffMember: false,
            email: '',
        };

        this.logout = this.logout.bind(this)
        // this.login = this.login.bind(this)
        this.checkSession = this.checkSession.bind(this)
    };

    //When the component mounts check for an existing session
    componentWillMount() {

    }
    componentDidMount() {   
        // this.checkSession();
        this.checkSession();
    }; 
    
    //Check the session
    checkSession() {
        axios.get('/session')
          .then((response) => {
            this.setState({staffMember: response.data.signedIn, email: response.data.email})
          })
          .catch((err) => {
            this.setState({
              staffMember: false,
              email: '',
            });
          });
      }

    //Log the user out and destroy the session
    logout() {
        axios.get('/logout')
          .then((res) => {
              this.setState({staffMember: false});
             
          })
          
          .catch((err) => {
            
          });
      }

    //Log the staff in and set the state of the staff email
    // login() {
    //     axios.get('/login')
    //         .then((user) => {
    //         console.log('The data ', user);
    //         this.setState({
    //             staffMember: true,
    //             email: user.data,
    //         })
    //         console.log("Staff info ", this.state.email);
    //         })
    //         .catch(() => {
    //         console.log('could not sign in');
            
    //         });
    //   }
    
      //QR Code Scanning methods

    render () {
        const previewStyle = {
            height: 240,
            width: 240,
        }
        let view;
        if(this.state.email === 'lsqr1@ljcds.org') {
            view = (
            <div>
                <QPScan />
            </div>
            )          
        } 
        else if(this.state.email === 'lsqr2@ljcds.org') {
            view = (
            <div>
                <h2>LOGGED IN AS LSQR2</h2>
            </div>
            )       
        }
        else if(this.state.email === 'lsqr3@ljcds.org') {
            view = (
            <div>
                <h2>LOGGED IN AS LSQR3</h2>
            </div>
            )
        }
        else {
            view = ( 
            <div>
                <Login signIn={this.checkSession}/>
            </div> 
            )
        }
        return (
            <div>
                {view}
            </div>            
        );
    }
}

export default App;