function SizeComponent() {
  return (
    <>
      <div className="size align-left">
        <h4>Size</h4>
        <div className="size">
          <div>
            <input type="radio" id="xs" value="xs" name="size" checked />
            <label for="xs"><span>XS</span></label>
          </div>
          <div>
            <input type="radio" id="s" name="size" value="s" />
            <label for="s"><span>S</span></label>
          </div>
          <div>
            <input type="radio" id="m" name="size" value="m" />
            <label for="m"><span>M</span></label>
          </div>
          <div>
            <input type="radio" id="l" name="size" value="l" />
            <label for="l"><span>L</span></label>
          </div>
          <div>
            <input type="radio" id="xl" name="size" value="xl" />
            <label for="xl"><span>XL</span></label>
          </div>
        </div>
      </div>
    </>
  );
}

export default SizeComponent;
