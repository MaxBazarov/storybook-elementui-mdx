import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

export default {
    name: 'button',
    data() {
        return {
            type: "warning"
        }
    },
    template: `
    <el-button @click="onClick" :type="type" >
      <slot></slot>
    </el-button>
  `,

    methods: {
        onClick() {
            this.$emit('click');
        },
    },
};
