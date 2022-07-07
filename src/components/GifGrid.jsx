import useFetchGif from '../hooks/useFetchGif'
import GifItem from './GifItem'


export const GifGrid = ({ categoria }) => {

  const { img, isLoading } = useFetchGif(categoria)


  return (
    <>
      <h3>{categoria}</h3>
      {
        isLoading && <p>Loading...</p>
      }
      <div className='card-grid'>
        {
          img.map((item) => {
            return <GifItem key={item.id} {...item} />
          })
        }
      </div>
    </>
  )
}

// export default GifGrid
