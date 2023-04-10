const axios = require ("axios");

const URL_BASE= "https://be-a-rym.up.railway.app/api";
const KEY = "6efd8a9f97d1.f082998d50a70b22d308";

const successH = (response, res) => {
    const { id, image, name, gender, species } = response.data
   res.writeHead(200, { "Content-Type": "application/json" });
   res.end(JSON.stringify({ id, image, name, gender, species })); 
}
const errorH = ((error, res) => {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(error.message);
    })

const getCharById = (res, id) => {

    axios
    .get(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => successH(response, res))
    .catch ((error) => errorH(error, res));
        
    };
        
    


module.exports = getCharById;