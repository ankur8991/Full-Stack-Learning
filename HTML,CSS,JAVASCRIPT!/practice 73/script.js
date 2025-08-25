function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    let viewStr
    if(views<1000){
         viewStr = views;
    }
    else if(views>1000000){
         viewStr = views/1000000 + "M";
    }
    else{
         viewStr = views/1000 + "k";
    }


    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"></div>
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago </p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
        
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Introduction to Express.Js | Sigma Web Dev video #20", "CodeWithHarry", 5, 7, "50:45", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")