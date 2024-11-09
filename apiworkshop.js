const TOKEN = "ZZ2R1Eq7bFtr0FxIAGUtzQ==g3rdURqf5PIYd8mM"
const APIURL = "https://api.api-ninjas.com/v1/exercises"
const OPTION = {
    method: 'GET',
    headers: { 'x-api-key' : TOKEN}
}

fetch(APIURL, OPTION) // returns Promise