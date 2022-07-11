import {useState} from 'react'

const useIpnut = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const handleValue = (e) => {
        setValue(e.target.value)
    }

    const removeVal = () => {
        setValue('')
    }

    return {
        value, onChange: handleValue, removeVal
    }
}

export default useIpnut