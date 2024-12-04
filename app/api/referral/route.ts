import { IReferralFormInput } from "@/app/page";
import { NextRequest } from "next/server";

export const dynamic = "force-static";

const referralsList: Array<IReferralFormInput> = [];

export async function GET() {
  return Response.json({ referralsList });
}

// @TODO: Add csrf protection via middleware
export async function POST(req: NextRequest) {
  const body = (await req.json()) as IReferralFormInput;
  if (!body.givenName || !body.surname || !body.email || !body.phone)
    return Response.json({ message: "Invalid request." }, { status: 400 });

  referralsList.push(body);
  return Response.json({ message: "Ok" }, { status: 200 });
}
