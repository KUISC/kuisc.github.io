import React , {useEffect}from "react";
import Hero from '../components/Hero'
import NEWS from "../components/News.jsx";
import myData from '../components/Content/NewsArticles.JSON';


// export async function getServerSideProps() {
//   const resp = await fetch(
//     myData
//   )

//   return {
//     props: {
//       NewsData: await resp.json(),
//     }
//   }
// }

const news = () => {

  var NewsOutput = myData.map(item => <NEWS Title={item.Title} Date={item.Date} Message={item.Message} key={item.Title}/>)

  return (
    <div className="Schedule mb-[5rem]">
          <Hero heading='News' message="Keep up to date with upcoming events"/>
      {NewsOutput}
    </div>
  )
}

export default news

 