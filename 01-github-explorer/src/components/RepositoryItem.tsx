import { Repository } from "../@types";

interface RepositoryItemProps extends Repository { }

export function RepositoryItem({ name, html_url, description }: RepositoryItemProps) {
  return (
      <li>
        <strong>{name}</strong>
        <p>{description}</p>
        <a href={html_url}>Acessar repositório</a>
      </li>
  );
}
