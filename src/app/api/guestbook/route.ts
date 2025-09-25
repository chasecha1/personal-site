import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const serverClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-08-01", // or the latest
  token: process.env.NEXT_PUBLIC_SANITY_EDIT_TOKEN,
  useCdn: false,
});

export async function POST(req: Request) {
  try {
    const { name, message } = await req.json();

    const entry = await serverClient.create({
      _type: "guestBookEntry",
      name,
      message,
      date: new Date().toISOString(),
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (err: any) {
    console.error("Guestbook create error:", err.message);
    return NextResponse.json(
      { error: "Failed to add entry" },
      { status: 500 }
    );
  }
}