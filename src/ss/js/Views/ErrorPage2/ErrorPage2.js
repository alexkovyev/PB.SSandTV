import React from 'react';

class ErrorPage2 extends React.Component {
    constructor(props) {
        super(props);

        this.handlingGoToMenu = this.handlingGoToMenu.bind(this);
    }

    handlingGoToMenu() {
        window.location.hash = ''
    }

    openerror() {
        var vmodal = document.getElementById('idmodalerror');
        vmodal.style.display = "block";
    }

    closeerror() {
        var vmodal = document.getElementById('idmodalerror');
        vmodal.style.display = "none";
        window.location.hash = ''
    }

    render() {
        return (
            <div>
                <section className={'pages'}>
                        <img src={require('themes/images/errorbackground.png')} width='100wv' height='80vh' className={'bg'} onClick={this.handlingGoToMenu}></img>
                </section>


                <div className={'modal'} id='idmodalerror' onClick={this.closeerror}>
                        <div className={'modalwindow'}>
                            <div className={'modalbody'}>
                                <b className={'modal-ordertext'}>Мы сломались...</b>
                                <br/><div  className={'modal-lowordertext'}><b>Ближайщий Pizzabot находится<br/>по адресу: ул. Куйбышева, 16,<br/>ТРК "Колизей"</b></div>
                            </div>
                        </div>
                        <img src={require('themes/images/pblogo-sad.png')} className={'pizzalogo'}></img>
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

export default ErrorPage2;