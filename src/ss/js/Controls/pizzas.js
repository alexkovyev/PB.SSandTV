import React from 'react';
import PropTypes from 'prop-types';

        
var PizzasArr = [
    {
        id: 0,
        name: 'Пицца Пепеорни',
        desc: 'dfgdf ysdfgousdgfugskldfjbslosf s  ifws f gsd ihfg lsgf pas gis ',
        cost: 300,
        img: 'themes/images/f-filling.png'
    },
    {
        id: 1,
        name: 'Пицца Пепеорни',
        desc: 'dfgdf ysdfgousdgfugskldfjbslosf s  ifws f gsd ihfg lsgf pas gis ',
        cost: 400,
        img: 'themes/images/f-filling.png'
    },
    {
        id: 2,
        name: 'Пицца Пепеорни',
        desc: 'dfgdf ysdfgousdgfugskldfjbslosf s  ifws f gsd ihfg lsgf pas gis ',
        cost: 200,
        img: 'themes/images/f-filling.png'
    }
]

const PizzaCount = 3;

function pizzas() {
}

pizzas.propTypes = {
    PizzasArr: PropTypes.number,
}

export default pizzas;