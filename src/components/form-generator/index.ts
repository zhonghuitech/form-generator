import TestButton from "./button/index.vue";

// 按需引入
export { TestButton };

const component = [TestButton];

const FormGenerator = {
    install(App) {
        component.forEach((item) => {
            App.component(item.name, item);
        });
    },
};

export default FormGenerator;