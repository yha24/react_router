import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import DataTable from "react-data-table-component";

class AdminAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.submitEditProduct = this.submitEditProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        await axios.get("http://localhost:8000/api/get-product").then((res) => {
            this.setState(() => ({ products: res.data }));
        });
    }

    previewImage() {
        $(document).ready(function (e) {
            $("#inputImage").change(function () {
                let reader = new FileReader();
                reader.onload = (e) => {
                    $("#preview-image-before-upload").attr("src", e.target.result);
                };
                reader.readAsDataURL(this.files[0]);
            });
        });
    }

    previewEditImage() {
        $(document).ready(function (e) {
            $("#editImage").change(function () {
                let reader = new FileReader();
                reader.onload = (e) => {
                    $("#preview-image-before-edit").attr("src", e.target.result);
                };
                reader.readAsDataURL(this.files[0]);
            });
        });
    }

    async onSubmitHandle(e) {
        e.preventDefault();

        const fd = new FormData();
        fd.append("uploadImage", this.state.fileUpload);

        if ($("#inputImage").val().split("\\")[2]) {
            await axios
                .post(`http://localhost:8000/api/upload-image`, fd)
                .then((res) => {
                    alert("Thêm thành công");
                });
        }
        await axios
            .post(`http://localhost:8000/api/add-product`, {
                name: $("#inputName").val(),
                id_type: $("#inputType").val(),
                description: $("#inputDescription").val(),
                unit_price: $("#inputPrice").val(),
                promotion_price: $("#inputPromotionPrice").val(),
                image: $("#inputImage").val().split("\\")[2],
                unit: $("#inputUnit").val(),
                new: $("#inputNew").val(),
            })
            .then((res) => {
                $("#inputImage").val("")
                alert("Thêm thành công");
                $("#closeModalAddBtn").click();
                this.componentDidMount();
            })
            .catch("Thêm không thành công");
    }

    async deleteProduct(id) {
        if (window.confirm(`Bạn muốn xóa sản phẩm có id là ${id}`)) {
            await axios
                .delete(`http://localhost:8000/api/delete-product/${id}`, {})
                .then((res) => {
                    alert("Xóa thành công");
                    this.componentDidMount();
                })
        } else {
            alert("Xóa không thành công");
        }
    }

    handleChange = (file) => {
        this.setState({ fileUpload: file[0] });
    };

    async submitEditProduct(e) {
        e.preventDefault();
        const id = $("#editID").val();
        const image =
            $("#editImage").val().split("\\")[2] !== "" &&
                $("#editImage").val().split("\\")[2] !== undefined
                ? $("#editImage").val().split("\\")[2]
                : $("#preview-image-before-edit").attr("src").split("/")[6];

        const fd = new FormData();
        fd.append("uploadImage", this.state.fileUpload);

        if ($("#editImage").val().split("\\")[2]) {
            await axios
                .post(`http://localhost:8000/api/upload-image`, fd)
                .then((res) => { });
        }

        await axios
            .put(`http://localhost:8000/api/edit-product/${id}`, {
                name: $("#editName").val(),
                id_type: $("#editType").val(),
                description: $("#editDescription").val(),
                unit_price: $("#editPrice").val(),
                promotion_price: $("#editPromotionPrice").val(),
                image: image,
                unit: $("#editUnit").val(),
                new: $("#editNew").val(),
            })
            .then(() => {
                $("#editImage").val("")
                alert("Chỉnh sửa thành công");
                $("#closeModalEditBtn").click();
                this.componentDidMount();
            });
    }

    async editProduct(id) {
        let product = this.state.products.find((product) => product.id === id);
        $("#editID").val(product.id);
        $("#editName").val(product.name);
        $("#editType").val(product.id_type);
        $("#editDescription").val(product.description);
        $("#editPrice").val(product.unit_price);
        $("#editPromotionPrice").val(product.promotion_price);
        $("#preview-image-before-edit").attr(
            "src",
            `http://localhost:8000/source/image/product/${product.image}`
        );
        $("#editUnit").val(product.unit);
        $("#editNew").val(product.new);
    }

    columns = [
        {
            name: "ID",
            selector: "id",
            sortable: true,
        },
        {
            name: "Image",
            sortable: true,
            cell: (row) => (
                <img
                    data-tag="allowRowEvents"
                    src={`http://localhost:8000/source/image/product/${row.image}`}
                    alt="preview"
                    style={{ width: "100px" }}
                />
            ),
        },
        {
            name: "Name",
            selector: "name",
            sortable: true,
            wrap: true,
            compact: true,
        },
        {
            name: "ID_Type",
            selector: "id_type",
            sortable: true,
        },
        {
            name: "Description",
            selector: "description",
            sortable: true,
            wrap: true,
            compact: true,
        },
        {
            name: "Unit_price",
            selector: "unit_price",
            sortable: true,
            wrap: true,
            compact: true,
        },
        {
            name: "Promotion_price",
            selector: "promotion_price",
            sortable: true,
            wrap: true,
            compact: true,
        },
        {
            name: "Unit",
            selector: "unit",
            sortable: true,
            wrap: true,
            compact: true,
        },
        {
            name: "New",
            selector: "new",
            sortable: true,
            wrap: true,
            compact: true,
        },
        {
            name: "Action",
            selector: "id",
            cell: (row) => (
                <div>
                    <button
                        data-tag="allowRowEvents"
                        className="btn btn-sm btn-warning"
                        style={{ width: "80px" }}
                        onClick={() => {
                            this.editProduct(row.id);
                        }}
                        type="button"
                        data-toggle="modal"
                        data-target="#modelEditProduct"
                    >
                        Edit
                    </button>
                    <button
                        data-tag="allowRowEvents"
                        type="button"
                        className="btn btn-sm btn-danger"
                        style={{ width: "80px" }}
                        onClick={() => this.deleteProduct(row.id)}
                    >
                        Delete
                    </button>
                </div>
            ),
            compact: true,
        },
    ];
    render() {
        return (
            <div>
                {/* add product */}
                <div>
                    <div
                        className="modal"
                        id="modelAddProduct"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="modelTitleId"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal Add Product</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        id="closeModalAddBtn"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form
                                        onSubmit={this.onSubmitHandle}
                                        encType="multipart/form-data"
                                    >
                                        <div className="form-group">
                                            <label htmlFor="inputName">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="inputName"
                                                id="inputName"
                                                placeholder="Enter name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPrice">Price</label>
                                            <input
                                                type="number"
                                                min={10000}
                                                className="form-control"
                                                name="inputPrice"
                                                id="inputPrice"
                                                placeholder="Enter price"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPromotionPrice">
                                                Promotion Price
                                            </label>
                                            <input
                                                type="number"
                                                min={10000}
                                                className="form-control"
                                                name="inputPromotionPrice"
                                                id="inputPromotionPrice"
                                                placeholder="Enter promotion price"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputUnit">Unit</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="inputUnit"
                                                id="inputUnit"
                                                placeholder="Enter unit"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputNew">New</label>
                                            <input
                                                type="number"
                                                min={0}
                                                className="form-control"
                                                name="inputNew"
                                                id="inputNew"
                                                placeholder="Enter new"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputType">Type</label>
                                            <input
                                                type="number"
                                                min={1}
                                                className="form-control"
                                                name="inputType"
                                                id="inputType"
                                                placeholder="Enter type"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputImage">Image file</label>
                                            <input
                                                type="file"
                                                className="form-control-file"
                                                name="inputImage"
                                                id="inputImage"
                                                onChange={(e) => this.handleChange(e.target.files)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <img
                                                id="preview-image-before-upload"
                                                src="https://www.riobeauty.co.uk/images/product_image_not_found.gif"
                                                alt="xem trước"
                                                style={{ maxHeight: 250 }}
                                            />
                                            {this.previewImage()}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputDescription">Description</label>
                                            <input
                                                type="text"
                                                name="inputDescription"
                                                className="form-control"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* edit product */}
                <div>
                    <div
                        className="modal"
                        id="modelEditProduct"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="modelTitleId"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal Edit Product</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        id="closeModalEditBtn"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form
                                        onSubmit={this.submitEditProduct}
                                        encType="multipart/form-data"
                                    >
                                        <div className="form-group">
                                            <label htmlFor="editID">ID</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="editID"
                                                id="editID"
                                                readOnly
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="editName">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="editName"
                                                id="editName"
                                                placeholder="Enter name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="editPrice">Price</label>
                                            <input
                                                type="number"
                                                min={10000}
                                                className="form-control"
                                                name="editPrice"
                                                id="editPrice"
                                                placeholder="Enter price"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="editPromotionPrice">
                                                Promotion Price
                                            </label>
                                            <input
                                                type="number"
                                                min={10000}
                                                className="form-control"
                                                name="editPromotionPrice"
                                                id="editPromotionPrice"
                                                placeholder="Enter promotion price"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="editUnit">Unit</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="editUnit"
                                                id="editUnit"
                                                placeholder="Enter unit"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="editNew">New</label>
                                            <input
                                                type="number"
                                                min={0}
                                                className="form-control"
                                                name="editNew"
                                                id="editNew"
                                                placeholder="Enter new"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="editType">Type</label>
                                            <input
                                                type="number"
                                                min={1}
                                                className="form-control"
                                                name="editType"
                                                id="editType"
                                                placeholder="Enter type"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="editImage">Image file</label>
                                            <input
                                                type="file"
                                                className="form-control-file"
                                                name="editImage"
                                                id="editImage"
                                                onChange={(e) => this.handleChange(e.target.files)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <img
                                                id="preview-image-before-edit"
                                                src="https://www.riobeauty.co.uk/images/product_image_not_found.gif"
                                                alt="xem trước"
                                                style={{ maxHeight: 250 }}
                                            />
                                            {this.previewEditImage()}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="editDescription">Description</label>
                                            <input
                                                type="text"
                                                name="editDescription"
                                                id="editDescription"
                                                className="form-control"
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* show product */}
                <div className="container">
                    <button
                        type="button"
                        data-toggle="modal"
                        data-target="#modelAddProduct"
                        className="btn btn-primary"
                        style={{ width: 80 }}
                    >
                        Add
                    </button>
                    <DataTable
                        title="Show Products"
                        columns={this.columns}
                        data={this.state.products}
                        paginationPerPage={5}
                        defaultSortField="id"
                        pagination
                    />
                </div>
            </div>

        );
    }
}

export default AdminAPI;									