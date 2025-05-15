type moviecard = {
  src: string;
};

export default function MovieCardProps(props: moviecard) {
  return (
    <div className="w-85">
      <img
        className="border-3"
        src={"https://image.tmdb.org/t/p/w500 + props.src"}
        alt="Thunderbolts*"
      ></img>
    </div>
  );
}
