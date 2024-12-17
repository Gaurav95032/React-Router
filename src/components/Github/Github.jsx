// eslint-disable-next-line no-unused-vars
import React, { useCallback, useState } from 'react';

function Github() {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");

    const git = useCallback(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((fetchedData) => {
                setData(fetchedData);
            })

    }, [username]);

    return (
        <div className="relative text-center text-black text-3xl p-5">
            <label htmlFor="username-input" className="block mb-2 text-lg font-semibold">
                Enter Username:
            </label>
            <input
                type="text"
                id="username-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e)=>{
                    if (e.key === "Enter") {
                        git()
                    }
                }}
                className="mb-5 p-2 rounded border border-gray-400"
            />
            <button
                onClick={git} 
                className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Search
            </button>
            <div className="mt-5">
                <p>Github User: {data.login || "N/A"}</p>
                <p>Followers: {data.followers || 0}</p>
                <p>Public Repos: {data.public_repos || 0}</p>
                <img src={data.avatar_url} alt="" />
            </div>
        </div>
    );
}

export default Github;
