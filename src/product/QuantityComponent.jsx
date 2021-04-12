function QuantityComponent() {
  return (
    <>
      {/* <div className="align-left">
        <h4>Quantity</h4>
        <div className="quantity-container">
          <div>+</div>
          <div className="value">1</div>
          <div>-</div>
        </div>
      </div> */}
      
    <div className="form-group">
        <label>Quantity: </label>
        <div className="input-group">
            <div className="input-group-btn">
                <button id="down" className="btn btn-default" onclick=" down('0')"><span className="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="myNumber" className="form-control" value="1" />
            <div className="input-group-btn">
                <button id="up" className="btn btn-default" onclick="up('10')"><span className="glyphicon glyphicon-plus"></span></button>
            </div>
        </div>
    </div>
    </>
  );
}

export default QuantityComponent;
