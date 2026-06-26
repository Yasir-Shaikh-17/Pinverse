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
        className='flex justify-center items-center px-5 h-[11svh] gap-2 sm:gap-5'>

        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          type="text"
          className='border-2 border-[#FF5C64] rounded outline-none placeholder:text-[#FF5C64] w-full px-4 py-2 text-[#FF5C64] font-semibold placeholder:font-semibold shadow-lg'
          placeholder='Search Anything'
        />
        <button className='border-2 border-[#FF5C64] bg-[#FF5C64] text-[#F6EEE3] sm:bg-[#F6EEE3] sm:text-[#FF5C64] rounded active:outline-0 placeholder:text-[#FF5C64] px-4 py-2 cursor-pointer active:scale-95 uppercase shadow-xl hover:bg-[#FF5C64] hover:text-[#F6EEE3] transition duration-300 font-semibold'>Search</button>

      </form>

    </div>
  )
}

export default SearchBar
