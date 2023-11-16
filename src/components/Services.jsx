import React from 'react'

function Services() {
  let data=[
    {
      title:"item1",
      img:"/serviceImg/logo1.png",
  },
  {
    title:"item2",
    img:"/serviceImg/logo2.png",
},
{
  title:"item3",
  img:"/serviceImg/logo4.png",
},
{
  title:"item5",
  img:"/serviceImg/logo3.png",
},
{
  title:"item6",
  img:"/serviceImg/logo5.png",
},
{
  title:"item7",
  img:"/serviceImg/logo6.png",
},
{
  title:"item8",
  img:"/serviceImg/logo7.png",
},
{
  title:"item9",
  img:"/serviceImg/logo8.png",
},
{
  title:"item10",
  img:"/serviceImg/logo9.png",
},
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
      <h2>our services are awesome</h2>
    </div>
  )
}

export default Services
