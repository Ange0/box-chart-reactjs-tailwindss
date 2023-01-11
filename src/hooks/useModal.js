import {useState, useEffect} from "react"

function useModal() {
    const [isShowing, setIsShowing] = useState(false)

    function toggle(e) {
        setIsShowing(e.target.id && (e.target.id == 'close-modal') ? false : true)
    }

    useEffect(() => {
        isShowing ?  document.body.classList.add('overflow-hidden') :  document.body.classList.remove('overflow-hidden')

    }, [isShowing] )
    return {
        isShowing,
        toggle
    }
}

export default useModal