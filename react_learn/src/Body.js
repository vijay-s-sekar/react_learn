import React from 'react'


const Body = () => {
  function name_selector() {
    let a=['vijay','v1','v2','v3','v4']
    let select = Math.floor(Math.random()*a.length)

    return a[select]
  }
  const HandleClick = () =>{
    console.log("succss")
  }
  const Double_click =()=>{
    console.log("double click")
  }
  return (
    <main>
      <p onDoubleClick={()=>{Double_click()}}> 
        Hellow Welocme {(name_selector())}
      </p>
      <button onClick={() => { HandleClick()}}>click</button>
      </main>
  )
}

export default Body