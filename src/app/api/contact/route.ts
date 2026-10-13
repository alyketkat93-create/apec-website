import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src/data/inquiries_store.json");

function getStoredInquiries() {
  try {
    if (fs.existsSync(dataFilePath)) {
      return JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    }
  } catch (e) {
    console.error("Error reading inquiries store:", e);
  }
  return [];
}

function saveInquiries(inquiries: any[]) {
  try {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(dataFilePath, JSON.stringify(inquiries, null, 2), "utf8");
  } catch (e) {
    console.error("Error writing inquiries store:", e);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, serviceInterest, projectLocation, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Name, email, phone, and project scope are mandatory fields." },
        { status: 400 }
      );
    }

    const newInquiry = {
      id: "inq_" + Date.now(),
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      company: company ? String(company).trim() : "Individual / Developer",
      serviceInterest: serviceInterest || "General MEP Contracting",
      projectLocation: projectLocation || "Kingdom of Saudi Arabia",
      message: String(message).trim(),
      date: new Date().toISOString(),
      status: "new",
    };

    const inquiries = getStoredInquiries();
    inquiries.unshift(newInquiry);
    saveInquiries(inquiries);

    return NextResponse.json({
      success: true,
      message: "Inquiry received and logged successfully.",
      inquiryId: newInquiry.id,
    });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Server processing error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const inquiries = getStoredInquiries();
  return NextResponse.json({ inquiries });
}
