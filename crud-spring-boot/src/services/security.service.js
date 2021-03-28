import http from "../http-common";

class SecurityDataService{
    getAll(){
        return http.get("/securityanalyst");
    }

    get(id){
        return http.get(`/securityanalyst/${id}`)

    }

    create(data){
        return http.post("/securityanalyst", data);
    }

    update(id, data){
        return http.put(`/securityanalyst/${id}`, data);
    }

    delete(id){
        return http.delete(`/securityanalyst/${id}`);
    }

}

export default SecurityDataService;