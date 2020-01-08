import React from "react";
import Userdetails from './userDetails';
import Discard from './discard';
import Faker from "faker";
const App = () => {
    let style = {
        padding: "60px 0px 60px"
    };
    return (
        <div className="container" style={style}>
             <Discard>
                <Userdetails username="JOHN DOE" role="TESTER" imgUrl={Faker.image.avatar()} />
                </Discard>
            <hr />
            <Discard>
            <Userdetails username="EMMA DOE" role="BLOGGER" imgUrl={Faker.image.avatar()}/>
            </Discard>
          
            <hr />
            <Discard>
            <Userdetails username="KIM DOE" role="DEVELOPER" imgUrl={Faker.image.avatar()}/>
            </Discard>
           
      </div>
  )
};

export default App;