import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import requests from '../utils/requests'
import Results from "..//components/Results"



export default function Home({results}) {
  
  return (
    <div >
      <Head>
        <title> Sandbox</title>
        <link rel="icon" href="/favicon.ico"/>
    
    </Head>


      {/* Header */}
      <Header/>

      {/* Navigation */}
      <Nav/>

      {/* Results */}
      <Results results={results}/>
      
    </div>
  )
  }


export async function getServerSideProps(context){
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then((res) => res.json())

  return {
    props:{
      results: request.results,
    },
  }

 
}




