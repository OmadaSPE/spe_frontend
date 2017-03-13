import './item.css!';
import tmpl from './item.html!text';
import Vue from 'vue/dist/vue.js';

export default Vue.extend({
    template: tmpl,
    data(){
        return {
            id: null,
            item: null
        }
    },
    methods: {
        tag_url(tag){
            return '/results?q=' + tag;
        }
    },
    created(){
        Object.assign(this, this.$route.params);
        this.$http.get(`http://localhost:3000/images/${this.id}`).then((results)=>{
            this.item = results.body;
            console.log(this.item.description);
        });
    },
    mounted(){
        this.$bus.$emit('show-nav');
    }
});
