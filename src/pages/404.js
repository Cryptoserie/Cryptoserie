import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";

const NotFoundPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Erreur 404</h1>
                <section className="content-body">
                    Page non trouvée, <Link to="/">"retour à l'accueil."</Link> 
                    
                </section>
            </article>
        </div>
    </Layout>
);

export default NotFoundPage;
