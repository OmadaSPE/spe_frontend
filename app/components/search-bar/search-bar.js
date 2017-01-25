import './search-bar.css!';
import tmpl from './search-bar.html!text';
import Vue from 'vue/dist/vue.js';

export default Vue.extend({
    template: tmpl,
    data(){
        return {
            query: ""
        }
    },
    methods: {
        search(){
            this.$bus.$emit("searched", this.query)
        }
    }
});
