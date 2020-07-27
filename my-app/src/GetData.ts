import {IDataElementBar} from "./BaseInterfaces/BaseInterface"


const user = localStorage.getItem('user');
let userObj = {role: "", id: ""}
if (user !== null) {
    userObj = JSON.parse(user);   
}

export default function getData (data: Array<IDataElementBar>, contents: Array<any>, paths: Array<any>, ids: Array<any>, roles: Array<any>) {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.role.includes(userObj.role) === false) {      
            continue
        }
        if (element.member.includes(userObj.id) === false)
            continue;

        paths.push(element.path)
        ids.push(element.member)
        roles.push(element.role)
        
        switch (element.type) {
            case "bar":
                contents.push(`<button class="nav-dropdown-btn"><a class="nav-dropdown-btn-a" href="${element.path}"/>${element.title}</button>`)
                break;
            case "content":
                contents.push(`<a class="nav-dropdown-content-NavLink" href=${element.path}>${element.title}</a>`)
                break;
        }

        if (element.hasChild === true) {
            getData(element.child, contents, paths, ids, roles)
        }
    }   
    paths.push("/")
    paths.push("/login")
}