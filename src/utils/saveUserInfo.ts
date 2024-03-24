import { TypeUserInfo } from "../App"

export const saveUserInfo = (local: TypeUserInfo) => {
    window.localStorage.setItem("tools", JSON.stringify(local))
}