import { useNavigate } from 'react-router-dom';

const PurchaseConfirmation = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 9000);

  return (
    <div className="purchase-confirmation">
      <div className="purchase-confirmation-heading">
        Congratulations on your Marvel poster purchase!{' '}
      </div>
      <div className="purchase-confirmation-body">
        You're now one step closer to transforming your space into a realm of
        superhero greatness. Get ready to unleash the power of Marvel as you
        bring home this iconic piece of art.
      </div>
      <div class="progress"></div>
    </div>
  );
};

export default PurchaseConfirmation;
