import { Instagram, Linkedin, Twitter, Mail, X } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111] py-12 px-4 border-t border-gray-900 text-center text-white">
      <div className="flex justify-center gap-6 mb-8">

        <a href="https://instagram.com/logomistri" target="_blank" rel="noopener noreferrer">
          <Instagram className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        </a>

        <a href="https://linkedin.com/company/logomistri" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        </a>

        <a href="https://x.com/logomistri" target="_blank" rel="noopener noreferrer">
          <X className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        </a>

        <a href="mailto:hilogomistri@gmail.com">
          <Mail className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        </a>

      </div>
      <div className="text-gray-500 text-sm flex flex-col gap-4">

        <p>
          <a href="/terms" className="hover:text-gray-300 cursor-pointer">
            Terms And Conditions
          </a>
          {" "} | {" "}
          <a href="/privacy" className="hover:text-gray-300 cursor-pointer">
            Privacy Policy
          </a>
        </p>

        <p>Copyright © 2025 Logomistri</p>

      </div>

    </footer>

  );
}
