import React, { Component } from 'react';
import {  updateSec, getSec, deleteSec } from "../services/security";

export default class Security extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.getSecurity = this.getSecurity.bind(this);
        this.updateSecurity = this.updateSecurity.bind(this);
        this.deleteSecurity = this.deleteSecurity.bind(this);

        this.state = {
            currentSecurity: {
                id: null,
                name: "",
                email: "",
                password: ""
            },
            message: ""
        };
    };

    componentDidMount(){
        this.getSecurity(this.props.match.params.id);
    }

    onChangeName(e){
        const name = e.target.value;

        this.setState(function(prevState){
            return {
                currentSecurity: {
                    ...prevState.currentSecurity,
                    name : name
                }
            };
        });
    }

    onChangeEmail(e){
        const email = e.target.value;

        this.setState(function(prevState){
            return {
                currentSecurity: {
                    ...prevState.currentSecurity,
                    email : email
                }
            };
        });
    }

    onChangePassword(e){
        const password = e.target.value;

        this.setState(function(prevState){
            return {
                currentSecurity: {
                    ...prevState.currentSecurity,
                    password : password
                }
            };
        });
    }

    getSecurity(id){
        getSec(id)
            .then(response => {
                this.setState({
                    currentSecurity: response.data
                });
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            })
    }

    updateSecurity(){
        updateSec(
            this.state.currentSecurity.id,
            this.state.currentSecurity
        )
        .then(response => {
            console.log(response.data);
            this.setState({
                message: "Os dados do analista foram atualizados com sucesso"
            })  
        }).catch(e => {
            console.log(e);
        })
    }

    deleteSecurity(){
        deleteSec(this.state.currentSecurity.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/securities')
            })
            .catch(e => {
                console.log(e);
            });
    }

    render(){
        const { currentSecurity } = this.state;

        return (
            <div>
                {currentSecurity ? (
                    <div className="edit-form">
                        <h4>Analista</h4>
                        <form>
                            <div className="fomr-group">
                                <label htmlFor="name">Nome</label>
                                <input type="text" 
                                className="form-control" id="name" 
                                value={currentSecurity.name} 
                                onChange={this.onChangeName}/>
                            </div>

                            <div className="fomr-group">
                                <label htmlFor="email">E-mail</label>
                                <input type="text" 
                                className="form-control" id="email" 
                                value={currentSecurity.email} 
                                onChange={this.onChangeEmail}/>
                            </div>

                            <div className="fomr-group">
                                <label htmlFor="password">Senha</label>
                                <input type="password" 
                                className="form-control" id="password" 
                                value={currentSecurity.password} 
                                onChange={this.onChangePassword}/>
                            </div>
                        </form>

                        <button className="badge badge-danger mr-2" onClick={this.deleteSecurity}>Deletar analista</button>
                        <button className="badge badge-sucess mr-2" onClick={this.updateSecurity}>Atualizar analista</button>
                        <p>{ this.state.message }</p>
                    </div>
                ): (
                    <div>
                        <br/>
                        <p>Selecione um analista</p>
                    </div>
                )}
            </div>
        )
    }
}

    