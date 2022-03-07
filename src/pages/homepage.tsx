import Link from 'next/link'
import { useState, useEffect } from 'react'
import '../styles/Home.module.css'
import Error from 'next/error'



function Homepage() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [userSelected, setUserSelected] = useState("")
  const [userIdSelected, setUserIdSelected] = useState(null)

  const handleChange = (event) => {
    const userName = event.target.value;
    setUserSelected(userName);
    data.filter(dataId => dataId.nickname === userName ).map(filteredNameId => (
      setUserIdSelected(filteredNameId.id)
    ))
    
  };
  
  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3005/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div style={{textAlign: "center"}}>
      <div style={{marginBottom: "20px"}}>
        <h1>TCHAT</h1>
        <Link href='/conversations/[id]' as={`/conversations/${userIdSelected}`}>
          <a style={{padding: "10px 20px", borderRadius: "10px", backgroundColor: "lightblue"}}>My conversations</a>
        </Link>
      </div>
    
      <label for="user-select">Choose a user:</label>

      <select name="user" id="user-select" value={userSelected} onChange={handleChange}>
        <option></option>
        {data.map((users, index) => (
          <option key={index}>{users.nickname}</option>
        ))}
      </select>
    </div>
  )
}


export default Homepage

