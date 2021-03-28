import React, { Component } from 'react';
import SecurityDataService from "../services/security.service";
import { Link } from "react-router-dom";

export default class SecurityList extends Component {
    constructor(props) {
        super(props);
        this.retrieveSecurity = this.retrieveSecurity.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveSecurity = this.setActiveSecurity.bind(this);

        this.state = {
            securities: [],
            currentSecurity: null,
            currentIndex: -1
        };
    }

    componentDidMount(){
        this.retrieveSecurity();
    }

    retrieveSecurity(){
        SecurityDataService.getAll()
            .then(response => {
                this.setState({
                    securities: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    refreshList(){
        this.retrieveSecurity();
        this.setState({
            currentIndex: -1,
            currentSecurity: null
        });
    }

    setActiveSecurity(security, index){
        this.state({
            currentIndex: index,
            currentSecurity: security
        });
    }

    // Não temos o metodo deleteAll na ./service/security-service
    // removeAllSecurity(){
    //     SecurityDataService.deleteAll()
    //         .then(response => {
    //             console.log(response.data);
    //             this.refreshList;
    //         })
    //         .catch(e => {
    //             console.log(e)
    //         });
    // }

    render(){
        const { securities, currentSecurity, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-6">
                    <h4>Lista de analista</h4>

                    <ul className="list-group">
                        {securities &&
                            securities.map((security, index) => (
                                <li className={ "list-group-item" + (index === currentIndex ? "active" : "") }
                                    onClick={() => this.setActiveSecurity(security, index)}
                                    key={index}
                                >
                                    {security.name}
                                </li>
                            ))}
                    </ul> 
                </div>

                <div className="col-md-6">
                    {currentSecurity ? (
                        <div>
                            <h4>Analista</h4>
                            <div>
                                <label>
                                    <strong>Nome:</strong>
                                </label> { " " }
                                {currentSecurity.name}
                            </div>
                            <div>
                                <label>
                                    <strong>E-mail:</strong>
                                </label> { " " }
                                {currentSecurity.email}
                            </div>

                            <Link 
                                to={"/securities/" + currentSecurity.id}
                                className="badge badge-warning">
                                Editar
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br/>
                            <p>Escolha um analista ...</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
    
}