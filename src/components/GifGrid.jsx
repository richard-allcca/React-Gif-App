import { PropTypes } from 'prop-types';

import GifItem from './GifItem'
import useFetchGif from '../hooks/useFetchGif'


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

GifGrid.propTypes = {
  categoria: PropTypes.string.isRequired
}

// export default GifGrid

