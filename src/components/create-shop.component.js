
import React,{Component} from "react";

export default class CreateShop extends Component{

    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            name : '',
            description : '',
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


    onChangeIsCompleted(e){
        this.setState({
            isCompleted: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.name)
        console.log(this.state.isCompleted)
        console.log(this.state.description)
 
         const shop = {
             description:this.state.name,
             responsible:this.state.description,
             isCompleted: this.state.isCompleted
         }
 
        

        this.setState({
            name : '',
            description : '',
            isCompleted : false
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
            name: '',
            description: '',
            isCompleted: false
        });    
    }
    


    render() {
        return (
            <div class="container">
                <div class="col-lg-4"></div>
                <div class="col-lg-6">
                    <form onSubmit={this.onSubmit}>
                    <div className='container'>
                    <h2>New Shop</h2>
                </div>
                
                <div className="form-group col-lg-4">
                    <label htmlFor="logo">UPLOAD PHOTO: </label>
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
                        
                        <button type="button" onclick="this.resetForm()"class="btn btn-primary">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}