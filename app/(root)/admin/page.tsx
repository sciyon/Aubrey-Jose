"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/app/utils/supabase/client';
import { SupabaseClient } from '@supabase/supabase-js';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { cormorant } from '@/app/fonts';

declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: AutoTableOptions) => jsPDF;
  }
}

// Add interface for RSVP data structure
interface RSVPData {
  id: number;
  name: string;
  phone: string;
  created_at: string;
  status: boolean;
}

interface ModalContent {
  header: string;
  body: string;
}

// Add AutoTableOptions interface
interface AutoTableOptions {
  head: string[][];
  body: (string | number)[][];
  startY?: number;
}

export const Invitations = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState<ModalContent>({ header: '', body: '' });
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<RSVPData | null>(null);
  const [modalMode, setModalMode] = useState<string | null>('');
  const [data, setData] = useState<RSVPData[]>([]);
  const [filterSettings, setFilterSettings] = useState({
    entries: 15, 
    searchField: 'default', 
    searchTerm: '',
    sortField: 'default', 
    sortOrder: ''
  });
  const [filteredData, setFilteredData] = useState<RSVPData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
  const [fullFilteredData, setFullFilteredData] = useState<RSVPData[]>([]);

  useEffect(() => {
    const initializeSupabase = async () => {
      const client = await createClient();
      setSupabase(client);
    };
    initializeSupabase();
  }, []);

  const fetchData = useCallback(async () => {
    if (!supabase) return;
    try {
      const { data, error } = await supabase.from('rsvp').select('*');
      if (error) {
        setModalContent({
          header: 'Error!',
          body: `Error fetching data.`,
        });
        console.error("Error fetching data:", error.message);
        return;
      }
      setData(data);
      setFilteredData(data);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  }, [supabase]);

  useEffect(() => {
    if (supabase) {
      fetchData();
    }
  }, [supabase, fetchData]);

  useEffect(() => {
    let filtered = [...data];

    // Apply search filter
    if (filterSettings.searchTerm) {
      filtered = filtered.filter(item =>
        String(item.name)
          .toLowerCase()
          .includes(filterSettings.searchTerm.toLowerCase())
      );
    }

    // Apply sort filter based on RSVP status
    if (filterSettings.sortField === 'true') {
      filtered = filtered.filter(item => item.status === true);
    } else if (filterSettings.sortField === 'false') {
      filtered = filtered.filter(item => item.status === false);
    }

    // Store full filtered results
    setFullFilteredData(filtered);

    // Calculate total pages after filtering
    const totalItems = filtered.length;
    const newTotalPages = Math.ceil(totalItems / filterSettings.entries);
    setTotalPages(newTotalPages);

    // Paginate the filtered data
    const startIndex = (currentPage - 1) * filterSettings.entries;
    const endIndex = startIndex + filterSettings.entries;
    const paginatedData = filtered.slice(startIndex, endIndex);

    setFilteredData(paginatedData);
  }, [data, filterSettings.entries, filterSettings.searchTerm, filterSettings.sortField, currentPage]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilterSettings(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const showAcceptModal = (item: RSVPData, string: string) => {
    setModalMode(string);
    setSelectedItem(item); 
    setShowConfirmModal(true);
    console.log(modalMode)
  }

  const handleRevertRSVP = async () => {
    if (!supabase) {
      setModalContent({
        header: 'Error!',
        body: 'Supabase client is not initialized.',
      });
      setShowModal(true);
      return;
    }
    setShowConfirmModal(false);
    try {
      if (!selectedItem) return;
      const { data, error } = await supabase
        .from('rsvp')
        .update({ status: false })
        .eq('id', selectedItem.id)
        .select()
      
      if (error) {
        setModalContent({
          header: 'Error!',
          body: `Error reverting RSVP. Error: ${error.message}`,
        });
        setShowModal(true);
        return;
      }
      console.log(data);
      setModalContent({
        header: 'Success!',
        body: `RSVP request reverted successfully.`,
      });
      setShowModal(true)
      fetchData()
    } catch (error) {
      setModalContent({
        header: 'Error!',
        body: `Something went wrong with your request.`,
      });
      console.error("Something went wrong with your request.", (error as Error).message);
      setShowModal(true);
    }
  }

  const handleAcceptRSVP = async () => {
    if (!supabase) {
      setModalContent({
        header: 'Error!',
        body: 'Supabase client is not initialized.',
      });
      setShowModal(true);
      return;
    }
    setShowConfirmModal(false);
    try {
      if (!selectedItem) return;
      const { data, error } = await supabase
        .from('rsvp')
        .update({ status: true })
        .eq('id', selectedItem.id)
        .select()
      
      if (error) {
        setModalContent({
          header: 'Error!',
          body: `Error accepting RSVP. Error: ${error.message}`,
        });
        setShowModal(true);
        return;
      }
      console.log(data);
      setModalContent({
        header: 'Success!',
        body: `RSVP request successfully approved.`,
      });
      setShowModal(true);
      fetchData()
    } catch (error) {
      setModalContent({
        header: 'Error!',
        body: `Something went wrong with your request.`,
      });
      console.error("Something went wrong with your request.", (error as Error).message);
      setShowModal(true);
    }
  }

  const handleDeleteRSVP = async () => {
    if (!supabase) {
      setModalContent({
        header: 'Error!',
        body: 'Supabase client is not initialized.',
      });
      setShowModal(true);
      return;
    }
    setShowConfirmModal(false);
    try {
      if (!selectedItem) return;
      const { data, error } = await supabase
        .from('rsvp')
        .delete()
        .eq('id', selectedItem.id)
        .select()
        
      if (error) {
        setModalContent({
          header: 'Error!',
          body: `Error deleting RSVP. Error: ${error.message}`,
        }); 
        setShowModal(true);
        return;
      }
      console.log(data);
      setModalContent({
        header: 'Success!',
        body: `RSVP request successfully deleted.`,
      });
      setShowModal(true);
      fetchData()
    } catch (error) {
      setModalContent({
        header: 'Error!',
        body: `Something went wrong with your request.`,
      });
      console.error("Something went wrong with your request.", (error as Error).message);
      setShowModal(true);
    }
    setShowModal(true);
  }

  const handlePageChange = (newPage: number) => {
    const startIndex = (newPage - 1) * filterSettings.entries;
    const endIndex = startIndex + filterSettings.entries;
    const paginatedData = fullFilteredData.slice(startIndex, endIndex);
    setFilteredData(paginatedData);
    setCurrentPage(newPage);
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      const startIndex = (newPage - 1) * filterSettings.entries;
      const endIndex = startIndex + filterSettings.entries;
      const paginatedData = fullFilteredData.slice(startIndex, endIndex);
      setFilteredData(paginatedData);
      setCurrentPage(newPage);
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      const startIndex = (newPage - 1) * filterSettings.entries;
      const endIndex = startIndex + filterSettings.entries;
      const paginatedData = fullFilteredData.slice(startIndex, endIndex);
      setFilteredData(paginatedData);
      setCurrentPage(newPage);
    }
  };
  
  const handleLastPage = () => {
    const startIndex = (totalPages - 1) * filterSettings.entries;
    const endIndex = startIndex + filterSettings.entries;
    const paginatedData = fullFilteredData.slice(startIndex, endIndex);
    setFilteredData(paginatedData);
    setCurrentPage(totalPages);
  };
  
  const handleFirstPage = () => {
    const paginatedData = fullFilteredData.slice(0, filterSettings.entries);
    setFilteredData(paginatedData);
    setCurrentPage(1);
  };
  

  const exportPDF = (dataToExport: RSVPData[], filename: string) => {
    const doc = new jsPDF();
    const exportDate = new Date().toLocaleString();
  
    doc.text("RSVP Requests", 14, 16);
    doc.text(`Exported on: ${exportDate}`, 14, 24); // Add export date and time
    
    const tableData = dataToExport.map(item => [
      item.name,
      item.phone,
      new Date(item.created_at).toLocaleDateString(),
      item.status ? 'Accepted' : 'Pending'
    ]);
  
    doc.autoTable({
      head: [['Name', 'Phone Number', 'Date Requested', 'RSVP Status']],
      body: tableData,
      startY: 30, // Start the table after the export date and time
    });
  
    doc.save(filename);
  };
  
  const exportAllRSVPs = () => {
    exportPDF(data, 'all_rsvp_requests.pdf');
  };
  
  const exportAcceptedRSVPs = () => {
    const acceptedData = data.filter(item => item.status === true);
    exportPDF(acceptedData, 'accepted_rsvp_requests.pdf');
  };
  
  window.openModal = function(modalId: string) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      modalElement.style.display = 'block';
      document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden');
    }
  }

  window.closeModal = function(modalId: string) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      modalElement.style.display = 'none';
      document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
      setShowModal(false);
    }
  }

  document.onkeydown = function(event) {
    event = event || window.event;
    if (event.keyCode === 27) {
      document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
      const modals = document.getElementsByClassName('modal');
      Array.prototype.slice.call(modals).forEach(i => {
        i.style.display = 'none';
      });
      setShowModal(false);
      setShowConfirmModal(false);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 text-oak p-6">
        <h1 className={`${cormorant.className} text-5xl text-center pb-2`}>Invitation List</h1>
        <div className="row flex flex-col items-center justify-center">
          <div className="col-xs-12 w-full">
            <div>
              {/* Filter Form */}
              <form id='filterForm' className="flex md:flex-row flex-col text-oak text-base py-4 md:justify-between font-mono">
                {/* Entries */}
                <label className='pr-4'>Show by
                  <select name='entries' id='entries' className='bg-cove rounded-lg text-center ml-2 font-mono bg-black text-white' value={filterSettings.entries} onChange={handleFilterChange}>
                    <option value={5}>5</option>
                    <option value={15}>15</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                  </select> entries
                </label>

                {/* Search name */}
                <label className=''>Search name: 
                  <input 
                    type="text" 
                    name="searchTerm" 
                    placeholder='Input name here' 
                    className='bg-slate-500 hover:bg-eucal rounded-lg mt-1 pl-2 ml-2 hover:text-white text-oak' 
                    value={filterSettings.searchTerm} 
                    onChange={handleFilterChange}
                  ></input>
                </label>

                {/* Sort by RSVP Status */}
                <label className=''>Sort by RSVP Status 
                  <select name='sortField' id='sortField' className='bg-cove  rounded-lg text-center ml-2 font-mono bg-black text-white ' value={filterSettings.sortField} onChange={handleFilterChange}>
                    <option value={'default'}>All</option>
                    <option value={'true'}>Accepted</option>
                    <option value={'false'}>Pending</option>
                  </select>
                </label>
              </form>
            </div>
            <table className="table-auto w-full border-collapse border border-gray-300 dt-responsive">
              <thead className="bg-gray-200">
                <tr className='text-xl'>
                  <th className="px-4 py-2 whitespace-nowrap text-left">Name</th>
                  <th className="px-4 py-2 whitespace-nowrap text-left">Phone Number</th>
                  <th className="px-4 py-2 whitespace-nowrap">Date Requested</th>
                  <th className="px-4 py-2 whitespace-nowrap">RSVP Status</th>
                  <th className="px-4 py-2 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody className='text-lg'>
                {filteredData.map((item, index) => (
                  <tr key={index} className='h-auto border border-gray-300 hover:bg-gray-300'>
                    <td className='pl-4'>{item.name}</td>
                    <td className='ml-5 px-4'>{item.phone}</td>
                    <td className='text-center'>{new Date(item.created_at).toLocaleDateString()}</td>
                    <td className='text-center'>{item.status ? '✅ Accepted' : '⌛ Pending'}</td>
                    <td className='flex space-x-4 items-center justify-center'>
                      {!item.status && 
                        <button 
                        className='bg-green-600 hover:bg-green-300 rounded-xl text-white hover:text-black w-20' onClick={() => { showAcceptModal(item, 'Accept')}}>
                          Accept
                        </button>
                      }
                      {item.status && 
                        <button 
                          className='bg-yellow-600 hover:bg-yellow-300 rounded-xl text-white hover:text-black w-20' onClick={() => { showAcceptModal(item, 'Revert')}}>
                          Revert
                        </button>
                      }
                      <button 
                        className='bg-red-600 hover:bg-red-300 rounded-xl text-white hover:text-black w-20' 
                        onClick={() => { showAcceptModal(item, 'Delete')}}>
                        Delete
                      </button>
                    </td> 
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-row font-mono space-x-9 items-center h-12 pt-8">
              <div className="space-x-2 flex items-center">
                <p className='pr-6'>Showing page {currentPage} of {totalPages}</p>
                {currentPage > 1 && (
                  <button className='font-bold text-3xl hover:bg-slate-400 w-8' onClick={handlePrevPage}>{'<'}</button>
                )}
                {currentPage < totalPages && (
                  <button className='font-bold text-3xl hover:bg-slate-400 w-8' onClick={handleNextPage}>{'>'}</button>
                )}
                {currentPage < totalPages && (
                  <button className='font-bold text-3xl hover:bg-slate-400' onClick={handleLastPage}>{'>>'}</button>
                )}
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>Export as PDF:</p>
                <button className='text-lg bg-black text-white rounded-lg px-2 mr-2' onClick={exportAllRSVPs}>All</button>
                <button className='text-lg bg-black text-white rounded-lg px-2' onClick={exportAcceptedRSVPs}>Accepted</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div id="modal" className={`fixed z-50 inset-0 bg-gray-500 bg-opacity-60 overflow-y-auto h-full w-full px-4 modal block`}>
          <div className={`relative top-40 mx-auto shadow-xl rounded-md  max-w-md font-pjs ${modalContent.header === 'Success!' ? 'bg-green-400' : 'bg-red-400'}`}>
            <div className={`flex justify-between items-center text-white text-xl rounded-t-md px-4 py-2 ${modalContent.header === 'Success!' ? 'bg-green-700' : 'bg-red-700'}`}>
              <h3>{modalContent.header}</h3>
              <button onClick={() => window.closeModal('modal')}>x</button>
            </div>
            <div className="max-h-48 overflow-y-scroll p-4">
              <p>{modalContent.body}</p>
            </div>
            <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition" onClick={() => window.closeModal('modal')}>Close</button>
            </div>
          </div>
        </div>
      )}
      {showConfirmModal && selectedItem && (
        <div id="confirmModal" className={`fixed z-50 inset-0 bg-gray-500 bg-opacity-60 overflow-y-auto h-full w-full px-4 modal block`}>
          <div className={`relative top-40 mx-auto shadow-xl rounded-md max-w-md font-pjs ${modalMode === 'Accept' ? 'bg-green-300' : modalMode === 'Revert' ? 'bg-yellow-300' : 'bg-red-300'}`}>
          <div className={`flex justify-between items-center text-white text-xl rounded-t-md px-4 py-2 h-fit ${modalMode === 'Accept' ? 'bg-green-700' : modalMode === 'Revert' ? 'bg-yellow-700' : 'bg-red-700'}`}>
              <h3 className='text-3xl'>{modalMode} RSVP Request?</h3>
              <button onClick={() => window.closeModal('confirmModal')}>x</button>
            </div>
            <div className="max-h-48 p-4 text-xl">
              <p>Confirm the RSVP request  of:</p>
              <p>Name: <span className='font-mono'>{selectedItem.name}</span></p>
              <p>Phone: <span className='font-mono'>{selectedItem.phone}</span></p>
            </div>
            <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition" 
              onClick={
                () => { 
                if(modalMode === 'Accept') {
                  handleAcceptRSVP();
                }
                if(modalMode === 'Delete') {
                  handleDeleteRSVP();
                }
                if(modalMode === 'Revert') {
                  handleRevertRSVP();
                }
                setModalMode(null)}
              }
              
              >Confirm {modalMode}</button>
              <button className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-700 transition" 
                onClick={
                () => 
                  {
                    setModalMode(null);
                    window.closeModal('confirmModal');
                    setShowConfirmModal(false);
                  }
                }>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Invitations;