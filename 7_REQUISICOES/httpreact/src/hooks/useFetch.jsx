import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [deleteId, setDeleteId] = useState("")

    const httpConfig = (dataOrId, methodType) => {
        if (methodType === "POST") {
            setConfig({
                method: methodType,
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(dataOrId)
            })
            setMethod(methodType)
        } else if (methodType === "DELETE") {
            setConfig({
                method: methodType,
                headers: { "Content-type": "application/json" }
            })
            setMethod(methodType)
            setDeleteId(dataOrId)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
        }
        fetchData()
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST" && config) {
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setCallFetch(json)
            } else if (method === "DELETE" && config) {
                const deleteUrl = `${url}${deleteId}`
                const res = await fetch(deleteUrl, config)
                const json = await res.json()
                setCallFetch(json)
            }
        }
        httpRequest()
    }, [config, method, url, deleteId])

    return { data, httpConfig }
}
