import { Button, TextField } from '@material-ui/core';
import { useContext } from 'react';
import {AuthContext} from '../../Providers/Auth'
import { useForm } from 'react-hook-form';
import {yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import './style.css'


interface dataParam{
    email: string;
    password: string
}

export default function SignIn(){

    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório")
    })

    const {register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)}) 

    const {signIn} = useContext(AuthContext)


    function handleForm(data: dataParam){
        const obj = {
            "email": data.email,
            "password": data.password
        }

        signIn(obj)
    }

    return(
        <form className="login" onSubmit={handleSubmit(handleForm)}>
            <h3>Login</h3>
            <TextField className="margin-input"  type="email" label="Email" variant="outlined" {...register("email")} error={!!errors.email}  />
            <TextField className="margin-input" type="password" label="Password" variant="outlined" {...register("password")} error={!!errors.password}/>
            <Button type="submit" variant="contained" >Logar</Button>
        </form>
    )
}