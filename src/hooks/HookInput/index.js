import {useState} from 'react'

const useIpnut = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const handleValue = (e) => {
        
        setValue(e.target.value)
    }

    return {
        value, onChange: handleValue
    }
}

export default useIpnut