/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import Modal from '@streact/components-modal';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { z } from 'zod';

import { DataToSend } from '../types';

const modalSchema = z.object({
  name: z.string().min(1, 'errors.required'),
  phone: z.number().min(1, 'errors.required'),
  email: z.string().email('errors.email').min(1, 'errors.required'),
});

type CalculatorModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: DataToSend;
};

const CalculatorModal: React.FC<CalculatorModalProps> = ({
  open,
  setOpen,
  data,
}) => {
  const { t } = useTranslation('common');
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(modalSchema),
  });

  function sendData() {
    return handleSubmit(async (formData) => {
      console.log({
        ...data,
        ...formData,
      });

      return axios
        .post('/api/telegram/calculator-message', {
          ...data,
          ...formData,
        })
        .then((respone) => {
          setSent(true);
        })
        .catch(() => {
          setSent(true);
          setError(true);
        });
    });
  }
  return (
    <React.Fragment>
      <Modal open={open} setOpen={setOpen}>
        {!sent ? (
          <div className="px-8 py-6">
            <h3>{t('modal.calculator.title')}</h3>
            <p className="mt-2 text-sm">{t('modal.calculator.body')}</p>
            <div className="mt-4 w-full grid grid-cols-2 gap-x-5 gap-y-3">
              <div className="col-span-full md:col-span-1">
                <label className="label pt-0 pb-1">
                  <span className="label-text">{t('labels.name')}</span>
                </label>
                <input
                  type="text"
                  className="input input-accent h-12 w-full"
                  {...register('name')}
                />
                {errors.name?.message && (
                  <label className="label pt-1 pb-0">
                    <span className="label-text-alt text-red-400">
                      {t(errors.name.message as string)}
                    </span>
                  </label>
                )}
              </div>
              <div className="col-span-full md:col-span-1">
                <label className="label pt-0 pb-1">
                  <span className="label-text">{t('labels.phone')}</span>
                </label>
                <input
                  type="text"
                  className="input input-accent h-12 w-full"
                  {...register('phone', { valueAsNumber: true })}
                />
                {errors.phone?.message && (
                  <label className="label pt-1 pb-0">
                    <span className="label-text-alt text-red-400">
                      {t(errors.phone.message as string)}
                    </span>
                  </label>
                )}
              </div>
              <div className="col-span-full">
                <label className="label pt-0 pb-1">
                  <span className="label-text">{t('labels.email')}</span>
                </label>
                <input
                  type="text"
                  className="input input-accent h-12 w-full"
                  {...register('email')}
                />
                {errors.email?.message && (
                  <label className="label pt-1 pb-0">
                    <span className="label-text-alt text-red-400">
                      {t(errors.email.message as string)}
                    </span>
                  </label>
                )}
              </div>
              <div className="col-span-full mt-5 flex justify-end space-x-4">
                <button
                  className="btn btn-error btn-outline w-24"
                  onClick={() => setOpen(false)}
                >
                  {t('button.cancel')}
                </button>
                <button className="btn btn-primary w-32" onClick={sendData()}>
                  {t('button.send')}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-8 py-6 space-y-2 flex flex-col rounded-3xl"
          >
            {error ? (
              <>
                <h3>{t('modal.error.title')}</h3>
                <p className="mt-2 text-sm">{t('modal.error.body')}</p>
                <Link href="/contact">
                  <button className="btn btn-primary ml-auto">
                    {t('navbar.links.contact')}
                  </button>
                </Link>
              </>
            ) : (
              <>
                <h3>{t('modal.confirm.title')}</h3>
                <p className="mt-2 text-sm">{t('modal.confirm.body')}</p>
                <button
                  className="btn btn-primary btn-outline ml-auto"
                  onClick={() => {
                    setOpen(false);
                    setSent(false);
                    setError(false);
                  }}
                >
                  {t('button.close')}
                </button>
              </>
            )}
          </motion.div>
        )}
      </Modal>
    </React.Fragment>
  );
};

export default CalculatorModal;
