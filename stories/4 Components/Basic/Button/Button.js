import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

export default {
    name: 'button',
    props: ['type', 'size', 'plain'],
    template: `
    <el-button @click="onClick" :type="type" :size="size" :plain="plain">
      <slot></slot>
    </el-button>
  `,

    methods: {
        onClick() {
            this.$emit('click');
        },
    },
};
