import './results.css!';
import tmpl from './results.html!text';
import Vue from 'vue/dist/vue.js';

import thumb from 'app/components/image-thumb/image-thumb';

export default Vue.extend({
    template: tmpl,
    props: ["query"],
    data(){
        return {
            results: ["1","2","3"]
        }
    },
    mounted(){
        if(!this.query){
            this.$http.get(`localhost:3000/images?q=${this.query}`).then((results)=>{
                this.results = results;
            });
        }
    },
    components: {
        "image-thumb": thumb
    }
});
