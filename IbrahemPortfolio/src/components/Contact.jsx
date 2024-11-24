import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    // الحصول على القيم من الـ formData
    const { name, phone, email, subject, message } = formData;
  
    // إرسال القيم إلى EmailJS
    emailjs.send('service_cbrkr8s', 'template_9wci25i', {
      from_name: name,
      from_email: email,
      phone,
      subject,
      message,
    }, '5vJT1QDohQIqCsVh5')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent Successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
  };
  
  
  return (

    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>

    <form onSubmit={sendEmail} method='POST' encType='multipart/form-data'>
      <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Name</label>
          <input 
            className='border-2 p-3 rounded-lg flex border-gray-300' 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Phone</label>
          <input 
            className='border-2 p-3 rounded-lg flex border-gray-300' 
            type="text" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
          />
        </div>
      </div>
      <div>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input 
            className='border-2 p-3 rounded-lg flex border-gray-300' 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <label className='uppercase text-sm py-2'>Subject</label>
        <input 
          className='border-2 p-3 rounded-lg flex border-gray-300' 
          type="text" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
        />
      </div>
      <div className='flex flex-col'>
        <label className='uppercase text-sm py-2'>Message</label>
        <textarea 
          className='border-2 p3 rounded-lg border-gray-300' 
          rows="10" 
          name='message' 
          value={formData.message} 
          onChange={handleChange} 
        />
      </div>
      <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
        Send Message
      </button>
    </form>
  </div>


    // <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    //     <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
    //     {/* <form action="https://getform.io/f/bpjmqmeb" method="POST" encType='multipart/form-data'> */}
    //     <form action="https://getform.io/f/bpjmqmeb" method="POST" encType='multipart/form-data'>
    //       <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
    //           <div className='flex flex-col'>
    //             <label className='uppercase text-sm py-2'>Name</label>
    //             <input className='border-2 p-3 rounded-lg flex border-gray-300' type="text" name="name"/>
    //           </div>
    //           <div className='flex flex-col'>
    //             <label className='uppercase text-sm py-2'>Phone</label>
    //             <input className='border-2 p-3 rounded-lg flex border-gray-300' type="text" name="phone"/>
    //           </div>
    //       </div>
    //       <div>
    //         <div className='flex flex-col'>
    //             <label className='uppercase text-sm py-2'>Email</label>
    //             <input className='border-2 p-3 rounded-lg flex border-gray-300' type="email" name="email"/>
    //         </div>
    //       </div>
    //       <div className='flex flex-col'>
    //           <label className='uppercase text-sm py-2'>Subject</label>
    //           <input className='border-2 p-3 rounded-lg flex border-gray-300' type="text" name="subject"/>
    //       </div>
    //       <div  className='flex flex-col'>
    //           <label className='uppercase text-sm py-2'>Message</label>
    //           <textarea className='border-2 p3 rounded-lg border-gray-300' rows="10" name='message' ></textarea>
    //       </div>
    //       <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
    //         Send Message
    //       </button>
    //     </form>
    // </div>



  )
}

export default Contact