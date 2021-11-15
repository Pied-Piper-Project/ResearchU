const PersonItem = ({ item }) => {
 
    return (
      <div className="col-sm-4">
        <div className="card my-2">
          <img src={item?.schoolLogo} className="card-img-top" alt="" />
          <div className="card-body">
            {/* <h5 className="card-title">
              {item?.first_name} {item?.last_name}
            </h5> */}
            <h5 className="card-text">{item?.year}</h5>
            <p className="card-text">{item?.gpa}</p>
            <p className="card-text">{item?.major}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PersonItem;