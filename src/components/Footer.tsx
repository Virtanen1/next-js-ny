import styles from './Footer.module.css'

const footerHeight = 200
export default function Footer() {
return (
    <>
    <div style={{height: footerHeight}} />
    <footer style={{height: footerHeight}} className={styles.footer}>
        Copyright &copy; {new Date().getFullYear()} Elliot
    </footer>
    </>
);
}