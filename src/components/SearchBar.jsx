import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    setText("")
  }

  return (
    <div>

      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='flex justify-center items-center p-10 gap-5 bg-red-700'>

        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          type="text"
          className='border border-white rounded outline-none placeholder:text-white w-full px-4 py-2'
          placeholder='Search Anything'
        />
        <button className='border border-white rounded active:outline-0 placeholder:text-white px-4 py-2 cursor-pointer active:scale-95'>Search</button>

      </form>

    </div>
  )
}

export default SearchBar
