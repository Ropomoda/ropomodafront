import Comment from '../productItem/comment';
function Home() {
  return (
    <div className='flex flex-row p-3 my-8'>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
  )
}

export default Home