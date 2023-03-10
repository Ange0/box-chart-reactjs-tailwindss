
import { createPortal } from 'react-dom';

function Modal({isShowing, toggle, body, header }) {
    
    return isShowing 
        ? createPortal(
            <>
                {/* overlay */}
                <div id='close-modal' onClick={toggle}  className='flex items-center justify-center z-[1020] bg-[#242d34]/60 w-screen h-screen fixed top-0 left-0'>
                    {/* modal */}
                        <div  className='flex flex-col space-y-6 bg-twitter-primary text-twitter-secondary rounded-2xl shadow w-md'>
                            <div className='p-4 flex space-x-4'>
                                <div className='relative'>
                                    <button className=' w-8 h-8 hover:bg-twitter-secondary/20 p-1 rounded-full transition'>
                                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="h-hull  w-full flex-none">
                                            <g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g>
                                        </svg>
                                        <div id='close-modal' className='absolute top-0 left-0  h-full w-full'></div>
                                    </button>
                                </div>
                                {/* header */}
                                <div className='flex-grow'>
                                    {header}
                                </div>
                                {/* header */}
                            </div>
                            {/* body */}
                            {body}
                            {/* body */}
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