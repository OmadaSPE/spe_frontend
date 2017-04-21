import './results.css!';
import tmpl from './results.html!text';
import Vue from 'vue/dist/vue.js';

export default Vue.extend({
    template: tmpl,
    data(){
        return {
            results: [],
            page: 0,
            q: "",
            loading: true,
            more: false,
            query: ""
        }
    },
    created(){
        Object.assign(this, this.$route.query);
        if(this.a){
            var str = '';
            if(this.title) str += `&title=${this.title}`;
            if(this.mimeformat) str += `&format=${this.mimeformat}`;
            if(this.department) str += `&department=${this.department}`;
            if(this.description) str += `&description=${this.description}`;
            if(this.taxonomy) str += `&taxonomy=${this.taxonomy}`;
            if(this.subjects) str += `&subjects=${this.subjects}`;
            if(this.notes) str += `&notes=${this.notes}`;
            this.loading = true;
            this.query = `http://localhost:3000/images/advanced?${str}`;
            this.q = 'Advanced';
            this.getMore();

        }
        else if(this.q.length < 1){
            this.$router.go(-1);
        } else {
            this.query = `http://localhost:3000/images/query?q=${this.q}`
            this.getMore();
        }
    },
    methods: {
        getMore(){
            this.$http.get(this.query+`&page=${this.page}`).then((results)=>{
                this.results = this.results.concat(results.body);
                this.more = results.body.length === 20;
                this.loading = false;
                this.page++;
            });
        }
    },
    mounted(){
        this.$bus.$emit('show-nav');
    }
});
