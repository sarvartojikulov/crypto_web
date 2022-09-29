/* eslint-disable no-console */
import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z
    .string()
    .min(1, { message: 'Email is Required' })
    .email({ message: 'Email is invalid' }),
  phone: z.string().min(1, { message: 'Phone is Required' }),
  message: z.string().min(1, { message: 'Please enter your message' }),
});

const FormContacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  return (
    <div className="col-span-full lg:col-span-7 flex items-center justify-center bg-base-300 rounded-lg shadow-lg py-6 px-6">
      <form
        className="w-full grid grid-cols-4 gap-x-4 gap-y-3"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className="flex flex-col col-span-full md:col-span-2">
          <label className="label pt-0">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-primary w-full"
            {...register('name')}
          />
          {errors.name?.message && (
            <label className="label pt-1 pb-0">
              <span className="label-text-alt text-red-400">
                {errors.name.message}
              </span>
            </label>
          )}
        </div>
        <div className="col-span-full md:col-span-2">
          <label className="label pt-0">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="tel"
            placeholder="Phone"
            className="input input-primary w-full"
            {...register('phone')}
          />
          {errors.phone?.message && (
            <label className="label pt-1 pb-0">
              <span className="label-text-alt text-red-400">
                {errors.phone.message}
              </span>
            </label>
          )}
        </div>
        <div className="col-span-full">
          <label className="label pt-0">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="input input-primary w-full"
            {...register('email')}
          />
          {errors.email?.message && (
            <label className="label pt-1 pb-0">
              <span className="label-text-alt text-red-400">
                {errors.email.message}
              </span>
            </label>
          )}
        </div>
        <div className="col-span-full">
          <label className="label pt-0">
            <span className="label-text">Message</span>
          </label>
          <textarea
            placeholder="Message"
            className="textarea textarea-primary w-full"
            rows={4}
            {...register('message')}
          />
          {errors.message?.message && (
            <label className="label pt-1 pb-0">
              <span className="label-text-alt text-red-400">
                {errors.message.message}
              </span>
            </label>
          )}
        </div>
        <button
          className="btn btn-primary col-span-2 col-start-2 md:col-start-3"
          type="submit"
          onClick={handleSubmit((d) => console.log(d))}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormContacts;
