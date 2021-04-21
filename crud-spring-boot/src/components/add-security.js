import React, { Component } from "react";
import { createSec } from "../services/security";

export default class AddSecurity extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.saveSecurity = this.saveSecurity.bind(this);
        this.newSecurity = this.newSecurity.bind(this);

        this.state = {
            id: null,
            name: "",
            email: "",
            password: "",

            submitted: false
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }


    saveSecurity() {
        let data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        console.log(data)
        createSec(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    email: response.data.email,
                    password: response.data.password,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newSecurity(){
        this.setState = {
            id: null,
            name: "",
            email: "",
            password: "",

            submitted: false
        };
    }

    render(){
        return(
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Analista salvo com sucesso</h4>
                        <button className="btn btn-sucess" onClick={this.newSecurity}>Adicionar</button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input type="text" 
                                className="form-control" 
                                id="name" required 
                                value={this.state.name} 
                                onChange={this.onChangeName} 
                                name="name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" 
                                className="form-control" 
                                id="email" required 
                                value={this.state.email} 
                                onChange={this.onChangeEmail} 
                                name="email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input type="password" 
                                className="form-control" 
                                id="password" required 
                                value={this.state.password} 
                                onChange={this.onChangePassword} 
                                name="password"
                            />
                        </div>

                        <button className="btn btn-sucess" onClick={this.saveSecurity}>
                            Salvar <i class="fas fa-save"></i>
                        </button>
                    </div>
                )}
            </div>
        );
    }
}