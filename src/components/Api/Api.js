import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://itunes.apple.com/'
});



export const queryApi = {
    getQuery(query) {
        return instance.get(`search?term=${query}&entity=musicVideo`)
            .then((response => {
                return response;
            }))
    }
};
