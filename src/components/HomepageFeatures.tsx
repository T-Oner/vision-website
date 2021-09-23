/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

function Description(props: { index: number }) {
  return (
    <>
      {translate({ message: `homepage.${props.index}.subtitle` })
        .split('|')
        .map((line) => (
          <div key={line}>{line}</div>
        ))}
    </>
  );
}

const FeatureList: FeatureItem[] = [
  {
    title: translate({ message: 'homepage.1.title' }),
    image: './img/home-page-illustrations/1.png',
    description: Description({ index: 1 }),
  },
  {
    title: translate({ message: 'homepage.2.title' }),
    image: './img/home-page-illustrations/2.png',
    description: Description({ index: 2 }),
  },
  {
    title: translate({ message: 'homepage.3.title' }),
    image: './img/home-page-illustrations/3.png',
    description: Description({ index: 3 }),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
