const axios = require('axios');
const base_url = 'http://localhost:8000/api'

export function getCurrentPatchData() {

  axios.get(base_url+'/patch/es/913')
  .then(function (response) {
    console.log(response.data)
    return response.data
  })
}