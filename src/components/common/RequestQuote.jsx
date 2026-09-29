import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const RequestQuoteModal = ({ isOpen, onClose, productName }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4"
                    onClick={onClose}
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        className="
          relative
          w-full
          max-w-[654px]
          bg-white
          border
          border-[#E2F0E2]
          rounded-2xl
          p-4
          md:p-6
          shadow-xl
          max-h-[90vh]
          overflow-y-auto mt-20
        "
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.9,
                            y: 20,
                        }}
                        transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-black"
                        >
                            <IoClose />
                        </button>

                        {/* Heading */}
                        <h2 className="text-[22px] md:text-[24px] font-semibold text-[#0F0F0F] mb-6">
                            Request Quote
                        </h2>

                        <form className="space-y-5">
                            {/* Row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="
                h-[48px]
                border
                border-[#5F5F5F]
                rounded-[10px]
                px-4
                text-sm
                outline-none
              "
                                />

                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="
                h-[48px]
                border
                border-[#5F5F5F]
                rounded-[10px]
                px-4
                text-sm
                outline-none
              "
                                />
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="
                h-[48px]
                border
                border-[#5F5F5F]
                rounded-[10px]
                px-4
                text-sm
                outline-none
              "
                                />

                                <input
                                    type="number"
                                    placeholder="Number of Machines"
                                    className="
                h-[48px]
                border
                border-[#5F5F5F]
                rounded-[10px]
                px-4
                text-sm
                outline-none
              "
                                />
                            </div>

                            {/* Product Name */}
                            <input
                                type="text"
                                value={productName}
                                readOnly
                                className="
              w-full
              h-[48px]
              border
              border-[#5F5F5F]
              rounded-[10px]
              px-4
              bg-gray-50
              text-sm
            "
                            />

                            {/* Message */}
                            <textarea
                                rows={5}
                                placeholder="Describe the type of machine you want......."
                                className="
              w-full
              border
              border-[#5F5F5F]
              rounded-[10px]
              p-4
              text-sm
              resize-none
              outline-none
            "
                            />

                            {/* Submit */}
                            <button
                                type="submit"
                                className="
              bg-[#018A06]
              text-white
              font-semibold
              text-[16px]
              md:text-[18px]
              px-8
              py-3
              rounded-lg
              hover:bg-[#016f05]
              transition-all
            "
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RequestQuoteModal;