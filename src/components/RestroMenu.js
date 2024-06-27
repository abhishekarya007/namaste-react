import {useParams} from "react-router-dom"
import { restroMenuApiUrl } from "../Utils/Constants"
import {useEffect} from "react"

const RestroMenu = () => {

    const {resId} = useParams()

    useEffect( () => {

        fetchData()

    }, [])

    const fetchData = async () => {

        const data = await fetch(restroMenuApiUrl + resId)
        const json = await data.json()
        console.log(json);

    }
    

    return (
        <div>
            {resId}
        </div>
    )

}

export default RestroMenu