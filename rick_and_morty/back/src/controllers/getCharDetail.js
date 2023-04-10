const { default: axios } = require("axios")


const URL_BASE= "https://be-a-rym.up.railway.app/api/detail";
const KEY = "6efd8a9f97d1.f082998d50a70b22d308";

const successH= (response, res) => {
   const {image, name, gender, status, origin, species} = response.data;
   res.writeHead(200, {"Content - Type" : "application/json"})
   res.end(JSON.stringify({image, name, gender, status, origin, species}));
};

const errorH = (error, res) => {
    res.writeHead(500, {"Content - Type" : "text/plain"});
    res.end (error.message)
};

const getCharDetail = (res, id) => {

    axios
    .get (`${URL_BASE}/character/${id}?key=${KEY}`)
    .then ((response) => successH(response, res))
    .catch ((error) => errorH(error, res));

}
module.exports = getCharDetail;