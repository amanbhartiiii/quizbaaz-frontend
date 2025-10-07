import { MdEmail } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white flex-col py-5 border-t border-green-600">
      <div className="text-center text-3xl font-bold">quiZbaaZ</div>
      <div className="text-2xl flex justify-center space-x-3 mt-4">
        <a target="_blank" href="mailto:amanbharti2949@gmail.com">
          <MdEmail />
        </a>
        <a target="_blank" href="https://x.com/amanbhartiii">
          <FaTwitter />
        </a>
        <a target="_blank" href="https://www.linkedin.com/amanbharti2949">
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/amanbhartiiii/">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
