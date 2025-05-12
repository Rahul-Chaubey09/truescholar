import React from 'react';
// import { FaPhone } from 'react-icons/fa'; //Removed unused import
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Link from 'next/link';

const ContactWidget = () => {
  const whatsappNumber = "+1234567890"; // Replace with your actual WhatsApp number
  const phoneNumber = "+1234567890"; // Replace with your actual phone number

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      <Link
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={24} />
      </Link>
      
      <Link
        href={`tel:${phoneNumber}`}
        className="bg-[#FF882E] hover:bg-[#FF882E] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
       <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.3208 13.8495C22.3208 9.91954 19.161 6.72787 15.2416 6.67823L15.1489 6.67765L15.0942 6.6762C14.5336 6.64776 14.0878 6.18423 14.0878 5.61658C14.0878 5.0306 14.5629 4.55551 15.1489 4.55551L15.269 4.55638C20.348 4.62068 24.4429 8.75697 24.4429 13.8495C24.4428 14.4354 23.9679 14.9104 23.3819 14.9104C22.796 14.9104 22.3209 14.4354 22.3208 13.8495Z" fill="white"/>
<path d="M26.4062 13.8509C26.4062 7.68301 21.4451 2.67264 15.2944 2.59474L15.1489 2.59387L15.0942 2.59242C14.5336 2.56398 14.0878 2.10045 14.0878 1.5328C14.0878 0.946818 14.5629 0.471729 15.1489 0.471729L15.3218 0.472888C22.6321 0.565455 28.5282 6.52036 28.5282 13.8509C28.5282 14.4369 28.0531 14.9119 27.4671 14.9119C26.8812 14.9119 26.4062 14.4368 26.4062 13.8509Z" fill="white"/>
<path d="M1.95207 1.78952C1.95207 1.78952 1.95207 1.78952 1.95207 1.791C-2.07093 5.81246 0.324173 14.7264 7.29876 21.7009C14.2733 28.6754 23.1875 31.0704 27.209 27.049C28.4273 25.8307 28.9823 23.0617 28.9823 23.0617C29.0728 22.6061 28.8072 22.0971 28.3917 21.9309L21.0906 19.0135C20.6751 18.8473 20.0593 18.9868 19.7239 19.3236L17.6093 21.4397C17.2056 21.8419 16.6239 21.9443 16.1624 21.7365C16.1268 21.7172 16.0912 21.6994 16.0556 21.6801C16.0407 21.6712 16.0244 21.6623 16.0081 21.6534C14.4024 20.7779 12.7004 19.5017 11.0992 17.902C9.49798 16.3024 8.22326 14.6003 7.34773 12.9947C7.34031 12.9798 7.33141 12.965 7.32399 12.9502C7.30469 12.9131 7.2854 12.8775 7.26463 12.8389C7.05687 12.3774 7.15927 11.7957 7.56142 11.392L9.67902 9.27447C10.0159 8.93761 10.1554 8.32327 9.98917 7.90777L7.07023 0.608309C6.90403 0.192808 6.39503 -0.0728159 5.93946 0.0177039C5.93946 0.0177039 3.1704 0.57121 1.95207 1.78952Z" fill="white"/>
</svg>
      </Link>
    </div>
  );
};

export default ContactWidget; 