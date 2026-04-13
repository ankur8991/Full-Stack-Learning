import { useState } from 'react'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

function App() {

  // const isLogin = false         // agr hm koi "string", ture, ya fir number likh rahe hai 12312 to ye sab truthy values hai.
  //  const option = 'b'


  // if(isLogin){

  //   return (
  //     <div>
  //       <h1>Welcome back !! you are loggedin</h1>
  //     </div>
  // )
  // }

  // return (
  //   <h1>Please login</h1>
  // )

  // if(option === 'c'){
  //   return (
  //     <div>
  //       <h1>Component B</h1>
  //     </div>
  //   )
  // }

  // if(option === 'b'){
  //   return (
  //     <div>
  //       <h1>Component B</h1>
  //     </div>
  //   )
  // }

  // return (
  //   <h1>Other Component</h1>
  // )

  //  const isLoggedIn = false
  // const option = 'd'

  // const hasNotificationMsg = "Recharge krlo khtm hogya hai"  // ye avi truthy value hai kyuki iss variable ke pass kuch na kuch value hai jaise iss case mai string hai or agr truthy value hme mil gai to hme vo && ke baad wali chiz render hokr milegai jo ki h ek component agr hm iss variable m kuch vi assign na kre to vo falsly bn jata or vo fir aage ki condition nhi chlti vo circuit wahi break ho jata.

    // let content = <h1>Hello how are you</h1>  // yha pr hi hme variable m hi JSX store krva liya hai.
    // const option = 'a'

    // if(option === 'a'){
    //   content = <ComponentA />
    //  } else if(option === 'b'){
    //   content = <ComponentB />
    //  } else if(option === 'c') {
    //   content = <ComponentC />
    //  } else {
    //   content = <h1>Other Component</h1>
    //  }

    // const [toggle, setToggle] = useState(false)

    // if(!toggle) return null      // hmne default initial value toggle ki false kr rakhi hai or hmne yha pr return kr rakha hai null to hmara return wala function chalega hi nhi vo yhi se return krdega component ko niche tk ayega hi nhi.


    // const option = 'c'
    // // const Component = ComponentA   // yha pr hm componentA ka refernce daal rahe hai Component variable ke andar jisse hm ComponentA to B,C etc or vi components ko ternary operator se condition laga kr render krva sake pura <ComponentA /> ye pura save nhi krna hai Component variable ke andar hme iska reference save krna hai or return m hme sirf ye stored variable jo h Component usko hme as a Component full render Component behaivour ke sath show krvana hai like ese <Component /> return ke andar.
    // const Component = option === 'a' ? ComponentA : ComponentB      // agr hmara option a se mattch krta hai to ComponentA retrun krega nhi to agr a match nhi krata hai hm kuch vi de rahe hai to else conditon run hogi or ComponentB render hoga.

    
    // const option = 'a'

    // switch(option){
    //   case 'a': 
    //   return <ComponentA /> 

    //   case 'b': 
    //     return <ComponentB />

    //   case 'c':
    //      return <ComponentC />

    //    default:
    //       return <h1>Other Component</h1>
    // }


    // const statusOption = 'error'
    const [statusOption, setStatusOption] = useState('loading')
    const status = {
          loading: <h1>Loading...</h1>,
          success: <h1>Data fetched successfully...</h1>,
          error: <h1>Error occured...</h1>
    }


    // return (
    //    status[statusOption]    // statusOption ke andar hm dynamically keys daal rahe jaise loading, success, or error or ye hm variable ke madadt se change krte hai jo hme statusOption isme avi error de rakha hai.
    // )



  return (
    <>
      {/* <h1>{isLoggedIn? <h1>Welcome back Your are loggin now</h1> : <h1>Firstly login please</h1>}</h1> */}
      {/* <h1>
        {
          option === 'a'
            ?
            <h1>Component A</h1>
            :
            (
              option === 'b'
                ?
                <h1>Component B</h1>
                :
                (

                  option === 'c'
                    ?
                    <h1>Component C</h1>
                    :
                    (

                      option === 'd'
                        ?
                        <h1>Component D</h1>
                        :
                        <h1>Other component</h1>
                    )
                )
            )
        }
      </h1> */}

      {/* <div>
        {
          hasNotificationMsg         // agr ye variable m string hai to ye trythy value hai or ye last wala && operator ka value return karega vo nhi krega jo hme isss variable ke andar de rakha hai valuevor agr bich m hi hm khai or falsyy value render krva dete hai to vo hme render hokr milega fir last wale pr && operator tk nhi jyegai condition hmari wali pr hi break hojyega jaha pr hme falsly value(0 number m) milegai wahi pr hi return kr dega UI m nhi to last wale && operator tk jyega ye.
           &&
            <h1>{hasNotificationMsg}</h1>  // && operator isliye use hota hai kyuki agr koi chiz hai or vo hi hme dikhani hai render krvani hai or na ho to kuch nhi krvana hai tbh hm ye use krte hai && operator.
           &&
           <h1>No Message</h1>
        }
      </div> */}
    


     {/* <div>{content}</div>   {/* yha pr hme simple use krna hai variable ko yha pr hme ternary operator ki tarah JSX insert krne ki jrurat nhi h  or ye simple render krne liye use hota hai or baki cheezein logic wagera or JSX ke sath jo vi hme render krvana tha vo hm uper hi krlengai return ke uper hi or ye isko clean or readable banata hai. */}
     

     {/* {toggle?
     (
       <h1>toggle true ho chuka hai</h1>
     ) : 
     (
        <h1>Toggle false ho chuka hai</h1>
     )
    }

    <button onClick={()=> {
      setToggle(!toggle)               // yha pr setToggle ki value hmnne !toggle isliye di hai kyuki by default to true hai or ya fir false or jb vi user click krega to true hai to false krdega or false hai to true krdega value ko.
    }} >Toggle kro</button> */}


    {/* <div>
      <Component />
    </div> */}
     
     {status[statusOption]} 
     <button onClick={() => {setStatusOption('loading')}}>Loading</button>
     <button onClick={() => {setStatusOption('success')}}>Success</button>
     <button onClick={() => {setStatusOption('error')}}>Error</button>


    </>
  )

}

export default App