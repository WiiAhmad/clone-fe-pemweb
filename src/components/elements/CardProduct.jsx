export default function CardProduct(props) {
  const {title, description, image} = props;
  return (
    <div>
      <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
        <img
          src={image}
          alt="Photo"
          width={300}
          height={300}
          className="[grid-area:stack] object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
        />
        <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
          <h3 className="font-semibold text-lg tracking-tight">
            {title}
          </h3>
          <p className="text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
