import './results.css!';
import tmpl from './results.html!text';
import Vue from 'vue/dist/vue.js';

export default Vue.extend({
    template: tmpl,
    data(){
        return {
            results: null,
            pages: 1,
            current_page: 1,
            q: ""
        }
    },
    created(){
        Object.assign(this, this.$route.query);
        if(this.q.length < 1)
            this.$router.go(-1);
            this.$http.get(`http://localhost:3000/images/query?q=${this.q}`).then((results)=>{
                this.results = results.body;
            });
    },
    mounted(){
        this.$bus.$emit('show-nav');
    }
});
