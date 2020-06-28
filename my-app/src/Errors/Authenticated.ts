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
            console.log(i);
            // nếu mà mình dùng history.push xong thì nó có trở về cái app.tsx để switch k 
            // console.log(data[role].path[i] === props.location.pathname);
        }
    }
}

export default Authenticated;