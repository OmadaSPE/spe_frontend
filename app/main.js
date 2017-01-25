import Vue from 'vue/dist/vue.js';
import Resource from 'vue-resource';

import search from 'app/components/search-bar/search-bar';
import results from 'app/components/results/results';

Vue.use(Resource);

Vue.use({install:function(Vue, options){
    var bus = new Vue();
    Vue.mixin({
        created(){
            this.$bus = bus;
        }
    });
}});

var app =  window.app = new Vue({
    el: '.app',
    data(){
        return {
            page: "search-bar",
            query: null

        }
    },
    mounted(){
        this.$bus.$on("searched", (arg)=>{
            this.query = arg;
            this.page = "results";
        });
    },
    methods: {
    },
    components: {
        'search-bar': search,
        'results': results
    }
});
