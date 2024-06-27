import {useParams} from "react-router-dom"
import useGetRestroMenu from "../Utils/useGetRestroMenu"

const RestroMenu = () => {

    const {resId} = useParams()
    const restroMenu = useGetRestroMenu(resId)

    return (
        <div>
            {resId}
        </div>
    )

}

export default RestroMenu