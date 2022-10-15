import React from 'react';

import { Disclosure, Transition } from '@headlessui/react';
import { IconDropdown } from '@streact/core-assets';
import cn from 'classnames';
import parse from 'html-react-parser';

type AccordionProps = {
  content: { header: string; body: string }[];
};

const Accordion: React.FC<AccordionProps> = ({ content }) => {
  return (
    <div className="mx-auto w-full rounded-2xl bg-base-300 px-4 py-5 space-y-2">
      {content.map(({ header, body }) => {
        return (
          <Disclosure key={header}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={cn(
                    'flex w-full justify-between items-center rounded-lg bg-base-100 px-4 py-2 text-left text-md font-medium text-base-content space-x-2',
                    { 'text-primary': open }
                  )}
                >
                  <span>{header}</span>
                  <IconDropdown
                    className={cn('h-5 w-5 min-w-[20px] transition-all', {
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
                  <Disclosure.Panel className="px-4 py-2 text-md text-base-content my-4 bg-base-100 rounded-lg prose prose-ul:list-disc max-w-none prose-p:leading-5 prose-p:my-0 prose-li:my-1 prose-ul:pl-4 leading-4">
                    {parse(body)}
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
