import React from 'react';
import Pizzas from './../../Controls/pizzas'
import Flags from './../../Controls/flags'

class MenuPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
            
        }

        this.handlingGoToStart = this.handlingGoToStart.bind(this);
        this.handlingGoToPay = this.handlingGoToPay.bind(this);
        this.renderdough = this.renderdough.bind(this);
    }

    handlingGoToStart() {
        var vmodal = document.getElementById('pagemenu');
        vmodal.style.display = "none";
        window.location.hash = '';
    }

    handlingGoToPay() {
        var vmodal = document.getElementById('pagemenu');
        vmodal.style.display = "none";
        window.location.hash = '';
        window.location.hash += 'agree';
    }

    // Открытие окна туториала
    openmodalstart() {
            var vmodal = document.getElementById('idmodalstart');
            vmodal.style.display = "block";
        var idough = document.getElementsByClassName('ms-dough');
        var isauce = document.getElementsByClassName('ms-sauce');
        var ifilling = document.getElementsByClassName('ms-filling');
        var ifilling1 = document.getElementsByClassName('ms-filling1');
        var ifilling2 = document.getElementsByClassName('ms-filling2');
        var iadditive = document.getElementsByClassName('ms-additive');
        var ibtn = document.getElementsByClassName('btn-menu');
        for(var i = 0; i < idough.length; i++) {
            idough[i].style.height = '0';
            idough[i].style.display = 'none';
        }
        for(var i = 0; i < isauce.length; i++) {
            isauce[i].style.height = '0';
            isauce[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling.length; i++) {
            ifilling[i].style.height = '0';
            ifilling[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling1.length; i++) {
            ifilling1[i].style.height = '0';
            ifilling1[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling2.length; i++) {
            ifilling2[i].style.height = '0';
            ifilling2[i].style.display = 'none';
        }
        for(var i = 0; i < iadditive.length; i++) {
            iadditive[i].style.height = '0';
            iadditive[i].style.display = 'none';
        }
        for(var i = 0; i < ibtn.length; i++) {
            ibtn[i].style.backgroundColor = '#F0F0F0';
        }
        var iitems = document.getElementsByClassName('btn-menu-m');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.display = 'none';
        }
        var item = document.getElementById('menu-1');
        item.style.backgroundColor = '#c2c2c2';
        var iitems = document.getElementsByClassName('ms-dough');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.height = '25vh';
            iitems[i].style.display = 'block';
        }
    }

    closemodalstart() {
        var vmodal = document.getElementById('idmodalstart');
        vmodal.style.display = "none";
    }

    // Открытие окна удаления позиции
    openmodaldel() {
        var vmodal = document.getElementById('idmodaldel');
        vmodal.style.display = "block";
    }

    closemodaldel() {
        var vmodal = document.getElementById('idmodaldel');
        vmodal.style.display = "none";
    }

    // Открытие окна удаления строки
    openmodaldelfull() {
        var vmodal = document.getElementById('idmodaldelfull');
        vmodal.style.display = "block";
    }

    closemodaldelfull() {
        var vmodal = document.getElementById('idmodaldelfull');
        vmodal.style.display = "none";
    }

    // Открытие окна возврата назад
    openmodalcancel() {
        var vmodal = document.getElementById('idmodaldelcancel');
        vmodal.style.display = "block";
    }

    closemodalcancel() {
        var vmodal = document.getElementById('idmodaldelcancel');
        vmodal.style.display = "none";
    }

    // Открытие раздела покупки готовой пиццы
    openps() {
        var cont = document.getElementById('pscont');
        cont.style.height = "100%";
        cont.style.display = "flex";
        var itemit = document.getElementById('mp-makeshift');
        itemit.style.backgroundColor = "#FFFFFF";
        itemit.style.border = "1px solid #000000";
    }

    closeps() {
        var cont = document.getElementById('pscont');
        cont.style.height = "0";
        cont.style.display = "none";
        var itemit = document.getElementById('mp-makeshift');
        itemit.style.border = "0";
    }

    loadstartpage() {

    }

    // Отгрузка всего меню
    menuunloadall() {
        var idough = document.getElementsByClassName('ms-dough');
        var isauce = document.getElementsByClassName('ms-sauce');
        var ifilling = document.getElementsByClassName('ms-filling');
        var ifilling1 = document.getElementsByClassName('ms-filling1');
        var ifilling2 = document.getElementsByClassName('ms-filling2');
        var iadditive = document.getElementsByClassName('ms-additive');
        var ibtn = document.getElementsByClassName('btn-menu');
        for(var i = 0; i < idough.length; i++) {
            idough[i].style.height = '0';
            idough[i].style.display = 'none';
        }
        for(var i = 0; i < isauce.length; i++) {
            isauce[i].style.height = '0';
            isauce[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling.length; i++) {
            ifilling[i].style.height = '0';
            ifilling[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling1.length; i++) {
            ifilling1[i].style.height = '0';
            ifilling1[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling2.length; i++) {
            ifilling2[i].style.height = '0';
            ifilling2[i].style.display = 'none';
        }
        for(var i = 0; i < iadditive.length; i++) {
            iadditive[i].style.height = '0';
            iadditive[i].style.display = 'none';
        }
        for(var i = 0; i < ibtn.length; i++) {
            ibtn[i].style.backgroundColor = '#F0F0F0';
        }
        var iitems = document.getElementsByClassName('btn-menu-m');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.display = 'none';
        }
    }
    
    // Подгрузка теста
    renderdough() {
        var idough = document.getElementsByClassName('ms-dough');
        var isauce = document.getElementsByClassName('ms-sauce');
        var ifilling = document.getElementsByClassName('ms-filling');
        var ifilling1 = document.getElementsByClassName('ms-filling1');
        var ifilling2 = document.getElementsByClassName('ms-filling2');
        var iadditive = document.getElementsByClassName('ms-additive');
        var ibtn = document.getElementsByClassName('btn-menu');
        for(var i = 0; i < idough.length; i++) {
            idough[i].style.height = '0';
            idough[i].style.display = 'none';
        }
        for(var i = 0; i < isauce.length; i++) {
            isauce[i].style.height = '0';
            isauce[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling.length; i++) {
            ifilling[i].style.height = '0';
            ifilling[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling1.length; i++) {
            ifilling1[i].style.height = '0';
            ifilling1[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling2.length; i++) {
            ifilling2[i].style.height = '0';
            ifilling2[i].style.display = 'none';
        }
        for(var i = 0; i < iadditive.length; i++) {
            iadditive[i].style.height = '0';
            iadditive[i].style.display = 'none';
        }
        for(var i = 0; i < ibtn.length; i++) {
            ibtn[i].style.backgroundColor = '#F0F0F0';
        }
        var iitems = document.getElementsByClassName('btn-menu-m');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.display = 'none';
        }
        var item = document.getElementById('menu-1');
        item.style.backgroundColor = '#c2c2c2';
        var iitems = document.getElementsByClassName('ms-dough');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.height = '25vh';
            iitems[i].style.display = 'block';
        }
    }
    // Подгрузка соус
    rendersauce() {
        var idough = document.getElementsByClassName('ms-dough');
        var isauce = document.getElementsByClassName('ms-sauce');
        var ifilling = document.getElementsByClassName('ms-filling');
        var ifilling1 = document.getElementsByClassName('ms-filling1');
        var ifilling2 = document.getElementsByClassName('ms-filling2');
        var iadditive = document.getElementsByClassName('ms-additive');
        var ibtn = document.getElementsByClassName('btn-menu');
        for(var i = 0; i < idough.length; i++) {
            idough[i].style.height = '0';
            idough[i].style.display = 'none';
        }
        for(var i = 0; i < isauce.length; i++) {
            isauce[i].style.height = '0';
            isauce[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling.length; i++) {
            ifilling[i].style.height = '0';
            ifilling[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling1.length; i++) {
            ifilling1[i].style.height = '0';
            ifilling1[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling2.length; i++) {
            ifilling2[i].style.height = '0';
            ifilling2[i].style.display = 'none';
        }
        for(var i = 0; i < iadditive.length; i++) {
            iadditive[i].style.height = '0';
            iadditive[i].style.display = 'none';
        }
        for(var i = 0; i < ibtn.length; i++) {
            ibtn[i].style.backgroundColor = '#F0F0F0';
        }
        var iitems = document.getElementsByClassName('btn-menu-m');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.display = 'none';
        }
        var item = document.getElementById('menu-2');
        item.style.backgroundColor = '#c2c2c2';
        var iitems = document.getElementsByClassName('ms-sauce');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.height = '25vh';
            iitems[i].style.display = 'block';
        }
    }
    
    // Подгрузка заправка
    renderfilling() {
        var idough = document.getElementsByClassName('ms-dough');
        var isauce = document.getElementsByClassName('ms-sauce');
        var ifilling = document.getElementsByClassName('ms-filling');
        var ifilling1 = document.getElementsByClassName('ms-filling1');
        var ifilling2 = document.getElementsByClassName('ms-filling2');
        var iadditive = document.getElementsByClassName('ms-additive');
        var ibtn = document.getElementsByClassName('btn-menu');
        for(var i = 0; i < idough.length; i++) {
            idough[i].style.height = '0';
            idough[i].style.display = 'none';
        }
        for(var i = 0; i < isauce.length; i++) {
            isauce[i].style.height = '0';
            isauce[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling.length; i++) {
            ifilling[i].style.height = '0';
            ifilling[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling1.length; i++) {
            ifilling1[i].style.height = '0';
            ifilling1[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling2.length; i++) {
            ifilling2[i].style.height = '0';
            ifilling2[i].style.display = 'none';
        }
        for(var i = 0; i < iadditive.length; i++) {
            iadditive[i].style.height = '0';
            iadditive[i].style.display = 'none';
        }
        for(var i = 0; i < ibtn.length; i++) {
            ibtn[i].style.backgroundColor = '#F0F0F0';
        }
        var iitems = document.getElementsByClassName('btn-menu-m');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.display = 'block';
        }
        var item = document.getElementById('menu-3');
        item.style.backgroundColor = '#c2c2c2';
        var iitems = document.getElementsByClassName('ms-filling');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.height = '25vh';
            iitems[i].style.display = 'block';
        }
    }
    renderfilling1() {
        var idough = document.getElementsByClassName('ms-dough');
        var isauce = document.getElementsByClassName('ms-sauce');
        var ifilling = document.getElementsByClassName('ms-filling');
        var ifilling1 = document.getElementsByClassName('ms-filling1');
        var ifilling2 = document.getElementsByClassName('ms-filling2');
        var iadditive = document.getElementsByClassName('ms-additive');
        var ibtn = document.getElementsByClassName('btn-menu');
        for(var i = 0; i < idough.length; i++) {
            idough[i].style.height = '0';
            idough[i].style.display = 'none';
        }
        for(var i = 0; i < isauce.length; i++) {
            isauce[i].style.height = '0';
            isauce[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling.length; i++) {
            ifilling[i].style.height = '0';
            ifilling[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling1.length; i++) {
            ifilling1[i].style.height = '0';
            ifilling1[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling2.length; i++) {
            ifilling2[i].style.height = '0';
            ifilling2[i].style.display = 'none';
        }
        for(var i = 0; i < iadditive.length; i++) {
            iadditive[i].style.height = '0';
            iadditive[i].style.display = 'none';
        }
        for(var i = 0; i < ibtn.length; i++) {
            ibtn[i].style.backgroundColor = '#F0F0F0';
        }
        var iitems = document.getElementsByClassName('btn-menu-m');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.display = 'block';
        }
        var item = document.getElementById('menu-3');
        item.style.backgroundColor = '#c2c2c2';
        var iitems = document.getElementsByClassName('ms-filling1');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.height = '25vh';
            iitems[i].style.display = 'block';
        }
    }
    // Подгрузка соус1
    renderfilling2() {
        var idough = document.getElementsByClassName('ms-dough');
        var isauce = document.getElementsByClassName('ms-sauce');
        var ifilling = document.getElementsByClassName('ms-filling');
        var ifilling1 = document.getElementsByClassName('ms-filling1');
        var ifilling2 = document.getElementsByClassName('ms-filling2');
        var iadditive = document.getElementsByClassName('ms-additive');
        var ibtn = document.getElementsByClassName('btn-menu');
        for(var i = 0; i < idough.length; i++) {
            idough[i].style.height = '0';
            idough[i].style.display = 'none';
        }
        for(var i = 0; i < isauce.length; i++) {
            isauce[i].style.height = '0';
            isauce[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling.length; i++) {
            ifilling[i].style.height = '0';
            ifilling[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling1.length; i++) {
            ifilling1[i].style.height = '0';
            ifilling1[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling2.length; i++) {
            ifilling2[i].style.height = '0';
            ifilling2[i].style.display = 'none';
        }
        for(var i = 0; i < iadditive.length; i++) {
            iadditive[i].style.height = '0';
            iadditive[i].style.display = 'none';
        }
        for(var i = 0; i < ibtn.length; i++) {
            ibtn[i].style.backgroundColor = '#F0F0F0';
        }
        var iitems = document.getElementsByClassName('btn-menu-m');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.display = 'block';
        }
        var item = document.getElementById('menu-3');
        item.style.backgroundColor = '#c2c2c2';
        var iitems = document.getElementsByClassName('ms-filling2');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.height = '25vh';
            iitems[i].style.display = 'block';
        }
    }
    // Подгрузка добавка
    renderadditive() {
        var idough = document.getElementsByClassName('ms-dough');
        var isauce = document.getElementsByClassName('ms-sauce');
        var ifilling = document.getElementsByClassName('ms-filling');
        var ifilling1 = document.getElementsByClassName('ms-filling1');
        var ifilling2 = document.getElementsByClassName('ms-filling2');
        var iadditive = document.getElementsByClassName('ms-additive');
        var ibtn = document.getElementsByClassName('btn-menu');
        for(var i = 0; i < idough.length; i++) {
            idough[i].style.height = '0';
            idough[i].style.display = 'none';
        }
        for(var i = 0; i < isauce.length; i++) {
            isauce[i].style.height = '0';
            isauce[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling.length; i++) {
            ifilling[i].style.height = '0';
            ifilling[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling1.length; i++) {
            ifilling1[i].style.height = '0';
            ifilling1[i].style.display = 'none';
        }
        for(var i = 0; i < ifilling2.length; i++) {
            ifilling2[i].style.height = '0';
            ifilling2[i].style.display = 'none';
        }
        for(var i = 0; i < iadditive.length; i++) {
            iadditive[i].style.height = '0';
            iadditive[i].style.display = 'none';
        }
        for(var i = 0; i < ibtn.length; i++) {
            ibtn[i].style.backgroundColor = '#F0F0F0';
        }
        var iitems = document.getElementsByClassName('btn-menu-m');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.display = 'none';
        }
        var item = document.getElementById('menu-4');
        item.style.backgroundColor = '#c2c2c2';
        var iitems = document.getElementsByClassName('ms-additive');
        for(var i = 0; i < iitems.length; i++) {
            iitems[i].style.height = '25vh';
            iitems[i].style.display = 'block';
        }
    }
    nextit() {
        var idough = document.getElementsByClassName('ms-dough');
        var isauce = document.getElementsByClassName('ms-sauce');
        var ifilling = document.getElementsByClassName('ms-filling');
        var ifilling1 = document.getElementsByClassName('ms-filling1');
        var ifilling2 = document.getElementsByClassName('ms-filling2');
        var iadditive = document.getElementsByClassName('ms-additive');
        var ibtn = document.getElementsByClassName('btn-menu');
        if ((ifilling[0].style.display != 'none') || (ifilling1[0].style.display != 'none') || (ifilling2[0].style.display != 'none')) {
            for(var i = 0; i < idough.length; i++) {
                idough[i].style.height = '0';
                idough[i].style.display = 'none';
            }
            for(var i = 0; i < isauce.length; i++) {
                isauce[i].style.height = '0';
                isauce[i].style.display = 'none';
            }
            for(var i = 0; i < ifilling.length; i++) {
                ifilling[i].style.height = '0';
                ifilling[i].style.display = 'none';
            }
            for(var i = 0; i < ifilling1.length; i++) {
                ifilling1[i].style.height = '0';
                ifilling1[i].style.display = 'none';
            }
            for(var i = 0; i < ifilling2.length; i++) {
                ifilling2[i].style.height = '0';
                ifilling2[i].style.display = 'none';
            }
            for(var i = 0; i < iadditive.length; i++) {
                iadditive[i].style.height = '0';
                iadditive[i].style.display = 'none';
            }
            for(var i = 0; i < ibtn.length; i++) {
                ibtn[i].style.backgroundColor = '#F0F0F0';
            }
            var iitems = document.getElementsByClassName('btn-menu-m');
            for(var i = 0; i < iitems.length; i++) {
                iitems[i].style.display = 'none';
            }
            var item = document.getElementById('menu-4');
            item.style.backgroundColor = '#c2c2c2';
            var iitems = document.getElementsByClassName('ms-additive');
            for(var i = 0; i < iitems.length; i++) {
                iitems[i].style.height = '25vh';
                iitems[i].style.display = 'block';
            }
        }
        else if (isauce[0].style.display != 'none') {
            for(var i = 0; i < idough.length; i++) {
                idough[i].style.height = '0';
                idough[i].style.display = 'none';
            }
            for(var i = 0; i < isauce.length; i++) {
                isauce[i].style.height = '0';
                isauce[i].style.display = 'none';
            }
            for(var i = 0; i < ifilling.length; i++) {
                ifilling[i].style.height = '0';
                ifilling[i].style.display = 'none';
            }
            for(var i = 0; i < ifilling1.length; i++) {
                ifilling1[i].style.height = '0';
                ifilling1[i].style.display = 'none';
            }
            for(var i = 0; i < ifilling2.length; i++) {
                ifilling2[i].style.height = '0';
                ifilling2[i].style.display = 'none';
            }
            for(var i = 0; i < iadditive.length; i++) {
                iadditive[i].style.height = '0';
                iadditive[i].style.display = 'none';
            }
            for(var i = 0; i < ibtn.length; i++) {
                ibtn[i].style.backgroundColor = '#F0F0F0';
            }
            var iitems = document.getElementsByClassName('btn-menu-m');
            for(var i = 0; i < iitems.length; i++) {
                iitems[i].style.display = 'block';
            }
            var item = document.getElementById('menu-3');
            item.style.backgroundColor = '#c2c2c2';
            var iitems = document.getElementsByClassName('ms-filling');
            for(var i = 0; i < iitems.length; i++) {
                iitems[i].style.height = '25vh';
                iitems[i].style.display = 'block';
            }
        }
        else if (idough[0].style.display != 'none') {
            for(var i = 0; i < idough.length; i++) {
                idough[i].style.height = '0';
                idough[i].style.display = 'none';
            }
            for(var i = 0; i < isauce.length; i++) {
                isauce[i].style.height = '0';
                isauce[i].style.display = 'none';
            }
            for(var i = 0; i < ifilling.length; i++) {
                ifilling[i].style.height = '0';
                ifilling[i].style.display = 'none';
            }
            for(var i = 0; i < ifilling1.length; i++) {
                ifilling1[i].style.height = '0';
                ifilling1[i].style.display = 'none';
            }
            for(var i = 0; i < ifilling2.length; i++) {
                ifilling2[i].style.height = '0';
                ifilling2[i].style.display = 'none';
            }
            for(var i = 0; i < iadditive.length; i++) {
                iadditive[i].style.height = '0';
                iadditive[i].style.display = 'none';
            }
            for(var i = 0; i < ibtn.length; i++) {
                ibtn[i].style.backgroundColor = '#F0F0F0';
            }
            var item = document.getElementById('menu-2');
            item.style.backgroundColor = '#c2c2c2';
            var iitems = document.getElementsByClassName('ms-sauce');
            for(var i = 0; i < iitems.length; i++) {
                iitems[i].style.height = '25vh';
                iitems[i].style.display = 'block';
            }
        }
    }

    
    render() {
        return (
            <div>
                    <section className={'pages'} id='pagemenu'>
                    
                        <div className={'mp-presets'}>
                            <div className={'mp-ps-head'} onClick={this.openps}>
                                <div className={'mp-header'}>Готовый рецепт</div>
                                <div className={'mp-desc'}>Выберите один из готовых рецептов <br/>пиццы, и пиццабот приготовит для Вас</div>
                            </div>
                            <div className={'mp-ps-content'} id='pscont'>
                                <div className={'item-ps-container'}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-sauce.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Соус 2</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-ps-container'}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-sauce.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Соус 2</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-ps-container'}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-sauce.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Соус 2</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'mp-makeshift'} onClick={this.closeps}>
                            <div className={'mp-ms-head'} onClick={this.closeps} id='mp-makeshift'>
                                <div className={'mp-header'}>Мой рецепт</div>
                                <div className={'mp-desc'}>Выберите ингредиенты на свой вкус, <br/>и пиццабот приготовить пиццу по Вашему <br/>собственному рецепту</div>
                            </div>
                            <div className={'mp-ms-content'}>
                                <div className={'mp-ms-menu'}>
                                    <div className={'btn-menu'} id='menu-1' onClick={this.renderdough}>
                                        <img className={'menu-logo'} src={require('themes/images/f-dough.png')}></img>
                                        Тесто
                                    </div>
                                    <div className={'btn-menu'} id='menu-2' onClick={this.rendersauce}>
                                        <img className={'menu-logo'} src={require('themes/images/f-sauce.png')}></img>
                                        Соус
                                    </div>
                                    <div className={'btn-menu'} id='menu-3' onClick={this.renderfilling}>
                                        <img className={'menu-logo'} src={require('themes/images/f-filling.png')}></img>
                                        Заправка
                                    </div>
                                    <div className={'btn-menu-m'} id='menu-3-1' onClick={this.renderfilling}>
                                        Много мяса
                                    </div>
                                    <div className={'btn-menu-m'} id='menu-3-2' onClick={this.renderfilling1}>
                                        Много сыра
                                    </div>
                                    <div className={'btn-menu-m'} id='menu-3-3' onClick={this.renderfilling2}>
                                        Много овощей
                                    </div>
                                    <div className={'btn-menu'} id='menu-4' onClick={this.renderadditive}>
                                        <img className={'menu-logo'} src={require('themes/images/f-additive.png')}></img>
                                        Добавка
                                    </div>
                                </div>
                                <div className={'mp-ms-typecontent'}>
                                
                                <div className={'item-ms-container ms-dough'} onClick={this.nextit}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-filling.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Тесто 1</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-ms-container ms-dough'} onClick={this.nextit}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-filling.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Тесто 2</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-ms-container ms-dough'} onClick={this.nextit}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-filling.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Тесто 3</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-ms-container-ex ms-filling'}>
                                    <div class={'item-ex'}>
                                        Лучшие мясные<br/>начинки от<br/>Pizzabot
                                    </div>
                                </div>
                                <div className={'item-ms-container ms-sauce'} onClick={this.nextit}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-sauce.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Соус 2</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-ms-container ms-sauce'} onClick={this.nextit}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-sauce.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Соус 2</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-ms-container ms-filling'} onClick={this.nextit}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-filling.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Соус 2</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-ms-container-ex ms-filling1'}>
                                    <div class={'item-ex'}>
                                        Лучшие сырные<br/>начинки от<br/>Pizzabot
                                    </div>
                                </div>
                                <div className={'item-ms-container ms-filling1'} onClick={this.nextit}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-filling.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Соус 2</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-ms-container ms-filling1'} onClick={this.nextit}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-filling.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Соус 3</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-ms-container ms-filling1'} onClick={this.nextit}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-filling.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Соус 3</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-ms-container-ex ms-filling2'}>
                                    <div class={'item-ex'}>
                                        Лучшие овощные<br/>начинки от<br/>Pizzabot
                                    </div>
                                </div>
                                <div className={'item-ms-container ms-filling2'} onClick={this.nextit}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-filling.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Соус 3</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-ms-container ms-additive'} onClick={this.nextit}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-additive.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Соус 3</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-ms-container ms-additive'} onClick={this.nextit}>
                                    <div class={'item'}>
                                        <img src={require('themes/images/f-additive.png')} alt="Image" class={'item-image'}/>
                                        <div className={'item-description'}>
                                            <div className={'item-title'}>Соус 3</div>
                                            <p className={'item-composition'}>
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                                состав продукта, состав продукта,
                                            </p>
                                            <div className={'item-cost'}>270,00₽</div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <div className={'modal'} id='idmodaldel'>
                        <div className={'modalwindow'}>
                            <div className={'modalbody'}>
                                <b className={'modal-ordertext'}>Вы действительно хотите удалить данный ингредиент?</b>
                            </div>
                            <div className={'modalfooter'}>
                                <button className={'ap-cancel'} onClick={this.closemodaldel}>
                                    <img src={require('themes/images/icon-backwhite.png')} alt='img' class={'button-logo'}></img>
                                    <span className={'button-text'}>Отменить</span>
                                </button>
                                <button className={'ap-accept'} onClick={this.closemodaldel}>
                                    <img src={require('themes/images/icon-accept.png')} alt='img' className={'button-logo'}/>
                                    <span className={'button-text'}>Удалить</span>
                                </button>
                            </div>
                        </div>
                        <img src={require('themes/images/pblogo.png')} className={'pizzalogo'}></img>
                        <img src={require('themes/images/pblogo-in.png')} className={'pizzalogo-in'}></img>
                    </div>


                    <div className={'modal'} id='idmodaldelcancel'>
                        <div className={'modalwindow'}>
                            <div className={'modalbody'}>
                                <b className={'modal-ordertext'}>Вы хотите удалить заказ?</b>
                            </div>
                            <div className={'modalfooter'}>
                                <button className={'ap-cancel'} onClick={this.closemodalcancel}>
                                    <img src={require('themes/images/icon-backwhite.png')} alt='img' class={'button-logo'}></img>
                                    <span className={'button-text'}>Отменить</span>
                                </button>
                                <button className={'ap-accept'} onClick={this.handlingGoToStart}>
                                    <img src={require('themes/images/icon-accept.png')} alt='img' className={'button-logo'}/>
                                    <span className={'button-text'}>Удалить</span>
                                </button>
                            </div>
                        </div>
                        <img src={require('themes/images/pblogo.png')} className={'pizzalogo'}></img>
                        <img src={require('themes/images/pblogo-in.png')} className={'pizzalogo-in'}></img>
                    </div>


                    <div className={'modal'} id='idmodaldelfull'>
                        <div className={'modalwindow'}>
                            <div className={'modalbody'}>
                                <b className={'modal-ordertext'}>Вы действительно хотите удалить данную позицию?</b>
                            </div>
                            <div className={'modalfooter'}>
                                <button className={'ap-cancel'} onClick={this.closemodaldelfull}>
                                    <img src={require('themes/images/icon-backwhite.png')} alt='img' class={'button-logo'}></img>
                                    <span className={'button-text'}>Отменить</span>
                                </button>
                                <button className={'ap-accept'} onClick={this.closemodaldelfull}>
                                    <img src={require('themes/images/icon-accept.png')} alt='img' className={'button-logo'}/>
                                    <span className={'button-text'}>Удалить</span>
                                </button>
                            </div>
                        </div>
                        <img src={require('themes/images/pblogo.png')} className={'pizzalogo'}></img>
                        <img src={require('themes/images/pblogo-in.png')} className={'pizzalogo-in'}></img>
                    </div>


                    <div className={'modal'} id='idmodalstart' onClick={this.closemodalstart}>
                        <div className={'modalwindow'}>
                            <div className={'modalbody'}>
                                <div className={'modal-howto'}>
                                    <div className={'modal-number'}><div className={'text-fix'}><center>1</center></div></div>
                                    <div className={'modal-punkt'}>Выберите готовый рецепт пиццы или подберите ингредиенты на свой вкус</div>
                                </div>
                                <div className={'modal-howto'}>
                                    <div className={'modal-number'}><div className={'text-fix'}><center>2</center></div></div>
                                    <div className={'modal-punkt'}>Оплатите заказ банковской картой</div>
                                </div>
                                <div className={'modal-howto'}>
                                    <div className={'modal-number'}><div className={'text-fix'}><center>3</center></div></div>
                                    <div className={'modal-punkt'}>Возьмите чек</div>
                                </div>
                                <div className={'modal-howto'}>
                                    <div className={'modal-number'}><div className={'text-fix'}><center>4</center></div></div>
                                    <div className={'modal-punkt'}>Дождитесь, когда Ваш заказ будет готов</div>
                                </div>
                                <div className={'modal-howto'}>
                                    <div className={'modal-number'}><div className={'text-fix'}><center>5</center></div></div>
                                    <div className={'modal-punkt'}>Приложите QR-код на чеке к сканеру в любом окне выдачи, чтобы получить заказ</div>
                                </div>
                            </div>
                            <div className={'modalfooter'}>
                                <center><img src={require('themes/images/icon-usesb.png')} className={'modal-icon-down'}></img></center>
                            </div>
                        </div>
                        <img src={require('themes/images/pblogo.png')} className={'pizzalogo'}></img>
                        <img src={require('themes/images/pblogo-in.png')} className={'pizzalogo-in'}></img>
                    </div>

                    <div className={'pizzalist'}>
                        <div className={'pizzalist-item pizzalist-active'}>
                            <img src={require('themes/images/icon-shop.png')} alt="Image" class={'pizzalist-delfull'} onClick={this.openmodaldelfull}></img>
                            <div className={'pizzalist-squad'}>
                                <center><img src={require('themes/images/f-dough.png')} alt="Image" class={'pizzalist-img'}/>
                                <div className={'pizzalist-name'}>Пицца Пеперрони</div>
                                <div className={'pizzalist-cost'}>270,00₽</div></center>
                                <img src={require('themes/images/icon-edit.png')} alt="Image" class={'pizzalist-edit'}></img>
                                <img src={require('themes/images/icon-del.png')} alt="Image" class={'pizzalist-del'} onClick={this.openmodaldelfull}></img>
                            </div>
                        </div>
                        <div className={'pizzalist-item'}>
                            <img src={require('themes/images/icon-shop.png')} alt="Image" class={'pizzalist-delfull'} onClick={this.openmodaldelfull}></img>
                            <div className={'pizzalist-squad'}>
                                <center><img src={require('themes/images/f-dough.png')} alt="Image" class={'pizzalist-img'}/>
                                <div className={'pizzalist-name'}>Тесто 1</div>
                                <div className={'pizzalist-cost'}>0,00₽</div></center>
                                <img src={require('themes/images/icon-edit.png')} alt="Image" class={'pizzalist-edit'}></img>
                                <img src={require('themes/images/icon-del.png')} alt="Image" class={'pizzalist-del'} onClick={this.openmodaldel}></img>
                            </div>
                            <div className={'pizzalist-squad'}>
                                <center><img src={require('themes/images/f-sauce.png')} alt="Image" class={'pizzalist-img'}/>
                                <div className={'pizzalist-name'}>Соус 1</div>
                                <div className={'pizzalist-cost'}>0,00₽</div></center>
                                <img src={require('themes/images/icon-edit.png')} alt="Image" class={'pizzalist-edit'}></img>
                                <img src={require('themes/images/icon-del.png')} alt="Image" class={'pizzalist-del'} onClick={this.openmodaldel}></img>
                            </div>
                            <div className={'pizzalist-squad'}>
                                <center><img src={require('themes/images/f-filling.png')} alt="Image" class={'pizzalist-img'}/>
                                <div className={'pizzalist-name'}>Наполнение 5</div>
                                <div className={'pizzalist-cost'}>220,00₽</div></center>
                                <img src={require('themes/images/icon-edit.png')} alt="Image" class={'pizzalist-edit'}></img>
                                <img src={require('themes/images/icon-del.png')} alt="Image" class={'pizzalist-del'} onClick={this.openmodaldel}></img>
                            </div>
                            <div className={'pizzalist-squad'}>
                                <center><img src={require('themes/images/f-additive.png')} alt="Image" class={'pizzalist-img'}/>
                                <div className={'pizzalist-name'}>Добавка 2</div>
                                <div className={'pizzalist-cost'}>20,00₽</div></center>
                                <img src={require('themes/images/icon-edit.png')} alt="Image" class={'pizzalist-edit'}></img>
                                <img src={require('themes/images/icon-del.png')} alt="Image" class={'pizzalist-del'} onClick={this.openmodaldel}></img>
                            </div>
                        </div>
                    </div>

                    <footer className={'ft'} onLoad={this.openmodalstart}>
                        <button className={'cancel'} onClick={this.openmodalcancel}>
                            <img src={require('themes/images/icon-back.png')} alt='img' class={'button-logo'}></img>
                            <span className={'button-text'}>Отменить</span>
                        </button>
                        <button className={'accept'} onClick={this.handlingGoToPay}>
                            <img src={require('themes/images/icon-accept.png')} alt='img' className={'button-logo'}/>
                            <span className={'button-text'}>Оплатить</span>
                        </button>
                        <span className={'total-cost'}>350,00₽</span>
                        <div>{this.fullcost}</div>
                    </footer>
            </div>
        )
    }
}

export default MenuPage;