import './model.css!';
import tmpl from './model.html!text';
import Vue from 'vue/dist/vue.js';

export default Vue.extend({
    template: tmpl,
    data(){
        return {
            title: '',
            media_type: '',
            mimeformat: '',
            department: '',
            subjects: '',
            description: '',
            notes: '',
            taxonomy: ''
        }
    },
    computed: {
        url(){
            var str = '/results?a=t'
            if(this.title.length > 0 ) str += `&title=${this.title}`;
            if(this.mimeformat.length > 0 ) str += `&format=${this.mimeformat}`;
            if(this.department.length > 0 ) str += `&department=${this.department}`;
            if(this.description.length > 0 ) str += `&description=${this.description}`;
            if(this.taxonomy.length > 0 ) str += `&taxonomy=${this.taxonomy}`;
            if(this.subjects.length > 0 ) str += `&subjects=${this.subjects}`;
            if(this.notes.length > 0 ) str += `&notes=${this.notes}`;
            if(str === '/results?a=t') return false;
            return str
        }
    },
    methods: {
        go(){
            if(this.url){
                this.$router.push(this.url)
            }
        }
    }
});
