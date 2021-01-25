import { useRouter } from "next/router"

function isBrowser() {
  return typeof window !== "undefined"
}

export default function withAdmin(Page) {
  const client = props => {
    const router = useRouter()

    if (isBrowser() && localStorage.getItem("user").isAdmin === false) {
      router.push("/")
      return <></>
    }
    return <Page {...props} />
  }

  return client
}
