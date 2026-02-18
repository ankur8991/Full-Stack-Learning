/*
============================== DOM TREE ==============================

                    [ document ]
                          |
                        [ html ]
                      /          \
                  [ head ]      [ body ]
                                    |
                               [ div#parent ]
                                    |
                               [ button#child ]


========================= EXPLANATION =========================

1) document
-------------------------------------------------
• Sabse top level object
• Pure webpage ka root
• JS se access:
      document

2) html
-------------------------------------------------
• <html> tag
• head aur body ka parent

3) head
-------------------------------------------------
• Metadata store karta hai
• title, meta, link, script etc

4) body
-------------------------------------------------
• Visible content yahi hota hai
• Saare UI elements isi ke andar hote hain

5) div#parent
-------------------------------------------------
• Body ka child
• Ye apne andar aur elements rakh sakta hai

6) button#child
-------------------------------------------------
• div ka child
• Leaf node (agar iske andar aur element na ho)

======================================================================
IMPORTANT DOM RELATIONSHIPS
======================================================================

• Parent Node  → Jo element kisi ko contain kare
• Child Node   → Jo element kisi ke andar ho
• Sibling Node → Same parent share karne wale elements

Example:
-------------------------------------------------
<body>
   <h1></h1>
   <p></p>
</body>

• h1 and p = siblings
• body = parent
• h1 / p = children

======================================================================
DOM TREE RULE
======================================================================

• HTML ek hierarchical tree structure hota hai
• Har element ek node hota hai
• Event propagation isi tree ke through hota hai
• Bubbling → niche se upar
• Capturing → upar se niche

======================================================================

Simple Line:
DOM Tree = Webpage ka structural family tree
======================================================================
*/



// jaise hmne yha pr three div liye hai or ek sabka parent 'grand-parent' fir uska child 'parent' fir uska child 'child' hm yha or thino pr hi event listner laga rahe hai or eventlistner dono parameter leta hai ek event dusra function jisme hm btate h event hone pr krna kya hai to hmne yha pr thino pr click event laga diya or function m thino m alert dediya or thino ke accroding alert m uska naam de diya jaise grand-parent ke liye clicked on grandparent krke ese hi un dono m vi alert ka msg de diya hmne thik h fir hme pta hai ki jb hm ese kisi conditon m child pr clik kr krte jb uske uper doo or parent hote h tbh event propagation ke accroding agr hm child pr click krte h tbh phle top - to - down jata hai fir uske baad feedback khte h dusre wale ko usme down-to-top jata h kya hmara event or uske andar jo vi function h vo jaise phla case top-to-down m phle hmara grand-parent chalega fir parent fir uske baad child thk h fir second case m down-to-top m phle child trigger hoga fir parent fir uske baad grand-parent or ye dono cases ek sath ko hi hm event propagation khete h. 
// isme event propagation ke andar vi ek limition hai phla agr hm normal ese three div banakr grand-parent, parent, child banate h or direct bina true parameter pass krke ye child pr click krte h tbh sirf ek case chalega jo h case-2 jisko hm kehte h down-to-top event propagation isme phle child event trigger hoga fir parent fir uske baad grand-parent or  finally khtm.
// Or by default hamara Bubbling hi enabled hota hai agr hm manully addEventListener ke andar true pass na kru tbh ture pass krna mtlb capturing ko enabled true krna hota hai jo ki top-to-down hota hai events hmarae propogate hote hai. 
// agr hm child div pr click krte h tbh agr hm addEventListener m true parameter pass kr dete h tbh hmara top-to-down case 1 event propagation chalega jisme phle grandParent trigger hoga fir parent fir child.
/*
let grandparent = document.querySelector('.grand-parent')
let parent = document.querySelector('.parent')
let child = document.querySelector('.child')


grandparent.addEventListener('click', function(){
    alert("grand-parent clicked")
})

parent.addEventListener('click', function(){
    alert("parent clicked")
})

child.addEventListener('click', function(){
    alert("CHild clicked")
})
*/



// Agr hm bubbling or capturing dono hi dede jaise hmne iss case m de rakha hai to capturing wale phle sare chalengai fir uske baad vo dekhega ki kisme truw parameter pass nhi hai ussko fir ye bubbling kra dega usko kisko? Events ko propagate kra dega jaise hmne case 1 top-to-down dekha tha caputring or case 2 bottom-to-top bubbling event propogation dono ise ke parts h vo hi isi same format m hoengai phle case 1 fir case 2 .
/*
let grandparent = document.querySelector('.grand-parent')
let parent = document.querySelector('.parent')
let child = document.querySelector('.child')


grandparent.addEventListener('click', function(){    
    alert("grand-parent clicked")
}, true)

grandparent.addEventListener('click', function(){
    alert("grand-parent clicked")
})

parent.addEventListener('click', function(){
    alert("parent clicked")
}, true)

parent.addEventListener('click', function(){
    alert("parent clicked")
})

child.addEventListener('click', function(){
    alert("CHild clicked")
}, true)

child.addEventListener('click', function(){
    alert("CHild clicked")
})
*/



// ab jaise m chahta hun ki agr m child pr click kru tbh phle event hmara parent hona chiye trigger fir child fir then last mai grandParent tbh esa krne ke liye hm parent addEventListener pr phle true krdengai then fir child wale ko or last m bubbling down to top hoti hai isliye usko hm by default jaisa addEventListener hota hai vesa hi rhnedengai.
/*
grandparent.addEventListener('click', function(){
    alert("grand-parent clicked")
})

parent.addEventListener('click', function(){
    alert("parent clicked")
}, true)

child.addEventListener('click', function(){
    alert("CHild clicked")
}, true)
*/



/*
======================== EVENT PROPAGATION ========================

                [ Event Propagation ]
                        |
        ---------------------------------------
        |                 |                  |
 [ Capturing Phase ]   [ Target Phase ]   [ Bubbling Phase ]


1) CAPTURING PHASE  (Top → Down)
-------------------------------------------------
• Event root se start hota hai
• Flow: document → html → body → parent → child
• Isko "Trickling Phase" bhi kehte hain
• Ye tab active hota hai jab:
      addEventListener("click", handler, true)


2) TARGET PHASE
-------------------------------------------------
• Event actual element par pahunchta hai
• Jis element par click hua wahi target hai
• Yaha event handler execute hota hai


3) BUBBLING PHASE (Bottom → Up)
-------------------------------------------------
• Default behavior hota hai
• Flow: child → parent → body → html → document
• Agar child pe click hua to parent bhi trigger hoga
• Bubbling ko rokne ke liye:
      event.stopPropagation()


======================== FLOW SUMMARY ========================

Capturing Phase  →  Target Phase  →  Bubbling Phase

Top to Down → Actual Element → Bottom to Up

==================================================================
*/




/*
Event Propagation kya hota hai?

→ Jab bhi kisi element pr event hota hai (click, submit, etc), wo sirf us element tak limited nhi rhta.

→ Wo DOM tree me travel krta hai.

→ Is travel ko khete hain:  👉 Event Propagation.

🧠 3 Phases :

1️⃣ Capturing (Rarely Used) → Also called as 'Trickling'. 

Browser phle check krta h : "Event kis element tak jaana hai?"

wo uper se niche aata hai case 2 event porpagation ka isme top-to-down event propagate travel krta hai agr hmne sabse niche wale child pr click kra hai tabh or hme isme ek parameter pass krna padhta hai jo h true.

Normally use nhi hota hai ye, but possible h esi condition.


2️⃣ Target (Main Moment)

Ye actual element hai jaha user ne click kiya hai.


3️⃣ Bubbling (Most Important)

Default behaviour.

Event target se uper chadhne lagta hai bottom-to-up / down-to-top ye case 2 hai event propagation ka.

Isliye :

agr hm child pr click krte h tbh phle child click fir uske baad parent fir grand-parent isko hi hm down-to-top kehte hai.



========================= EVENT PROPAGATION =========================


            Capturing Phase                      Bubbling Phase
            ---------------                      --------------

              Event 1  ↓                           ↑  Event 6
           [ Top-Most Element ]                [ Top-Most Element ]

              Event 2  ↓                           ↑  Event 5
            [ Child Element ]                  [ Child Element ]

              Event 3  ↓                           ↑  Event 4
         [ Descendant Element ]               [ Descendant Element ]
                (TARGET)                             (TARGET)


====================================================================

CAPTURING PHASE (Top → Down)

Event 1 → Top-Most Element
Event 2 → Child Element
Event 3 → Descendant Element


TARGET PHASE

Event occurs on Descendant Element
(Actual clicked element)


BUBBLING PHASE (Bottom → Up)

Event 4 → Descendant Element
Event 5 → Child Element
Event 6 → Top-Most Element


====================================================================

Flow Direction:

Capturing  ↓↓↓
Target     ●
Bubbling   ↑↑↑

====================================================================
*/





/*
========================= EVENT OBJECT SUMMARY =========================

Code Reference:

grandparent.addEventListener('click', function(event){
   console.log(event)
})


-----------------------------------------------------------------------
1️⃣ "click" kya hai?
-----------------------------------------------------------------------

• "click" ek event type hai.
• Ye browser ko instruction deta hai:
      "Jab click hoga tab function run karna."
• Ye event object nahi hai.
• Ye sirf event ka naam hai.


-----------------------------------------------------------------------
2️⃣ event parameter kya hai?
-----------------------------------------------------------------------

• Ye ek Event Object hota hai.
• Ye array nahi hota.
• Ye object type ka hota hai.

Proof:
      console.log(typeof event)  // "object"


-----------------------------------------------------------------------
3️⃣ Ye event object kahan se aata hai?
-----------------------------------------------------------------------

• Developer manually pass nahi karta.
• Browser khud create karta hai.
• Jab real click hota hai tab browser:

      1) Event detect karta hai
      2) Event object banata hai
      3) Callback function call karta hai
      4) Event object ko argument me pass karta hai

Conceptually browser internally aisa karta hai:

      handler(eventObject)


-----------------------------------------------------------------------
4️⃣ Event object karta kya hai?
-----------------------------------------------------------------------

• Event ke baare me complete information deta hai.

Common properties:

      event.type           → "click"
      event.target         → kis element pe click hua
      event.currentTarget  → jisme listener laga hai
      event.clientX/Y      → mouse position
      event.preventDefault()
      event.stopPropagation()

• Ye event ka control panel hota hai.


-----------------------------------------------------------------------
5️⃣ Important Clarification
-----------------------------------------------------------------------

• "click" sirf event ka naam hai.
• Event object actual click hone par banta hai.
• Event object real-time event details provide karta hai.


-----------------------------------------------------------------------
6️⃣ Normal Function vs Event Listener Difference
-----------------------------------------------------------------------

Normal Function:

      function greet(name) {}
      greet("Ankur")

• Yaha developer manually value pass karta hai.


Event Listener:

      addEventListener("click", handler)

• Yaha browser callback ko call karta hai:
      handler(eventObject)

• Developer function call nahi karta, browser internally krta hai call.

User ne click kiya

Browser:
   let eventObject = new MouseEvent(...)
   callbackFunction(eventObject)



-----------------------------------------------------------------------
7️⃣ Final Clear Understanding
-----------------------------------------------------------------------

✔ "click" = event type instruction
✔ Event object = browser banata hai
✔ Ye automatically callback me pass hota hai
✔ Ye event ki complete information deta hai
✔ Ye object type ka hota hai
✔ Browser internally callback ko execute karta hai


=======================================================================
ONE LINE SUMMARY
=======================================================================

Event listener me jo parameter milta hai,
wo browser ka banaya hua event object hota hai
jo event ki complete information lekar
automatically callback function me pass hota hai.

=======================================================================
*/




// event.target vs event.currenttarget vs this 

// event.target kya krta hai hme btata hi ki actual m konse div element pr click hua h chahe fir bubbling hi kyu n enabled ho lekin agr hmne child element pr click kiya hai tbh child ka hi element trigger hoga lekin bubbling m three(tino) element ka chalega kyuki wha pr bubbling enabled h by default lekin tino m se click konse element pr hua h event.target vo hi print krke dea hme tino bubbling ke sath.
// event.currentTarget jb print hota h jonse element pr hmne currentTarget laga rakha hai lekin chahe hmne uss element pr click kra hua h vi ya hi lekin bubbling ke time ye same hi dega output bubbling tarah agr hmne sare element pr addEventListener ke function ke andar console.log m event.currentTarget de rakha hai to agr nhi to sirf unpr hi chalega jinpr hmne sirf currentTarget de rkha hai lekin event.target ke andar esa nhi hota hai usme by default to bubbling enabled hoti hi hai lekin agr hme tino m vi event.target de rakha hai to sirf vo hi print / console karega jonse element pr click kra hai user ne mtlb currentTarget hme btata h ki konse eventListener hmne attached kra hai element pr usse hi hme vo currentTarget vo sare element retrun krega bss itna hi.

/*
let grandparent = document.querySelector('.grand-parent')
let parent = document.querySelector('.parent')
let child = document.querySelector('.child')


grandparent.addEventListener('click', function(event){
   console.log('GRANDPARENT')
   console.log(event.target)
   console.log(event.currentTarget)
})

parent.addEventListener('click', function(event){
    console.log('PARENT')
    console.log(event.target)
    console.log(event.currentTarget)
})

child.addEventListener('click', function(event){
    console.log('CHILD')
    console.log(event.target)
    console.log(event.currentTarget)
})


// isme parent m hm thin cheee kr rahe hai event.target or dusra event.currentTarget or tisra this or ek chiz hm click kr rahe hai child pr lekin vo bubble up hokr jyega parent pr vi isliye hmne parent pr hi laga diya addEventListener to event.target to hme child hi dega output kyuki hmee pta hai jispr click krega user vo hi trigger hoga or print / console krega lekin curretTarget hme vo dega jo addEventListener jhapr attached hoga to parent pr attached h avi to iss case m sirf kyuki hm yha pr sirf parent pr hi kr rahe hai addEventListener lekin this vi same km krta hai currentTarget ki taraha to ye vi vo hi dega hme this kispr addeventlistener laga hai lekin agr hmne this arrow function pr laga diya to vo hme window return krke dega pura browser ka isliye this k role alg hota hai hr context or case mai jaise yha pr normal functino kr andar this currentTarget ki taraha act krega vo element return krke dega jisme addEventLister laga hua hai chahe fir click koise pr hi hua ho lekin arrow function ke case m ye this bilkul hi alg react krta hai isme ye hme window pura ka pura return krke dega ye.
parent.addEventListener('click', function(event){
    console.log('PARENT')
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(this)
})
*/


/* How to stop Bubbling & Caputring?

1. stopPropagation()
2. stopImmediatePropagation()

*/



// isme hm parent wale element ke andar stopPropagation() kr rahe hai or ye stopPropagation() method kya krta hai ye further propagation ko rok deta hai jaise bubbling down-to-top propagate hote hai event to isko rokne ke liye hm stopPropagation() method k use krte hai jaise iss case m hmne parent ke andar event.propagation() method lagaya hai to hme pta hai event m hmne ye browser ki tarah se stopPropagation() method milta hai to isse use kra hai hme parent pr to ye parent je aagge ka propagation bubbling ko rok dega sirf CHILD or PARENT hi run console m dikhega or agr m child pr hi laga du stop propagation ko to vo uske aage ke parent or grand-parent ko nhi chalne dega mtlb bubbling hone hi nhi dega agr m n child pr hi laga diya to stopPropagation() kyuki yha hme pta stopPropagation() method rok deta hai aage ke event trigger hone se jaise bubbling ke case m hota hai.
// stoppImmediatePropagation() strict hota hai kyuki ye jaise hi stopProgation() method ke andar jaise hm jispr hmne laga diya stopPropagation() to vo pura hi chalega uske baad apne parent ko rokega event trigger hone ko isme ye problem h ki jaise parent pr hmne ye stoProagation() method laga diya to ye jitne vi sare ke sare addeventListener() laga rakhe hai hmne parent pr vo sare propagate hoengai uske baad hi rokega aagge ke grand-parent dusre dive ke event lekin stopimmediatePropagation() ke andar hmne parent ke ek kisi addEventListerner pr laga diya to ye aagee or vi jitne lage hai addEventListener ussi parent wale pe to vo or nhi chalengai kyuki ye strict hai.
/*
let grandparent = document.querySelector('.grand-parent')
let parent = document.querySelector('.parent')
let child = document.querySelector('.child')


grandparent.addEventListener('click', function(event){
   console.log('GRANDPARENT')
   console.log(event.target)
   console.log(event.currentTarget)
})

parent.addEventListener('click', function(event){
    console.log('PARENT')
    console.log(event.target)
    console.log(event.currentTarget)
    event.stopPropagation()
})

child.addEventListener('click', function(event){
    console.log('CHILD')
    console.log(event.target)
    console.log(event.currentTarget)
})
*/