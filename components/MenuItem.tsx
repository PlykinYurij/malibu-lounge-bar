interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const MenuItem = ({ name, description, price, imageUrl }: MenuItemProps) => {
  return (
    <div className="menu-item">
      <img src={imageUrl} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
      <span className="price">{price}</span>
    </div>
  );
};

export default MenuItem;