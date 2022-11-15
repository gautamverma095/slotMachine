 const Matching = (props) => {
//      console.log(props);
//      props = props.props
    
 const {x,y,z} = props.props
//  console.log(x, y, z);
    return (
      <>
        <div>
          <h1>
            {" "}
            {x} {y} {z}{" "}
          </h1>
          <h1>This is matching</h1>
          <hr />
        </div>
      </>
    );
 }

 export default Matching