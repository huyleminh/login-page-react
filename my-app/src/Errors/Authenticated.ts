import UserData from "../data/data.json"
import {
    IBaseProps,
    IData
} from "../BaseInterface/BaseInterface"

const role = localStorage.getItem('role');
const data: IData = UserData;

const Authenticated = (props: IBaseProps) => {
    if (!role) {
        props.history.push("/login")
    }
    else {
        for (let key in data) {
            if (key === role) {
                if (data[key].path.indexOf(props.location.pathname) > -1) {
                    return
                }
                else {
                    alert("Không có quyền truy cập")
                    props.history.push(`/forbidden`)
                    return;
                }
            }
        }
    }
}

export default Authenticated;