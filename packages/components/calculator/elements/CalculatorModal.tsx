import React from 'react';

import Modal from '@streact/components-modal';
import { useTranslation } from 'next-i18next';

type CalculatorModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CalculatorModal: React.FC<CalculatorModalProps> = ({ open, setOpen }) => {
  const { t } = useTranslation('common');
  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className="px-8 py-6">
          <h3>{t('modal.calculator.title')}</h3>
          <p className="mt-2 text-sm">{t('modal.calculator.body')}</p>
          <div className="mt-4 w-full grid grid-cols-2 gap-x-5 gap-y-3">
            <div className="col-span-full md:col-span-1">
              <label className="label pt-0 pb-1">
                <span className="label-text">{t('labels.name')}</span>
              </label>
              <input type="text" className="input input-accent h-12 w-full" />
            </div>
            <div className="col-span-full md:col-span-1">
              <label className="label pt-0 pb-1">
                <span className="label-text">{t('labels.phone')}</span>
              </label>
              <input type="text" className="input input-accent h-12 w-full" />
            </div>
            <div className="col-span-full">
              <label className="label pt-0 pb-1">
                <span className="label-text">{t('labels.email')}</span>
              </label>
              <input type="text" className="input input-accent h-12 w-full" />
            </div>
            <div className="col-span-full mt-5 flex justify-end space-x-4">
              <button
                className="btn btn-error btn-outline w-24"
                onClick={() => setOpen(false)}
              >
                {t('button.cancel')}
              </button>
              <button
                className="btn btn-primary w-32"
                onClick={() => alert('in development')}
              >
                {t('button.send')}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CalculatorModal;
