import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'; // 三方依赖
import 'element-plus/theme-chalk/index.css';
import SvgIcon from '@/components/SvgIcon/index.vue'
import * as ElIcon from '@element-plus/icons-vue'
import { VueDraggableNext } from "vue-draggable-next";
import DraggableWarp from "@/components/VFG/form/DraggableWarp.vue";
import OptionInput from "@/components/VFG/form/OptionInput.vue";
import UploadWarp from "@/components/VFG/form/elementWarp/UploadWarp.vue";

import zhCn from 'element-plus/es/locale/lang/zh-cn';
import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css' //样式文件

import DemoUI from "./components/demo-ui"; //导入
import { VFG } from "./components/VFG"

const app = createApp(App);
app.use(ElementPlus, {
    locale: zhCn,
});

app.use(DemoUI)
app.use(VFG)

app.component("draggable", VueDraggableNext as any);
app.component("draggable-warp", DraggableWarp as any);
app.component("option-input", OptionInput as any);
import 'virtual:svg-icons-register'
Object.keys(ElIcon).forEach((key) => {
    app.component(key, ElIcon[key as keyof typeof ElIcon])
})
app.component("svg-icon", SvgIcon as any);
app.component("upload-warp", UploadWarp as any);

app.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    setTimeout(() => {
        blocks.forEach((block: any) => {
            hljs.highlightBlock(block)
        })
    }, 200)
})
app.mount('#app')
