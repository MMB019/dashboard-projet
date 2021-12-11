import { TextField } from "@mui/material";
import {Form ,Field, FormSpy } from "react-final-form";
const Paysform = ({data, onChange}) => {
    const {  nom, zone_id, code} = data
    const onSubmit =e => {
        e.preventDefault()
        console.log(e)
       
    }
    const required = value => (value ? undefined : 'Required')
    return ( 
        
            <Form 
            onSubmit={ onSubmit}
            subscription = {{
                submitting : true
            }}
           
            >
                 {({handleSubmit})=>(
                     <form onSubmit={handleSubmit}>
                         
                         <Field name='nom' 
                         placeholder='entre votre nom'
                          onChange={e => onChange(e)}
                         validate={required}
                         subscription={{
                            value : true,
                            error : true,
                            active: true,
                            touched: true
                         }}
                         >
                             {({ meta, placeholder,  onChange})=> (
                                 <div>
                                     <TextField value={nom} id="nom" onChange={onChange}  margin='dense' placeholder={placeholder} label='Nom' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red', textAlign: 'right'}}> {meta.error} </span>}
                                 </div>
                             )}
                         </Field>
                         <Field name='zone_id'
                        
                         onChange={e => onChange(e)}
                         validate={required}
                          subscription={{
                            value : true,
                            error : true,
                            touched: true
                        }}
                         >
                             {({ meta, onChange})=> (
                                 <div>
                                     <TextField   value={zone_id}   id="zone_id" onChange={onChange}   margin='dense' placeholder='zone' label='zone' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </div>
                             )}
                         </Field>
          
       
                         <Field name='code'
                         
                         onChange={e => onChange(e)}
                         validate={required}
                         subscription={{
                            value : true,
                            error : true,
                            touched: true
                        }}
                         >
                             {({ meta, onChange })=> (
                                 <div>
                                     <TextField   value={code} onChange={onChange} id='code'  margin='dense'   placeholder='code...' label='code' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </div>
                             )}
                         </Field>
                       
                    
                     
                     </form>
                     
                )}

            </Form>

   
     )
}
 
export default Paysform;