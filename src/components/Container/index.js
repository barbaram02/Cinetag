import styles from './Container.module.css';

function Container({children}){
    return(
        <section className={styles.container}>
            {children}
        </section>
    )
};

export default Container;

// O {children} é uma propriedade especial no React que permite que um componente receba e exiba elementos filhos dentro dele.