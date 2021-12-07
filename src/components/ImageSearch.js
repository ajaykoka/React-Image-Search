import React, { useState } from 'react'

export const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('')

    //onSubmit form
    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);

    }
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form className="w-full max-w-sm" onSubmit={onSubmit}>
                <div className="flex items-center border-b-2 border-none py-2">
                    <input onChange = {e => setText(e.target.value)}type="text" className="appearence-none bg-transparent border-l-2 border-t-2 border-b-2 hover:border-green-500 border-blue-500 w-full rounded-l-2xl text-gray-700 hover:text-red-400 py-1 px-2 leading-tight focus:outline-none " placeholder="Search Image" />
                    <button className="flex-shrink-0 bg-none hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-r-2 border-t-2 border-b-2 py-1 px-2 rounded-r-2xl"> Search </button>
                </div>
            </form>
            
        </div>
        
    )
}

