import React from 'react'
import '../Todo_Search/TodoSearch.css'

function TodoSearch() {

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
      };

    return (     
        <input
            className="TodoSearch"
            placeholder="Search..."
            onChange={onSearchValueChange}
        />
    );
}

export  {TodoSearch};
