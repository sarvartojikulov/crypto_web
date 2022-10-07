/* eslint-disable no-console */
import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
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

type ContactMessage = z.infer<typeof contactSchema>;

const FormContacts: React.FC = () => {
  const { t } = useTranslation('common');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  //TODO: refactor, create api endpoint and send message on server side,
  // because we cannot get bot-token from env file by client.
  // YOU ARE STUPID SARVAR
  function onSubmit() {
    return handleSubmit(async (data) => {
      if (!data) {
        console.log('FAILED');
      }
      await axios.post('/api/telegram/contact-message', {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
      });
    });
  }

  return (
    <div className="col-span-full lg:col-span-7 flex items-center justify-center bg-base-300 rounded-lg shadow-lg py-6 px-6">
      <form
        className="w-full grid grid-cols-4 gap-x-4 gap-y-3"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col col-span-full md:col-span-2">
          <label className="label pt-0">
            <span className="label-text">{t('labels.name')}</span>
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
            <span className="label-text">{t('labels.phone')}</span>
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
            <span className="label-text">{t('labels.email')}</span>
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
            <span className="label-text">{t('labels.message')}</span>
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
          onClick={onSubmit()}
        >
          {t('button.send')}
        </button>
      </form>
    </div>
  );
};

export { FormContacts, contactSchema };
export type { ContactMessage };
