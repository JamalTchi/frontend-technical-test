import React from "react"
import { useRouter } from "next/router"; 

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3005/messages`)
    const json = await res.json()
   
    return {
      props: { 
        messages: json 
      },
    }
  
  }
  
  
  export default function Page({messages }) {
    const router = useRouter();
    const query = router.query;
    const idMessage = query.id; 
  
    return (
    <div className="container-messages">
      <div className='messages'>
      {messages.filter(message => message.conversationId == idMessage ).map((res, index) => (
        <div key={index}  style={{padding: "5px", backgroundColor: "antiquewhite", marginBottom: "10px"}}>
            <p>{res.body}</p>
        </div>
      ))}
      </div>  
      <div className="new-messages">
        <input type="text" placeholder="send message"/><button>Send</button>
      </div> 
    </div>
    )
  }