export default function ItemsContainer(
  { items, onChangeItemsSelected }
  :
  { items:string[], onChangeItemsSelected:(e:React.ChangeEvent<HTMLInputElement>) => void }) {
  
  return (
    <div className='ItemsContainer'>
      {
        items.map((item) => {
          return (
            <div key={item}>
              <input onChange={ onChangeItemsSelected } type="checkbox" name={`${item}`} />
              <label>{item}</label>
            </div>
          )
        })
      }
    </div>
  )
}
