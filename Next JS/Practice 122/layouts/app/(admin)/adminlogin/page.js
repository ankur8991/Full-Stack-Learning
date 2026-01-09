import React from 'react'

const page = () => {
  return (
    <div>
      Admin Login Page
      <p>Admin Login - Feel free to login as an Admin</p>
    </div>
  )
}

export default page


export async function generateMetadata() {
  return {
    title: "Admin Login | Facebook",
    description: "Admin Login Page: Facebook is a social utility that connects people with dreinds and the others who work, study and live aroud them. People use Facrook to keep up with froends, upload an unlimited number of photos, post links and videos, and learn more about the people they meet.",
  }
}