"use client"

import React, { useState, useEffect } from 'react';
import { createClient } from '@/app/utils/supabase/client';
import { SupabaseClient } from '@supabase/supabase-js';
import { cormorant } from '@/app/fonts'


declare global {
  interface Window {
    openModal: (modalId: string) => void;
    closeModal: (modalId: string) => void;
  }
}

interface ModalContent {
  header: string;
  body: string;
}


const RSVP = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({ header: '', body: '' });
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);

  useEffect(() => {
    const initializeSupabase = async () => {
      const client = await createClient();
      setSupabase(client);
    };
    initializeSupabase();
  }, []);

  const isValidName = (name: string) => {
    return name.trim().split(' ').length >= 2;
  };

  const isValidPhone = (phone: string) => {
    return /^(09\d{9}|(\+63\d{10})|(63\d{10}))$/.test(phone);
  };
  

  const handleSubmit = async (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!supabase) {
      setModalContent({
        header: 'Error',
        body: 'Supabase client is not initialized.',
      });
      setShowModal(true);
      return;
    }

    if (!isValidName(name)) {
      setModalContent({
        header: 'Error',
        body: `Please enter your full name.`,
      });
      setShowModal(true);
      return;
    }

    if (!isValidPhone(phone)) {
      setModalContent({
        header: 'Error',
        body: `Please enter a valid phone number.`,
      });
      setShowModal(true);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('rsvp')
        .select('phone')
        .eq('phone', phone)

      if(error){
        setModalContent({
          header: 'Error!',
          body: `Error checking if phone number exists. Error: ${error.message}`,
        });
        setShowModal(true);
        return
      }
      if (data.length > 0) {
        // Email is already registered
        setModalContent({
          header: 'Error!',
          body: `This phone number has already been used to create an RSVP.`,
        });
        setShowModal(true);
      } else {
        try{
          const { error } = await supabase
            .from('rsvp')
            .insert({
              name: name,
              phone: phone,
            })
          
          if (error) {
            setModalContent({
              header: 'Failure',
              body: `Your RSVP request details has failed to upload. Please contact the owners with a picture of this error! Error: ${(error as Error).message}`,
            });
            console.log(error)
          } else {
            setModalContent({
              header: 'Success',
              body: 'Your RSVP request details has been successfully uploaded.',
            });
            setName('');
            setPhone('');
            console.log(error)
          }
          
        }catch(error){
          setModalContent({
            header: 'Failure',
            body: `Something went wrong with your request. Error: ${(error as Error).message}`,
          });
          console.log(error)
        }
      }
    } catch (error) {
      setModalContent({
        header: 'Failure!',
        body: `Something went wrong with checking the phone number. Error: ${(error as Error).message}`,
      });
      console.log(error)
      setShowModal(true);
    }
    
    setShowModal(true);
  };

  // Check if running in the browser
  const isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
    window.openModal = function(modalId) {
      const modalElement = document.getElementById(modalId);
      if (modalElement) {
        modalElement.style.display = 'block';
        document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden');
      }
    }
    
    window.closeModal = function(modalId) {
      const modalElement = document.getElementById(modalId);
      if (modalElement) {
        modalElement.style.display = 'none';
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
        setShowModal(false);
      }
    }
    
    // Close all modals when press ESC
    document.onkeydown = function(event) {
      event = event || window.event;
      if (event.keyCode === 27) {
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
        let modals = document.getElementsByClassName('modal');
        Array.prototype.slice.call(modals).forEach(i => {
          i.style.display = 'none'
        })
      }
      setShowModal(false);
    };
  }

  return (
    <div className={`${cormorant.className} flex flex-col items-center justify-center text-oak p-5 w-full font-playfairNormal`}>
      
      <div className="font-playfairNormal font-medium md:text-3xl text-2xl text-center lg:py-8 pb-2 px-4">
      To create an RSVP request, please input your details below.
      </div>

      <form className='flex flex-col justify-center items-center w-full' onSubmit={handleSubmit}>
        <label htmlFor="fullName" className='text-xl md:text-3xl font-playfairNormal lg:pt-8 pt-2'>Full Name</label>
        <input 
          type="text" 
          id="fullName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='h-10 w-3/5 md:w-5/12 border-2 border-oak rounded-lg pl-2 font-playfairNormal font-medium md:text-2xl text-lg text-center'
        />
        <label htmlFor="emailAddress" className='text-xl md:text-3xl font-playfairNormal lg:pt-8 pt-4'>Phone Number</label>
        <input 
          type="text" 
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className='h-10 w-3/5 md:w-5/12 border-2 border-oak rounded-lg pl-2 font-playfairNormal font-medium md:text-2xl text-lg text-center lg:mb-12 mb-5'
        />
        <button type="submit" className='font-pjs h-12 lg:w-56 w-24 bg-oak text-white bg-black rounded-2xl lg:text-2xl text-xl font-crimson mb-5'>RSVP</button>
      </form>
      
      {showModal && (
        <div id="modal" className={`fixed z-50 inset-0 bg-gray-500 bg-opacity-60 overflow-y-auto h-full w-full px-4 modal block`}>
        <div className={`relative top-40 mx-auto shadow-xl rounded-md  max-w-md font-pjs ${modalContent.header === 'Success' ? 'bg-green-400' : 'bg-red-400'}`}>
        <div className={`flex justify-between items-center text-white text-xl rounded-t-md px-4 py-2 ${modalContent.header === 'Success' ? 'bg-green-700' : 'bg-red-500'}`}>
            <h3 className='text-black font-crimson text-2xl font-bold'>{modalContent.header}</h3>
            <button onClick={() => window.closeModal('modal')}>x</button>
          </div>
          <div className="max-h-48 overflow-y-scroll p-4 font-crimson">
            <p>{modalContent.body}</p>
          </div>
          <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
            <button className="bg-red-300 text-black px-4 py-2 rounded-md hover:bg-red-300 transition text-2xl font-montserrat font-semibold" onClick={() => window.closeModal('modal')}>Close</button>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}


export default RSVP;