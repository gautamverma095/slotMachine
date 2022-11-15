const NotMathing = (props) => {

    const {x,y,z} = props.props

    return (
      <>
        <div>
          <h1>
            {" "}
            {x} {y} {z}{" "}
          </h1>
          <h1>This is Not matching</h1>
          <hr />
        </div>
      </>
    );
}
export default NotMathing