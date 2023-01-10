import logo from './logo.svg';
import './App.css';
// blue color = #1d9bf0
// gray color = #71767b
// white color = #e7e9ea

function App() {
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
      <div className='flex flex-col flex-none bg-black fixed bottom-0 right-0 w-[400px] h-[60vh] z-20 mr-6  transition-all duration-200 rounded-tl-2xl rounded-tr-2xl  shadow-[0px_0px_15px_rgba(255,255,255,0.2),_0px_0px_3px_1px_rgba(255,255,255,0.15)]'>
        {/* header box chat */}
        <div className='flex justify-between text-white p-4 bg-gray-900/10 backdrop-blur-2xl rounded-tl-2xl rounded-tr-2xl fixed w-[400px]'>
          <div className='font-bold text-xl'>Messages</div>
          <div className=''>
              <button>
                <svg viewBox="0 0 24 24" aria-hidden="true"  fill="currentColor" className="w-5 h-5">
                  <g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path></g>
                </svg>
              </button>
              <button className='ml-4'>
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="w-5 h-5">
                    <g><path d="M12 11.59L3.96 3.54 2.54 4.96 12 14.41l9.46-9.45-1.42-1.42L12 11.59zm0 7l-8.04-8.05-1.42 1.42L12 21.41l9.46-9.45-1.42-1.42L12 18.59z"></path></g>
                </svg>
              </button>
          </div>
        </div>
        {/* header box chat */}

        {/* content  box chat */}
        <div className='overflow-y-auto rounded-tl-2xl rounded-tr-2xl'>
            <div className='h-14 bg-blackmb-2'></div>
            <div className='flex flex-col divide-y divide-stone-700'>
              <div className='flex  p-2 space-x-4'>
                <img className='h-12 w-12 rounded-full' src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
                <div className='flex text-'>
                    <div className='flex flex-col'>
                      <div className='flex items-center space-x-1'>
                        <span className='text-[#e7e9ea] font-bold'>Gabeta Soro</span>
                        <img alt="🧙" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f9d9.svg" title="Mage" class="h-4"></img>
                      </div>
                      <span></span>
                    </div>
                </div>
              </div>
            </div>
        </div>
        {/* content box chat  */}

      </div>
      {/* box chat */}
    </div>
  );
}

export default App;
