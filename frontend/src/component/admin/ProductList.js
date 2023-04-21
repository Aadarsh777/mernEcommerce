import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./ProductList.css";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct, clearErrors, deleteProduct } from "../../actions/productAction";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import { Edit } from "@material-ui/icons";
import { Delete } from "@material-ui/icons";
import Sidebar from "./Sidebar";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";

const ProductList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { error, products } = useSelector((state) => state.products);

  const {error: deleteProductError, isDeleted} = useSelector((state) => state.product);

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  }

  useEffect(() => {
    if(error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if(deleteProductError) {
      alert.error(deleteProductError);
      dispatch(clearErrors());
    }
    if(isDeleted) {
      alert.success("Product Deleted Successfully");
      navigate("/admin/dashboard");
      dispatch({type: DELETE_PRODUCT_RESET});
    }
    dispatch(getAdminProduct());
  }, [alert, error, dispatch, deleteProductError, navigate, isDeleted]);
  

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 50, flex: 1.5 },
    { field: "name", headerName: "Name", minWidth: 100, flex: 1.5 },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 10,
      flex: 1.5,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 20,
      flex: 1.5,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      minWidth: 100,
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
              <Edit />
            </Link>
            <Button onClick={()=>deleteProductHandler(params.getValue(params.id, "id"))} >
              <Delete />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetaData title="All Product ---Admin" />
      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
