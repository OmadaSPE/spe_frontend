import './search.css!';
import tmpl from './search.html!text';
import Vue from 'vue/dist/vue.js';

export default Vue.extend({
    template: tmpl,
    data(){
        return {
            query: "",
            attempt: false
        }
    },
    computed: {
        url(){
            return '/results?q=' + this.query;
        },
        error(){
            return this.query.length < 1 && this.attempt
        }
    },
    methods: {
        search(){
            if(this.query.length < 1){
                this.attempt = true;
            } else {
                this.$router.push(this.url);
            }
        }
    },
    mounted(){
        this.$bus.$emit('hide-nav');
    }
});
