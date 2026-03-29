import './App.css'
import Header from './Header.jsx'

function App() {

  // let name = "Ankur"
  // let age = 18
  // let IsOutOfStock = true

  // function greet(){
  //     return "My name is Ankur"
  // }

  // let arr = ['iron man', 'iron man', 'wanda', 'captain']

  let alpha = <p>Hello how {1 + 10} are you</p>

  return (
    <>
      {/* <h1>Hello {name} {greet()}</h1> */}
      {/* <h1>{age>=18? 'You can drive' : 'You cannot drive'}</h1> */}
     {/* <h1 style={{                      // Here the first bracket is for javascript implement and second one is for object fromate we can write the styles.
         backgroundColor: 'gray',
         fontSize: '20px',
    }} >Hello style</h1> */}
    

   {/* {age>=18 ? <p style={{backgroundColor: 'green'}}>You can drive</p> : <p style={{backgroundColor: "red"}}>You cannot drive</p>} */}


    {/* {IsOutOfStock && <p>Out of Stock</p>}        Ye paragraph tbh hi show hoga jb ye && ke left side wali condition true hogi agr vo condition false hogi tbh vo nhi paragraph show hi nhi hoga or isko hi hm "short-circuit rendering" kehte hai. */}

    {/* {arr.map(function(item, index){            // yha pr hmne phla curly braceses isliye lagaya kyuki hme yha javaScript likhna hai javaScript isliye kyuki array ko map krna hai or array ko map hm javaScript se hi krte hai.
          // return item                   // Hamesha yaad rakho react mai jo hm return krte hai vo hi hme UI m dikhta hai agr hm return ki jagah console kre tbh vo hme inspect ke console m dikhega na ki UI m.
          return <h1 key={index}>{item}</h1>        // yha pr hm return react m html ke tag vi kra skte hai to agr hm sirf <h1>item</h1> krengai to hardcode hojyega to vo hme item hi render krega react m jitne vi item counting m present hongai arr m utne brr vo hme item render hokr dikhega agr hm vo arr ke item chiye value unki to hme curly braceses ke andar likhengai hm  return <h1>{item}</h1> kyuki yha pr item jo h vo as a variable treat ho raha hai yha pr key hme dena padhta hai hr HOD function m kyuki react m kyuki dena padhta hai hmre iss case m array m jitne vi element hai avi vo sare unique h koi vi arr ka item ka value repeat nhi ho raha hai isliye hm key m item pss kr skte hai agr array ke item ke value repeat hojye to hme key attribute/prop m index daal skte hai kyuki index to hr case m unique hoga.
    })} */}


     {/* {alpha}

     <Header title="alpha"/>
     <Header title={alpha}/> */}

    </>
  )
}


export default App