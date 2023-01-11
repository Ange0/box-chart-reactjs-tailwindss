
import { createPortal } from 'react-dom';

function Modal({isShowing, toggle}) {
    
    return isShowing 
        ? createPortal(
            <>
                {/* overlay */}
                <div id='close-modal' onClick={toggle}  className='flex items-center justify-center z-[1020] bg-[#242d34]/60 w-screen h-screen fixed top-0 left-0'>
                    {/* modal */}
                        <div  className='flex flex-col space-y-6 bg-black text-white p-4 rounded-2xl shadow w-[40rem]'>
                            {/* header */}
                                <div className='flex justify-between'>
                                    <div className='flex space-x-4 items-center'>
                                        <button className='relative w-8 h-8 hover:bg-white/20 p-1 rounded-full transition'>
                                            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="h-hull  w-full flex-none">
                                                <g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g>
                                            </svg>
                                            <div id='close-modal' className='absolute top-0 left-0  h-full w-full'></div>
                                        </button>
                                        <div className='text-xl font-bold'>New message</div>
                                    </div>
                                    <button className='bg-stone-500 text-black py-2 px-5 font-bold text-sm rounded-3xl'>
                                        Next
                                    </button>
                                </div>
                            {/* header */}
                        </div>
                    {/* modal */}
                </div>
                {/* overlay */}
            </>,
            document.body
        )
        : null;
}

export default Modal