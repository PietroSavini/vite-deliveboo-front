import {reactive} from 'vue';

export const store = reactive({
    // Restaurant types
    ApiTypesUrl : 'http://localhost:8000/api/types',
    types : [],
})



