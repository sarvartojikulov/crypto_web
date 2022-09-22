import React from 'react';

import { Disclosure, Transition } from '@headlessui/react';
import { IconDropdown } from '@streact/core-assets';
import cn from 'classnames';

type AccordionProps = {
  content?: { header: string; body: string }[];
};

const TEST_DATA: AccordionProps = {
  content: [
    {
      header: 'Jak uzyskać adres do wpłaty BTC / ETH /USDT?',
      body: 'Adres można uzyskać poprzez wysłanie do nas wiadomości e-mail na adres biuro.kryptoswap@gmail.com lub bezpośrednio w jednym z biur. Podajemy go zarówno jako ciąg znaków, jak i kod QR.',
    },
    {
      header: 'Czy wymiana BTC lub innej kryptowaluty w kantorze jest legalna?',
      body: 'Oczywiście, że jest legalna. Jesteśmy zarejestrowaną firmą w Polsce, która do każdej transakcji wystawia dokumenty. Ponadto zgodnie ze stanowiskiem KNF w polskim systemie prawa nie funkcjonują przepisy zakazujące prowadzenia działalności w charakterze kantorów kryptowalut.',
    },
    {
      header: 'Kiedy mogę wam wysłać BTC / ETH / USDT?',
      body: 'Kryptowaluty możesz wysłać zarówno przed przyjściem do biura, jak i będąc w biurze. Preferujemy jednak kontakt mailowy (wysyłkę adresu i ustalenie kursu), co znacznie przyśpiesza wymianę BTC lub innej kryptowaluty na fiat.',
    },
  ],
};

// TODO: props with data + i18n

const Accordion: React.FC<AccordionProps> = () => {
  return (
    <div className="mx-auto w-full rounded-2xl bg-base-300 px-4 py-5 space-y-2">
      {TEST_DATA.content?.map(({ header, body }) => {
        return (
          <Disclosure key={header}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={cn(
                    'flex w-full justify-between rounded-lg bg-base-100 px-4 py-2 text-left text-sm font-medium text-base-content',
                    { 'text-primary': open }
                  )}
                >
                  <span>{header}</span>
                  <IconDropdown
                    className={cn('h-5 w-5 transition-all', {
                      'rotate-180 transform stroke-primary': open,
                      'stroke-base-content': !open,
                    })}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 py-2 text-sm text-base-content my-4 bg-base-100 rounded-lg">
                    {body}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
};

export default Accordion;
