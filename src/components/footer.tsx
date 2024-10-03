import SocialIcons from "./socialIcons";
const Footer = () => {
  

  return (
    <footer className="bg-gray-800 text-white pt-4  pb-3">
      <div className="container mx-auto px-4 text-center ">
        <p>
          &copy; 2024 My Quirky Portfolio. All rights reserved. Designed by
          Muhammad Talha
        </p>
        <p className="flex items-center justify-center mt-2">
          {/* feel free to contact on */}
          <SocialIcons />
        </p>
      </div>
    </footer>
  );
};
export default Footer;
