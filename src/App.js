import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import  Home from './Home';
// Firebase.
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// Styles 
// import styles from './firebaseCSS.css'; // This uses CSS modules.
// import './firebaseui-styling.global.css'; // Import globally.

const firebaseConfig = {
  apiKey: "AIzaSyBP4n-shYESlm6EpxLGeJtXWW-hQn2sdSU",
  authDomain: "uits-smart-admin.firebaseapp.com",
  databaseURL: "https://uits-smart-admin.firebaseio.com",
  projectId: "uits-smart-admin",
  storageBucket: "uits-smart-admin.appspot.com",
  messagingSenderId: "406914107888",
  appId: "1:406914107888:web:c133894612a5193c957535",
  measurementId: "G-N797DJFZNG"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);


class App extends React.Component { 

  state = {
    isSignedIn: undefined,
  };

  /**
   * @inheritDoc
   */
  componentDidMount() {
    this.unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      localStorage.setItem("current_user",JSON.stringify(user));
    });
  }

  /**
   * @inheritDoc
   */
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
   uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };


render(){
  return (
    <div className="App">
    
      {!this.state.isSignedIn ?
        (<div>
          <StyledFirebaseAuth  uiConfig={this.uiConfig}
            firebaseAuth={firebaseApp.auth()} />
        </div>
      ):
      (
      this.state.isSignedIn &&
          <Home firebaseAuth = {firebaseApp.auth() } ></Home>
      )
      }
    
    </div>
  );
}
}

export default App;

