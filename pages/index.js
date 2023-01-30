import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>KUISC Jayhackers</title>
        <meta name="description" content="KUISC is a student-ran club with the goal of providing outside-of-class activities to expand our knowledge of cybersecurity and information security through hands-on experience and direct interaction with professionals in the field." />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <Hero heading='KUISC' message="KU's Information Security Club"/>
      <About />
    </div>
  )
}
