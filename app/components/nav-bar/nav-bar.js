import './nav-bar.css!';
import tmpl from './nav-bar.html!text';
import Vue from 'vue/dist/vue.js';

export default Vue.extend({
    template: tmpl,
    data(){
        return {
            show: false
        }
    },
    mounted(){
        this.$bus.$on('hide-nav', ()=>{
            this.show = false;
        });
        this.$bus.$on('show-nav', ()=>{
            this.show = true;
        });
    }
});
