// import React from 'react'

const LeftComp = () => {
  return (
    <div className="flex flex-col gap-12 card_box">
      <div className="search_type ">
        <h1 className="header_tag">Search Type</h1>

        <label className="check_box border-bottom">
          <input type="radio" name="type" id="" />
          <h3>: Landmark </h3>
        </label>
        <label className="check_box">
          <input type="radio" name="type" id="" />
          <h3>: Address</h3>
        </label>
      </div>
      <div className="sorting_box">
        <h1 className="header_tag">Sorting Filters</h1>
        <div className="sort_category flex flex-col gap-2 mt-4">
          <label className="category_items border-bottom">
            {" "}
            <input type="checkbox" value="price" />
            <span> :Price low to high</span>
          </label>
          <label className="category_items border-bottom">
            {" "}
            <input type="checkbox" value="food" />
            <span> :Food Facility</span>
          </label>
          <label className="category_items border-bottom">
            {" "}
            <input type="checkbox" value="room_type" />
            <span> :Only Girls</span>
          </label>
          <label className="category_items border-bottom">
            {" "}
            <input type="checkbox" value="room_type" />
            <span> :Only Boys</span>
          </label>
          <label className="category_items">
            {" "}
            <input type="checkbox" value="room_type" />
            <span> :Family</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LeftComp;
