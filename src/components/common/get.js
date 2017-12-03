import { BASE_URL } from './constants';

class Get {
    
    status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    }
    
    json(response) {
        return response.json();
    }
    
    makeRequest(handler, param) {
        let url = `${BASE_URL}${param}`;
        fetch(url)
            .then(this.status)
            .then(this.json)
            .then(result => handler(result))
            .catch(error => console.log(error))
    }
}

export const get = new Get();