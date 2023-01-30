import React from 'react'

const About = () => {
  return (
    <div id='about' className='mb-[5rem]'>
      <div className=' px-10 w-auto'>
        <h1 className='text-4xl font-bold text-center py-12 text-blue-900' >ABOUT</h1>
        <div className='text-xl text-center mb-[3rem] mx-auto max-w-7xl text-black'>KUISC is a student-ran club with the goal of providing outside-of-class activities to expand our knowledge of cybersecurity and information security through hands-on experience and direct interaction with professionals in the field. This club will meet to practice Ethical Hacking methods in a controlled environment and discuss strategies about how to prepare, defend, and mitigate against potential cyber threats. Members will also have a chance to connect with other club members to participate in national cyber defense competition, and to compete in hacking challenges hosted around the world.</div>
        <div className='bg-black h-1 max-w-[70rem] mx-auto  mb-[3rem]'></div>
      </div>
      
      <h1 className='text-blue-900 text-4xl font-bold text-center py-12' >Bi-Weekly Meetings Include</h1>

      {/* LARGER DEVICES */}
      <div className=''>
        <section className=' max-w-7xl mx-auto sm: hidden md:grid'>
        
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
          <div className='border shadow-lg p-3 ' ><img src='https://se-images-blob.campuslabs.com/documents/184/bbd97573-f658-4c7e-16be-08d99c57aa99/1500.jpg' width={800} height={800}/></div>          
          <div className='text-blue-900 m-auto p-3 col-span-2 text-3xl font-bold text-center' >Discussions on information security fields
          <div className='text-black mt-4 text-lg'>With the ever-growing world of electronics, We explore concepts of defensive cybersecurity at KUISC. During bi-weekly meetings we discuss and practice cyber security related concepts. KUISC provides a platform for individuals to share their insights and engage in meaningful conversations about the ever-evolving landscape of cyber security.</div></div>
        </div>
        
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3 pt-[3rem]'>
          <div className='text-blue-900 m-auto p-3 col-span-2 text-3xl font-bold text-center' >Presentations by industry speakers
          <div className='text-black mt-4 text-lg'>Gain valuable insights and knowledge from leaders in the cybersecurity industry as they share their experiences, success stories, and best practices for keeping organizations and individuals secure in the digital world. This is a unique opportunity to network with professionals and expand your understanding of the rapidly changing landscape of cyber security.</div></div>
          <div className='border shadow-lg p-3' ><img src='https://se-images-blob.campuslabs.com/documents/184/c93bd616-ce1d-421f-16c1-08d99c57aa99/1500.jpg' width={800} height={800}/></div>
        </div>
        
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3 pt-[3rem]'>
          <div className='border shadow-lg p-3' ><img src='https://se-images-blob.campuslabs.com/documents/184/e89dc439-aa01-4637-16cb-08d99c57aa99/1500.jpg' width={800} height={800}/></div>      
          <div className='text-blue-900 m-auto p-3 col-span-2 text-3xl font-bold text-center' >Informative/ Practical Labs on Defending & Attacking
          <div className='text-black mt-4 text-lg'>To prepare for typical cyber defense competitions, Meetings are held with access to vulnerable machines, the goal is to secure them and break into them for competition preparation</div></div>
        </div>

        <div className='grid grid-cols-1 gap-2 md:grid-cols-3 pt-[3rem]'>
          <div className='text-blue-900 m-auto p-3 col-span-2 text-3xl font-bold text-center' >Opportunities to Host and attend Cyber defense Competitions
          <div className='text-black mt-4 text-lg'>Put your skills to the test against other students and professionals as you work together to defend against simulated cyber attacks. Learn from experienced professionals and improve your knowledge in a fun and engaging environment. This is a great opportunity to challenge yourself, build your teamwork skills, and prepare for a career in the fast-paced world of information security.</div></div>
          <div className='border shadow-lg p-3' ><img src='https://se-images-blob.campuslabs.com/documents/184/11968a60-8809-413d-16c4-08d99c57aa99/1500.jpg' width={800} height={800}/></div>
        </div>
        
      </section>

      {/* SMALLER DEVICES */}
      <section className=' max-w-7xl mx-auto sm:grid md:hidden'>
        
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
          <div className='text-blue-900 m-auto p-3 col-span-2 text-3xl font-bold text-center' >Discussions on information security field
          <div className='text-black mt-4 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eaque modi eius repudiandae accusantium et alias quod esse, magnam a ullam blanditiis eligendi facere corrupti at dignissimos dolor incidunt enim.</div>
          <div className='border shadow-lg p-3 ' ><img src='https://se-images-blob.campuslabs.com/documents/184/bbd97573-f658-4c7e-16be-08d99c57aa99/1500.jpg' width={800} height={800}/></div></div>
        </div>
        
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3 pt-[3rem]'>
          <div className='text-blue-900 m-auto p-3 col-span-2 text-3xl font-bold text-center' >Presentations by industry speakers
          <div className='text-black mt-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum placeat dignissimos eveniet, nostrum vitae unde. Sit, nihil, eos odio perspiciatis, aspernatur reprehenderit corporis eligendi adipisci rerum sunt voluptatem! Fugiat!</div>
          <div className='border shadow-lg p-3' ><img src='https://se-images-blob.campuslabs.com/documents/184/c93bd616-ce1d-421f-16c1-08d99c57aa99/1500.jpg' width={800} height={800}/></div></div>
        </div>
        
        
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3 pt-[3rem]'>
          <div className='text-blue-900 m-auto p-3 col-span-2 text-3xl font-bold text-center' >Informative/ Practical Labs on Defending & Attacking
          <div className='text-black mt-4 text-lg'>To prepare for typical cyber defense competitions, Meetings are held with access to vulnerable machines, the goal is to secure them and break into them for competition preparation</div>
          <div className='border shadow-lg p-3' ><img src='https://se-images-blob.campuslabs.com/documents/184/e89dc439-aa01-4637-16cb-08d99c57aa99/1500.jpg' width={800} height={800}/></div></div>
        </div>

        <div className='grid grid-cols-1 gap-2 md:grid-cols-3 pt-[3rem]'>
          <div className='text-blue-900 m-auto p-3 col-span-2 text-3xl font-bold text-center' >Opportunities to Host and attend Cyber defense Competitions
          <div className='text-black mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum maxime, placeat corrupti non animi pariatur quis, sapiente harum commodi, totam porro magnam dolorem voluptate? Maiores id ad quasi eum odit.</div>            
          <div className='border shadow-lg p-3' ><img src='https://se-images-blob.campuslabs.com/documents/184/11968a60-8809-413d-16c4-08d99c57aa99/1500.jpg' width={800} height={800}/></div></div>
        </div>
        
      </section>
      </div>
    </div>
  )
}

export default About