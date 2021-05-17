import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="https://www.strava.com/oauth/authorize?client_id=61144&redirect_uri=http://localhost:3000/strava&response_type=code&scope=activity:read_all&approval_prompt=force">
          <a>Login</a>
        </Link>
      </h2>
    </>
  )
}
