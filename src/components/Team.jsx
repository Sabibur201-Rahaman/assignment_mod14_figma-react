import React from 'react'

function Team() {
  let data=[
  //   {
  //   title:"person1",
  //   img:"/img/person1.png",
  // },
  {
    title:"person2",
    img:"/img/person2.png"
  },
  {
    title:"person3",
    img:"/img/person3.png"
  },
  {
    title:"person4",
    img:"/img/person4.png"
  },
  {
    title:"person5",
    img:"/img/person5.png"
  }
]

  return (
    <div className='container'>
      <div className='row'>
        {
          data.map((item,i)=>{
            return(
              <div key={i} className='col-md-3'>
                <div>{item.title}
              <img src={item.img}/>
                </div>
              </div>
            )
          })
        }
      </div>
      <h2>our team management is just awesome</h2>
    </div>
  )
}

export default Team
