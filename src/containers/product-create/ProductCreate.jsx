import React, { useEffect } from "react";
import useInput from "../../hooks/useInput";
import { createProduct } from "../../store/products/actions";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function ProductCreate() {
  const [name, setName] = useInput("");
  const [description, setDescription] = useInput("");
  const [price, setPrice] = useInput("");
  const [countInStock, setCountInStock] = useInput("");
  const [imgUrl, setImgUrl] = useInput("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handlerOnSave = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        name: name,
        description: description,
        price: price,
        countInStock: countInStock,
        imgUrl: imgUrl,
      })
    );
    history.push("/");
  };
  useEffect(() => {
    dispatch(createProduct());
  }, [dispatch]);
  return (
    <>
      <h2 className="text-center">Create new product</h2>
      <div className="container px-5">
        <form onSubmit={handlerOnSave}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={setName}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={setDescription}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={setPrice}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Stock</label>
            <input
              type="number"
              className="form-control"
              value={countInStock}
              onChange={setCountInStock}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Img</label>
            <input
              type="text"
              className="form-control"
              value={imgUrl}
              onChange={setImgUrl}
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary " type="submit">
              💾 Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductCreate;
