function LoadingBar() {
    return (
        <>
            <div className='absolute -bottom-1 left-0 w-full  h-1 '>
                <div className='w-full h-full relative'>
                    <div className="absolute animate-loading-bar  bg-twitter-tertiary h-full w-2/12 "></div>
                </div>
            </div>
        </>
    )
}
export default LoadingBar