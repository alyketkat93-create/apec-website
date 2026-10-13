import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const careersFilePath = path.join(process.cwd(), "src/data/applications_store.json");

function getStoredApplications() {
  try {
    if (fs.existsSync(careersFilePath)) {
      return JSON.parse(fs.readFileSync(careersFilePath, "utf8"));
    }
  } catch (e) {
    console.error("Error reading applications store:", e);
  }
  return [];
}

function saveApplications(apps: any[]) {
  try {
    const dir = path.dirname(careersFilePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(careersFilePath, JSON.stringify(apps, null, 2), "utf8");
  } catch (e) {
    console.error("Error writing applications store:", e);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, position, experience, coverNote } = body;

    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { error: "Name, email, phone, and target position are mandatory." },
        { status: 400 }
      );
    }

    const application = {
      id: "app_" + Date.now(),
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      position: String(position).trim(),
      experience: experience || "Not specified",
      coverNote: coverNote ? String(coverNote).trim() : "",
      date: new Date().toISOString(),
      status: "pending",
    };

    const apps = getStoredApplications();
    apps.unshift(application);
    saveApplications(apps);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
      applicationId: application.id,
    });
  } catch (error: any) {
    console.error("Careers API error:", error);
    return NextResponse.json(
      { error: "Server processing error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const applications = getStoredApplications();
  return NextResponse.json({ applications });
}
