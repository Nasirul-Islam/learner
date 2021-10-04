import { useState, useEffect } from "react"

const useAppdata = () => {
    const [datas, setDatas] = useState({});
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    return [datas];
}

export default useAppdata;