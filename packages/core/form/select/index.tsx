import React, { Fragment, useState } from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { IconDropdown } from '@streact/core-assets';
import cn from 'classnames';

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

type Currency = {
  name: string;
  course: number;
};
type SelectProps = {
  onChange: (currency: Currency) => void;
  value: Currency;
  currencies: Currency[];
  style: 'primary' | 'accent';
};

const Select: React.FC<SelectProps> = ({
  value,
  currencies,
  onChange,
  style,
}) => {
  return (
    <div className="mb-4 h-10 w-full max-w-[200px] col-span-2">
      <Listbox value={value} onChange={onChange}>
        <div className="relative mt-1 max-w-sm">
          <Listbox.Button
            className={cn(
              'relative w-full cursor-default rounded-lg',
              'py-2 pl-3 pr-10 text-left focus:outline-none sm:text-sm border',
              { 'border-primary': style === 'primary' },
              { 'border-accent': style === 'accent' }
            )}
          >
            <span className="block truncate">{value.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <IconDropdown
                className={cn('h-5 w-5 transition-all', {
                  'rotate-180 transform stroke-primary': false,
                  'stroke-base-content': true,
                })}
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-base-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {currencies.map((currency, currencyIdx) => (
                <Listbox.Option
                  key={currencyIdx}
                  className={({ active }) =>
                    cn('relative cursor-default select-none py-2 pl-10 pr-4', {
                      'bg-primary text-amber-900': active,
                      'text-white': !active,
                    })
                  }
                  value={currency}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {currency.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          c
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;