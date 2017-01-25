import './image-thumb.css!';
import tmpl from './image-thumb.html!text';
import Vue from 'vue/dist/vue.js';

export default Vue.extend({
    template: tmpl,
    props: ["item"],
    data(){
        return {
            foo: ""
        }
    },
    computed:{
        url(){
            return `/resources/${this.item}.jpg`;
        }
    }
});
