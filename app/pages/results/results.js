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
        if(this.a){
            var str = '';
            if(this.title) str += `&title=${this.title}`;
            if(this.mimeformat) str += `&format=${this.mimeformat}`;
            if(this.department) str += `&department=${this.department}`;
            if(this.description) str += `&notes=${this.description}`;
            if(this.taxonomy) str += `&taxonomy=${this.taxonomy}`;
            if(this.subjects) str += `&subjects=${this.subjects}`;
            if(this.notes) str += `&notes=${this.notes}`;
            this.$http.get(`http://localhost:3000/images/advanced?${str}`).then((results)=>{
                this.results = results.body;
            });
            this.q = 'Advanced'
        }
        else if(this.q.length < 1){
            this.$router.go(-1);
        } else {
            this.$http.get(`http://localhost:3000/images/query?q=${this.q}`).then((results)=>{
                this.results = results.body;
            });
        }


    },
    mounted(){
        this.$bus.$emit('show-nav');
    }
});
