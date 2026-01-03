import React from 'react'
import Script from 'next/script'

const about = () => {
  return (
    <div>
       
       <Script>
              {`alert("Welcome to About Page of Facebook");`}
       </Script>

        I Am About about.
    </div>
  )
}

export default about

export const metadata = {
  title: "About Facebook - connect with the world around you on Facebook",
  description: "This is about facebook and we can connect with the world around us using facebook.",
};