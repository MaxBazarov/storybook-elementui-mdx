import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

export default {
    name: 'cbspan',
    props: [],
    template: `
    <span>
      <slot></slot>
    </span>
  `,

    methods: {
        onClick() {
            this.$emit('click');
        },
    },
};
