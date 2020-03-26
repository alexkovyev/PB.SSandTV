import React from 'react';

class StartPage extends React.Component {
    constructor(props) {
        super(props);

        this.handlingGoToMenu = this.handlingGoToMenu.bind(this);
    }

    handlingGoToMenu() {
        window.location.hash += 'menu'
    }


    handlingGoToError() {
        window.location.hash += 'error'
    }

    render() {
        return (
            <div>
                <section className={'pages'}>
                        <img src={require('themes/images/background.png')} width='100wv' className={'bg'} onClick={this.handlingGoToMenu}></img>
                </section>
                <footer className={'ft'} onClick={this.handlingGoToError}>
                    <div><img src={require('themes/images/visa.png')} className={'ss-visalogo'}></img></div>
                    <div><img src={require('themes/images/mir.png')} className={'ss-mastercardlogo'}></img></div>
                    <div><img src={require('themes/images/master.png')} className={'ss-mirlogo'}></img></div>
                </footer>
            </div>
        )
    }
}

export default StartPage;