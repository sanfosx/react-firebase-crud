import React, { useState } from "react";

const LinkForm = (props) => {

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
        //tengo que validar que tiene todo lo q necesita primero @valid_form(values)
        props.addOrEditInDB(values) // agrego la propiedad
        console.log(values)

        setValues({...inicialStateValues})
      };

    return (

        <form className="card card-body" onSubmit={handleSubmit}> 
        <div className="form-group input-group p-2">
            <div className="input-group-text bg-light">
                <i className="material-icons">insert_link</i>
            </div>
            <input 
                type="text" 
                className="form-control" 
                placeholder="https//:someurl.com" 
                name="url" 
                onChange={handleInputChange}
                value={values.url}    
            />
        </div>

        <div className="form-group input-group p-2">
            <div className="input-group-text bg-light">
                <i className="material-icons">create</i>
            </div>
            <input 
                type="text" 
                className="form-control" 
                placeholder="web site name" 
                name="name" 
                onChange={handleInputChange}
                value={values.name}
            />
        </div>

        <div className="form-group p-2">
           <textarea 
                name="description" 
                rows="3" 
                className="form-control" 
                placeholder="write a description" 
                onChange={handleInputChange}
                value={values.description}
            />

        </div>
        <button className="btn btn-primary btn-block">Save</button>
        </form>
    )
}

export default LinkForm