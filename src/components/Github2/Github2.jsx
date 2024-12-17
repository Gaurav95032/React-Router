// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github2() {
    const data = useLoaderData()
  return (
    <div className="mt-5">
        <p>Github User: {data.login || "N/A"}</p>
        <p>Followers: {data.followers || 0}</p>
        <p>Public Repos: {data.public_repos || 0}</p>
        <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github2

export const gitInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/gaurav95032')
    return response.json
}