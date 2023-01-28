import { PropTypes } from 'prop-types';

import { GifItem } from './GifItem';
import useFetchGif from '../hooks/useFetchGif';


export const GifGrid = ({ categoria }) => {

  const { images, isLoading } = useFetchGif(categoria);


  return (
    <>
      <h3>{ categoria }</h3>
      {
        isLoading && <p>Loading...</p>
      }
      <div className='card-grid'>
        {
          images.map((img) => {
            return <GifItem key={ img.id } { ...img } />;
          })
        }
      </div>
    </>
  );
};

GifGrid.propTypes = {
  categoria: PropTypes.string.isRequired
};

// export default GifGrid

