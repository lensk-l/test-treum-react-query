import axios from "axios";const BASE_URL =  process.env.NODE_ENV === 'production' ? 'https://test-treeum-query.herokuapp.com' : 'http://localhost:3000'axios.defaults.baseURL = BASE_URLexport  const ProductsService = {    async getAll(){        return axios.get(`/api/products`).then(response => response.data)    },    async getAllByParams(params){       return   axios.get(`/api/products`+ params).then(response => response.data)    }}