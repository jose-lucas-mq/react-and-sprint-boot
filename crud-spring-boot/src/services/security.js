import axios from "axios";
const url = "http://localhost:8080";

    export function getAllSec(){
        return axios(`${url}/securityanalyst`);
    }

    export function getSec(id){
        return axios(`${url}/securityanalyst/${id}`);
    }

    export function createSec(data){
        return axios.post(`${url}/securityanalyst`, data);
    }

    export function updateSec(id, data){
        return axios.put(`${url}/securityanalyst/${id}`, data);
    }

    export function deleteSec(id){
        return axios.delete(`${url}/securityanalyst/${id}`);
    }

