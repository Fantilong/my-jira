import { useEffect, useState } from "react"
import { List } from "./list"
import { SearchPanel } from "./seatch-panel"
import { cleanObject } from "utils";
import qs from "qs"

const apiUrl = process.env.REACT_APP_API_BASE_HOST

export const ProjectListScreen = () => {
    const [param, setParam] = useState({name: '', personId: ''})
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res => {
            if(res.ok) {
                setList(await res.json())
            }
        })
    }, [param])

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if(res.ok) {
                setUsers(await res.json())
            }
        })
    }, [])

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam} />
        <List list={list} users={users}/>
    </div>
}