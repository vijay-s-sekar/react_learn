import React from 'react'
import { useState } from "react";

const Body = () => {
  const [name_change, change_name] = useState(()=>name_selector())
  const [count,change_count] = useState(1);
  
  function countIncreament() {
    return change_count(aa => aa+1)
  }
  function name_selector() {
    let user_name=['vijay','v1','v2','v3','v4']
    let select = Math.floor(Math.random() *user_name.length)
    return user_name[select]
  }
  
  function HandleClick() {
    change_name(name_selector())
    countIncreament()
  }
  return (
    <main>
        Hellow Welocme <b>{name_change}</b>
        <p>name change count {count}</p>
      <button onClick={() => { HandleClick()}}>click here to change the name</button>
      </main>
  )
}

export default Body