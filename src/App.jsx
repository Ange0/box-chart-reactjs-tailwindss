import logo from './logo.svg';
import './App.css';
// blue color = #1d9bf0
// gray color = #71767b
// white color = #e7e9ea
// red color = #f2202d
import Modal from './components/Modal';
import useModal from './hooks/useModal';

function App() {
  const {isShowing, toggle} = useModal(true)

  return (
    <div className='bg-black'>
      <div className='mx-auto bg-red-200 w-[60%] h-full'>
        <div className='h-96 w-full bg-[#1d9bf0]'>
            hssh
        </div>
        <div className='h-96 w-full bg-[#16181c]'>
            hssh
        </div>
        <div className='h-96 w-full bg-[#1d9bf0]'>
            hssh
        </div>
        <div className='h-96 w-full bg-[#16181c]'>
            hssh
        </div>
        <div className='h-96 w-full bg-[#1d9bf0]'>
            hssh
        </div>
        <div className='h-96 w-full bg-[#16181c]'>
            hssh
        </div>
        <div className='h-96 w-full bg-[#1d9bf0]'>
            hssh
        </div>
      </div>
      {/* box chat */}
      <div className='hidden lg:flex flex-col  flex-none bg-black fixed bottom-0 right-0 w-[400px] h-[60vh] z-20 mr-6  transition-all duration-200 rounded-tl-2xl rounded-tr-2xl  shadow-[0px_0px_15px_rgba(255,255,255,0.2),_0px_0px_3px_1px_rgba(255,255,255,0.15)]'>
        {/* header box chat */}
        <div className='flex justify-between text-white p-4 bg-gray-900/10 backdrop-blur-2xl rounded-tl-2xl rounded-tr-2xl fixed w-[400px]'>
          <div className='font-bold text-xl'>Messages</div>
          <div className='flex space-x-2'>
              <button onClick={toggle} className='hover:bg-[#fff]/20 h-9 w-9 p-2 rounded-full transition duration-500'>
                <svg viewBox="0 0 24 24" aria-hidden="true"  fill="currentColor" className="w-full h-full">
                  <g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path></g>
                </svg>
              </button>
              <button className='hover:bg-[#fff]/20 h-9 w-9 p-2 rounded-full transition duration-500'>
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="w-full h-full">
                    <g><path d="M12 11.59L3.96 3.54 2.54 4.96 12 14.41l9.46-9.45-1.42-1.42L12 11.59zm0 7l-8.04-8.05-1.42 1.42L12 21.41l9.46-9.45-1.42-1.42L12 18.59z"></path></g>
                </svg>
              </button>
          </div>
        </div>
        {/* header box chat */}

        {/* content  box chat */}
        <div className='overflow-y-auto rounded-tl-2xl rounded-tr-2xl'>
            <div className='h-[4.3rem] bg-blackmb-2'></div>
          {/* items users */}
            <div className='flex flex-col divide-y divide-stone-700'>
              {/* hover:bg-[#16181c] is active if dialogue contextual box is not show */}
                <div className='flex flex-col space-y-4'>
                    <div className='text-white text-xl font-bold p-2'>Pinned conversations</div>
                    <div className='flex  p-4 space-x-4 hover:bg-[#16181c] cursor-pointer transition duration-200 relative'>
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
                          <div className='bg-black  z-[200] font-bold text-sm flex flex-col divide-y divide-stone-700 fixed  text-white shadow-[0px_0px_15px_rgba(255,255,255,0.2),_0px_0px_3px_1px_rgba(255,255,255,0.15)] rounded-xl min-w-[200px] overflow-auto h-fit  transition-all duration-[800ms]'>
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
        <Modal isShowing={isShowing} toggle={toggle} />
      </div>
      {/* box chat */}

    </div>
  );
}

export default App;
