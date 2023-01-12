function LoadingBar() {
    return (
        <>
            <div className='absolute -bottom-1 -left-6 w-full  h-1'>
                <div className='w-2/12 h-full bg-twitter-tertiary animate-loading-bar'></div>
            </div>
        </>
    )
}
export default LoadingBar