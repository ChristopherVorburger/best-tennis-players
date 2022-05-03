import { useNavigate } from "react-router-dom";

// ErrorFallback pour gérer les erreurs de périmètres
function ErrorFallback({ error, resetErrorBoundary }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    resetErrorBoundary();
  };
  return (
    <div>
      <div
        role="alert"
        className="has-text-centered has-text-white"
        style={{
          margin: "100px 300px",
        }}
      >
        <h1 className="is-size-3">Vous cherchez votre chemin ?</h1>
        <pre className="has-text-danger mb-6">Erreur : {error.message}</pre>

        <div>
          <button className="button" onClick={handleClick}>
            Retour à la page d'accueil
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;
