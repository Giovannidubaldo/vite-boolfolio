import { reactive } from 'vue';

export const store = reactive({
    baseUrl: 'http://127.0.0.1:8000',
    menuHeader: [
        {
            name: 'home',
            label: 'Home'
        },
        {
            name: 'project',
            label: 'Progetti'
        },
        {
            name: 'contacts',
            label: 'Contattaci'
        }
    ]
})