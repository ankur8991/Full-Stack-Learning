                         🔹 Tailwind CSS kya hai?
                        . Tailwind ek Utility-First CSS Framework hai.
                         Matlab ye pre-defined CSS classes provide karta hai(Jaise bg-blue-500, text-center, flex, p-4 etc...), Jinhe tu directly HTML mai Laga ke styling kr skta hai without writing custom CSS.

                         Ye alag hai BootStrap jaise frameworks se.
                         . Bootstrap mai predefined components hote hain (buttons, cards, navbar).
                         . Tailwind mai chhoti-chhoti utility classes hoti hain jisse hm khud apna design bana skte hai.

                         🔹 Tailwind CSS Kese Work Karti Hai?
                         1. Utility Classes
                          → Har CSS property ke liye ek class hoti hai:
                             .  text-red-500 → color: #ef4444;
                             .  bg-gray-200 → background-color: #e5e7eb;
                             .  p-4 → padding: 1rem;

                        2. Configuration FIle (tailwind.config.js)
                         → Isme Hm apne hisaab se theme customize kr skte hai:
                             . Colors
                             . Fonts
                             . Spacing
                             Example: 
                                module.exports = {
                                    theme: {
                                      extend: {
                                        colors: {
                                          primary: '#1E40AF',
                                        }
                                      }
                                    }
                                  }
                                  Ab hm bg-primary use kr skte hai.
                        
                        3. Just-In-Time Compiler (JIT)
                         → Tailwind ka JIT compiler sirf wahi CSS generate krta hai jo hm actually HTML mai use karengai.
                         Matalb → small, optimized CSS bundle.
                         (Purani CSS Frameworks jese BootStrap poora ka poora CSS load kr deta tha → heavy ho jata tha.)

                        4. Responsive Design Built-in
                         → tailwind breakpoints  simple classes se handle hota hai:
                           . sm:bg-red-500 (mobile aur upar ke liye red) 
                           . md:bg-blue-500 (tablet aur upar ke liye blue)
                           . lg:bg-green-500 (desktop aur upar ke liye green)
                        
                        5. Dark Mode Support 
                         → Tailwind mai by default dark: prefix hota hai.
                         Example:
                        <div class="bg-white dark:bg-black text-black dark:text-white">
                            Dark mode ready!
                         </div>

                    🔹 Example: Normal CSS vs Tailwind
                    Normal CSS
                    <style>
                     .btn {
                       background-color: #1D4ED8;
                       color: white;
                       padding: 10px 20px;
                       border-radius: 8px;
                     }
                   </style>
                   <button class="btn">Click Me</button>

                   Tailwind 
                  <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Click Me
                  </button>
                  
                 → Yaha hm Custom CSS likhne ki jagah directly utilities use krte hai.

                 🔹 Tailwind Ke Advantages

                  ✅ Faster development (direct HTML me classes)
                  ✅ Highly customizable (config file)
                  ✅ JIT compiler = lightweight CSS
                  ✅ Mobile-first responsive design easy
                  ✅ Dark mode integrated

                  🔹 Tailwind kaha-kaha use ho  skti hai?
                  Tailwind ko hm multiple tariko se use kr skte hai:
                  1. Simple HTML file + CDN
                  
                   <script src="https://cdn.tailwindcss.com"></script>
                   <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Click</button>
                   ✅ chhote project ya testing ke liye best hai .
                   ❌ Optimization kam milega .

                   2. Tailwind + Plain HTML/CSS project (npm ke sath)
                   ✅ ISme hm sirf tailwind install krke normal HTML project me use kr skte hai .
                   npm install -D tailwindcss
                   npx tailwindcss init

                   3. Tailwind + Framework(React, VUe, Next.js, Angular)
                   . Yaha hm framework ka build tool use krengai(webpack, Vite, Next.js, bundler, Create React App, etc).
                   . Example: Tailwind + Next.js

                   4. Tailwind + Vite(Popular combo)
                   . Vite fast hai aur tailwind ke sath perfectly work krta hai.
                   . Modern fronted projects (React/Vue) me sabse zyada use hota hai.

                  Important: 
                  `TailwindPlay website` se hm kuch vi test kr skte hai tailwind css ko mtlb bina setup kre apne vsCode mai hm directly use kr skte hai tailwindcss ko iss website pr.

                   `tailwindblocks website` se hm normal layout vi use kr skte hai direct copy krke .

                  🔹 npm aur npx ka difference 
                   npm (Node Package Manager)

                  . Ye ek package manager hai jo Node.js ke sath aata hai.

                  . Iska use karke tu packages install karta hai (global ya local).

                 . Example:
                  npm install -g tailwindcss   # global install
                  npm install -D tailwindcss   # local install (project ke andar)
      
                 npx (Node Package Execute)

                 . Ye ek package runner tool hai.

                 . Matlab tu koi package bina install kiye bhi direct run kar sakta hai.

                 . Ye npm ke sath hi aata hai (npm v5.2+).

                 Example:
                 npx tailwindcss init

                 Iska matlab → tu tailwindcss CLI ko globally install kiye bina hi execute kar raha hai.