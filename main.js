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

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)