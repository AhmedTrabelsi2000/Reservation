import ContactForm from '@/components/ContactForm'
import Image from 'next/image';
require('dotenv').config();


export default function Home() {
  return (
  <div className='p-4 max-w-3xl mx-auto'>
    <Image src="/image/Broom.jpeg" alt="Description de l'image" width={800} height={200} />
    <br/>
    <h1 className='text-2xl font-bold'>Make a reservation and Get your ticket !</h1>
    <br/>
    <p>Please fill the form below to book tickets. </p>
    <p> Get a confirmation email and come dance with us!</p>
    <ContactForm/>
  </div>
  )
}
