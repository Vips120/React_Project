import React from "react";
const Search = ({placeholder, search}) => {
    // console.log(props);
    return (
        <div className="container">
  <div className="col-md-12">
            <div className="form-group">
                    <input type="text" className="form-control" placeholder={placeholder}
                     onChange={search}
                    
                    />
            </div>
          </div>
        </div>
    )
};

export default Search;