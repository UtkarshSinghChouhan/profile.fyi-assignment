import React, { ReactNode } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Icon from './icon';

interface IModal {
    children: ReactNode;
    modalOpen: boolean;
    setModalOpen: Function;
    title: string;
}

const Modal = ({ children, modalOpen, setModalOpen, title }: IModal) => {
    const overlayVariants = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                duration: 0.3,
                delayChildren: 0.4
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
                duration: 0.3,
                delay: 0.4
            }
        }
    };

    return (
        <AnimatePresence>
            {modalOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={overlayVariants}
                    className="fixed inset-0 bg-black z-20 bg-opacity-20 flex items-center justify-center"
                >
                    <motion.div
                        className="flex flex-col max-w-[500px] w-[90%] max-h-[90%] bg-white rounded-[5px]"
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100vh" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='w-full p-2 shadow-lg flex justify-between'>
                            <span>{title}</span>
                            <button onClick={() => setModalOpen(false)}>
                                <Icon icon="close" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto overflow-auto">
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal