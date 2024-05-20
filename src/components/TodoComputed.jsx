const TodoComputed = ({computedItemsLeft, clearCompleted}) => { 
    return (
        <section className='px-4 py-4 flex justify-between bg-white rounded-b-md'>
        <span className='text-gray-400'>{computedItemsLeft} items left</span>
        <button className='text-gray-400' onClick={()=>clearCompleted()}>Clear completed</button>
      </section>
    )
 }
 export default TodoComputed;