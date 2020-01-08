import React from "react";
const Product = (props) => {
    console.log(props);
    if (props.pro.length <= 0) { return null;}
    return (
        <div className="container">
            <div className="row">
                {
                    props.pro.hits.map(data => (
                        <div className="col-md-4">
                        <div class="card text-left">
                                <img class="card-img-top" src={data.largeImageURL} alt={data.tags}/>
                          <div class="card-body">
                                    <h4 class="card-title">{data.user}</h4>
                                    <p class="card-text">TOTAL LIKES: {data.likes}</p>
                          </div>
                        </div>

                        </div>
                    ))
              }
            </div>
      </div>
  )
};

export default Product;
