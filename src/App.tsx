import './App.css'
import { useState } from 'react'

import ItemsContainer from './components/ItemsContainer'

export default function App() {

  const [leftItems, setLeftItems] = useState<string[]>(["a", "b", "c", "d"])
  const [rightItems, setRightItems] = useState<string[]>(["e", "f"])

  const [leftItemsSelected, setLeftItemsSelected] = useState<string[]>([])
  const [rightItemsSelected, setRightItemsSelected] = useState<string[]>([])

  function onChangeLeftItemsSelected(e:React.ChangeEvent<HTMLInputElement>) {
    if(e.target.checked) {
      setLeftItemsSelected(prev => [...prev, e.target.name ])
    } else {
        const removedItemList = leftItemsSelected.filter((item) => item !== e.target.name)
        setLeftItemsSelected(removedItemList)
    }
  }

    function onChangeRightItemsSelected(e:React.ChangeEvent<HTMLInputElement>) {
    if(e.target.checked) {
      setRightItemsSelected(prev => [...prev, e.target.name ])
    } else {
        const removedItemList = rightItemsSelected.filter((item) => item !== e.target.name)
        setRightItemsSelected(removedItemList)
    }
  }

  function onClickRightButton() {
    const newLeftItems = leftItems.filter((item) => !leftItemsSelected.includes(item))

    setLeftItems(newLeftItems)
    setRightItems(prev => [...prev, ...leftItemsSelected])
    setLeftItemsSelected([])
  }

  function onClickLeftButton() {
    const newRightItems = rightItems.filter((item) => !rightItemsSelected.includes(item))
    
    setRightItems(newRightItems)
    setLeftItems(prev => [...prev, ...rightItemsSelected])
    setRightItemsSelected([])
  }

  console.log("left items", leftItems)
  console.log("right items", rightItems)

  return (
    <div className='Container'>
      <ItemsContainer items={leftItems} onChangeItemsSelected={onChangeLeftItemsSelected} />

      <div className='ButtonsContainer'>
        <button onClick={onClickRightButton} className='ItemsControllerRightBtn'>{">"}</button>
        <button onClick={onClickLeftButton} className='ItemsControllerLeftBtn'>{"<"}</button>
      </div>
      
      <ItemsContainer items={rightItems} onChangeItemsSelected={onChangeRightItemsSelected} />
    </div>
  )
}
