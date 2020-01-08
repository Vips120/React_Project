import React from "react";
const Search = ({placeholder,SearchYoutube,value}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                    <input
                            type="text"
                        placeholder={placeholder}
                        onChange={SearchYoutube}
                        className="form-control"
                    />
                    </div>
                  
                </div>
            </div>
        </div>
    )
};
export default Search;
