import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111] py-12 px-4 border-t border-gray-900 text-center text-white">
      <div className="flex justify-center gap-6 mb-8">
        <Instagram className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        <Linkedin className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        <Twitter className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        <Mail className="text-gray-400 hover:text-white cursor-pointer" size={20} />
      </div>
      <div className="text-gray-500 text-sm flex flex-col gap-4">
        <p className="hover:text-gray-300 cursor-pointer">Terms And Conditions | Privacy Policy</p>
        <p>Copyright © 2024 Logomistri</p>
      </div>
    </footer>
  );
}
