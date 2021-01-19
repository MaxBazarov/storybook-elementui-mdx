import Vue from 'vue';
import Element from 'element-ui';
import { Notification } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);
Vue.prototype.$notify = Notification;

export default {
    name: 'CBNotification',    
    template: `
    <a href="#" onclick="alert('ss')"><slot></slot></a>
  `,
    methods: {
        show1() {
            alert("sss")
             this.$notify({
                 title: 'Prompt',
                message: 'This is a message that does not automatically close',
                duration: 0
            })
        },
    },
};
