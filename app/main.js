import 'bootstrap/css/bootstrap.css!';
import 'font-awesome';
import 'flat-ui/css/flat-ui.css!';
import 'bootstrap';
import "resources/style.css!";
import Vue from 'vue/dist/vue.js';
import Resource from 'vue-resource';
import Router from 'vue-router';

import search from 'app/pages/search/search';
import results from 'app/pages/results/results'
import item from 'app/pages/item/item'

import nav from 'app/components/nav-bar/nav-bar';
import model from 'app/components/model/model';

Vue.use(Resource);
Vue.use(Router);

Vue.use({install:function(Vue, options){
    var bus = new Vue();
    Vue.mixin({
        created(){
            this.$bus = bus;
        }
    });
}});

var router = new Router({
    routes: [
        {path : '/item/:id',    component: item},
        {path : '/results',     component: results},
        {path : '*',            component: search}
    ]
});

var app =  window.app = new Vue({
    el: '.app',
    data(){
        return {}
    },
    mounted(){
    },
    methods: {
    },
    components: {
        "nav-bar": nav,
        "model": model
    },
    router: router
});
