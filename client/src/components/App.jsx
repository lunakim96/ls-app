import React from 'react';
import Login from './Login.jsx';
import QrReader from 'react-qr-scanner';
import axios from 'axios';
import {Button, Menu} from 'semantic-ui-react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 200,
            result: 'NOTHING',
            staffMember: false,
            staff: {},
        };

        this.handleScan = this.handleScan.bind(this)
        this.logout = this.logout.bind(this)
        this.login = this.login.bind(this)
        this.checkSession = this.checkSession.bind(this)
        this.handleError = this.handleError.bind(this)
    };

    componentDidMount() {
        this.checkSession();
    }


    checkSession() {
        axios.get('/session')
          .then((response) => {
            this.login();
            console.log("Staff info ", this.state.staff);
          })
          .catch((err) => {
            this.setState({
              staffMember: false,
              staff: {},
            });
          });
      }

    logout() {
        axios.get('/logout')
          .then((res) => {
              this.setState({staffMember: res.data
            });
          })
          .catch((err) => {
    
          });
      }

    login() {
        console.log('TRYING TO LOG IN');
        axios.get('/user')
            .then((user) => {
            console.log('The data ', user);
            this.setState({
                staffMember: true,
                staff: user.data,
            })
            console.log("Staff info ", this.state.staff);
            })
            .catch(() => {
            console.log('could not sign in');
            
            });
      }

    handleScan(data) {
            this.setState({
                result: data,
            })
    }
    handleError(err) {
        console.error(err)
    }

    render () {
        const previewStyle = {
            height: 240,
            width: 240,
        }

        return (
            <div> 
                <Login signIn={this.login} signOut={this.logout} user={this.state.staffMember}/>
            </div>
        );
    }
}

export default App;