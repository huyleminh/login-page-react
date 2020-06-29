import UserData from "../data/data.json"
import {
    IBaseProps,
    IData
} from "../BaseInterface/BaseInterface"

const role = localStorage.getItem('role');
const data: IData = UserData;
const listRole = Object.keys(data);

const Authenticated = (props: IBaseProps) => {
    if (role === null || !listRole.includes(role)) {
        props.history.push("/login");
        return;
    }
    else {
        for (let i of data[role].path) {
            if (!data[role].path.includes(props.location.pathname)) {
                props.history.push("/forbidden")
                return;
            }
        }
    }
}

export default Authenticated;