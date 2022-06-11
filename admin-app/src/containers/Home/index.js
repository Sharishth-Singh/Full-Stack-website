import Layout from '../../components/Layout'
import React from 'react';
const Home = ( props ) => {
   return (
      <Layout>
         <div class="container-fluid text-sm-center p-5 bg-light" align="center" style={{margin: '5rem'}}>
            <h1 class="display-1">Welcome to Admin DashBoard</h1>
            <p class="lead">A One-day Conference About All Things JavaScript!</p>
         </div>
      </Layout>
   )
}

export default Home
