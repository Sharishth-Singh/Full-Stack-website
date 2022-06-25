import React, {useEffect, useState} from 'react'
import {Container,Form,Row,Col,Button} from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'
import { login} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { isUserLoggedIn } from '../../actions';


const Signin = ( props ) => {
   const [email, setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [error, seterror] = useState('');
   const auth = useSelector(state => state.auth);
   const dispatch = useDispatch();

   useEffect(() =>{
      if(auth.authenticate){
         dispatch(isUserLoggedIn());
      }
   },[]);


   const userLogin = (e) => {
      e.preventDefault();
      const user = {
         email, password
      }
      dispatch( login(user) );
   }
   if(auth.authenticate){
      return <Redirect to='/' />
   }
    return (
       <Layout>
         <Container>
            <Row style={{ marginTop: '50px' }}>
               <Col md={{span: 6,offset: 3}}>
       <Form onSubmit={userLogin}>
               <Input
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
               />

               <Input
                  label="Password"
                   placeholder="Password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
               />
       <Button variant="primary" type="submit">
       Submit
       </Button>
       </Form>
               </Col>
            </Row>

       </Container>
       </Layout>
    )
}

export default Signin
