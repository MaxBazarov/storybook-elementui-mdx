import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

export default {
    name: 'CBLink',
    props: ['type', 'icon', 'disabled', 'underline', 'href'],
    template: `
    <el-link @click="onClick" :type="type" :icon="icon" :disabled="disabled" :underline="underline" :href="href">
      <slot></slot>
    </el-link>
  `,

    methods: {
        onClick() {
            this.$emit('click');
        },
    },
};
