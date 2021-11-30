const Footer = (props) => {
  return (
    <div className="text-red-500 bg-gray-500">
      <h6> Ceci est le footer </h6>
      {props.name}
    </div>
  );
};

export default Footer;
