import React, { useState } from "react";

const LinkForm = () => {

    const inicialStateValues={
        url:'',
        name:'',
        description:''
    }
    const [values, setValues] = useState(inicialStateValues);
    
    const handleInputChange = e =>{// maneja los cambios del input

        const {name, value} = e.target
        setValues({...values, [name]: value})
        console.log(name, value)
    }


    const handleSubmit = e => { // maneja el btn save
    
        e.preventDefault();

        console.log(values)
      };

    return (

        <form className="card card-body" onSubmit={handleSubmit}> 
        <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">insert_link</i>
            </div>
            <input type="text" className="form-control" placeholder="https//:someurl.com" name="url" onChange={handleInputChange}/>
        </div>

        <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">create</i>
            </div>
            <input type="text" className="form-control" placeholder="web site name" name="name" onChange={handleInputChange}/>
        </div>

        <div className="form-group">
           <textarea name="description" rows="3" className="form-control" placeholder="write a description" onChange={handleInputChange}></textarea>
        </div>
        <button className="btn btn-primary btn-block">Save</button>
        </form>
    )
}

export default LinkForm