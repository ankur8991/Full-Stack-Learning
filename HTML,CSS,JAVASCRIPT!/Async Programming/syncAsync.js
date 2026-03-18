/*
These below things cannot blocks the further code of lines due to they follows async behavious of the code.

    settimeout
    setinterval
    fetch
    axios
*/

// Here the internal working is like we have two stacks one is Main stack where the synchronous task must be executed firstly and second one is Side stack where the Asynchronous tasks executed when the firstly Main stack codes executed firstly then the side stack present tasks of the code format move to main stack where they executed.

// let the first line of code called as the task 1 and second one setTimeout() Higher order function called as the 2 task and third last tasks called as the 3 task now here we have two stacks we knows first one is Main stack where the synchronous tasks, 1 task and 3 task present and the side stack present Asynchronous tasks where our code according only present 2 task only so side stack only present 2 task then we knows that the main stack codes of line synchronous task runs firstly task 1 and 3 goes to runs then they runs the 2 task whoes present in the side stack moves on the main stack then they can runs and the conversation between Main stack and Side stack due to Asynchronous tasks Means when the Main stack completes their tasks of the synchronous tasks but now the coversation between Main stack and side stack of Asynchronous tasks like main stack says you are now executed side stack contains some times Async code and we knows that async code runs after some time takes then side stack says now not executed then again Main stack says then again side stack says not compeleted again again conversation can we says "event loop" and at the end all the sync and Async tasks can completed by the Main stack only the side stacks holds the tasks of the code format but not they runs separately that's why JavaScript has the Single threaded.

/*
console.log("1st task")

setTimeout(() => {           // Asynchorous task 
    console.log("2nd task")
}, 2000)

console.log("3rd task")
*/
