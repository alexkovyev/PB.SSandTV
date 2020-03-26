import React from 'react';

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);

        this.handlingGoToMenu = this.handlingGoToMenu.bind(this);
    }

    handlingGoToMenu() {
        window.location.hash = 'error2'
    }

    openerror() {
        var vmodal = document.getElementById('idmodalerror');
        vmodal.style.display = "block";
    }

    closeerror() {
        var vmodal = document.getElementById('idmodalerror');
        vmodal.style.display = "none";
        window.location.hash = 'error2'
    }

    render() {
        return (
            <div>
                <section className={'pages'}>
                        <img src={require('themes/images/error2background.png')} width='100wv' height='100%' className={'bg'} onClick={this.handlingGoToMenu}></img>
                </section>


                <div className={'modal'} id='idmodalerror' onClick={this.closeerror}>
                        <div className={'modalwindow'}>
                            <div className={'modalbody'}>
                                <b className={'modal-ordertext'}>Извините, сейчас<br/>мы не можем принять заказ</b>
                                <br/><div className={'modal-lowordertext'}><b>Заказ можно будет сделать через</b></div>
                            </div>
                            <div className={'modalfooterr'}>
                                <b className={'modalbodyft'}>15 мин. 54 сек.</b>
                            </div>
                        </div>
                        <img src={require('themes/images/pblogo-what.png')} className={'pizzalogo'}></img>
                        <img src={require('themes/images/pblogo-in.png')} className={'pizzalogo-in'}></img>
                    </div>

                <footer className={'ft'} onClick={this.handlingGoToMenu} onLoad={this.openerror}>
                    <div><img src={require('themes/images/visa.png')} className={'ss-visalogo'}></img></div>
                    <div><img src={require('themes/images/mir.png')} className={'ss-mastercardlogo'}></img></div>
                    <div><img src={require('themes/images/master.png')} className={'ss-mirlogo'}></img></div>
                </footer>
            </div>
        )
    }
}

export default ErrorPage;