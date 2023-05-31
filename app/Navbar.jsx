import Link from 'next/link'
// import styles from './Menu.module.css'
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navigation}>
    <input type="checkbox" className={styles.navigation__checkbox} id="navi-toggle"/>

    <label for="navi-toggle" className={styles.navigation__button}>
        <span className={styles.navigation__icon}>&nbsp;</span>
    </label>

    {/* <div className={styles.navigation__background}>&nbsp;</div> */}

    {/* <nav className={styles.navigation__nav}>
        <ul className={styles.navigation__list}>
        <li className={styles.navigation__item}><Link className={styles.navigation__link} href={'/en'}>
                <span>01</span>Translate</Link></li>           
            <li className={styles.navigation__item}>
                <Link className={styles.navigation__link} href={'/form'}>
                    <span>02</span>Pesan Website</Link></li>
            <li className={styles.navigation__item}>
                <Link className={styles.navigation__link} href={'/'}>
                    <span>03</span>Tentang Kami</Link></li>
        
            </ul>
    </nav> */}
</div>
  )
}
