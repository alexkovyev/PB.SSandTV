import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    HashRouter,
    Route
} from 'react-router-dom';


//Pages
import StartPage from './js/Views/StartPage/StartPage';
import MenuPage from './js/Views/MenuPage/MenuPage';
import ErrorPage from './js/Views/ErrorPage/ErrorPage';
import ErrorPage2 from './js/Views/ErrorPage2/ErrorPage2';
import AgreePage from './js/Views/AgreePage/AgreePage';

// Redux store, actions, helpers.
import { connect, Provider } from 'react-redux';
import configureStore from './../js/Redux/configureStore';

// Global controls

// Global utils.
import globalFuncs from 'js/globalFuncs';
import globalConts from './../js/globalConts';

//const store = configureStore();
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timevalue: '00:00',
            datevalue: 'LO.AD.ING_',
        };
        this.routerRef = React.createRef();
    }
    
    componentDidMount() {
      this.timerId = setInterval(
        ()=> this.realTime(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerId);
    }
    
    realTime () {
        var Data = new Date();
        var Hour = String(Data.getHours());
        var Minutes = String(Data.getMinutes());
        var Year = String(Data.getFullYear());
        var Month = String(Data.getMonth())+1;
        var Day = String(Data.getDate());
        if (Hour <= 9) Hour = '0'+Data.getHours();
        if (Minutes <= 9) Minutes = '0'+Data.getMinutes();
        if (Day <= 9) Day = '0'+Data.getDate();
        if (Month <= 9) Month = '0'+Data.getMonth();
        this.setState({
            timevalue: Hour+':'+Minutes,
            datevalue: Day+'.'+Month+'.'+Year
        })
        return;
    }

    render() {
        return (
            <div>
                <header>
                    <div>
                        <img src={require('themes/images/logo.png')} className={'logo'}/>
                    </div>
                    <div>
                        <button className={'lang-change'}>English</button>
                    </div>
                    <div className={'datetime'}>
                        <center>
                            <div className={'time'}>{this.state.timevalue}</div>
                            <div className={'date'}>{this.state.datevalue}</div>
                        </center>
                    </div>
                </header>
                <div className={'content'}>
                    <HashRouter ref={this.routerRef}>
                        <Route path={'/'} exact component={StartPage} />
                        <Route path={'/Menu'} component={MenuPage} />
                        <Route path={'/Error'} component={ErrorPage} />
                        <Route path={'/Error2'} component={ErrorPage2} />
                        <Route path={'/Agree'} component={AgreePage} />
                    </HashRouter>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    
}

class Root extends Component {
    render() {
        /*return (
            <Provider store={store}>
                <MainComponent />
            </Provider>
        )*/
        return (
            <Main />
        )
    }
}

export default Root;
