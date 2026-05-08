export function Card({ name, title, bio }) {
    return (
      <div className="card">
        <h2>{name}</h2>
        <p calssName="card-title">{title}</p>
        <p calssName="card-bio">{bio}</p>
      </div>
    )
  }

