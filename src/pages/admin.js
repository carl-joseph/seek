import { useLayoutEffect } from "react"

export default function AdminPage() {
    useLayoutEffect(() => (window.location.href = "https://seek-7793.admin.datocms.com"), [])
    return null
}
