import { IBaseProps } from "./BaseInterface/BaseInterface"

const Logout = (props: IBaseProps) => {
    props.history.push("/")
}

export default Logout;