import React , {useState} from 'react'

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text-xl" >
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide bg-color text-gray-500 cursor-pointer">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Articles = ({Title, Date, Message}) => {
  
  return (
      <div className="mx-20">
        <section className='grid md:grid-cols-5 gap-5 py-10 sm:grid-cols-1'>
          <div className='md:col-span-2 text-center inline-block align-middle text-2xl font-bold text-blue-900'>{Title}<div className='text-xl text-gray-500'>{Date}</div></div>
          <div className='md:col-span-3 text-justify'><ReadMore>{Message}</ReadMore>
          </div>
        </section>
      </div>
  )
}

export default Articles