import { FiArrowRight } from 'react-icons/fi';

export const ButtonCta = ({ onClick }) => {
  return (
    <button class='cta' onClick={onClick}>
      Join now
      <FiArrowRight className='cta-icon' />
    </button>
  );
};
