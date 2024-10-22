import { useLocation } from 'react-router-dom';

function ErrorPage() {
  const location = useLocation();
  const { message } = location.state || { message: 'Ha ocurrido un error inesperado.' };

  return (
    <div style={{marginTop:'300px',marginBottom:'300px'}}>
      <h1>Error</h1>
      <p>{message}</p>
    </div>
  );
}

export default ErrorPage;
