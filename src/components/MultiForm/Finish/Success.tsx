import styles from './Success.module.scss';

const Success = () => (
  <div className={styles.block}>
    <div className={styles.icon_box}>
      <img alt="Thank you icon" src="/src/assets/images/icon-thank-you.svg" />
    </div>
    <h2 className={styles.title}>Thank you!</h2>
    <p className={styles.description}>
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </p>
  </div>
);

export { Success };
