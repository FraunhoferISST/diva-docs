import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'New era data management',
    Svg: require('@site/static/img/undraw_data_processing.svg').default,
    description: (
      <>
        Dynamic and extensible data management approach that scales with the 
        dimensions and complexity of the resources in your organisation
      </>
    ),
  },
  {
    title: 'Automatic Profiling',
    Svg: require('@site/static/img/undraw_all_the_data.svg').default,
    description: (
      <>
        Process your data with AI empowered workflows to bring out the hidden 
        potential of the data
      </>
    ),
  },
  {
    title: 'Metadata enrichment',
    Svg: require('@site/static/img/undraw_add_information.svg').default,
    description: (
      <>
        Profiling enriches the data with valuable additional attributes and builds 
        automatically a rich metadata ecosystem
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
