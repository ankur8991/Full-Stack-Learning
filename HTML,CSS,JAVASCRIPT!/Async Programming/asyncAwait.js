/*
function getData(data) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                name:"Ankur kumar sharma",
                data: data
            })
        }, 1000);
    })
}

async function fetchData(){
     let response = await getData("Age: 21")     // here we can use the await keyword for response handle in the async await formatted but here the one thing we can sees the await keyword on the code of line apply whose runs firstly then their function others codes of the lines can performs in other words says that they await line of the code can holds the same function codes of the line when they can fullfilled or not.
     let response2 = await getData("Gmail: kumarAnkur4452@gmail.com")
     let response3 = await getData("gender: Male")
     let response4 = await getData("Company: Microsoft")
     let response5 = await getData("married: no")
     console.log(response)
     console.log(response2)
     console.log(response3)
     console.log(response4)
     console.log(response5)
    }

fetchData()
*/


/*
async function fetchData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(data)
}

fetchData()
*/