import { useEffect, useState } from 'react';
import { Repository } from '../@types';
import '../styles/repositories.scss';
import { RepositoryItem } from './RepositoryItem';



export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/douglasrochak/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} {...repository} />
        ))}
      </ul>
    </section>
  );
}
