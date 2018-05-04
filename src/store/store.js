import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true, //doesn't want to handle mutation from outside
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Sheels', price: 60},
            {name: 'Red Shells', price: 80}        
          ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map( product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach( product => {
                product.price -= payload;
            })
        }
    },
    actions: {
        reducePrice: (context, payload) => { //payload is the amount
            setTimeout(function(){
                context.commit('reducePrice', payload)
            }, 2000)
        }
    }
})