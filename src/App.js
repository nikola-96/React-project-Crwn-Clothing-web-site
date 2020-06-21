import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)

        })
      } else {
        this.setState({
          currentUser: user
        })
      }


    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();//nista
  }
  render() {
    return (
      <div className="App" >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
