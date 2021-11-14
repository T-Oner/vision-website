import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate, { translate } from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig, i18n } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          {translate({ message: 'homepage.subtitle' })}
        </p>
        <div>
          <div style={{ marginBottom: 16 }}>
            <div className={styles.buttons}>
              {i18n.currentLocale == 'zh' ? (
                <Link
                  className="button button--secondary button--lg"
                  to="/blog/2021/11/03/promo-campaign"
                >
                  {translate({ message: 'homepage.tutorial.5min.button' })}
                </Link>
              ) : (
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro"
                >
                  {translate({ message: 'homepage.tutorial.5min.button' })} ⏱️
                </Link>
              )}
            </div>
            {i18n.currentLocale == 'zh' && (
              <div className={styles.buttons} style={{ marginTop: 12 }}>
                <Link
                  className="button button--secondary button--lg"
                  to="https://www.bilibili.com/video/BV1jS4y1d7pu/"
                >
                  🎥 查看操作教程视频
                </Link>
              </div>
            )}
          </div>
          <div>
            <a href="https://apps.apple.com/app/id1572457968">
              <img src="./img/app_store_download.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
