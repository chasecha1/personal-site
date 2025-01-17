'use client'

import { getGuestBook } from "@/api/guestApi";
import { GuestBookProfile } from "../../../types/entities";
import GuestBookForm from "@/components/GuestBookForm";
import { useEffect, useState } from "react";


export default function GuestBook() {
  useEffect(() => {
    document.title = "Guest Book | Chase Cha";
  }, []);
  const [guestEntries, setGuestEntries] = useState<GuestBookProfile[]>([]);

  const fetchGuestEntries = async () => {
    const data = await getGuestBook();
    setGuestEntries(data || []);
  };
  
  const handleFormSubmission = async () => {
    await fetchGuestEntries();
  }

  useEffect(() => {
    fetchGuestEntries(); // Initial fetch
  }, []);

  return (
    <div className="bg-white dark:bg-light-navy text-navy-text dark:text-white min-h-screen">
      <div className="Post-list container pt-8 h-full flex flex-col items-center">
        <h1 className="Heading--head pb-4">Guest Book</h1>
        <GuestBookForm onSubmission={handleFormSubmission}/>
        <ul className="pt-4">
          {guestEntries.map((entry) => (
            <li key={entry._id} className="flex flex-row pb-4">
              <div className="flex flex-col text-light-text-muted dark:text-dark-text-muted items-center pr-4">
                <p>{new Date(entry.date).toLocaleDateString()}</p>
                <p>{entry.name}</p>
              </div>
              <p className="px-4">{entry.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}