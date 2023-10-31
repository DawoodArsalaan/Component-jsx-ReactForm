
import React,{Component} from "react";

export default class CreateProduct extends Component{

    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            name : '',
            description : '',
            category: '',
            quantity: '',
            price: '',
            isCompleted : false
        }
    }


    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }


    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }


    onChangeCategory(e){
        this.setState({
            category: e.target.value
        })
    }

    onChangeQuantity(e){
        this.setState({
            quantity: e.target.value
        })
    }

    onChangePrice(e){
        this.setState({
            price: e.target.value
        })
    }

    onChangeIsCompleted(e){
        this.setState({
            isCompleted: e.target.value
        })
    }

    onLogoUpload = (e) => {
        const file = e.target.files[0];

        if (file) {

            console.log(`Logo file uploaded: ${file.name}`);
        }
    };

    resetForm() {
        document.getElementById("myForm").reset();
        this.setState({
            name : '',
            description : '',
            category: '',
            quantity: '',
            price: '',
            isCompleted : false
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.name)
        console.log(this.state.isCompleted)
        console.log(this.state.description)
        console.log(this.state.category)
        console.log(this.state.quantity)
        console.log(this.state.price)
 
         const product = {
             description:this.state.name,
             responsible:this.state.description,
             category: this.state.category,
             quantity: this.state.quantity,
             price: this.state.price,
             isCompleted: this.state.isCompleted
         }
 

        this.setState({
            name : '',
            description : '',
            category: '',
            quantity: '',
            price: '',
            isCompleted : false
        })
    }

    render() {
        return (
            <div class="container">
                <div class="col-lg-4"></div>
                <div class="col-lg-6">
                    <form onSubmit={this.onSubmit}>
                    <div className='container'>
                    <h2>New Product</h2>
                </div>
                <div className="form-group col-lg-4">
                    <label htmlFor="logo">UPLOAD LOGO: </label>
                    <input
                        type="file"
                        id="logo"
                        accept="image/*"
                        onChange={this.onLogoUpload}
                    />
                </div>
                    <div class="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="text" class="form-control" value={this.state.name} onChange={this.onChangeName}/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Description</label>
                            <input type="text" class="form-control" value={this.state.description} onChange={this.onChangeDescription}  />
                        </div>

                        
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Category</label>
                            <input type="text" class="form-control" value={this.state.category} onChange={this.onChangeCategory} />
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Quantity</label>
                            <input type="text" class="form-control" value={this.state.quantity} onChange={this.onChangeQuantity} />
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Price</label>
                            <input type="text" class="form-control" value={this.state.price} onChange={this.onChangePrice} />
                        </div>

                        {/* <div class="form-check">
                        <label for="exampleFormControlInput1">Is Complited</label> <br></br>
                            <input class="form-check-input" type="radio"  value="option1" checked/>
                                <label class="form-check-label" for="exampleRadios1">
                                   True
                                </label>
                                <br/>
                                <input class="form-check-input" type="radio" value="option2" />
                                <label class="form-check-label" for="exampleRadios3">
                                    False
                                </label>
                        </div> */}
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                        
                        <button type="button" onclick="{resetForm()}" class="btn btn-primary">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}