import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faChevronUp);

window.testObj = {
    a: [1,2,3,4,5],
    b: 'bobert',
    c: { foo: 'bar' },
}

window.foo = () => {
    alert('hello');
}

createApp(App)
    .component('fa-icon', FontAwesomeIcon)
    .mount('#app')
