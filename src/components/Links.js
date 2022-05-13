import React, {useEffect, useState} from "react";
import LinkForm from "./LinkForm";
import { db } from "../firebaseConfig";
import { getFirestore, collection, getDocs, doc, onSnapshot, addDoc, deleteDoc} from "firebase/firestore"



const Links = () =>{

    const [datos, setDatos] = useState([])

    const addOrEditInDB = async (values_object)=>{//agrega en la bd
        console.log(values_object.url, "averla");
        // Add a new document in collection "datos"
        await addDoc(collection(db, "datos"), {
            description: values_object.description,
            name: values_object.name,
            url: values_object.url
        });    
    }

    const readDB= async ()=>{//lee en la bd

        onSnapshot(collection(db,'datos'),(doc)=>{
            
            const docs = []
            doc.forEach(element => {
                docs.push({...element.data(), id:element.id})
                
            });
            setDatos(docs)
            console.log(docs)
        })   
    }

    const onDeleteInDB = async (id) =>{
       if(window.confirm("esta seguro?")){

        await deleteDoc(doc(db, "datos", id));
       }

        console.log("borrando: ",id)


    }

    useEffect(()=>{
        readDB()
        console.log("reading.....")

    },[]);

    return (
    <div className="container">

        <div className="col-md-4 p-2">
        <LinkForm addOrEditInDB={addOrEditInDB}/>
        </div>
        
        <div className="col-md-4 p-2">
            {datos.map((dato)=>(

                <div className="card mb-1" key={dato.id}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h4>{dato.name}</h4>
                            <i className='material-icons text-danger' onClick={() => onDeleteInDB(dato.id)}>close</i>
                        </div>
                        
                        <p>{dato.description}</p>
                        <a href="#">{dato.url}</a>
                    </div>
                </div>
            
            ))}
        </div>
           
    </div>
    )
}

export default Links