"use client";

import {
  addressForm,
  personalDetailsForm,
  previewHeaders,
} from "@/components/constants";
import FixedTable from "@/components/FixedTable";
import FormLayout from "@/components/FormLayout";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export interface IReferralFormInput {
  givenName: string;
  surname: string;
  email: string;
  phone: string;
  homeName: string;
  street: string;
  suburb: string;
  state: string;
  postcode: number;
  country: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReferralFormInput>();
  const [referrals, setReferrals] = useState<Array<IReferralFormInput>>();
  const [fetchRef, setFetchRef] = useState(true);
  // @TODO: Add loader
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    async function fetchReferrals() {
      await fetch("/api/referral")
        .then(async (data) => {
          const response = await data.json();
          setReferrals(response.referralsList);
        })
        .catch((error) => console.error(error));
    }

    if (fetchRef) {
      fetchReferrals();
      setFetchRef(false);
    }
  }, [fetchRef]);

  const onSubmit: SubmitHandler<IReferralFormInput> = (data) => {
    startTransition(
      async () =>
        await fetch("/api/referral", {
          method: "POST",
          body: JSON.stringify(data),
        })
          .then(async ({ status }) => {
            if (status === 200) setFetchRef(true);
          })
          .catch((error) => console.error(error))
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="py-10 px-8">
        <h1 className="text-left">Referral Builder</h1>
        <form className="grid grid-cols-1" onSubmit={handleSubmit(onSubmit)}>
          <FormLayout label="PERSONAL DETAILS">
            {personalDetailsForm.map((pd) => (
              <TextInput
                key={pd.key}
                register={register(pd.key, { ...pd.options, required: true })}
                label={pd.label}
                type={pd.type}
                errorType={errors[pd.key]?.type}
              />
            ))}
          </FormLayout>

          <FormLayout label="ADDRESS">
            {addressForm.map((af) => (
              <TextInput
                key={af.key}
                register={register(af.key, af.options)}
                label={af.label}
                type={af.type}
                errorType={errors[af.key]?.type}
              />
            ))}
            <button className="min-h-14 font-semibold text-grey">
              UPLOAD AVATAR
            </button>
            <button
              type="submit"
              className="min-h-14 bg-light-green font-semibold text-white"
            >
              CREATE REFERRAL
            </button>
          </FormLayout>
        </form>
      </div>

      <div className="py-10 px-8 bg-grey-2">
        <div className="w-full h-full bg-white px-6 py-10">
          <FixedTable tableHeaders={previewHeaders}>
            {referrals?.map((r, id) => (
              <tr key={id + r.surname}>
                <td>{r.givenName}</td>
                <td>{r.surname}</td>
                <td>{r.email}</td>
                <td>{r.phone}</td>
                <td>
                  <div className="flex space-x-1.5">
                    <Image
                      alt="edit icon"
                      src={"/edit.svg"}
                      width={18}
                      height={18}
                    />
                    <Image
                      alt="delete icon"
                      src={"/delete.svg"}
                      width={18}
                      height={18}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </FixedTable>
        </div>
      </div>
    </div>
  );
}
