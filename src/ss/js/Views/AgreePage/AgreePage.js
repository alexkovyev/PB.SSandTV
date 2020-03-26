import React from 'react';

class AgreePage extends React.Component {
    constructor(props) {
        super(props);
        this.handlingGoToStart = this.handlingGoToStart.bind(this);
    }

    loadingmodal() {
        var vmodal = document.getElementById('idmodal');
        vmodal.style.display = "block";
    }

    loadingmodalcheck() {
        var vmodal = document.getElementById('idmodal');
        vmodal.style.display = "none";
        vmodal = document.getElementById('idmodallast');
        vmodal.style.display = "block";
    }

    unloadingmodal() {
        var vmodal = document.getElementById('idmodallast');
        vmodal.style.display = "none";
    }

    handlingGoToStart() {
        window.location.hash = '';
        window.location.hash += 'menu';
    }

    render() {
        return (
            <div>
                 <section className={'pages'}>
                        <div className={'ap-page'}>
                            <div className={'ap-header'}>Мой заказ</div>
                            <div className={'ap-content'}>
                                    <div className={'ap-item'}>
                                        <img src={require('themes/images/f-filling.png')} width className={'ap-img'}></img>
                                        <div className={'ap-desc'}>
                                            <div сlassName={'ap-namepizza'}>Пицца Ананас</div>
                                            <div className={'ap-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </div>
                                            <div className={'ap-item-gramms'}>
                                                260 г
                                            </div>
                                        </div>
                                        <div className={'ap-cost'}>245.34₽</div>
                                    </div>
                                    <div className={'ap-item'}>
                                        <img src={require('themes/images/f-filling.png')} className={'ap-img'}></img>
                                        <div className={'ap-desc'}>
                                            <div сlassName={'apnamepizza'}>Пицца Ананас</div>
                                            <div className={'ap-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </div>
                                            <div className={'ap-item-gramms'}>
                                                260 г
                                            </div>
                                        </div>
                                        <div className={'ap-cost'}>245.34₽</div>
                                    </div>
                                    <div class={'ap-sign1'}>Заказ будет готов через 15-20 минут</div>
                                    <div class={'fullprice'}>490.68₽</div>
                                    <div class={'ap-sign2'}>Пожалуйста, подтвердите<br/> заказ перед покупкой</div>
                            </div>
                        </div>
                    </section>


                    <div className={'modal'} id='idmodal' onClick={this.loadingmodalcheck}>
                        <div className={'modalwindow'}>
                            <div className={'modalbody'}>
                                <b className={'modal-ordertext'}>Следуйте инструкции на пин-паде</b>
                                <center><img src={require('themes/images/logo-paywave.png')} className={'modal-icon'}></img></center>
                            </div>
                            <div className={'modalfooter'}>
                                <center><img src={require('themes/images/icon-usesb.png')} className={'modal-icon-down'}></img></center>
                            </div>
                        </div>
                        <img src={require('themes/images/pblogo.png')} className={'pizzalogo'}></img>
                        <img src={require('themes/images/pblogo-in.png')} className={'pizzalogo-in'}></img>
                    </div>


                    <div className={'modal'} id='idmodallast' onClick={this.unloadingmodal}>
                        <div className={'modalwindow'}>
                            <div className={'modalbody'}>
                                <div className={'modal-ordertext'}><b>Номер вашего заказа</b></div><br/>
                                <div className={'modal-yourordernumber'}><b>171</b></div><br/>
                                <div className={'modal-ordertext'}><b>Возьмите чек!</b></div><br/>
                                <div className={'modal-lowtext'}><b>Дождитесь готовности заказа.</b></div><br/>
                                <div className={'modal-redtext'}><b>Приложите QR-код на чеке к сканеру в люблм окне выдачи.</b></div><br/>
                                <img src={require('themes/images/logo-check.png')} className={'modal-icon2'}></img>
                            </div>
                            <div className={'modalfooter'}>
                                <center><img src={require('themes/images/icon-usesb.png')} className={'modal-icon-down'}></img></center>
                            </div>
                        </div>
                        <img src={require('themes/images/pblogo.png')} className={'pizzalogo'}></img>
                        <img src={require('themes/images/pblogo-in.png')} className={'pizzalogo-in'}></img>
                    </div>


                <footer className={'ft'}>
                        <button className={'ap-cancel'} onClick={this.handlingGoToStart}>
                            <img src={require('themes/images/icon-backwhite.png')} alt='img' class={'button-logo'}></img>
                            <span className={'button-text'}>Нет, я хочу изменить заказ</span>
                        </button>
                        <button className={'ap-accept'} onClick={this.loadingmodal}>
                            <img src={require('themes/images/icon-accept.png')} alt='img' className={'button-logo'}/>
                            <span className={'button-text'}>Да, мой заказ верен</span>
                        </button>
                </footer>
            </div>
        )
    }
}

export default AgreePage;