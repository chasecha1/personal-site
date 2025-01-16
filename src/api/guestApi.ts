import { secondClient } from "@/sanity/lib/client"

export async function getGuestBook() {
  try {
    const data = await secondClient.fetch(
      `*[_type == "guestBookEntry"] | order(date desc) {
          _id,
          name,
          message,
          date
        }`
    );
    return data
  } catch (error) {
    console.error('Error fetching entries:', error);
    return null
  }
}