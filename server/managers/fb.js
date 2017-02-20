import fetch from 'node-fetch';

const graphUrl = 'https://graph.facebook.com/v2.5';
let accessToken;

const FB = {
    get: async (path) => {
        return (await fetch(graphUrl + path, { headers: { Authorization: 'OAuth ' + accessToken } })).json();
    },

    post: async (path, data) => {
        return (await fetch(graphUrl + path, { 
            method: 'POST', 
            body: data, 
            headers: { Authorization: 'OAuth ' + accessToken } 
        })).json();
    },

    setAccessToken: (val) => {
        accessToken = val;
    },

    getAccessToken: () => {
        return accessToken;
    }
};

export default FB;