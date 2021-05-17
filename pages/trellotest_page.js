import { useRouter } from 'next/router'

const getParams = () => {
  const router = useRouter()
  const {id} = router.query

  return({id})
}

export default function trellotest_page() {
  const router = useRouter()
  const {card} = router.query
  return(<div>{card}</div>)
}