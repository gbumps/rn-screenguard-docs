import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import { Redirect } from '@docusaurus/router';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/get-started">
              Read Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

const StatCounter = () => {
  const { siteConfig } = useDocusaurusContext();
  const { statCounterScript } = siteConfig.customFields;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: statCounterScript,
      }}
    />
  );
};

export default function Home(): JSX.Element {
  return (
    <>
      <Redirect to='/react-native-screenguard/docs/getting-started/get-started' />
      {/* <HomepageHeader /> */}
      <StatCounter />
    </>
  );
}
