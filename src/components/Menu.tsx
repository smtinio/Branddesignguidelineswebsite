import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: string) => void;
}

export default function Menu({ isOpen, onClose, onNavigate }: MenuProps) {
  const menuItems = [
    { label: "menu", page: "home" },
    { label: "logo", page: "logo" },
    { label: "typography", page: "typography" },
    { label: "colors", page: "colors" },
    { label: "gradients", page: "gradients" },
    { label: "examples", page: "examples" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Dark overlay - dim the background */}
          <motion.div 
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* White panel on the right */}
          <motion.div 
            className="relative bg-white w-full sm:w-[500px] md:w-[550px] lg:w-[618px] h-full shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-11 lg:py-[45px]">
              <p 
                className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[32px] sm:text-[36px] md:text-[38px] lg:text-[40px] tracking-[-0.4px]" 
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                MENU
              </p>
              <button
                onClick={onClose}
                className="relative shrink-0 size-[40px] sm:size-[44px] md:size-[46px] lg:size-[48px] cursor-pointer hover:opacity-70 transition-opacity flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-[#232323]" strokeWidth={2.5} />
              </button>
            </div>

            {/* Menu items */}
            <nav className="flex flex-col gap-8 px-6 sm:px-8 md:px-10 lg:px-12 pt-16 text-right">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate(item.page);
                    }
                  }}
                  className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] text-[#232323] text-[32px] sm:text-[36px] md:text-[38px] lg:text-[40px] tracking-[-0.4px] hover:text-[#0069FF] transition-colors duration-200 cursor-pointer text-right"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
