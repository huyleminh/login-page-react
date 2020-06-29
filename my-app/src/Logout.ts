import { IBaseProps } from "./BaseInterface/BaseInterface";

const Logout = (props: IBaseProps) => {
    localStorage.clear()
    props.history.push("/login")
}

export default Logout;