import ContactForm from '@/components/ContactForm'
require('dotenv').config();


export default function Home() {
  return (
  <div className='p-4 max-w-3xl mx-auto'>
    <img src="image/Broom.jpeg" alt="Description de l'image" />
    <br/>
    <h1 className='text-2xl font-bold'>Make a reservation and Get your ticket !</h1>
    <br/>
    <p>Please fill the form below</p>
    <p>                      And come dance with us!</p>
    <ContactForm/>
  </div>
  )
}
