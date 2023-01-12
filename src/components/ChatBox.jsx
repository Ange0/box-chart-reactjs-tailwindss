import Modal from './Modal';
import useModal from './../hooks/useModal';
import { useState } from 'react';
import LoadingBar from './../components/LoadingBar'

function ChatBox() {
  const {isShowing, toggle} = useModal(true)
  const [isUp, setIsUp] = useState(false)

    return (
        <>
            <div className={`hidden lg:flex flex-col  flex-none bg-twitter-primary fixed bottom-0 right-0 w-[400px] ${isUp ? 'h-[60vh]': 'h-[4rem]'} z-20 mr-6  transition-all duration-200 rounded-tl-2xl rounded-tr-2xl  shadow-[0px_0px_15px_rgba(255,255,255,0.2),_0px_0px_3px_1px_rgba(255,255,255,0.15)]`}>
                {/* header box chat */}
                <div className='flex justify-between text-twitter-secondary p-4 bg-gray-900/10 backdrop-blur-2xl rounded-tl-2xl rounded-tr-2xl fixed w-[400px]'>
                <div className='font-bold text-xl'>Messages</div>
                <div className='flex space-x-2'>
                    <button onClick={toggle} className='hover:bg-[#fff]/20 h-9 w-9 p-2 rounded-full transition duration-500'>
                        <svg viewBox="0 0 24 24" aria-hidden="true"  fill="currentColor" className="w-full h-full">
                        <g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path></g>
                        </svg>
                    </button>
                    <button onClick={() => setIsUp(!isUp)} className='hover:bg-[#fff]/20 h-9 w-9 p-2 rounded-full transition duration-500'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="w-full h-full">
                            <g><path d="M12 11.59L3.96 3.54 2.54 4.96 12 14.41l9.46-9.45-1.42-1.42L12 11.59zm0 7l-8.04-8.05-1.42 1.42L12 21.41l9.46-9.45-1.42-1.42L12 18.59z"></path></g>
                        </svg>
                    </button>
                </div>
                </div>
                {/* header box chat */}

                {/* content  box chat */}
                <div className='overflow-y-auto rounded-tl-2xl rounded-tr-2xl'>
                    <div className='h-[4.3rem] bg-twitter-primary mb-2'></div>
                {/* items users */}
                    <div className='flex flex-col divide-y divide-stone-700'>
                    {/* hover:bg-[#16181c] is active if dialogue contextual box is not show */}
                        <div className='flex flex-col space-y-4'>
                            <div className='text-twitter-secondary text-xl font-bold p-2'>Pinned conversations</div>
                            <div className='flex  p-4 space-x-4 hover:bg-twitter-quaternary/10 cursor-pointer transition duration-200 relative'>
                                <img className='h-12 w-12 rounded-full' src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
                                <div className='flex text-[#71767b]  justify-between flex-grow'>
                                    <div className='flex flex-col'>
                                        <div className='flex space-x-1'>
                                            <div className='flex items-center space-x-1'>
                                                <span className='text-[#e7e9ea] font-bold truncate max-w-[80px]'>Patty</span>  
                                                <img alt="🧙" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f9d9.svg" title="Mage" className="h-4 w-4"></img>
                                            </div>
                                            <span className='font-bold truncate text-sm max-w-[100px]'>@Patty</span>
                                            <span>. Jan 6</span>
                                        </div>
                                        <span className='text-sm font-semibold'>Your sent a GIF</span>
                                    </div>
                                    <div className='relative bg-red-200'>
                                        <button className='hover:bg-[#1d9bf0]/20 hover:text-[#1d9bf0] rounded-full p-2 absolute right-0 -top-1'>
                                            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="w-4 h-4">
                                                <g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                {/* dialogue contextual */}
                                <div className='absolute top-4 right-[13.5rem] bg-red-200'>
                                    {/* // h-0 for hide menu textextual */}
                                    <div className='bg-twitter-primary  z-[200] font-bold text-sm flex flex-col divide-y divide-stone-700 fixed  text-twitter-secondary shadow-[0px_0px_15px_rgba(255,255,255,0.2),_0px_0px_3px_1px_rgba(255,255,255,0.15)] rounded-xl min-w-[200px] overflow-auto h-fit  transition-all duration-[800ms]'>
                                        <div className='flex space-x-2 items-center p-3'>
                                            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="w-4 h-4 flex-none">
                                                <g><path d="M17 9.76V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5v5.26L3.88 16H11v5l1 2 1-2v-5h7.12L17 9.76zM7.12 14L9 10.24V4.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5.74L16.88 14H7.12z"></path></g>
                                            </svg>
                                            <span>Pin conversation</span>
                                        </div>
                                        <div className='flex space-x-2 items-center p-3'>
                                            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="w-4 h-4 flex-none">
                                                <g><path d="M20.29 2.29l-2.34 2.34C16.47 3.01 14.34 2 12 2 7.93 2 4.51 5.02 4 9.05L2.87 18h1.72l-2.3 2.29 1.42 1.42 18-18-1.42-1.42zM6.59 16H5.13l.85-6.7C6.36 6.27 8.94 4 12 4c1.79 0 3.42.78 4.54 2.05L6.59 16zM12 22c-1.57 0-2.98-.73-3.89-1.86l1.42-1.43c.55.78 1.45 1.29 2.47 1.29 1.31 0 2.42-.83 2.83-2H12v-2h6.86l-.74-5.87 1.76-1.76c.05.22.08.44.11.67L21.14 18H16.9c-.46 2.28-2.48 4-4.9 4z"></path></g>
                                            </svg>
                                            <span>Snooze conversation</span>
                                        </div>
                                        <div className='flex space-x-2 items-center p-3'>
                                            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="w-4 h-4 flex-none">
                                                <g><path d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z"></path></g>
                                            </svg>
                                            <span>Report conversation</span>
                                        </div>
                                        <div className='flex space-x-2 items-center p-3'>
                                            <svg viewBox="0 0 32 32" aria-hidden="true"fill="#f2202d" className="w-4 h-4 flex-none">
                                                <g><path d="M20 23h-2v-8h2v8zm-6-8h-2v8h2v-8zm14-5h-1.713l-1.111 15.577C25.038 27.496 23.424 29 21.5 29H10.486c-1.915 0-3.522-1.496-3.66-3.405L5.699 10H4V8h7V6c0-1.654 1.346-3 3-3h4c1.654 0 3 1.346 3 3v2h7v2zM13 8h6V6c0-.551-.449-1-1-1h-4c-.551 0-1 .449-1 1v2zm11.281 2H7.705l1.117 15.451c.062.869.793 1.549 1.665 1.549H21.5c.88 0 1.619-.688 1.681-1.565L24.282 10z"></path></g>
                                            </svg>
                                            <span className='text-[#f2202d]'>Report conversation</span>
                                        </div>
                                    </div>
                                </div>
                                {/* dialogue contextual */}

                            </div>
                        </div>
                    </div>
                {/* items users  */}
                </div>
                {/* content box chat  */}
                <Modal isShowing={isShowing} toggle={toggle}>
                    <div className='flex flex-col divide-y divide-twitter-quaternary/40 overflow-hidden'>
                        {/* search people */}
                        <div className='flex flex-col space-y-2 relative'>
                            <div className='flex  space-x-4 p-4 items-center '>
                                <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className='text-twitter-quaternary h-5 w-5'>
                                    <g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g>
                                </svg>
                                <input className='text-twitter-quaternary w-full bg-twitter-primary focus:outline-none text-sm placeholder-twitter-quaternary' placeholder='Search people' />
                            </div>
                            <div className='flex p-2 space-x-4 w-full overflow-x-auto'>
                                {/* tag button */}
                                <span className='flex flex-none justify-between border border-twitter-quaternary/40 rounded-full pl-1  pr-2 py-1 items-center cursor-pointer hover:bg-twitter-tertiary/5'>
                                    <span className='flex space-x-2 items-center'>
                                        <img className='h-6 w-6 rounded-full' src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
                                        <div className='flex items-center space-x-1'>
                                            <span className='text-[#e7e9ea] font-bold truncate max-w-[80px]'>Patty</span>  
                                            <img alt="🧙" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f9d9.svg" title="Mage" className="h-4 w-4"></img>
                                        </div>
                                    </span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className='h-5 w-5 ml-2 text-twitter-tertiary'>
                                        <g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g>
                                    </svg>
                                </span>
                                {/* tag button */}
                                {/* tag button */}
                                <span className='flex flex-none justify-between border border-twitter-quaternary/40 rounded-full pl-1  pr-2 py-1 items-center cursor-pointer hover:bg-twitter-tertiary/5'>
                                    <span className='flex space-x-2 items-center'>
                                        <img className='h-6 w-6 rounded-full' src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
                                        <div className='flex items-center space-x-1'>
                                            <span className='text-[#e7e9ea] font-bold truncate max-w-[80px]'>Patty</span>  
                                            <img alt="🧙" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f9d9.svg" title="Mage" className="h-4 w-4"></img>
                                        </div>
                                    </span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className='h-5 w-5 ml-2 text-twitter-tertiary'>
                                        <g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g>
                                    </svg>
                                </span>
                                {/* tag button */}
                                {/* tag button */}
                                <span className='flex flex-none justify-between border border-twitter-quaternary/40 rounded-full pl-1  pr-2 py-1 items-center cursor-pointer hover:bg-twitter-tertiary/5'>
                                    <span className='flex space-x-2 items-center'>
                                        <img className='h-6 w-6 rounded-full' src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
                                        <div className='flex items-center space-x-1'>
                                            <span className='text-[#e7e9ea] font-bold truncate max-w-[80px]'>Patty</span>  
                                            <img alt="🧙" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f9d9.svg" title="Mage" className="h-4 w-4"></img>
                                        </div>
                                    </span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className='h-5 w-5 ml-2 text-twitter-tertiary'>
                                        <g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g>
                                    </svg>
                                </span>
                                {/* tag button */}
                                {/* tag button */}
                                <span className='flex flex-none justify-between border border-twitter-quaternary/40 rounded-full pl-1  pr-2 py-1 items-center cursor-pointer hover:bg-twitter-tertiary/5'>
                                    <span className='flex space-x-2 items-center'>
                                        <img className='h-6 w-6 rounded-full' src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
                                        <div className='flex items-center space-x-1'>
                                            <span className='text-[#e7e9ea] font-bold truncate max-w-[80px]'>Patty</span>  
                                            <img alt="🧙" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f9d9.svg" title="Mage" className="h-4 w-4"></img>
                                        </div>
                                    </span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className='h-5 w-5 ml-2 text-twitter-tertiary'>
                                        <g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g>
                                    </svg>
                                </span>
                                {/* tag button */}
                                {/* tag button */}
                                <span className='flex flex-none justify-between border border-twitter-quaternary/40 rounded-full pl-1  pr-2 py-1 items-center cursor-pointer hover:bg-twitter-tertiary/5'>
                                    <span className='flex space-x-2 items-center'>
                                        <img className='h-6 w-6 rounded-full' src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
                                        <div className='flex items-center space-x-1'>
                                            <span className='text-[#e7e9ea] font-bold truncate max-w-[80px]'>Patty</span>  
                                            <img alt="🧙" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f9d9.svg" title="Mage" className="h-4 w-4"></img>
                                        </div>
                                    </span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className='h-5 w-5 ml-2 text-twitter-tertiary'>
                                        <g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g>
                                    </svg>
                                </span>
                                {/* tag button */}
                                {/* tag button */}
                                <span className='flex flex-none justify-between border border-twitter-quaternary/40 rounded-full pl-1  pr-2 py-1 items-center cursor-pointer hover:bg-twitter-tertiary/5'>
                                    <span className='flex space-x-2 items-center'>
                                        <img className='h-6 w-6 rounded-full' src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
                                        <div className='flex items-center space-x-1'>
                                            <span className='text-[#e7e9ea] font-bold truncate max-w-[80px]'>Patty</span>  
                                            <img alt="🧙" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f9d9.svg" title="Mage" className="h-4 w-4"></img>
                                        </div>
                                    </span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className='h-5 w-5 ml-2 text-twitter-tertiary'>
                                        <g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g>
                                    </svg>
                                </span>
                                {/* tag button */}
                                {/* tag button */}
                                <span className='flex flex-none justify-between border border-twitter-quaternary/40 rounded-full pl-1  pr-2 py-1 items-center cursor-pointer hover:bg-twitter-tertiary/5'>
                                    <span className='flex space-x-2 items-center'>
                                        <img className='h-6 w-6 rounded-full' src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
                                        <div className='flex items-center space-x-1'>
                                            <span className='text-[#e7e9ea] font-bold truncate max-w-[80px]'>Patty</span>  
                                            <img alt="🧙" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f9d9.svg" title="Mage" className="h-4 w-4"></img>
                                        </div>
                                    </span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className='h-5 w-5 ml-2 text-twitter-tertiary'>
                                        <g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g>
                                    </svg>
                                </span>
                                {/* tag button */}
                               
                            </div>
                             <LoadingBar />
                        </div>
                        
                        {/* search people */}

                        {/* create group */}
                        <div className='flex items-center space-x-4 p-4 text-twitter-tertiary hover:bg-twitter-quaternary/10 cursor-pointer'>
                            <button className='p-2 h-10 w-10 border border-twitter-quaternary  rounded-full'>
                                <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className='h-full w-full'>
                                    <g><path d="M12 5c-.83 0-1.5.67-1.5 1.5S11.17 8 12 8s1.5-.67 1.5-1.5S12.83 5 12 5zM8.5 6.5C8.5 4.57 10.07 3 12 3s3.5 1.57 3.5 3.5S13.93 10 12 10 8.5 8.43 8.5 6.5zm-3.25 1c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm-2.75.75c0-1.52 1.23-2.75 2.75-2.75S8 6.73 8 8.25 6.77 11 5.25 11 2.5 9.77 2.5 8.25zm16.25-.75c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zM16 8.25c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75S20.27 11 18.75 11 16 9.77 16 8.25zM12 13c-1.29 0-2.37.54-3.22 1.61C8 15.6 7.4 17.07 7.12 19h9.76c-.27-1.85-.83-3.28-1.57-4.28C14.45 13.58 13.34 13 12 13zm-4.78.36C8.41 11.86 10.06 11 12 11c2.02 0 3.7.92 4.91 2.53 1.18 1.57 1.88 3.77 2.09 6.39l.08 1.08H4.92L5 19.92c.22-2.7.96-4.97 2.22-6.56zM2.95 16c.16-.55.39-.97.66-1.28.4-.46.94-.72 1.64-.72v-2c-1.26 0-2.35.49-3.15 1.4-.78.89-1.22 2.11-1.35 3.51L.65 18H4v-2H2.95zm18.95-2.6c.78.89 1.22 2.11 1.35 3.51l.1 1.09H20v-2h1.05c-.16-.55-.39-.97-.66-1.28-.4-.46-.94-.72-1.64-.72v-2c1.26 0 2.35.49 3.15 1.4z"></path></g>
                                </svg>
                            </button>
                            <span className='font-bold'>Create a group</span>
                        </div>
                        {/* create group */}

                        {/*  peoples */}
                        <div className='flex flex-col space-y-2'>
                            <div className='hover:bg-twitter-quaternary/10 p-4'>
                                <div className='flex space-x-4 text-twitter-quaternary ml-4 mb-2'>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill='currentColor' className='h-4 w-4'>
                                        <g><path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path></g>
                                    </svg>
                                    <span className='text-xs font-bold'>You follow each other</span>
                                </div>
                                <div className='flex justify-between cursor-pointer items-center'>
                                    <div className='flex space-x-4 '>
                                        <img className='h-12 w-12 rounded-full' src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
                                        <div className='flex text-twitter-quaternary  justify-between flex-grow'>
                                            <div className='flex flex-col'>
                                                <div className='flex items-center space-x-1'>
                                                    <span className='text-[#e7e9ea] font-bold truncate max-w-[80px]'>Patty</span>  
                                                    <img alt="🧙" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f9d9.svg" title="Mage" className="h-4 w-4"></img>
                                                </div>
                                                <span className='text-sm font-semibold'>@Patty</span>
                                            </div>
                                        </div>
                                    </div>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" fill='currentColor' className='h-5 w-5 text-twitter-tertiary' >
                                        <g><path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"></path></g>
                                   </svg>
                                </div>
                            </div>
                        </div>
                        {/* peoples */}

                    </div>
                </Modal>
            </div>
        </>

    )
}

export default ChatBox