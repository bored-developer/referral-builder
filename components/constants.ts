import { IReferralFormInput } from "@/app/page";
import { HTMLInputTypeAttribute } from "react";
import { RegisterOptions } from "react-hook-form";

export const personalDetailsForm: Array<{
  key: keyof IReferralFormInput;
  label: string;
  options?: RegisterOptions<IReferralFormInput>;
  type?: HTMLInputTypeAttribute;
}> = [
  {
    key: "givenName",
    label: "GIVEN NAME",
  },
  {
    key: "surname",
    label: "SURNAME",
  },
  {
    key: "email",
    label: "EMAIL",
    options: {
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    type: "email",
  },
  {
    key: "phone",
    label: "PHONE",
    // @TODO: Can add phone number country based validation
    type: "number",
  },
];

export const addressForm: Array<{
  key: keyof IReferralFormInput;
  label: string;
  options?: RegisterOptions<IReferralFormInput>;
  type?: HTMLInputTypeAttribute;
}> = [
  {
    key: "homeName",
    label: "HOME NAME OR #",
  },
  {
    key: "street",
    label: "STREET",
  },
  {
    key: "suburb",
    label: "SUBURB",
  },
  {
    key: "state",
    label: "STATE",
  },
  {
    key: "postcode",
    label: "POSTCODE",
    type: "number",
  },
  {
    key: "country",
    label: "COUNTRY",
  },
];

export const previewHeaders = [
  "GIVEN NAME",
  "SURNAME",
  "EMAIL",
  "PHONE",
  "ACTIONS",
];
