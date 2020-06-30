import React  from "react";
import { Formik } from "formik";
import axios from 'axios';
import * as Yup from "yup";
const url = "http://localhost/tech_challenge/backend/controllers/AddArgonaute.action.php";
const Form = (props) => (
  
    <Formik
      initialValues={{ name: ""}}
      onSubmit={values=> {
        console.log("Nouvel argonaute", values);
        axios({
          method: 'post',
          url: url,
          headers: { 'content-type': 'application/json' },
          data: values,
        })
        .then(result => {
          if(result.data){
            console.log(result.data);
            const name = values.name;
            values.name = "";
            props.addNewArgonaute(name);
            
          }
          
        })
        .catch(function (err){
          console.log(err);
        })
        
      }}
      
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .min(4,"Minimum 4 caracteres")
          .required("Champ requis !")
      })}
      
    >
      
      {props => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        
        return (
        <>
            <h3 className="text-center mb-5 mt-5">Ajouter un(e) Argonaute</h3>
            <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nom de l&apos;Argonaute</label>
                    <div className="d-flex">
                    <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    />
                     
                    <button className="btn btn-outline-primary h-25 ml-2 mt-1" type="submit">Envoyer</button>
                    </div>
                    {errors.name && touched.name && (
                            <div className="input-feedback">{errors.name}</div>
                        )}
                  
            </form>
        </>
        );
      }}
    </Formik>
    
  );
export default Form;