import React, { useEffect } from 'react'

export default function Menu({ title, MenuList }) {
  useEffect(() => {
    const allMenu = document.querySelector('.menu-container ul').querySelectorAll('li')
    const firstMenu = document.querySelector('.menu-container ul').querySelector('li')
    firstMenu.classList.add('active')

    allMenu.forEach(n => n.addEventListener('click', changeActive))

    function changeActive(){
      allMenu.forEach(x => x.classList.remove('active'))
      this.classList.add('active')
    }
  }, [])
  return (
    <div className='menu-container'>
      <p className='title'>{title}</p>

      <ul>
        {
          MenuList.map(object => {
            return <li key={object.Id}>
              <a href='#'>
               <i>{object.Icon}</i>
               <span>{object.name}</span>
              </a>
            </li>
          })
        }
      </ul>
    </div>
  )
}
