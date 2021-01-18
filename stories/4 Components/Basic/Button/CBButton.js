import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

export default {
    name: 'cbbuton',
    props: ['type', 'plain'],
    template: `
    <el-button @click="onClick" :type="type" :plain="plain" >
      <slot></slot>
    </el-button>
  `,

    methods: {
        onClick() {
            this.$emit('click');
        },
    },
};
