const detail = (url)=>{
fetch(url).then(response => response.json())
.then(data =>{
    console.log(data)
})
.catch(err => {
    console.log("Couldn't fetch Pokemons details ",err)
})
}
module.exports =detail;