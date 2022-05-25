import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container hero__container">
        <img className="hero__image" src="/diva_client.png" style={{ float: 'right', width: '30vw' }} alt="Example of DIVA in action"/>
        <div className="container">
          <div className="hero__subtitle">
            <img className="diva__logo" src="/img/logos/diva_logo_1000_1000.png" style={{ float: 'left', width: '5vw' }} alt="Example of DIVA in action"/>
            {siteConfig.tagline}
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
            Documentation
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/FraunhoferISST/diva">
            Sourcecode
          </Link>
          <span className="github-button">
            <iframe src="https://ghbtns.com/github-btn.html?user=FraunhoferISST&repo=diva&type=star&count=true&size=large"
                    frameBorder={0}
                    scrolling={0}
                    width={160}
                    height={30}
                    title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
