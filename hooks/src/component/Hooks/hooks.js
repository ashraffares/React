import styles from './hooks.module.css';
import { useState, useEffect } from 'react';

const GreetingHooks = () => {
    const [name, setName ] = useState('Marry');
    const [ SurName, setSurName ] = useState('Poppins');
    const [ width, setWidth ] = useState(window.innerWidth);

    const handleNameChange = (e) => setName(e.target.value);
    const handleSurNameChange = (e) => setSurName(e.target.value);

    useEffect(() => {
        document.title = name + " " + SurName;
    })

    useEffect(() => {
        const handleWidthChange = ()  => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWidthChange);
        return () => {
            window.removeEventListener('resize', handleWidthChange);
        }
    })

    return (
        <section className={styles.section}>
            <label className={styles.row}>
                {name}
                <input 
                    className={styles.nameInput}
                    value={name}
                    onChange={handleNameChange}
                />
            </label>
            <label className={styles.row}>
                {SurName}
                <input 
                    className={styles.nameInput}
                    value={SurName}
                    onChange={handleSurNameChange}
                />
            </label>

            <label className={styles.row}>
                {width}
            </label>
        </section>
    )
}

export default GreetingHooks;