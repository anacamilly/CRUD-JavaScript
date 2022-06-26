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

//  CRUD - Create Read Update Delete
const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client'))
    db_client.push(client)
    localStorage.setItem("db_client", JSON.stringify(db_client))
}

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)