function TagButton() {
    return (
        <>
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
        </>
    )
}

export default TagButton