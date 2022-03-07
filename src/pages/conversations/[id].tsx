import Link from 'next/link';
import React, {useState} from "react"




export async function getServerSideProps(context) {
  const  {id} = context.query;
  const res = await fetch(`http://localhost:3005/conversations/${id}`)
  const json = await res.json()

  return {
    props: { 
      person: json ,
      id: id
    },
  }

}


export default function Page({person, id}) {

  return (
  <div className="App">

    {person.map((filteredPerson, index) => (
      <Link href='/messages/[id]' as={`/messages/${id}`}>
        <a className="container-conversations" key={index}>
          <p>{filteredPerson.recipientId == id ? filteredPerson.senderNickname : filteredPerson.recipientNickname}</p>
          <p>{new Date(filteredPerson.lastMessageTimestamp).toDateString()}</p> 
        </a>
      </Link>
    ))}

  </div>
  )
}