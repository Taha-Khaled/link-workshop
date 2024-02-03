import { FunctionComponent } from "react";
import styles from "./Footer.module.scss";
import { useFooter } from "../../hooks/useFooter";
import Loader from "../Loader";
import FacebookIcon from "../../icons/FacebookIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import AppleIcon from "../../icons/AppleIcon";
import GoogleIcon from "../../icons/GoogleIcon";

const Footer: FunctionComponent = () => {
  const { data, isLoading } = useFooter();

  const Info = () => (
    <div className={styles.info}>
      <img src={data?.imageURL} alt="Logo" />
      <p className={styles.brief}>{data?.brief}</p>
    </div>
  );

  const SocialMedia = () => (
    <div className={styles.social}>
      <div className={styles.socialIcons}>
        <span className={styles.socialIcon}>
          <FacebookIcon />
        </span>
        <span className={styles.socialIcon}>
          <InstagramIcon />
        </span>
        <span className={styles.socialIcon}>
          <TwitterIcon />
        </span>
      </div>
      <h3>Discover our app</h3>
      <div className={styles.buttons}>
        <button>
          <GoogleIcon />
          <p>
            GET IT <br /> Google Play
          </p>
        </button>
        <button>
          <AppleIcon />
          <p>
            Available on <br /> APP Store
          </p>
        </button>
      </div>
    </div>
  );

  if (isLoading) return <Loader />;
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Info />

        <div className={styles.listHolder}>
          {data?.list?.map((listEntity) => (
            <div className={styles.list} key={listEntity?.id}>
              <h2>{listEntity?.title}</h2>
              <ul className={styles.links}>
                {listEntity?.links?.map((link) => (
                  <li key={link?.id}>{link?.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <SocialMedia />
      </div>
      <p className={styles.rights}>All rights reserved@Linkdevelopment.com</p>
    </footer>
  );
};
export default Footer;
