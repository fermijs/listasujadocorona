import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { encode } from "base-64";
import { getApiUrl } from '../../helpers/GetApiUrl';

const Wrapper = styled.form`
    align-items: center;
    border: 3px solid black;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40px auto 0;
    max-width: 768px;
    padding: 40px 20px;
    width: 100%;
`;

const Button = styled.button`
    background-color: #24a0ed;
    border: 3px solid black;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 24px;
    font-weight: 700;
    line-height: 60px;
    margin: 20px auto 0;
    max-width: 240px;
    padding: 10px 40px;
    text-align: center;
    text-decoration: none;
    transition: background-color .125s ease-in-out;

    &:hover {
        background-color: #3c5b97;
    }
`;

const AddEvidence = styled.button`
    background-color: green;
    border: 3px solid black;
    box-shadow: 0;
    color: white;
    font-size: 16px;
    margin: 20px 0;
    padding: 10px 20px;
    max-width: 200px;
`;

const InputWrapper = styled.label`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;

    span {
        display: block;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    input {
        border: 3px solid black;
        box-shadow: none;
        display: block;
        margin-top: 10px;
        padding: 10px;
        font-size: 16px;
    }
`;

export default class AdminPage extends React.Component {
    constructor() {
        super();

        this.state = {
            auth: {
                user: '',
                password: ''
            },
            politician: {
                name: '',
                slug: '',
                profilePicture: '',
                party: '',
                twitter: '',
                state: '',
                evidences: [
                    {
                        description: '',
                        link: '',
                        source: ''
                    }
                ]
            }
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEvidenceEdit = this.handleEvidenceEdit.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
        this.addEvidence = this.addEvidence.bind(this);

        if (!!window.localStorage.auth) {
            const auth = JSON.parse(window.localStorage.auth);

            this.setState({
                auth
            });
        }
    }

    addEvidence() {
        const evidence = {
            description: '',
            link: '',
            source: ''
        };

        const evidences = [...this.state.politician.evidences, evidence];
        const politician = Object.assign({}, this.state.politician, {evidences});

        this.setState({
            politician
        });
    }

    handleAuth(event) {
        const auth = Object.assign({}, this.state.auth, {[event.target.name]: event.target.value});

        this.setState({
            auth
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { auth } = this.state;

        fetch(getApiUrl`politicans`, {
            method:'post',
            headers: {
                'Authorization': 'Basic ' + encode(auth.user + ":" + auth.password),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.politician)
        })
            .then(e => {
                if (e.ok) {
                    window.localStorage.auth = JSON.stringify(auth);
                }
            })
    }

    handleInput(event) {
        const politician = Object.assign({}, this.state.politician, {[event.target.name]: event.target.value});

        this.setState({
            politician
        });
    }

    handleName(event) {
        const { value } = event.target;
        let slug = value;

        if (value) {
            slug = slug.toLowerCase();
            slug = slug.replace(/\s/g, '-');
        }

        const politician = Object.assign({}, this.state.politician, {
            name: value,
            slug
        });

        this.setState({
            politician
        });
    }

    handleEvidenceEdit(event) {
        const { target } = event;
        const { value } = target;
        const { name } = target;
        const { index } = target.dataset;
        const evidence = this.state.politician.evidences[index];

        if (name === 'link') {
            if (value.includes('twitter')) {
                const tweet = value.split('/');
                const tweetId = tweet[tweet.length - 1];

                evidence.tweetId = tweetId;
            }
        }

        evidence[name] = value;

        const evidences = [...this.state.politician.evidences];
        evidences[index] = evidence;

        const politician = Object.assign({}, this.state.politician, {evidences})

        this.setState({
            politician
        });
    }

    render() {
        return (
            <Wrapper onSubmit={this.handleSubmit}>
                <Helmet>
                    <meta name='robots' content='noindex' />
                </Helmet>
                <InputWrapper>
                    <span>
                        USER AUTH
                    </span>
                    <input placeholder='Usuario' name='user' value={this.state.auth.user} onChange={this.handleAuth} required />
                </InputWrapper>
                <InputWrapper>
                    <span>
                        SENHA AUTH
                    </span>
                    <input placeholder='Senha' name='password' value={this.state.auth.password} onChange={this.handleAuth} required />
                </InputWrapper>
                <InputWrapper>
                    <span>
                        Nome
                    </span>
                    <input placeholder='Nome do candidato' name='name' value={this.state.politician.name} onChange={this.handleName} required />
                </InputWrapper>
                <InputWrapper>
                    <span>
                        Slug (URL do candidato)
                    </span>
                    <input placeholder='URL do candidato' name='slug' value={this.state.politician.slug} onChange={this.handleInput} required />
                </InputWrapper>
                <InputWrapper>
                    <span>
                        Estado do candidato (sigla com letra maiuscula, ex: RJ, RS, SP)
                    </span>
                    <input placeholder='ESTADO' name='state' value={this.state.politician.state} onChange={this.handleInput} required />
                </InputWrapper>
                <InputWrapper>
                    <span>
                        URL Imagem de perfil (copiar do Wikipedia ou Twitter)
                    </span>
                    <input placeholder='Url imagem de perfil' name='profilePicture' onChange={this.handleInput} required />
                </InputWrapper>
                <InputWrapper>
                    <span>
                        Partido
                    </span>
                    <input placeholder='Sigla do partido do candidato' name='party' onChange={this.handleInput} required />
                </InputWrapper>
                <InputWrapper>
                    <span>
                        Twitter (com @)
                    </span>
                    <input placeholder='Twitter do candidato com @' name='twitter' onChange={this.handleInput} />
                </InputWrapper>
                {
                    this.state.politician.evidences.map((evidence, index) => {
                        return (
                            <div key={index}>
                                <InputWrapper>
                                    <span>
                                        Descrição da Evidência
                                    </span>
                                    <input
                                        value={this.state.politician.evidences[index].description}
                                        placeholder='Exemplo: desinformação'
                                        name='description'
                                        data-index={index}
                                        onChange={this.handleEvidenceEdit}
                                        required
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <span>
                                        Link da evidência (preferencialmente twitter)
                                    </span>
                                    <input
                                        value={this.state.politician.evidences[index].link}
                                        placeholder='twitter.com/xd'
                                        name='link'
                                        data-index={index}
                                        onChange={this.handleEvidenceEdit}
                                        required
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <span>
                                        Fonte da evidência
                                    </span>
                                    <input
                                        value={this.state.politician.evidences[index].source}
                                        placeholder='twitter'
                                        name='source'
                                        data-index={index}
                                        onChange={this.handleEvidenceEdit}
                                        required
                                    />
                                </InputWrapper>
                            </div>
                        );
                    })
                }
                <AddEvidence onClick={this.addEvidence}>
                    Adicionar evidência
                </AddEvidence>
                <Button type="submit">
                    Adicionar
                </Button>
            </Wrapper>
        );
    }
};
