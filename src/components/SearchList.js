import React, { Fragment } from 'react'
const SearchList = ({list, error}) => {
    return ( 
        <React.Fragment>
            {error && <p className="text-xl">{error}</p>}

                <option value={list.title.en} className="text-black">{list.title.en}</option>
        </React.Fragment>
     );
}
 
export default SearchList;