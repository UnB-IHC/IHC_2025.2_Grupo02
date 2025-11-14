import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {ArrowRight, ExternalLink} from 'lucide-react'; // precisa instalar lucide-react

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>{siteConfig.title}</h1>
            <p className={styles.subtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link className={styles.primaryButton} to="/docs/intro">
                Documentação <ArrowRight size={16} className={styles.iconRight}/>
              </Link>
              <Link className={styles.secondaryButton} href="https://github.com/UnB-IHC/IHC_2025.2_Grupo02">
                GitHub <ExternalLink size={16} className={styles.iconRight}/>
              </Link>
            </div>
          </div>
          {/* logo dentro da home */}
          <div className={styles.imageSection}>
            <img
              src="img/logo-grupo.png"
              alt="Logo do Projeto (modo claro)"
              className={clsx(styles.heroImage, styles.logoLight)}
            />
            <img
              src="img/logo-grupo-dark.png"
              alt="Logo do Projeto (modo escuro)"
              className={clsx(styles.heroImage, styles.logoDark)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Página inicial do projeto">
      <HomepageHeader />
    </Layout>
  );
}