import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import { CardGroup, Card,Col } from 'react-bootstrap';
class ShowSp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],


        };
        this.onSubmitHandle = this.onSubmitHandle.bind(this); 
    }

    async componentDidMount() { //Hàm dùng để lấy api và res data từ api để show sp
        await axios.get("http://localhost:8000/api/get-product").then((res) => {
            this.setState(() => ({ products: res.data }));
        });
    }

    previewImage() {  //Hàm dùng để xem trước hình ảnh
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


    async onSubmitHandle(e) {//Hàm xử lí việc thêm sản phẩm 
        e.preventDefault();
        const fd = new FormData();
        fd.append("uploadImage", this.state.fileUpload);
        if ($("#inputImage").val().split("\\")[2]) {
            await axios
                .post(`http://localhost:8000/api/upload-image`, fd)
                .then((res) => {
                });
        }
        await axios
            .post(`http://localhost:8000/api/add-product`, {
                name: $("#inputName").val(),
                price: $("#inputPrice").val(),
                image: $("#inputImage").val().split("\\")[2],
                shopowner: $("#inputShopowner").val(),
            })
            .then((res) => {
                $("#inputImage").val("")
                alert("Thêm thành công");
                $("#closeModalAddBtn").click();
                this.componentDidMount();
            })
            .catch("Thêm không thành công");
    }

    handleChange = (file) => {
        this.setState({ fileUpload: file[0] });
    };

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
                                            <label htmlFor="inputShopowner">Shop Owner</label>
                                            <input
                                                type="text"
                                                name="inputShopowner"
                                                id="inputShopowner"
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
                    <br />
                    <br />
                    <center>
                        <CardGroup style={{gap: '30px'}}>
                            {this.state.products.map((product) => (
                                <Col key={product.id} sm={3}>
                                    <Card key={product.id} style={{ width: '18rem' }}>
                                        <center><Card.Img
                                            variant="top"
                                            src={`http://localhost:8000/source/image/product/${product.image}`}
                                            style={{ width: '200px', height: '200px' }}
                                        /></center>
                                        <Card.Body>
                                            <Card.Title>{product.name}</Card.Title>
                                            <Card.Title>{product.price}</Card.Title>
                                            <Card.Text>
                                                Shop Owner: {product.shopowner}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                            ))}
                        </CardGroup>
                    </center>
                </div>
            </div>

        );
    }
}

export default ShowSp;								