import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

export default {
    name: 'CBAlert',
    props: {        
        title:{
            type:String,
            required:true
        },
        //'type', 'closable',"show-icon"
    },
    template: `
     <el-alert
        :title="title"
        :type="type"
        :closable="closable"
        :show-icon="show-icon"
    >
    </el-alert>    
  `,

    methods: {
        onClick() {
            this.$emit('click');
        },
    },
};
