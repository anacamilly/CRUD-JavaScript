'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Ana",
    email: "ana@gmail.com",
    celular: "123456778",
    cidade: "Natal"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

//  CRUD - Create Read Update Delete

// CRUD - Delete
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

// CRUD - Update
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

// CRUD - Read
const readClient = () => getLocalStorage();

// CRUD - Create
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}

const isValidFields = () => {
    document.getElementById('form').reportValidity()
}

// Interação com o layout
const saveClient = () => {
    if(isValidFields()){
        const client = {
            nome: document.getElementById('nome'),
            email: document.getElementById('email'),
            celular: document.getElementById('celular'),
            cidade: document.getElementById('cidade'),
        }
        createClient(client)
    }
}


// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)