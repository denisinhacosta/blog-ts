import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media-exp2.licdn.com/dms/image/C4E03AQH2_NhJTBfGkw/profile-displayphoto-shrink_200_200/0/1650984994202?e=1661990400&v=beta&t=MxNB1tOphFK_S_A15KEBrX8B1ALy94iafZt1wsJqY-Q',
      name: "Denise Costa",
      role: "Web Developer",
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},      
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto'},
    ],
    publishedAt: new Date('2022-06-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/6643122?v=4',
      name: "Mayk Brito",
      role: "Educator",
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},      
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto'},
    ],
    publishedAt: new Date('2022-06-10 20:00:00')
  },
];

export function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
           {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
           })}        
        </main>
        
      </div>
    </div>
  )
}


