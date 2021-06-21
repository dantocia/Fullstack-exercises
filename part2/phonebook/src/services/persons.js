import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getInfo = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const createPerson = newPerson => {
    const request = axios.post(url,newPerson)
    return request.then(response => response.data)
}
const deletePerson = id =>{
    const request = axios.delete(`${url}/${id}`)
    return request
}

const updatePhone = (id,newPerson) => {
    const request = axios.put(`${url}/${id}`,newPerson)
    return request.then(response => response.data)
}

export default { getInfo, createPerson, deletePerson, updatePhone }