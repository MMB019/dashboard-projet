import { TextField } from "@mui/material";
import {Form ,Field, FormSpy } from "react-final-form";
const VillesForm = ({data, onChange}) => {
    const {  nom, pays_id, code} = data
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
                         <Field name='pays_id'
                        
                         onChange={e => onChange(e)}
                         validate={required}
                          subscription={{
                            value : true,
                            error : true,
                            touched: true,
                            component: true,
                        }}
                         >
                             {({ meta, onChange})=> (
                                 <div>
                                     <TextField   value={pays_id}   id="pays_id" onChange={onChange}   margin='dense' placeholder='pays' label='Pays' variant="outlined" fullWidth/>
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
 
export default VillesForm;