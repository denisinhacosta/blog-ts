import { PencilSimpleLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
       className={styles.cover} 
       src="https://static7.depositphotos.com/1302980/789/v/450/depositphotos_7899030-stock-illustration-good-morning-new-york.jpg" 
       />
      
      <div className={styles.profile}>
        <Avatar src="https://media-exp2.licdn.com/dms/image/C4E03AQH2_NhJTBfGkw/profile-displayphoto-shrink_200_200/0/1650984994202?e=1661990400&v=beta&t=MxNB1tOphFK_S_A15KEBrX8B1ALy94iafZt1wsJqY-Q" />

        <strong>Denise Costa</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        
        <a href="#">
          <PencilSimpleLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}