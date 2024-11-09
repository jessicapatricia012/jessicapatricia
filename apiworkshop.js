const TOKEN = "ZZ2R1Eq7bFtr0FxIAGUtzQ==g3rdURqf5PIYd8mM"
const APIURL = "https://api.api-ninjas.com/v1/exercises?muscle=biceps"
const OPTION = {
    method: 'GET',
    headers: { 'x-api-key' : TOKEN}
}

fetch(APIURL, OPTION) // returns Promise
.then(response => {
    if (!response.ok) {
        throw new Error('Network not working')
    }
    return response.json()
})
.then(data => {
    console.log(data.map(item=>item.name))
})
.catch(error => {
    console.error('Error', error)
})


const APIURL2 = 'https://reqres.in/api/users'
// does not need token, dangerous
const OPTION2 = {
    method: 'POST',
    body: JSON.stringify({
        "name": "john",
        "job": "farmer"

    })
}

fetch(APIURL2, OPTION2)
.then(response => {
    if (!response.ok) {
        throw new Error('Network not working')
    }
    return response.json()
})
.then(update => {
    console.log(update)
})
.catch(error => {
    console.error('Error', error) //or console.log(), .error() if know for sure it's an error
})