'use client';

import { usePathname } from 'next/navigation';

const ContactButton = () => {
  const pathname = usePathname();

  if (pathname === '/contact') return null;

  return (
    <a
      href="/contact"
      className="fixed bottom-4 right-4 z-50 bg-black text-white border border-white px-5 py-3 rounded-full shadow-lg hover:bg-white hover:text-black transition-colors duration-300"
    >
      Contact Us.
    </a>
  );
};

export default ContactButton;
