import { TextField } from "@mui/material";
import {Form ,Field, FormSpy } from "react-final-form";
const Usersform = ({data, onChange}) => {
    const {  firstName, lastname, username,password, cma_agency_id} = data
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
                         
                         <Field name='firstname' 
                         placeholder='enter your first name'
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
                                     <TextField value={firstName} id="firstName" onChange={onChange}  margin='dense' placeholder={placeholder} label='first name' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red', textAlign: 'right'}}> {meta.error} </span>}
                                 </div>
                             )}
                         </Field>
                         <Field name='lastname'
                        
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
                                     <TextField   value={lastname}   id="lastname" onChange={onChange}   margin='dense' placeholder='last name' label='last name' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </div>
                             )}
                         </Field>
       
                         <Field name='username'
                         
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
                                     <TextField   value={username} onChange={onChange} id='username'  margin='dense'   placeholder='username...' label='username' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </div>
                             )}
                         </Field>
                        <Field name='password'
                         
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
                                        <TextField   value={password} onChange={onChange} id='password'  margin='dense'   placeholder='password...' label='password' variant="outlined" fullWidth/>
                                        {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                    </div>
                                )}
                         </Field>
                        
                         <Field  name='cma_agency_id'
                       
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
                                     <TextField   value={cma_agency_id} id='cma_agency_id' onChange={onChange}   margin='dense' placeholder='cma_agency_id...' label='cma agency id' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </div>
                             )}
                         </Field>
                    
                     
                     </form>
                     
                )}

            </Form>

   
     )
}
 
export default Usersform;