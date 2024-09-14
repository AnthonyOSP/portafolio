

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

const modalContacto: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 w-full h-full flex justify-center items-center overflow-y-auto z-[200] overscroll-contain visible pointer-events-auto">
            <div className='fixed top-0 left-0 w-full h-screen bg-[#0d0d0d] transition-opacity ease duration-[400ms] opacity-80 visible pointer-events-auto' onClick={(e) => e.stopPropagation()}></div>
            <div className="bg-[#1e1e1f] relative p-[15px] m-[15px] mx-[12px] border border-solid border-[#383838] rounded-[14px] shadow-[0_24px_80px_0px_rgba(0,0,0,0.25)] transition ease duration-[400ms] z-[2] flex flex-col items-center">
                <p className='text-white'>{message}</p>
                <button className="flex content-center items-center mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>OK</button>
            </div>
        </div>
    )
}

export default modalContacto